import React, { useState } from 'react';

function ResumeModal({ isOpen, onClose, resumeLink }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Convert view link to preview link for iframe embedding
  const previewLink = resumeLink.replace('/view?usp=drive_link', '/preview');

  const handleCopy = () => {
    navigator.clipboard.writeText(resumeLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/85 backdrop-blur-2xl animate-fadeIn">
      <div className="glass w-full max-w-5xl h-[88vh] md:h-[90vh] rounded-[2rem] border border-primary/30 flex flex-col overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl bg-black/90 relative">
        {/* Background Glow Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        {/* Modal Header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 border-b border-white/10 flex items-center justify-between bg-white/[0.03] backdrop-blur-2xl gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl sm:rounded-2xl bg-primary/15 border border-primary/30 text-primary flex items-center justify-center text-base font-bold shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <i className="fa-solid fa-file-pdf"></i>
            </div>
            <div className="min-w-0 text-left">
              <div className="flex items-center gap-2">
                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-tight truncate">
                  Yuvraj Singh — Resume
                </h3>
                <span className="hidden sm:inline-block text-[9px] text-purple-300 font-bold bg-primary/10 border border-primary/20 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Verified PDF
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 truncate font-light">Full-Stack & AI Software Engineer</p>
            </div>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl text-xs font-bold bg-white/[0.04] border border-white/10 text-gray-300 hover:text-white hover:border-primary/40 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-link text-[10px] text-primary"></i>
              <span className="hidden xs:inline">{copied ? 'Link Copied! ✓' : 'Share Link'}</span>
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer text-xs py-1.5 px-3.5 sm:px-4 rounded-xl font-black bg-primary hover:bg-purple-600 text-black uppercase tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
            >
              <span>Download</span>
              <i className="fa-solid fa-download text-[10px]"></i>
            </a>
            <button
              onClick={onClose}
              className="w-8 sm:w-9 h-8 sm:h-9 rounded-xl bg-white/[0.04] border border-white/10 text-gray-400 hover:text-white hover:border-red-500/50 hover:bg-red-500/10 flex items-center justify-center transition-all text-sm shrink-0 ml-1"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="flex-1 bg-black relative">
          <iframe
            src={previewLink}
            title="Yuvraj Singh Resume"
            className="w-full h-full border-0"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
