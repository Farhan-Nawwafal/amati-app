import streamlit as st
import pandas as pd
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

# Grafik Bab yang Paling Banyak Berhasil Diselesaikan
st.markdown("---")
st.header(f"🏆 Bab yang Paling Banyak Diselesaikan Berdasarkan Level {selected_display}")

if selected_level_value == "all":
    completed_chapters = df_chapters[df_chapters['status_chapter'].str.lower() == 'done']
else:
    completed_chapters = df_chapters[
        (df_chapters['status_chapter'].str.lower() == 'done') & 
        (df_chapters['current_level'] == selected_level_value)
    ]

if completed_chapters.empty:
    st.info(f"Belum ada siswa yang menyelesaikan bab di level {selected_display}.")
else:
    completed_group = completed_chapters.groupby('name').size().reset_index(name='Siswa Selesai')
    completed_group = completed_group.sort_values(by='Siswa Selesai', ascending=True)
    
    fig_completed = px.bar(
        completed_group,
        x='Siswa Selesai',
        y='name',
        orientation='h',
        labels={'Siswa Selesai': 'Jumlah Siswa yang Menyelesaikan Bab', 'name': 'Judul Bab Matematika Kelas 7'},
        color='Siswa Selesai',
        text='Siswa Selesai', 
        color_continuous_scale=px.colors.sequential.Greens  
    )
    
    fig_completed.update_traces(textposition='inside')
    fig_completed.update_layout(
        yaxis={'categoryorder': 'total ascending'},
        margin=dict(l=20, r=20, t=20, b=20),
        height=350,
        showlegend=False
    )
    
    st.plotly_chart(fig_completed, use_container_width=True)

# Grafik Top 5 Sub-bab yang Paling Banyak Membuat Siswa Stuck
st.markdown("---")
st.header(f"⚠️ Top 5 Sub-Bab yang Paling Banyak Membuat Siswa Stuck (In-Progress) di Level {selected_display}")

if selected_level_value == "all":
    stuck_subchapters = df_subchapters[df_subchapters['status_subchapter'].str.lower() == 'in-progress']
else:
    stuck_subchapters = df_subchapters[
        (df_subchapters['status_subchapter'].str.lower() == 'in-progress') & 
        (df_subchapters['current_level'] == selected_level_value)
    ]

if stuck_subchapters.empty:
    st.info(f"Mantap! Tidak ada siswa yang sedang stuck di sub-bab level {selected_display} saat ini.")
else:
    stuck_group = stuck_subchapters.groupby('name').size().reset_index(name='Jumlah Siswa Stuck')
    top_5_stuck = stuck_group.sort_values(by='Jumlah Siswa Stuck', ascending=True).tail(5)
    
    fig_stuck = px.bar(
        top_5_stuck,
        x='Jumlah Siswa Stuck',
        y='name',
        orientation='h',
        labels={'Jumlah Siswa Stuck': 'Jumlah Siswa (In-Progress)', 'name': 'Judul Sub-Bab Matematika Kelas 7'},
        color='Jumlah Siswa Stuck',
        text='Jumlah Siswa Stuck', 
        color_continuous_scale=px.colors.sequential.Oranges
    )
    
    fig_stuck.update_traces(textposition='inside')
    fig_stuck.update_layout(
        yaxis={'categoryorder': 'total ascending'},
        margin=dict(l=20, r=20, t=20, b=20),
        height=350,
        showlegend=False
    )
    
    st.plotly_chart(fig_stuck, use_container_width=True)

# Menampilkan Chart Analisis Skor Placement dan Exam di Akhir Bab
st.markdown("---")
st.header(f"📊 Grafik Analisis Perbandingan Rata-rata Skor Placement Test (awal) dan Exam (akhir) pada Level {selected_display}")

if selected_level_value == "all":
    current_level_chapter_names = df_chapters['name'].unique()
else:
    current_level_chapter_names = df_chapters[df_chapters['current_level'] == selected_level_value]['name'].unique()

df_answers_filtered = df_answers[df_answers['name'].isin(current_level_chapter_names)]

if df_answers_filtered.empty:
    st.info(f"Belum ada data nilai assessment untuk bab di level {selected_display}.")
else:
    placement_df = df_answers_filtered[df_answers_filtered['type'].str.lower() == 'placement']
    exam_df = df_answers_filtered[df_answers_filtered['type'].str.lower() != 'placement']

    placement_group = placement_df.groupby('name')['score'].mean().reset_index()
    placement_group.columns = ['Judul Bab', 'Placement (Awal)']

    exam_grouped = exam_df.groupby('name')['score'].mean().reset_index()
    exam_grouped.columns = ['Judul Bab', 'Exam (Akhir)']

    base_table = pd.DataFrame({'Judul Bab': current_level_chapter_names})
    merged_scores = pd.merge(base_table, placement_group, on='Judul Bab', how='left')
    merged_scores = pd.merge(merged_scores, exam_grouped, on='Judul Bab', how='left')
    merged_scores = merged_scores.fillna(0)

    df_chart = pd.melt(
        merged_scores, 
        id_vars=['Judul Bab'], 
        value_vars=['Placement (Awal)', 'Exam (Akhir)'],
        var_name='Tipe Evaluasi', 
        value_name='Rata-rata Skor'
    )

    fig_scores = px.bar(
        df_chart,
        x='Judul Bab',
        y='Rata-rata Skor',
        color='Tipe Evaluasi',
        barmode='group', 
        text=df_chart['Rata-rata Skor'].round(2), 
        labels={'Rata-rata Skor': 'Rata-rata Skor', 'Judul Bab': 'Judul Bab Matematika Kelas 7'},
        color_discrete_map={
            'Placement (Awal)': '#A6CEE3', 
            'Exam (Akhir)': '#1F78B4'       
        }
    )

    fig_scores.update_traces(textposition='inside')
    fig_scores.update_layout(
        margin=dict(l=20, r=20, t=30, b=20),
        height=450,
        legend_title_text='Jenis Evaluasi'
    )

    st.plotly_chart(fig_scores, use_container_width=True)