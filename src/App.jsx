import React, { useState } from 'react';
import { 
  Cpu, ShieldCheck, MessageCircle, FileText, MapPin, CheckCircle2, 
  Thermometer, Zap, Activity, Droplets, Download, Loader2, 
  Clock, Calendar, Database, Network, UserCheck, 
  Search, BarChart3, Award, Mail, Linkedin, Instagram
} from 'lucide-react';
import { motion } from 'framer-motion';

// --- Shared Components ---
const SectionHeader = ({ badge, title, subtitle }) => (
  <div className="text-center mb-16">
    <span className="text-blue-600 font-bold tracking-[0.4em] uppercase text-xs mb-4 block italic">{badge}</span>
    <h3 className="text-4xl font-extrabold text-[#001F3F] mb-4">{title}</h3>
    {subtitle && <p className="text-slate-500 max-w-2xl mx-auto font-light">{subtitle}</p>}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto bg-[#001F3F]/95 backdrop-blur-md rounded-2xl px-6 h-16 flex justify-between items-center border border-white/10 shadow-2xl">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white shadow-sm">
            <img src="/logo-uin.png" alt="Logo UIN" className="w-full h-full object-contain p-0.5" />
          </div>
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center border-2 border-white shadow-sm">
            <img src="/logo-himafi.png" alt="Logo HIMAFI" className="w-full h-full object-contain p-0.5" />
          </div>
        </div>
        <div className="h-8 w-[1px] bg-white/20 mx-1 hidden sm:block"></div>
        <div className="text-white hidden md:block">
          <h1 className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-90 leading-tight">
            UIN Syarif Hidayatullah<br/>
            <span className="text-blue-400 font-medium">Physics Instrumentation</span>
          </h1>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <a href="#about" className="text-white/70 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors">Profil</a>
        <a href="#workflow" className="text-white/70 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors">Metodologi</a>
        <a href="#contact" className="bg-blue-600 text-white px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider hover:bg-blue-500 transition-all shadow-lg">Mulai Kerjasama</a>
      </div>
    </div>
  </nav>
);

const App = () => {
  const userName = "Muhamad Rafi Taftazani";

  const sensors = [
    { name: "MQ-135", spec: "Ammonia & Benzene Detection", desc: "Menganalisis profil emisi gas volatil akibat dekomposisi protein secara presisi." },
    { name: "MQ-136", spec: "Hydrogen Sulfide Indicators", desc: "Sensor elektrokimia untuk identifikasi dini degradasi jaringan otot pada sampel." },
    { name: "pH-4502C", spec: "Precision Acidimetry", desc: "Pemantauan derajat keasaman untuk validasi fase rigor-mortis dan stabilitas enzimatis." },
    { name: "TCS34725", spec: "Myoglobin Chromaticity", desc: "Digitalisasi spektrum warna jaringan untuk mengukur saturasi oksigen pada mioglobin." },
    { name: "DHT22", spec: "Thermodynamic Stability", desc: "Kalibrasi data berdasarkan fluktuasi suhu dan kelembaban termodinamika lingkungan." }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-800 antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap'); 
        body { font-family: 'Plus Jakarta Sans', sans-serif; scroll-behavior: smooth; }
        .text-justify { text-align: justify; text-justify: inter-word; }
      `}</style>
      
      <Navbar />

      {/* Profile Section */}
      <section id="about" className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col h-full">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg text-blue-700 text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100 self-start italic">
              <UserCheck size={14} /> Researcher Profile
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001F3F] leading-tight mb-6">
              Rancang Bangun Sistem Deteksi Kesegaran Daging Sapi Menggunakan Integrasi Multisensor Berbasis IoT
            </h2>

            <div className="space-y-5 relative pl-5 border-l-4 border-blue-600 flex-grow">
              <p className="text-lg text-slate-700 font-semibold leading-snug">
                Saya <span className="text-[#001F3F] font-bold underline decoration-blue-500 underline-offset-4">{userName}</span>, mahasiswa akhir di bawah bimbingan Ibu Elvan Yuniarti M.Si, Program Studi Fisika UIN Syarif Hidayatullah Jakarta.
              </p>
              <div className="text-slate-500 text-base leading-relaxed font-light text-justify space-y-4">
                <p>
                  Fokus riset saya adalah implementasi sistem cerdas untuk menjawab tantangan standarisasi kualitas pada rantai pasok pangan. Dengan mengintegrasikan prinsip-prinsip fisika instrumentasi <span className="font-semibold italic italic italic"> berbasis Internet of Things</span>, saya berupaya menghadirkan solusi pengujian yang bersifat objektif, non-invasif, dan akurat secara real-time.
                </p>
                <p>
                  Melalui pendekatan metodologi yang komprehensif, riset ini bertujuan untuk meminimalisir subjektivitas manusia dalam penilaian kualitas komoditas protein, guna mendukung terciptanya ekosistem ketahanan pangan nasional yang berbasis data.
                </p>
              </div>
              
              <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                <div className="w-12 h-12 bg-[#001F3F] rounded-xl flex items-center justify-center text-white font-bold text-base shadow-lg shadow-blue-900/20">RT</div>
                <div>
                  <p className="font-bold text-[#001F3F] text-sm leading-none tracking-tight">NIM: 11220970000012</p>
                  <p className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.15em] mt-1">Fisika Instrumentasi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Peluang Kerjasama */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#001F3F] p-8 md:p-10 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden border border-white/5 lg:sticky lg:top-24">
            <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldCheck size={150}/></div>
            <h3 className="text-xl font-bold mb-5 flex items-center gap-3 text-blue-300">
              <Search size={20} /> Kriteria Kolaborasi Riset
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed text-sm font-light text-justify">
              Untuk menjamin validitas statistik dan meminimalisir margin error pada algoritma sistem, saya memerlukan mitra strategis (RPH/Supplier) untuk pengadaan sampel dengan prasyarat teknis berikut:
            </p>
            <div className="space-y-4 mb-8">
              {[
                { label: "Homogenitas Sampel", desc: "Daging sapi dengan potongan, berat (±100g), dan dimensi yang seragam untuk konsistensi data." },
                { label: "Kontrol Kualitas Day-0", desc: "Sampel daging segar pasca-pemotongan untuk pemetaan degradasi data awal." },
                { label: "Aksesibilitas Lokasi", desc: "Izin penempatan modul IoT secara non-intervensif di area cold storage selama 7 hari." },
                { label: "Integritas Data", desc: "Pendampingan logistik dan transparansi proses penyimpanan selama masa akuisisi data." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="flex gap-3 items-center mb-1">
                    <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200">{item.label}</span>
                  </div>
                  <p className="text-[10px] text-white/60 ml-7 font-light">{item.desc}</p>
                </div>
              ))}
            </div>
            <a href="https://wa.me/6283899017787" className="w-full bg-blue-500 text-white py-4 rounded-xl font-bold text-center block hover:bg-blue-400 transition-all text-sm shadow-xl uppercase tracking-widest">
              Konsultasi Kerjasama
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefit Mitra Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Academic Partnership" title="Benefit Untuk Mitra Strategis" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Laporan Kualitas Digital", d: "Akses eksklusif terhadap Laporan Hasil Analisis (LHA) kualitas daging yang terdokumentasi secara saintifik.", i: <FileText className="text-blue-500"/> },
              { t: "Audit Mikro-Lingkungan", d: "Data komprehensif mengenai fluktuasi parameter penyimpanan di lokasi Anda untuk peningkatan standar operasional.", i: <BarChart3 className="text-rose-500"/> },
              { t: "Kontribusi Akademik", d: "Penghargaan formal melalui Sertifikat Apresiasi sebagai bentuk dukungan terhadap hilirisasi riset universitas.", i: <Award className="text-amber-500"/> }
            ].map((b, i) => (
              <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 shadow-inner">{b.i}</div>
                <h4 className="text-xl font-extrabold text-[#001F3F] mb-4">{b.t}</h4>
                <p className="text-slate-500 leading-relaxed text-sm text-justify font-light">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Metodologi Sistem" title="Alur Kerja Instrumentasi" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { t: "Initialization", d: "Proses boot-up sistem, sinkronisasi modul ADC ADS1115, dan otentikasi konektivitas enkripsi.", i: <Network className="text-blue-500"/> },
              { t: "Data Acquisition", d: "Sampling data simultan dari array sensor gas, warna, pH, dan termodinamika secara periodik.", i: <Database className="text-rose-500"/> },
              { t: "Edge Processing", d: "Pemrosesan lokal menggunakan algoritma thresholding untuk kategorisasi status kesegaran komoditas.", i: <Zap className="text-amber-500"/> },
              { t: "Cloud Transmission", d: "Sinkronisasi data ke dashboard IoT untuk visualisasi dan pelaporan historis secara jarak jauh.", i: <Activity className="text-indigo-500"/> }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:border-blue-200 transition-all group">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#001F3F] group-hover:text-white transition-all">{step.i}</div>
                <h4 className="font-bold text-[#001F3F] mb-3">{i+1}. {step.t}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-light text-justify">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sensor Specs Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader badge="Hardware Architecture" title="Spesifikasi Komponen Inti" />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {sensors.map((s, idx) => (
              <div key={idx} className="p-6 bg-white rounded-3xl border border-slate-100 text-center hover:shadow-lg transition-all">
                <div className="w-10 h-10 bg-slate-50 rounded-xl shadow-sm flex items-center justify-center mb-4 mx-auto border border-slate-100">
                  <Cpu className="text-blue-600" size={18}/>
                </div>
                <h5 className="font-bold text-[#001F3F] text-sm mb-1">{s.name}</h5>
                <p className="text-[9px] text-blue-600 font-bold uppercase mb-3 tracking-widest">{s.spec}</p>
                <p className="text-[10px] text-slate-400 leading-relaxed italic font-light">"{s.desc}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="pt-20 pb-12 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-3xl border border-slate-100 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-[#001F3F] to-blue-600"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#001F3F] mb-4 leading-tight">Membangun Transparansi Kualitas Pangan</h2>
            <p className="text-slate-500 text-base font-light mb-10 italic">"Kolaborasi Anda adalah katalis bagi digitalisasi standar pangan lokal."</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="https://wa.me/6283899017787" className="w-full sm:w-auto bg-[#001F3F] text-white px-10 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-600 transition-all flex items-center justify-center gap-2 text-sm">
                <MessageCircle size={18} /> Ajukan Kolaborasi
              </a>
              <a href="/SEMPRO RAFI.pdf" download className="w-full sm:w-auto bg-white text-[#001F3F] border-2 border-[#001F3F] px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-2 text-sm hover:bg-slate-50 transition-colors">
                <Download size={18} /> Berkas Proposal
              </a>
            </div>

            {/* Social Links & Contact */}
            <div className="flex flex-col items-center border-t border-slate-100 pt-10">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6">Hubungkan Secara Profesional</p>
              <div className="flex gap-8">
                <a href="mailto:mrafitaftazani12@gmail.com" className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                  <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-600 tracking-wider">EMAIL</span>
                </a>
                <a href="https://www.linkedin.com/in/muhamad-rafi-taftazani-188312291/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                  <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                    <Linkedin size={22} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 group-hover:text-blue-700 tracking-wider">LINKEDIN</span>
                </a>
                <a href="https://instagram.com/mraftaf15" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 transition-transform hover:-translate-y-1">
                  <div className="p-3 bg-slate-50 rounded-full text-slate-400 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
                    <Instagram size={20} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 group-hover:text-rose-600 tracking-wider">INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="pb-12 pt-4 text-center">
        <p className="text-[9px] font-bold tracking-[0.4em] text-slate-400 uppercase italic">
          © 2026 Applied Physics Research • UIN Syarif Hidayatullah Jakarta
        </p>
      </footer>
    </div>
  );
};

export default App;
