import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react'
import { PROJECTS_DATA, SKILL_CATEGORIES, PERSONAL_INFO } from '../data/portfolio'

interface DevTerminalProps {
  isOpen: boolean
  onClose: () => void
  onOpenSupport: () => void
}

interface CommandHistory {
  command: string
  output: React.ReactNode
}

export const DevTerminal: React.FC<DevTerminalProps> = ({ isOpen, onClose, onOpenSupport }) => {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-neutral-300 space-y-1 mb-2">
          <p className="text-emerald-400 font-bold">
            🚀 Welcome to Canh's Interactive Engineering Console [Version 2.4.0]
          </p>
          <p className="text-xs text-neutral-400">
            Gõ <span className="text-amber-300 font-mono">help</span> để xem các lệnh hoặc <span className="text-amber-300 font-mono">nuoi-toi</span> để tiếp tế cà phê cho dev!
          </p>
        </div>
      ),
    },
  ])
  const [isMaximized, setIsMaximized] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let output: React.ReactNode = null

    switch (trimmed) {
      case 'help':
        output = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-neutral-300 py-1 font-mono">
            <div><span className="text-emerald-400 font-bold">projects</span> : Danh sách dự án nổi bật</div>
            <div><span className="text-emerald-400 font-bold">skills</span> : Kỹ năng & Tech Stack</div>
            <div><span className="text-emerald-400 font-bold">nuoi-toi</span> : Mở popup Tiếp tế Cà phê (CaaS)</div>
            <div><span className="text-emerald-400 font-bold">about</span> : Tóm tắt thông tin & học vấn</div>
            <div><span className="text-emerald-400 font-bold">contact</span> : Kênh liên hệ trực tiếp</div>
            <div><span className="text-emerald-400 font-bold">sudo hire-canh</span> : Gửi đề nghị phỏng vấn</div>
            <div><span className="text-emerald-400 font-bold">clear</span> : Xóa màn hình console</div>
            <div><span className="text-emerald-400 font-bold">exit</span> : Đóng terminal</div>
          </div>
        )
        break

      case 'projects':
        output = (
          <div className="space-y-2 text-xs py-1">
            {PROJECTS_DATA.map((p, idx) => (
              <div key={p.id} className="border-l-2 border-emerald-500 pl-2">
                <span className="text-emerald-300 font-bold">[{idx + 1}] {p.title}</span>
                <p className="text-neutral-400">{p.subtitle}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {p.tags.slice(0, 5).map((t) => (
                    <span key={t} className="text-[10px] bg-neutral-800 text-neutral-300 px-1.5 py-0.5 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )
        break

      case 'skills':
        output = (
          <div className="space-y-1.5 text-xs py-1">
            {SKILL_CATEGORIES.map((c) => (
              <div key={c.name} className="flex flex-wrap gap-1 items-baseline">
                <span className="text-amber-300 font-semibold w-28">{c.name}:</span>
                <span className="text-neutral-300">{c.skills.join(', ')}</span>
              </div>
            ))}
          </div>
        )
        break

      case 'nuoi-toi':
      case 'coffee':
      case 'donate':
        output = (
          <div className="p-2 rounded bg-amber-950/40 border border-amber-600/40 text-amber-300 text-xs my-1">
            ☕ Kích hoạt giao thức Caffeine Dependency Injection... Đang mở QR code!
          </div>
        )
        setTimeout(() => onOpenSupport(), 300)
        break

      case 'about':
        output = (
          <div className="text-xs text-neutral-300 space-y-1 py-1">
            <p className="font-bold text-white">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p>🎓 Sinh viên năm cuối Công nghệ Thông tin (tốt nghiệp 2027)</p>
            <p>💼 Hiện tại: {PERSONAL_INFO.currentRole} tại {PERSONAL_INFO.company}</p>
            <p>🎯 Mục tiêu: Trở thành Kỹ sư phần mềm chuyên sâu Java Backend & Microservices</p>
          </div>
        )
        break

      case 'contact':
        output = (
          <div className="text-xs text-neutral-300 space-y-1 py-1 font-mono">
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 hover:underline">{PERSONAL_INFO.email}</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.github}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        )
        break

      case 'sudo hire-canh':
      case 'hire':
        output = (
          <div className="p-2 rounded bg-emerald-950/50 border border-emerald-500/40 text-emerald-300 text-xs font-mono my-1">
            🚀 Root permission granted! Quyết định sáng suốt! Đang mở ứng dụng mail để liên hệ Cảnh...
          </div>
        )
        setTimeout(() => {
          window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Job%20Opportunity%20for%20Pham%20Huu%20Canh`
        }, 1000)
        break

      case 'clear':
        setHistory([])
        return

      case 'exit':
      case 'quit':
        onClose()
        return

      case '':
        output = null
        break

      default:
        output = (
          <p className="text-xs text-red-400 font-mono">
            Lệnh không hợp lệ: &apos;{trimmed}&apos;. Gõ <span className="text-amber-300 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> để xem các lệnh khả dụng.
          </p>
        )
        break
    }

    setHistory((prev) => [...prev, { command: cmd, output }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() && input !== '') return
    handleCommand(input)
    setInput('')
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-xs"
          />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            className={`relative bg-[#0d1117] text-neutral-200 border border-neutral-700/80 rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col font-mono transition-all duration-200 ${
              isMaximized ? 'w-full h-full max-w-none' : 'w-full max-w-2xl h-[480px]'
            }`}
          >
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#161b22] border-b border-neutral-800 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setHistory([])}
                    className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition-colors"
                    title="Clear console"
                  />
                  <button
                    type="button"
                    onClick={() => setIsMaximized(!isMaximized)}
                    className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500 transition-colors"
                    title="Maximize window"
                  />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-neutral-400 ml-2">
                  <TerminalIcon size={13} className="text-emerald-400" />
                  <span>canh@dev-workspace: ~ (zsh)</span>
                </div>
              </div>

              <div className="flex items-center gap-2 text-neutral-400">
                <button
                  type="button"
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Phóng to"
                >
                  {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-1 hover:text-white transition-colors"
                  aria-label="Đóng"
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Output log */}
            <div className="flex-1 p-4 overflow-y-auto space-y-2 text-xs">
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1">
                  {item.command && (
                    <div className="flex items-center gap-2 text-neutral-400">
                      <span className="text-emerald-400 font-bold">canh@workspace:~$</span>
                      <span className="text-white font-semibold">{item.command}</span>
                    </div>
                  )}
                  {item.output && <div className="pl-4">{item.output}</div>}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Command input prompt */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 py-2.5 bg-[#161b22] border-t border-neutral-800"
            >
              <span className="text-emerald-400 font-bold text-xs select-none">canh@workspace:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Gõ 'help', 'projects' hoặc 'nuoi-toi'..."
                className="flex-1 bg-transparent text-xs text-neutral-100 placeholder-neutral-500 outline-none font-mono"
              />
              <button
                type="submit"
                className="text-neutral-500 hover:text-emerald-400 transition-colors p-1"
                aria-label="Gửi lệnh"
              >
                <CornerDownLeft size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

