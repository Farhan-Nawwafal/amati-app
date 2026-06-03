import streamlit as st
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import plotly.express as px

# Konfigurasi halaman
st.set_page_config(
    page_title="Dashboard",
    layout="wide"
)

st.title("Dashboard Analisis Performa Siswa Berdasarkan Tingkat Pemahaman")

df_answers = pd.read_csv("data-science/eda_data/answer_q1.csv")
df_chapters = pd.read_csv("data-science/eda_data/progress_chapters_join.csv")
df_subchapters = pd.read_csv("data-science/eda_data/progress_subchapters_join.csv")

# Tingkatan Level
level_mapping = {
    "Semua Tingkatan": "all",
    "Beginner": "beginner",
    "Intermediate": "intermediate",
    "Advanced": "advanced"
}

st.sidebar.subheader("Pilih Tingkat Pemahaman")
selected_display = st.sidebar.radio("Level:", list(level_mapping.keys()))
selected_level_value = level_mapping[selected_display]

# Presentase Tingkat Kompetensi Siswa
st.markdown("---")
st.header("📈 Distribusi Tingkat Kompetensi Siswa Secara Kumulatif (2026)")

if not df_subchapters.empty:
    total_subbab = len(df_subchapters)
    level_summary_list = []
    
    for display_name, level_key in level_mapping.items():
        if level_key == "all":
            continue
        level_subbab_df = df_subchapters[df_subchapters['current_level'] == level_key]
        total_level_records = len(level_subbab_df)
        total_siswa = level_subbab_df['user_id'].nunique() if total_level_records > 0 else 0
        distribusi_rate = (total_level_records / total_subbab) * 100 if total_subbab > 0 else 0
        
        level_summary_list.append({
            "Level": display_name,
            "Jumlah Siswa": total_siswa,
            "Persentase Distribusi (%)": round(distribusi_rate, 2)
        })
        
    df_summary_level = pd.DataFrame(level_summary_list)

    # Menampilkan ringkasan metrik
    col_b, col_i, col_a = st.columns(3)
    with col_b:
        row_b = df_summary_level[df_summary_level['Level'] == 'Beginner'].iloc[0]
        st.metric(label="🟢 Beginner", value=f"{row_b['Jumlah Siswa']} User")
        st.caption(f"Distribusi Kompetensi: **{row_b['Persentase Distribusi (%)']}%**")

    with col_i:
        row_i = df_summary_level[df_summary_level['Level'] == 'Intermediate'].iloc[0]
        st.metric(label="🟡 Intermediate", value=f"{row_i['Jumlah Siswa']} User")
        st.caption(f"Distribusi Kompetensi: **{row_i['Persentase Distribusi (%)']}%**")

    with col_a:
        row_a = df_summary_level[df_summary_level['Level'] == 'Advanced'].iloc[0]
        st.metric(label="🔴 Advanced", value=f"{row_a['Jumlah Siswa']} User")
        st.caption(f"Distribusi Kompetensi: **{row_a['Persentase Distribusi (%)']}%**")
        
else:
    st.info("Materi sub-bab kosong atau tidak ditemukan.")

# Grafik Rata-rata Skor Tiap Bab
st.markdown("---")
st.header(f"🔍 Evaluasi Performa: Rata-rata Skor Terendah Berdasarkan Level **{selected_display}**")

if selected_level_value == "all":
    chapter_valid = df_chapters['name'].unique()
    df_answer = df_answers[df_answers['name'].isin(chapter_valid)]
else:
    chapter_valid = df_chapters[df_chapters['current_level'] == selected_level_value]['name'].unique()
    
    valid_users = df_chapters[df_chapters['current_level'] == selected_level_value]['user_id_x'].unique()
    df_answer = df_answers[
        (df_answers['name'].isin(chapter_valid)) & 
        (df_answers['user_id_x'].isin(valid_users))
    ]

if df_answer.empty:
    st.info(f"Belum ada data nilai assessment untuk bab di level {selected_display}.")
else:

    lowest_scores_grouped = df_answer.groupby('name')['score'].mean().reset_index(name='Rata-rata Skor')
    lowest_scores_grouped = lowest_scores_grouped.sort_values(by='Rata-rata Skor', ascending=False)
    absolute_lowest = lowest_scores_grouped.iloc[-1] 
    st.error(f"⚠️ **Target Evaluasi Level {selected_display}:** Bab **{absolute_lowest['name']}** memiliki rata-rata skor terendah sebesar **{round(absolute_lowest['Rata-rata Skor'], 2)}**.")

    # Menampilkan Visualisasi Bar Chart
    fig_lowest = px.bar(
        lowest_scores_grouped,
        x='Rata-rata Skor',
        y='name',
        orientation='h',
        labels={'Rata-rata Skor': 'Rata-rata Skor Siswa', 'name': 'Judul Bab Matematika Kelas 7'},
        color='Rata-rata Skor',
        text=lowest_scores_grouped['Rata-rata Skor'].round(2),
        color_continuous_scale=px.colors.sequential.Reds_r
    )
    
    fig_lowest.update_traces(textposition='inside')
    fig_lowest.update_layout(
        margin=dict(l=20, r=20, t=20, b=20),
        height=500,
        showlegend=False
    )
    
    st.plotly_chart(fig_lowest, use_container_width=True)
