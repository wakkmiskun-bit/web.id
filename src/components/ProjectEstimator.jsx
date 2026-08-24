import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Check,
  Plus,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { ESTIMATOR_CONFIG, waLink } from "../data/content";
import { SectionHeading } from "./Services";
import Tilt3D from "./Tilt3D";

function formatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(number);
}

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState(ESTIMATOR_CONFIG.types[1].id); // default company profile
  const [selectedAddons, setSelectedAddons] = useState([ESTIMATOR_CONFIG.addons[0].id]);
  const [speedMode, setSpeedMode] = useState("standard");

  const currentType =
    ESTIMATOR_CONFIG.types.find((t) => t.id === selectedType) ||
    ESTIMATOR_CONFIG.types[0];

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter((id) => id !== addonId));
    } else {
      setSelectedAddons([...selectedAddons, addonId]);
    }
  };

  // Calculations
  const addonsTotal = selectedAddons.reduce((acc, addonId) => {
    const item = ESTIMATOR_CONFIG.addons.find((a) => a.id === addonId);
    return acc + (item ? item.price : 0);
  }, 0);

  const speedMult = speedMode === "express" ? 1.25 : 1.0;
  const rawTotal = (currentType.basePrice + addonsTotal) * speedMult;
  const totalPrice = Math.round(rawTotal);

  const rawDays = speedMode === "express" ? Math.max(3, Math.round(currentType.days * 0.7)) : currentType.days;

  // WhatsApp formatted message
  const selectedAddonNames = selectedAddons
    .map((id) => ESTIMATOR_CONFIG.addons.find((a) => a.id === id)?.name)
    .filter(Boolean);

  const waMessage = `Halo NexaCode Studio, saya sudah menghitung estimasi proyek di website:
- Jenis Proyek: ${currentType.name}
- Fitur Tambahan: ${selectedAddonNames.length > 0 ? selectedAddonNames.join(", ") : "Tidak ada"}
- Jalur Pengerjaan: ${speedMode === "express" ? "Express Prioritas" : "Standar"}
- Estimasi Biaya: ${formatRupiah(totalPrice)}
- Estimasi Waktu: ~${rawDays} Hari Kerja

Bisa dijadwalkan sesi konsultasi untuk detailnya? Terima kasih!`;

  const estimatorWa = waLink(waMessage);

  return (
    <section id="kalkulator" className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-accent-indigo/15 blur-[140px] pointer-events-none" />

      <SectionHeading
        eyebrow="// 03_kalkulator_interaktif"
        title="Simulasikan Kebutuhan &amp; Estimasi Investasi Proyek"
        desc="Gunakan kalkulator interaktif ini untuk merancang spesifikasi fitur yang Anda butuhkan dan dapatkan perkiraan biaya serta durasi pengerjaan secara transparan."
      />

      <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start perspective-1500">
        {/* Left: Interactive Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* STEP 1: Pilih Jenis Proyek */}
          <div className="rounded-2xl border border-white/10 bg-bg-900/80 p-6 sm:p-7 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-indigo text-xs font-bold text-white">
                1
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Pilih Tipe Solusi Digital
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {ESTIMATOR_CONFIG.types.map((type) => {
                const isSelected = selectedType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between ${
                      isSelected
                        ? "border-accent-cyan bg-accent-indigo/15 shadow-glow-cyan"
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-sm font-semibold ${
                            isSelected ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {type.name}
                        </span>
                        {isSelected && (
                          <Check className="h-4 w-4 text-accent-cyan" />
                        )}
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        Mulai {formatRupiah(type.basePrice)}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-accent-blue mt-3 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> ~{type.days} hari kerja
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 2: Pilih Addons / Fitur Tambahan */}
          <div className="rounded-2xl border border-white/10 bg-bg-900/80 p-6 sm:p-7 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-indigo text-xs font-bold text-white">
                2
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Tambahkan Modul &amp; Fitur Khusus
              </h3>
            </div>

            <div className="space-y-2.5">
              {ESTIMATOR_CONFIG.addons.map((addon) => {
                const isSelected = selectedAddons.includes(addon.id);
                return (
                  <button
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 ${
                      isSelected
                        ? "border-accent-indigo/60 bg-accent-indigo/20 text-white"
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-5 w-5 items-center justify-center rounded-md border transition-colors ${
                          isSelected
                            ? "bg-accent-indigo border-accent-cyan text-white"
                            : "border-white/20 bg-transparent"
                        }`}
                      >
                        {isSelected ? (
                          <Check className="h-3 w-3" />
                        ) : (
                          <Plus className="h-3 w-3 text-slate-500" />
                        )}
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {addon.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-accent-cyan shrink-0">
                      +{formatRupiah(addon.price)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* STEP 3: Prioritas Kecepatan */}
          <div className="rounded-2xl border border-white/10 bg-bg-900/80 p-6 sm:p-7 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent-indigo text-xs font-bold text-white">
                3
              </span>
              <h3 className="font-display text-lg font-bold text-white">
                Jalur Waktu Pengerjaan
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {ESTIMATOR_CONFIG.speeds.map((speed) => {
                const isSelected = speedMode === speed.id;
                return (
                  <button
                    key={speed.id}
                    onClick={() => setSpeedMode(speed.id)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? "border-accent-cyan bg-accent-indigo/20 text-white"
                        : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
                    }`}
                  >
                    <p className="text-xs sm:text-sm font-semibold">{speed.name}</p>
                    <p className="text-[11px] font-mono text-slate-400 mt-1">
                      {speed.id === "express"
                        ? "Prioritas tim dedicated 24/7"
                        : "Alur pengembangan standar"}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: 3D Live Summary Card (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Tilt3D maxTilt={6} scale={1.01}>
            <div className="card-surface p-7 sm:p-8 border-accent-indigo/40 bg-gradient-to-b from-bg-850 via-bg-900 to-bg-950 shadow-3d-glass relative overflow-hidden">
              {/* Corner badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-indigo/30 border border-accent-indigo/40 text-xs font-mono text-accent-cyan mb-6">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Rangkuman Estimasi</span>
              </div>

              {/* Price Display */}
              <div>
                <p className="text-xs font-mono text-slate-400 uppercase">
                  Perkiraan Total Investasi
                </p>
                <motion.p
                  key={totalPrice}
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl sm:text-4xl font-display font-extrabold text-white bg-gradient-to-r from-white via-accent-cyan to-accent-indigo bg-clip-text text-transparent mt-1"
                >
                  {formatRupiah(totalPrice)}
                </motion.p>
                <p className="text-xs text-slate-400 mt-1">
                  *Estimasi final dapat disesuaikan saat konsultasi kebutuhan detail.
                </p>
              </div>

              {/* Breakdown List */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-3 font-mono text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Modul Utama:</span>
                  <span className="text-white font-semibold">{currentType.name}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fitur Tambahan:</span>
                  <span className="text-accent-cyan">{selectedAddons.length} Dipilih</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Estimasi Durasi:</span>
                  <span className="text-emerald-400 font-semibold">~{rawDays} Hari Kerja</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Garansi Bebas Bug:</span>
                  <span className="text-slate-200">100% Termasuk (30 Hari)</span>
                </div>
              </div>

              {/* Guarantee badges */}
              <div className="mt-6 p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>Termasuk Hosting Cloud &amp; Domain 1 Tahun</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <Zap className="h-4 w-4 text-accent-cyan shrink-0" />
                  <span>Full Source Code &amp; Hak Milik 100% Milik Anda</span>
                </div>
              </div>

              {/* Send to WhatsApp CTA */}
              <a
                href={estimatorWa}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-7 text-sm sm:text-base py-4 font-semibold text-center"
              >
                Kirim Estimasi ke WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Tilt3D>
        </div>
      </div>
    </section>
  );
}
