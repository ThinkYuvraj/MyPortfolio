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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/85 backdrop-blur-xl animate-fadeIn">
      <div className="glass-panel w-full max-w-4xl h-[85vh] rounded-3xl border border-white/15 flex flex-col overflow-hidden shadow-2xl">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/50 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-300 flex items-center justify-center text-sm font-bold">
              <i className="fa-solid fa-file-pdf"></i>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white tracking-tight">Yuvraj Singh — Resume</h3>
              <p className="text-[10px] text-gray-400">Full-Stack & AI Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/40 transition-all flex items-center gap-1.5"
            >
              <i className="fa-solid fa-link text-[10px]"></i>
              {copied ? 'Link Copied!' : 'Share Link'}
            </button>
            <a
              href={resumeLink}
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-xs py-1.5 px-3.5 rounded-lg font-bold flex items-center gap-1.5 shadow-md"
            >
              <span>Download</span>
              <i className="fa-solid fa-download text-[10px]"></i>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/40 flex items-center justify-center transition-all text-sm"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        {/* Modal PDF Viewer Body */}
        <div className="flex-1 bg-neutral-950 relative">
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
