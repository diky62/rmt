import React from 'react';
import { ShieldCheck, Target, Award, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export function LegalitySection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gray-50 text-black py-20 lg:py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1300px] mx-auto space-y-24">
        
        {/* Header */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-heading mb-6 text-black font-semibold capitalize border-l-4 border-l-[#E50012] pl-4"
          >
            {t({
              en: <>Legality & <span className="font-serif italic text-4xl mt-2 block text-gradient">Certifications</span></>,
              id: <>Legalitas & <span className="font-serif italic text-4xl mt-2 block">Sertifikasi</span></>
            })}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl font-sans text-gray-700 max-w-3xl leading-relaxed"
          >
            {t({
              en: "PT Raid Multi Teknik holds complete and official corporate legalities to support highly professional, compliant, and structured operations.",
              id: "PT Raid Multi Teknik memiliki legalitas perusahaan yang lengkap dan resmi untuk mendukung operasional bisnis secara profesional dan sesuai regulasi."
            })}
          </motion.p>
        </div>

        {/* Legal Standing */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75 }}
            className="bg-white border border-[#FFB800] overflow-hidden shadow-sm group"
          >
            <div className="bg-[#111] text-[#FFB800] p-6 grid grid-cols-2">
              <span className="font-bold">{t({ en: 'Company Name', id: 'Nama Perusahaan' })}</span>
              <span className="font-bold text-white">PT. Raid Multi Teknik</span>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                [t({ en: 'Address', id: 'Alamat' }), 'Jl Cirebon Tegal Km.10, Cirebon, Jawa Barat'],
                [t({ en: 'Deed of Establishment', id: 'Akta Pendirian' }), 'AHU-061218.AH.01.30.Tahun 2023'],
                [t({ en: 'Deed of Amendment', id: 'Akta Perubahan' }), 'AHU-0038863.AH.01.11'],
                [t({ en: 'SBU (Registration)', id: 'SBU' }), 'PB-UMKU: 030923005227100020001'],
                ['P3IM', '00044877.001'],
                ['PETAKINDO', 'Nomor: 191.02.25.268715'],
                [t({ en: 'Contact', id: 'Kontak' }), '0231-881 0181 / +62 8179 099 499'],
                ['Email', 'admin@raidmt.com']
              ].map(([k, v], i) => (
                <div key={i} className="grid grid-cols-2 p-4 md:p-6 text-sm hover:bg-[#FFB800]/5 transition-colors">
                  <span className="text-gray-500 font-medium">{k}</span>
                  <span className="text-gray-900 font-semibold">{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.2 }}
            className="bg-[#111] text-white p-10 md:p-12 flex flex-col justify-center border-b-4 border-[#FFB800]"
          >
            <h3 className="text-2xl md:text-3xl font-heading mb-6 font-semibold capitalize">
              {t({
                en: <>Why Compliance <span className="font-serif italic text-3xl">Matters?</span></>,
                id: <>Mengapa Kepatuhan <span className="font-serif italic text-3xl">Penting?</span></>
              })}
            </h3>
            <div className="w-12 h-0.5 bg-[#FFB800] mb-8"></div>
            <p className="text-gray-400 leading-relaxed mb-12">
              {t({
                en: "Our comprehensive legal standings guarantee thorough compliance in every project we oversee. From national business registries to industry certificates, we preserve the highest standards in corporate governance.",
                id: "Legalitas penuh kami memastikan kepatuhan regulasi di setiap proyek yang kami tangani. Mulai dari registrasi bisnis hingga sertifikasi industri, kami mempertahankan standar tertinggi dalam tata kelola perusahaan."
              })}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl md:text-5xl font-serif text-[#FFB800] mb-2">15+</span>
                <span className="text-sm text-gray-400 capitalize">{t({ en: 'Years Experience', id: 'Tahun Pengalaman' })}</span>
              </div>
              <div>
                <span className="block text-4xl md:text-5xl font-serif text-[#FFB800] mb-2">3</span>
                <span className="text-sm text-gray-400 capitalize">{t({ en: 'ISO Certs', id: 'Sertifikasi ISO' })}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-4xl md:text-5xl font-serif text-[#FFB800] mb-2">5+</span>
                <span className="text-sm text-gray-400 capitalize">{t({ en: 'Major Clients Sourced', id: 'Klien Besar Dilayani' })}</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ISO Certs */}
        <div className="pt-12 border-t border-gray-200">
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading mb-10 font-semibold capitalize border-l-4 border-l-[#E50012] pl-4"
          >
            {t({
              en: <>ISO <span className="font-serif italic text-4xl text-gradient">Certifications</span></>,
              id: <>Sertifikasi <span className="font-serif italic text-4xl">ISO</span></>
            })}
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6 }}
              className="bg-[#111] text-white p-8 md:p-10 group border-t-4 border-[#FFB800] transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left shadow-md hover:shadow-lg hover:shadow-[#FFB800]/5 hover:-translate-y-1"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%202?updatedAt=1779370240571" 
                  alt="ISO 9001:2015" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <p className="text-[#FFB800] font-mono text-xs mb-2 font-semibold capitalize">ISO 9001:2015</p>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#FFB800] transition-colors">
                  {t({ en: 'Quality Management', id: 'Sistem Manajemen Mutu' })}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t({
                    en: "A robust Quality Management System setup ensuring consistent product quality and service fulfillment to best industry specifications.",
                    id: "Sistem Manajemen Mutu untuk memastikan kualitas produk dan layanan yang konsisten dan memenuhi standar terbaik."
                  })}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#111] text-white p-8 md:p-10 group border-t-4 border-[#E50012] transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left shadow-md hover:shadow-lg hover:shadow-[#E50012]/5 hover:-translate-y-1"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%203?updatedAt=1779370236943" 
                  alt="ISO 14001:2015" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <p className="text-[#E50012] font-mono text-xs mb-2 font-semibold capitalize">ISO 14001:2015</p>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-[#E50012] transition-colors">
                  {t({ en: 'Environmental Management', id: 'Manajemen Lingkungan' })}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t({
                    en: "An Environmental Management System underlining PT Raid Multi Teknik's core pledge toward sustainable and circular waste minimizations.",
                    id: "Sistem Manajemen Lingkungan sebagai bentuk komitmen PT Raid Multi Teknik terhadap pengelolaan lingkungan yang bertanggung jawab."
                  })}
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-[#111] text-white p-8 md:p-10 group border-t-4 border-blue-500 transition-all duration-300 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left shadow-md hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1"
            >
              <div className="w-28 h-28 md:w-36 md:h-36 flex-shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://ik.imagekit.io/thg6zuwgj/Raid%20Multi%20Teknik/ISO%201?updatedAt=1779370251129" 
                  alt="ISO 45001:2018" 
                  className="max-h-full max-w-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1">
                <p className="text-blue-500 font-mono text-xs mb-2 font-semibold capitalize">ISO 45001:2018</p>
                <h4 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-500 transition-colors">
                  {t({ en: 'Health & Safety', id: 'Kesehatan & Keselamatan' })}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {t({
                    en: "A strict Health & Safety management protocol centered on establishing danger-free, hazard-controlled, and highly productive job sites.",
                    id: "Sistem Manajemen Kesehatan dan Keselamatan Kerja untuk menciptakan lingkungan kerja yang aman dan produktif bagi seluruh pekerja."
                  })}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#191919] text-gray-300 p-6 md:p-8 flex items-start sm:items-center gap-6 border-l-4 border-[#FFB800]"
          >
            <CheckCircle2 className="text-[#FFB800] shrink-0" size={32} />
            <p className="leading-relaxed text-sm lg:text-base">
              {t({
                en: <>These industry certifications guarantee our active determination to uphold the <strong className="text-white">highest benchmarks</strong> of operational quality, green actions, and absolute workforce safety in all areas.</>,
                id: <>Sertifikasi ini menunjukkan determinasi kami untuk mempertahankan <strong className="text-white">standar tertinggi</strong> dalam kualitas, tanggung jawab sosial, dan keselamatan di semua lini operasional.</>
              })}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

