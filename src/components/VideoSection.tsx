"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";


const YOUTUBE_ID = "iNsQKOq0Ydk";

export default function VideoSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [playing, setPlaying] = useState(false);

  return (
    <section id="video" className="py-32 bg-diesel-gray" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-diesel-orange text-sm tracking-[0.4em] uppercase mb-4">Institucional</p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white">
            CONHEÇA A<br />
            <span className="text-diesel-orange">NOSSA HISTÓRIA</span>
          </h2>
        </motion.div>

        {/* Player */}
        <motion.div
          className="relative rounded-2xl overflow-hidden border border-diesel-border glow-orange aspect-video"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {!playing ? (
            /* Thumbnail + play */
            <div
              className="absolute inset-0 flex items-center justify-center bg-diesel-dark cursor-pointer group"
              onClick={() => setPlaying(true)}
            >
              {/* Thumbnail via YouTube */}
              <img
                src={`https://img.youtube.com/vi/${YOUTUBE_ID}/maxresdefault.jpg`}
                alt="Vídeo institucional TRR"
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  className="w-20 h-20 rounded-full bg-diesel-orange flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.div>
                <span className="text-white text-sm tracking-widest uppercase group-hover:text-diesel-orange transition-colors">
                  Assistir vídeo
                </span>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Vídeo institucional TRR Diesel"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              allowFullScreen
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}
