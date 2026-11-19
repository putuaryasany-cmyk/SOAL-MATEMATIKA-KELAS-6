import { Question } from '../types';
import kubusDanJaringImg from '../assets/images/kubus_dan_jaring_1795061322094.jpg';
import balokGeometriImg from '../assets/images/balok_geometri_3d_1795061321809.jpg';
import tabungSilinderImg from '../assets/images/tabung_silinder_3d_1795061323081.jpg';
import kerucutDanLimasImg from '../assets/images/kerucut_dan_limas_1795061323382.jpg';
import gabunganBangunRuangImg from '../assets/images/gabungan_bangun_ruang_1795061323206.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // --- PILIHAN GANDA (18 SOAL - BANGUN RUANG) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Unsur & Sifat Kubus',
    difficulty: 'Mudah',
    imageUrl: kubusDanJaringImg,
    imageCaption: 'Gambar Bangun Ruang Kubus dan Jaring-Jaringnya',
    text: 'Perhatikan gambar bangun ruang kubus dan jaring-jaringnya di atas! Banyaknya sisi persegi, rusuk, dan titik sudut yang dimiliki oleh bangun ruang kubus berturut-turut adalah...',
    options: [
      { id: 'A', text: '6 sisi, 8 rusuk, dan 12 titik sudut' },
      { id: 'B', text: '6 sisi, 12 rusuk, dan 8 titik sudut' },
      { id: 'C', text: '8 sisi, 12 rusuk, dan 6 titik sudut' },
      { id: 'D', text: '4 sisi, 12 rusuk, dan 8 titik sudut' },
    ],
    correctAnswer: 'B',
    explanation:
      'Berdasarkan gambar kubus dan jaring-jaringnya, kubus tersusun atas 6 buah sisi berbentuk persegi kongruen, mempunyai 12 rusuk sama panjang, dan memiliki 8 titik sudut.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Volume Kubus',
    difficulty: 'Mudah',
    text: 'Sebuah kotak kayu berbentuk kubus memiliki panjang rusuk 14 cm. Volume kotak kayu tersebut adalah...',
    options: [
      { id: 'A', text: '2.197 cm³' },
      { id: 'B', text: '2.456 cm³' },
      { id: 'C', text: '2.744 cm³' },
      { id: 'D', text: '3.375 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kubus = rusuk × rusuk × rusuk = 14 cm × 14 cm × 14 cm = 196 × 14 = 2.744 cm³.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Akar Pangkat Tiga & Rusuk Kubus',
    difficulty: 'Sedang',
    text: 'Bak mandi milik Pak Made berbentuk kubus dapat menampung air sebanyak 512 liter hingga penuh (1 liter = 1 dm³). Panjang rusuk bagian dalam bak mandi tersebut jika dinyatakan dalam sentimeter adalah...',
    options: [
      { id: 'A', text: '60 cm' },
      { id: 'B', text: '70 cm' },
      { id: 'C', text: '80 cm' },
      { id: 'D', text: '90 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume = 512 liter = 512 dm³.\nPanjang rusuk = ∛512 = 8 dm.\nKonversi ke sentimeter: 8 dm × 10 = 80 cm.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Luas Permukaan Kubus',
    difficulty: 'Mudah',
    imageUrl: kubusDanJaringImg,
    imageCaption: 'Gambar Kubus dan Pola Jaring-Jaring 6 Persegi',
    text: 'Dayu akan membuat kerajinan kotak berbentuk kubus dari kertas karton mengikuti pola jaring-jaring pada gambar di atas. Jika panjang setiap rusuk kubus adalah 12 cm, luas minimal kertas karton yang diperlukan untuk menutupi seluruh 6 sisi kubus adalah...',
    options: [
      { id: 'A', text: '576 cm²' },
      { id: 'B', text: '720 cm²' },
      { id: 'C', text: '864 cm²' },
      { id: 'D', text: '1.728 cm²' },
    ],
    correctAnswer: 'C',
    explanation:
      'Luas permukaan kubus = 6 × (rusuk × rusuk) = 6 × (12 cm × 12 cm) = 6 × 144 cm² = 864 cm².',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Volume Balok',
    difficulty: 'Mudah',
    imageUrl: balokGeometriImg,
    imageCaption: 'Gambar Bangun Ruang Balok',
    text: 'Perhatikan gambar bangun ruang balok di atas! Jika balok tersebut memiliki ukuran panjang 25 cm, lebar 12 cm, dan tinggi 8 cm, maka volume bangun ruang balok tersebut adalah...',
    options: [
      { id: 'A', text: '1.800 cm³' },
      { id: 'B', text: '2.100 cm³' },
      { id: 'C', text: '2.400 cm³' },
      { id: 'D', text: '2.800 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume balok = panjang × lebar × tinggi = 25 cm × 12 cm × 8 cm = 300 × 8 = 2.400 cm³.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Luas Permukaan Balok',
    difficulty: 'Sedang',
    imageUrl: balokGeometriImg,
    imageCaption: 'Gambar Bangun Ruang Balok (6 Sisi Persegi Panjang)',
    text: 'Sebuah kotak penyimpanan berbentuk balok seperti pada gambar mempunyai ukuran panjang 20 cm, lebar 10 cm, dan tinggi 6 cm. Luas seluruh permukaan kotak balok tersebut adalah...',
    options: [
      { id: 'A', text: '680 cm²' },
      { id: 'B', text: '760 cm²' },
      { id: 'C', text: '840 cm²' },
      { id: 'D', text: '1.200 cm²' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas permukaan balok = 2 × [(p × l) + (p × t) + (l × t)]\n= 2 × [(20 × 10) + (20 × 6) + (10 × 6)]\n= 2 × (200 + 120 + 60) = 2 × 380 = 760 cm².',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Menentukan Tinggi Balok',
    difficulty: 'Sedang',
    text: 'Sebuah akuarium kaca berbentuk balok memiliki panjang 60 cm dan lebar 40 cm. Akuarium tersebut diisi air sebanyak 72.000 cm³ hingga terisi penuh tepat sampai bibir akuarium. Tinggi akuarium tersebut adalah...',
    options: [
      { id: 'A', text: '25 cm' },
      { id: 'B', text: '30 cm' },
      { id: 'C', text: '35 cm' },
      { id: 'D', text: '40 cm' },
    ],
    correctAnswer: 'B',
    explanation:
      'Tinggi balok = Volume ÷ (panjang × lebar)\n= 72.000 cm³ ÷ (60 cm × 40 cm) = 72.000 ÷ 2.400 = 30 cm.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Panjang Kerangka Balok',
    difficulty: 'Sedang',
    text: 'Budi ingin membuat kerangka model bangun ruang balok menggunakan kawat besi. Jika ukuran panjang balok 15 cm, lebar 10 cm, dan tinggi 7 cm, panjang minimal kawat yang dibutuhkan untuk membuat satu kerangka balok utuh adalah...',
    options: [
      { id: 'A', text: '64 cm' },
      { id: 'B', text: '96 cm' },
      { id: 'C', text: '128 cm' },
      { id: 'D', text: '160 cm' },
    ],
    correctAnswer: 'C',
    explanation:
      'Balok mempunyai 4 rusuk panjang, 4 rusuk lebar, dan 4 rusuk tinggi.\nPanjang kerangka = 4 × (p + l + t) = 4 × (15 + 10 + 7) = 4 × 32 = 128 cm.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Volume Prisma Tegak Segitiga',
    difficulty: 'Sedang',
    text: 'Sebuah tenda kemah berbentuk prisma tegak segitiga memiliki alas berbentuk segitiga siku-siku dengan panjang alas 60 cm dan tinggi segitiga 40 cm. Jika panjang tenda (tinggi prisma) adalah 200 cm, volume ruang di dalam tenda tersebut adalah...',
    options: [
      { id: 'A', text: '120.000 cm³' },
      { id: 'B', text: '240.000 cm³' },
      { id: 'C', text: '360.000 cm³' },
      { id: 'D', text: '480.000 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas alas segitiga = 1/2 × alas × tinggi segitiga = 1/2 × 60 × 40 = 1.200 cm².\nVolume prisma = Luas alas × tinggi prisma = 1.200 cm² × 200 cm = 240.000 cm³.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Unsur & Sifat Tabung',
    difficulty: 'Mudah',
    imageUrl: tabungSilinderImg,
    imageCaption: 'Gambar Bangun Ruang Tabung (Silinder)',
    text: 'Perhatikan gambar bangun ruang tabung (silinder) di atas! Pernyataan yang paling tepat mengenai sifat dan unsur bangun ruang tabung adalah...',
    options: [
      { id: 'A', text: 'Memiliki 3 sisi (2 lingkaran dan 1 selimut lengkung), 2 rusuk lengkung, dan tidak memiliki titik sudut' },
      { id: 'B', text: 'Memiliki 3 sisi (2 lingkaran dan 1 selimut datar), 4 rusuk lurus, dan 2 titik sudut' },
      { id: 'C', text: 'Memiliki 2 sisi datar, 1 rusuk lengkung, dan 1 titik puncak' },
      { id: 'D', text: 'Memiliki 4 sisi, 6 rusuk, dan 4 titik sudut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Tabung memiliki 3 buah sisi (alas lingkaran, tutup lingkaran, dan 1 sisi selimut lengkung), mempunyai 2 rusuk lengkung (batas alas dan tutup), serta 0 titik sudut.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Volume Tabung',
    difficulty: 'Sedang',
    imageUrl: tabungSilinderImg,
    imageCaption: 'Gambar Tabung dengan Jari-Jari Alas dan Tinggi',
    text: 'Sebuah kaleng susu berbentuk tabung seperti pada gambar memiliki panjang jari-jari alas 7 cm dan tinggi 20 cm. Volume kaleng susu tersebut adalah... (Gunakan π = 22/7)',
    options: [
      { id: 'A', text: '1.540 cm³' },
      { id: 'B', text: '2.640 cm³' },
      { id: 'C', text: '3.080 cm³' },
      { id: 'D', text: '4.400 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume tabung = π × r² × t = (22/7) × 7 cm × 7 cm × 20 cm = 154 cm² × 20 cm = 3.080 cm³.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Luas Permukaan Tabung',
    difficulty: 'Sukar',
    imageUrl: tabungSilinderImg,
    imageCaption: 'Gambar Tabung Tertutup (Alas, Tutup, dan Selimut)',
    text: 'Sebuah wadah plastik tertutup berbentuk tabung memiliki diameter alas 14 cm (jari-jari = 7 cm) dan tinggi 10 cm. Luas permukaan seluruh wadah tabung tertutup tersebut adalah... (Gunakan π = 22/7)',
    options: [
      { id: 'A', text: '440 cm²' },
      { id: 'B', text: '594 cm²' },
      { id: 'C', text: '748 cm²' },
      { id: 'D', text: '880 cm²' },
    ],
    correctAnswer: 'C',
    explanation:
      'Luas permukaan tabung tertutup = 2 × π × r × (r + t)\n= 2 × (22/7) × 7 × (7 + 10)\n= 44 × 17 = 748 cm².',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Sifat Kerucut & Limas Segi Empat',
    difficulty: 'Mudah',
    imageUrl: kerucutDanLimasImg,
    imageCaption: 'Gambar Kerucut (Kiri) dan Limas Segi Empat (Kanan)',
    text: 'Perhatikan kedua bangun ruang pada gambar di atas (kerucut di sebelah kiri dan limas segi empat di sebelah kanan)! Pernyataan yang BENAR mengenai perbedaan kedua bangun ruang tersebut adalah...',
    options: [
      { id: 'A', text: 'Kerucut memiliki alas lingkaran dan 1 rusuk lengkung, sedangkan limas segi empat memiliki alas segi empat dan 8 rusuk lurus' },
      { id: 'B', text: 'Kerucut memiliki 5 sisi datar, sedangkan limas segi empat memiliki 2 sisi lengkung' },
      { id: 'C', text: 'Kedua bangun ruang tersebut sama-sama tidak memiliki titik puncak' },
      { id: 'D', text: 'Limas segi empat memiliki 4 sisi keseluruhan dan 4 titik sudut' },
    ],
    correctAnswer: 'A',
    explanation:
      '• Kerucut memiliki 2 sisi (1 alas lingkaran + 1 selimut lengkung), 1 rusuk lengkung, dan 1 titik puncak.\n• Limas segi empat memiliki 5 sisi (1 alas segi empat + 4 sisi tegak segitiga), 8 rusuk lurus, dan 5 titik sudut (4 di alas + 1 titik puncak).',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Volume Limas Segi Empat',
    difficulty: 'Sedang',
    imageUrl: kerucutDanLimasImg,
    imageCaption: 'Gambar Kerucut dan Limas Segi Empat',
    text: 'Sebuah hiasan meja berbentuk limas segi empat beraturan (seperti bangun di sebelah kanan pada gambar) mempunyai alas berbentuk persegi dengan panjang sisi 12 cm. Jika tinggi limas tersebut adalah 15 cm, maka volume hiasan meja itu adalah...',
    options: [
      { id: 'A', text: '540 cm³' },
      { id: 'B', text: '720 cm³' },
      { id: 'C', text: '1.080 cm³' },
      { id: 'D', text: '2.160 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas alas persegi = 12 cm × 12 cm = 144 cm².\nVolume limas = 1/3 × Luas alas × tinggi = 1/3 × 144 cm² × 15 cm = 144 × 5 = 720 cm³.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Volume Kerucut',
    difficulty: 'Sedang',
    text: 'Sebuah topi ulang tahun berbentuk kerucut memiliki jari-jari alas 7 cm dan tinggi 18 cm. Volume udara di dalam topi kerucut tersebut adalah... (Gunakan π = 22/7)',
    options: [
      { id: 'A', text: '462 cm³' },
      { id: 'B', text: '616 cm³' },
      { id: 'C', text: '924 cm³' },
      { id: 'D', text: '2.772 cm³' },
    ],
    correctAnswer: 'C',
    explanation:
      'Volume kerucut = 1/3 × π × r² × t = 1/3 × (22/7) × 7 × 7 × 18 = 154 × 6 = 924 cm³.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Unsur & Sifat Bola',
    difficulty: 'Mudah',
    text: 'Bola basket adalah benda sehari-hari yang berbentuk bangun ruang bola. Berapakah banyaknya sisi, rusuk, dan titik sudut pada bangun ruang bola?',
    options: [
      { id: 'A', text: '1 sisi lengkung, 0 rusuk, dan 0 titik sudut' },
      { id: 'B', text: '1 sisi lengkung, 1 rusuk lengkung, dan 0 titik sudut' },
      { id: 'C', text: '2 sisi lengkung, 0 rusuk, dan 1 titik pusat sudut' },
      { id: 'D', text: '3 sisi, 2 rusuk, dan 0 titik sudut' },
    ],
    correctAnswer: 'A',
    explanation:
      'Bangun ruang bola hanya dibatasi oleh 1 sisi lengkung tertutup secara utuh, tidak memiliki rusuk (0 rusuk), dan tidak memiliki titik sudut (0 titik sudut).',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Volume Gabungan Bangun Ruang',
    difficulty: 'Sukar',
    imageUrl: gabunganBangunRuangImg,
    imageCaption: 'Gambar Bangun Ruang Gabungan Kubus dan Limas Segi Empat',
    text: 'Perhatikan gambar bangun ruang gabungan yang terdiri dari sebuah kubus di bagian bawah dan sebuah limas segi empat di bagian atas! Jika panjang rusuk kubus adalah 10 cm dan tinggi limas bagian atas adalah 12 cm, maka volume gabungan kedua bangun ruang tersebut adalah...',
    options: [
      { id: 'A', text: '1.200 cm³' },
      { id: 'B', text: '1.400 cm³' },
      { id: 'C', text: '1.600 cm³' },
      { id: 'D', text: '2.200 cm³' },
    ],
    correctAnswer: 'B',
    explanation:
      '1. Volume kubus = 10 cm × 10 cm × 10 cm = 1.000 cm³.\n2. Volume limas = 1/3 × (10 cm × 10 cm) × 12 cm = 1/3 × 100 × 12 = 400 cm³.\n3. Volume gabungan = 1.000 cm³ + 400 cm³ = 1.400 cm³.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Aplikasi Volume Bangun Ruang (Liter)',
    difficulty: 'Sukar',
    text: 'Sebuah kolam ikan berbentuk balok memiliki panjang 200 cm, lebar 100 cm, dan tinggi 80 cm. Saat ini kolam sudah terisi air sebanyak 3/4 bagian. Berapa liter air yang masih perlu ditambahkan agar kolam terisi penuh? (1 liter = 1.000 cm³)',
    options: [
      { id: 'A', text: '300 liter' },
      { id: 'B', text: '400 liter' },
      { id: 'C', text: '800 liter' },
      { id: 'D', text: '1.200 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Volume kolam penuh = 200 × 100 × 80 = 1.600.000 cm³ = 1.600 liter.\nBagian yang belum terisi = 1 - 3/4 = 1/4 bagian.\nAir yang perlu ditambahkan = 1/4 × 1.600 liter = 400 liter.',
  },
];
