"use client";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20"
    >
      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full">
        {/* LEFT: Text */}
        <div className="lg:col-span-3 animate-fadeUp">
          <p className="font-mono text-sm text-accent2 mb-5 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-accent2" />
            Hello, I'm
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95]">
            <span className="gradient-text">Ved</span>
            <br />
            <span className="text-white">Patel.</span>
          </h1>
          <h2 className="mt-6 text-2xl md:text-3xl font-semibold text-muted tracking-tight">
            Azure Data Engineer
          </h2>
          <p className="mt-6 max-w-xl text-muted leading-relaxed text-base md:text-lg">
            Building production-grade data platforms on Microsoft Fabric,
            Azure Data Factory, and PySpark — designing medallion Lakehouse
            architectures, performant pipelines, and star-schema Power BI
            semantic models that serve 1000+ users.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://github.com/Vedpatel1207"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
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
            <a href="#contact" className="btn-outline">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M4 4l8 8 8-8" />
              </svg>
              Contact
            </a>
          </div>
        </div>

        {/* RIGHT: Profile avatar with floating badges */}
        <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fadeUp">
          <div className="relative w-72 h-72 md:w-80 md:h-80">
            {/* Glow ring */}
            <div className="absolute -inset-6 rounded-full bg-brand-gradient opacity-30 blur-2xl animate-float pointer-events-none" />
            {/* Avatar */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/40 shadow-glow bg-brand-soft">
              {/* Initials fallback shown beneath the image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl md:text-9xl font-extrabold gradient-text font-sans select-none">
                  VP
                </span>
              </div>
              {/* Real photo (drop /public/profile.jpg) — hides itself if missing, exposing the fallback */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/profile.jpg"
                alt="Ved Patel"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Floating badge — top right */}
            <div
              className="float-badge animate-float"
              style={{ top: "8px", right: "-12px", animationDelay: "0.5s" }}
            >
              <span className="text-lg">🏆</span>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xs font-bold">MS Certified</span>
                <span className="text-muted text-[10px] font-normal">Fabric DE</span>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div
              className="float-badge animate-float"
              style={{ bottom: "32px", left: "-20px", animationDelay: "1s" }}
            >
              <span className="text-lg">⭐</span>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xs font-bold">Specialist</span>
                <span className="text-muted text-[10px] font-normal">@Codeforces</span>
              </div>
            </div>

            {/* Floating badge — middle right */}
            <div
              className="float-badge animate-float"
              style={{ bottom: "80px", right: "-24px", animationDelay: "1.5s" }}
            >
              <span className="text-lg">🥇</span>
              <div className="flex flex-col leading-tight">
                <span className="text-white text-xs font-bold">HackOn Top 50</span>
                <span className="text-muted text-[10px] font-normal">/ 28K teams</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
