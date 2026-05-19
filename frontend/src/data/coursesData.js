// src/data/coursesData.js
export const coursesData = [
  {
    id: 'ch1',
    title: 'Chapter 1',
    name: 'Bilangan Bulat',
    progress: 75,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub1-0', title: 'Sub Chapter 1', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub1-1', title: 'Sub Chapter 1', name: 'A. Memahami Bilangan Bulat', progress: 95, 
        topics: [
          { id: 'top1-1-1', name: '1. Pengertian Bilangan Bulat', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top1-1-2', name: '2. Membandingkan Bilangan Bulat', content: 'Isi materi lengkap Membandingkan...' },
          { id: 'top1-1-3', name: 'Latihan 1.1', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       },
      { id: 'sub1-2', title: 'Sub Chapter 1', name: 'B. Operasi Hitung Bilangan Bulat', progress: 0, 
         topics: [
          { id: 'top1-2-1', name: '1. Operasi Penjumlahan dan Pengurangan Bilangan Bulat', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top1-2-2', name: '2. Operasi Perkalian dan Pembagian Bilngan bulat', content: 'Isi materi lengkap Membandingkan...' },
          { id: 'top1-2-3', name: 'Latihan 1.2', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       },
      { id: 'sub1-3', title: 'Sub Chapter 1', name: 'C. Faktor Bilangan Bulat', progress: 0, 
         topics: [
          { id: 'top1-3-1', name: '1. Faktor Bilangan Bulat Positif dan Negatif', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top1-3-2', name: '2. Faktor Persekutuan terbesar (FPB) dan Kelipatan Persekutuan terkecil (KPK)', content: 'Isi materi lengkap Membandingkan...' },
          { id: 'top1-3-3', name: 'Latihan 1.3', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       }
    ]
  },
  {
    id: 'ch2',
    title: 'Chapter 2',
    name: 'Bilangan Rasional',
    progress: 0,
    status: 'Not Started',
    subChapters: [
      { id: 'sub2-0', title: 'Sub Chapter 2', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub2-1', title: 'Sub Chapter 2', name: 'A. Di Antara Dua Bilangan Bulat', progress: 0, 
         topics: [
          { id: 'top2-1-1', name: '1. Pengertian Bilangan Rasional', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top2-1-2', name: '2. Menyatakan Bilangan Rasional dalam Bentuk Pecahan dan Desimal', content: 'Isi materi lengkap Membandingkan...' },
        ]
      },
      { id: 'sub2-2', title: 'Sub Chapter 2', name: 'B. Membandingkan Bilangan Rasional', progress: 0, 
         topics: [
          { id: 'top2-2-1', name: 'Latihan 2.1', content: 'Isi lembar soal Latihan 1.1...' }
        ]
       },
      { id: 'sub2-3', title: 'Sub Chapter 2', name: 'C. Operasi Hitung Bilangan Rasional', progress: 0,
         topics: [
          { id: 'top2-3-1', name: '1. Operasi Penjumlahan dan Pengurangan Bilangan Rasional', content: 'Isi materi lengkap Pengertian...' },
          { id: 'top2-3-2', name: '2. Operasi Perkalian dan Pembagian Bilangan Rasional' },
          { id: 'top2-3-3', name: 'Latihan 2.2', content: 'Isi lembar soal Latihan 1.1...' }
        ]
      },
    ]
  },
  {
    id: 'ch3',
    title: 'Chapter 3',
    name: 'Rasio',
    progress: 10,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub3-0', title: 'Sub Chapter 3', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub3-1', title: 'Sub Chapter 3', name: 'A. Konsep Rasio', progress: 10, 
         topics: [
          { id: 'top3-1-1', name: 'Latihan 3.1' }
        ]
       },
      { id: 'sub3-2', title: 'Sub Chapter 3', name: 'B. Skala', progress: 10, 
        topics: [
          { id: 'top3-2-1', name: 'Latihan 3.2' }
        ]
       },
      { id: 'sub3-3', title: 'Sub Chapter 3', name: 'C. Laju Perubahan Satuan', 
        topics: [
          { id: 'top3-3-1', name: 'Latihan 3.3' }
        ]
      }
    ]
  },
  {
    id: 'ch4',
    title: 'Chapter 4',
    name: 'Bentuk Aljabar',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub4-0', title: 'Sub Chapter 4', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub4-1', title: 'Sub Chapter 4', name: 'A. Unsur-unsur Aljabar', progress: 20, 
        topics: [
          { id: 'top4-1-1', name: 'Latihan 4.1' }
        ]
       },
      { id: 'sub4-2', title: 'Sub Chapter 4', name: 'B. Sifat-Sifat dan Operasi Aljabar', progress: 20, 
        topics: [
          { id: 'top4-2-1', name: 'Latihan 4.2' }
        ]
       },
      { id: 'sub4-3', title: 'Sub Chapter 4', name: 'C. Pemodelan dengan Bentuk Aljabar', progress: 20, 
        topics: [
          { id: 'top4-3-1', name: 'Latihan 4.3' }
        ]
       }
    ]
  },
  {
    id: 'ch5',
    title: 'Chapter 5',
    name: 'Kesebangunan',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub5-0', title: 'Sub Chapter 5', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub5-1', title: 'Sub Chapter 5', name: 'A. Hubungan Antar Sudut', progress: 20, 
        topics: [
          { id: 'top5-1-1', name: 'Latihan 5.1' }
        ]
       },
      { id: 'sub5-2', title: 'Sub Chapter 5', name: 'B. Arti Kesebangunan', progress: 20, 
        topics: [
          { id: 'top5-2-1', name: 'Latihan 5.2' }
        ]
       },
      { id: 'sub5-3', title: 'Sub Chapter 5', name: 'C. Kesebangunan pada Segitiga', progress: 20, 
        topics: [
          { id: 'top5-3-1', name: 'Latihan 5.3' }
        ]
       } 
    ]
  },
  {
    id: 'ch6',
    title: 'Chapter 6',
    name: 'Data Diagram',
    progress: 20,
    status: 'In-Progress',
    subChapters: [
      { id: 'sub6-0', title: 'Sub Chapter 6', name: 'Tujuan Pembelajaran', progress: 0, content: 'Isi materi lengkap Bab 1 bagian B...' },
      { id: 'sub6-1', title: 'Sub Chapter 6', name: 'A. Investigasi Statistika', progress: 20, 
        topics: [
          { id: 'top6-1-1', name: 'Latihan 6.1' }
        ]
      },
      { id: 'sub6-2', title: 'Sub Chapter 6', name: 'B. Macam-Macam Data', progress: 20, 
        topics: [
          { id: 'top6-2-1', name: 'Latihan 6.2' }
        ]
       },
      { id: 'sub6-3', title: 'Sub Chapter 6', name: 'C. Diagram dalam Statistika', progress: 20, 
        topics: [
          { id: 'top6-3-1', name: 'Latihan 6.3' }
        ]
       },
      { id: 'sub6-4', title: 'Sub Chapter 6', name: 'D. Diagram Batang', progress: 20, 
        topics: [
          { id: 'top6-4-1', name: 'Latihan 6.4' }
        ]
      },
      { id: 'sub6-5', title: 'Sub Chapter 6', name: 'E. Diagram Lingkaran', progress: 20, 
        topics: [
          { id: 'top6-5-1', name: 'Latihan 6.5' }
        ]
      },
      { id: 'sub6-6', title: 'Sub Chapter 6', name: 'F. Memilih Diagram yang Tepat', progress: 20, 
        topics: [
          { id: 'top6-6-1', name: 'Latihan 6.6' }
        ]
       }
    ]
  }
];