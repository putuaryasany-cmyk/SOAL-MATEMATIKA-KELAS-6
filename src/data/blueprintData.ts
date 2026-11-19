import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika
 * Lingkup Materi: Bangun Ruang (Tahun Pelajaran 2026/2027)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 18 butir soal Matematika Bangun Ruang Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi unsur-unsur (sisi, rusuk, titik sudut) serta jaring-jaring bangun ruang kubus.',
    indikatorSoal:
      'Disajikan gambar bangun ruang kubus beserta jaring-jaringnya, peserta didik dapat menentukan banyaknya sisi, rusuk, dan titik sudut kubus dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang kubus dalam satuan baku.',
    indikatorSoal:
      'Disajikan panjang rusuk sebuah kotak kayu berbentuk kubus, peserta didik dapat menghitung volume kotak kayu tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan panjang rusuk kubus dari volume dalam satuan liter melalui konsep akar pangkat tiga.',
    indikatorSoal:
      'Disajikan kapasitas air bak mandi kubus dalam satuan liter, peserta didik dapat menentukan panjang rusuk bak mandi dalam satuan sentimeter.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung luas permukaan kubus berdasarkan pola jaring-jaringnya.',
    indikatorSoal:
      'Disajikan gambar kubus dan jaring-jaring 6 persegi beserta ukuran rusuknya, peserta didik dapat menghitung luas minimal kertas karton yang diperlukan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang balok berdasarkan ukuran panjang, lebar, dan tinggi.',
    indikatorSoal:
      'Disajikan gambar bangun ruang balok beserta ukuran panjang, lebar, dan tingginya, peserta didik dapat menghitung volume balok tersebut.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung luas seluruh permukaan bangun ruang balok.',
    indikatorSoal:
      'Disajikan gambar kotak balok beserta ukuran panjang, lebar, dan tinggi, peserta didik dapat menghitung luas permukaan kotak balok tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan salah satu ukuran rusuk balok apabila volume dan dua rusuk lainnya diketahui.',
    indikatorSoal:
      'Disajikan volume air penuh dalam akuarium balok beserta panjang dan lebarnya, peserta didik dapat menentukan tinggi akuarium tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan panjang total kerangka bangun ruang balok dalam konteks pembuatan model kawat.',
    indikatorSoal:
      'Disajikan ukuran panjang, lebar, dan tinggi model balok, peserta didik dapat menghitung panjang minimal kawat untuk membuat satu kerangka balok utuh.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang prisma tegak segitiga dalam konteks sehari-hari.',
    indikatorSoal:
      'Disajikan ukuran alas dan tinggi segitiga alas serta panjang tenda prisma segitiga, peserta didik dapat menghitung volume ruang di dalam tenda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi sifat-sifat dan unsur bangun ruang tabung (silinder).',
    indikatorSoal:
      'Disajikan gambar bangun ruang tabung, peserta didik dapat menentukan pernyataan yang paling tepat mengenai jumlah sisi, rusuk, dan titik sudut tabung.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang tabung dengan nilai pendekatan π = 22/7.',
    indikatorSoal:
      'Disajikan gambar tabung beserta panjang jari-jari alas dan tingginya, peserta didik dapat menghitung volume kaleng tabung tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan menghitung luas permukaan bangun ruang tabung tertutup.',
    indikatorSoal:
      'Disajikan gambar tabung tertutup beserta diameter alas dan tingginya, peserta didik dapat menghitung luas permukaan wadah tabung secara tepat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan karakteristik unsur bangun ruang kerucut dan limas segi empat.',
    indikatorSoal:
      'Disajikan gambar bangun ruang kerucut dan limas segi empat berdampingan, peserta didik dapat menentukan pernyataan perbedaan unsur keduanya yang benar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang limas segi empat beraturan.',
    indikatorSoal:
      'Disajikan gambar kerucut dan limas segi empat beserta panjang sisi alas persegi dan tinggi limas, peserta didik dapat menghitung volume limas segi empat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung volume bangun ruang kerucut dengan nilai pendekatan π = 22/7.',
    indikatorSoal:
      'Disajikan ukuran jari-jari alas dan tinggi topi ulang tahun berbentuk kerucut, peserta didik dapat menghitung volume udara di dalam topi tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Geometri',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi unsur-unsur bangun ruang bola.',
    indikatorSoal:
      'Disajikan benda kontekstual berbentuk bola, peserta didik dapat menentukan banyaknya sisi, rusuk, dan titik sudut pada bangun ruang bola.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan menghitung volume gabungan dua bangun ruang (kubus dan limas segi empat).',
    indikatorSoal:
      'Disajikan gambar bangun ruang gabungan kubus dan limas segi empat beserta panjang rusuk kubus dan tinggi limas, peserta didik dapat menghitung volume total gabungan bangun.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Pengukuran',
    tujuanPembelajaran:
      'Peserta didik dapat memecahkan masalah kontekstual yang melibatkan volume balok, pecahan keterisian air, dan konversi satuan liter.',
    indikatorSoal:
      'Disajikan ukuran kolam berbentuk balok yang telah terisi 3/4 bagian, peserta didik dapat menghitung sisa volume air yang perlu ditambahkan dalam satuan liter.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan bangun ruang.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('volume') || t.includes('rusuk') || t.includes('tinggi') || t.includes('liter')) {
    return 'Pengukuran';
  }
  return 'Geometri';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    ...(typeCountMap.pgk > 0
      ? [
          {
            type: 'pgk',
            label: 'Pilihan Ganda Kompleks (PGK)',
            count: typeCountMap.pgk,
            percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
          },
        ]
      : []),
    ...(typeCountMap.pgk_kategori > 0
      ? [
          {
            type: 'pgk_kategori',
            label: 'Benar / Salah (PGK Kategori)',
            count: typeCountMap.pgk_kategori,
            percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
          },
        ]
      : []),
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
