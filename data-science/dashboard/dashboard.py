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
    "All": "all",
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