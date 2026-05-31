export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
      <div className="max-w-3xl mx-auto text-center">
      <div className="section-title justify-center">
        <span className="num">06.</span>
        <h2>Get In Touch</h2>
      </div>
      <p className="text-muted leading-relaxed mb-8">
        I'm always open to discussing new opportunities, interesting data projects, or just having
        a great conversation about Azure, Microsoft Fabric, or competitive programming.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 mb-3">
        <a href="mailto:vedpatel41207@gmail.com" className="btn-outline">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          vedpatel41207@gmail.com
        </a>
        <a href="tel:+919173041207" className="btn-outline">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          +91-9173041207
        </a>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/Vedpatel1207"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.92.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.9-.39.99 0 1.98.13 2.9.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.27 5.69.41.36.78 1.07.78 2.17v3.22c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/patel-ved-753413229/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.86 3.38-1.86 3.61 0 4.28 2.38 4.28 5.47v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
          </svg>
          LinkedIn
        </a>
      </div>
      </div>
      <footer className="mt-20 pt-8 border-t border-border text-center text-xs font-mono text-muted">
        © {new Date().getFullYear()} Ved Patel · Built with Next.js · Tailwind CSS
      </footer>
    </section>
  );
}
