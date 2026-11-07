import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Copy, Check, Coffee, Sparkles, BatteryCharging, ArrowRight } from 'lucide-react'
import { SUPPORT_DATA, type SupportTier } from '../data/portfolio'

interface SupportModalProps {
  isOpen: boolean
  onClose: () => void
}

export const SupportModal: React.FC<SupportModalProps> = ({ isOpen, onClose }) => {
  const [selectedTier, setSelectedTier] = useState<SupportTier>(SUPPORT_DATA.tiers[0])
  const [caffeineLevel, setCaffeineLevel] = useState<number>(SUPPORT_DATA.initialCaffeineLevel)
  const [copiedType, setCopiedType] = useState<'syntax' | 'account' | null>(null)
  const [thankYouMessage, setThankYouMessage] = useState(false)

  const handleSelectTier = (tier: SupportTier) => {
    setSelectedTier(tier)
    setCaffeineLevel((prev) => Math.min(100, prev + 5))
  }

  const transferSyntax = `${SUPPORT_DATA.defaultSyntax} ${selectedTier.id.toUpperCase()}`

  const copyToClipboard = async (text: string, type: 'syntax' | 'account') => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)
      setThankYouMessage(true)
      setTimeout(() => setCopiedType(null), 2500)
      setTimeout(() => setThankYouMessage(false), 3500)
    } catch {
      // Fallback
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: 'spring', damping: 24, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-neutral-200 overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100 bg-[#fafaf9]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center">
                  <Coffee size={18} />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-neutral-900">{SUPPORT_DATA.title}</h3>
                    <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                      CaaS Protocol
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500">{SUPPORT_DATA.englishTitle}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="w-8 h-8 rounded-lg text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/60 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Đóng cửa sổ"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Battery Caffeine Indicator */}
              <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/60 flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <BatteryCharging className="text-amber-600 animate-pulse" size={20} />
                  <div>
                    <span className="text-xs font-semibold text-neutral-800">Mức pin Caffeine hiện tại: </span>
                    <span className="text-xs font-bold text-amber-700">{caffeineLevel}%</span>
                    <p className="text-[11px] text-neutral-600">
                      {caffeineLevel < 80 ? '⚡ Đang thiếu caffeine để debug xuyên đêm' : '🔥 Đầy pin, sẵn sàng gõ 1.000 dòng code!'}
                    </p>
                  </div>
                </div>

                <div className="w-28 sm:w-36 h-2.5 bg-neutral-200/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"
                    initial={{ width: `${SUPPORT_DATA.initialCaffeineLevel}%` }}
                    animate={{ width: `${caffeineLevel}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Tiers Grid */}
              <div>
                <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2.5">
                  1. Chọn gói tiếp tế năng lượng:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {SUPPORT_DATA.tiers.map((tier) => {
                    const isSelected = selectedTier.id === tier.id
                    return (
                      <button
                        key={tier.id}
                        type="button"
                        onClick={() => handleSelectTier(tier)}
                        className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between relative ${
                          isSelected
                            ? 'bg-amber-50/80 border-amber-500 shadow-xs ring-1 ring-amber-500/30'
                            : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50/50'
                        }`}
                      >
                        {tier.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-neutral-900 text-white w-max mb-1.5">
                            {tier.badge}
                          </span>
                        )}
                        <div>
                          <span className="text-2xl mb-1 block">{tier.icon}</span>
                          <span className="text-xs font-bold text-neutral-900 block leading-tight">
                            {tier.name}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-amber-600 mt-2 block">
                          {tier.price}
                        </span>
                      </button>
                    )
                  })}
                </div>
                <p className="text-xs text-neutral-500 mt-2 italic flex items-center gap-1.5">
                  <Sparkles size={13} className="text-amber-500" />
                  {selectedTier.description}
                </p>
              </div>

              {/* QR and Transfer Info */}
              <div className="pt-2 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                {/* QR Code */}
                <div className="sm:col-span-5 flex flex-col items-center">
                  <div className="p-2.5 rounded-xl border border-neutral-200 bg-white shadow-xs max-w-[210px]">
                    <img
                      src={SUPPORT_DATA.qrImagePath}
                      alt="VietQR Pham Huu Canh"
                      className="w-full h-auto rounded-lg object-contain"
                    />
                  </div>
                  <span className="text-[11px] text-neutral-500 mt-1.5 text-center">
                    Quét nhanh qua mọi app ngân hàng / VietQR
                  </span>
                </div>

                {/* Account details */}
                <div className="sm:col-span-7 space-y-3.5">
                  <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    2. Hoặc chuyển khoản thủ công:
                  </label>

                  {/* Bank info box */}
                  <div className="p-3 rounded-xl bg-neutral-50 border border-neutral-200 text-xs space-y-2">
                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Ngân hàng:</span>
                      <span className="font-semibold text-neutral-900">{SUPPORT_DATA.bankName}</span>
                    </div>
                    <div className="flex justify-between items-center text-neutral-600">
                      <span>Chủ tài khoản:</span>
                      <span className="font-semibold text-neutral-900">{SUPPORT_DATA.accountHolder}</span>
                    </div>
                  </div>

                  {/* Copy Account number */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-xs">
                      <span className="text-neutral-500 block text-[11px]">Số tài khoản / Mã Napas:</span>
                      <span className="font-mono font-bold text-neutral-900">{SUPPORT_DATA.accountNumber}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(SUPPORT_DATA.accountNumber, 'account')}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      {copiedType === 'account' ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">Đã copy</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Copy Transfer Syntax */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-50 border border-neutral-200">
                    <div className="text-xs">
                      <span className="text-neutral-500 block text-[11px]">Nội dung chuyển khoản gợi ý:</span>
                      <span className="font-mono font-bold text-amber-700">{transferSyntax}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copyToClipboard(transferSyntax, 'syntax')}
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-md text-xs font-semibold bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
                    >
                      {copiedType === 'syntax' ? (
                        <>
                          <Check size={14} className="text-emerald-600" />
                          <span className="text-emerald-600">Đã copy</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Sao chép</span>
                        </>
                      )}
                    </button>
                  </div>

                  {thankYouMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2 text-center text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg font-medium"
                    >
                      🎉 Cảm ơn bạn rất nhiều vì đã tiếp thêm năng lượng cho dev!
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-neutral-100 bg-[#fafaf9] flex items-center justify-between">
              <span className="text-xs text-neutral-500 flex items-center gap-1">
                From Hanoi with ☕ and Clean Code
              </span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                <span>Xong</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
