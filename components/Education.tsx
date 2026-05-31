"use client";

import { useEffect, useRef, useState } from "react";

function CountUp({ end, duration = 1600 }: { end: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now: number) => {
            const t = Math.min((now - startTime) / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setValue(end * eased);
            if (t < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{value.toFixed(2)}</span>;
}

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
      <div className="section-title">
        <span className="num">05.</span>
        <h2>Education</h2>
        <span className="line" />
      </div>
      <p className="text-muted mb-10 text-center">Academic foundation</p>
      <div className="card max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center gap-2">
          <div className="text-5xl mb-2">🎓</div>
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            Bachelor of Technology in Computer Science and Engineering
          </h3>
          <p className="text-accent font-mono text-sm">
            Institute of Technology, Nirma University, Ahmedabad
          </p>
          <p className="text-muted font-mono text-sm">2021 – 2025</p>
          <div className="mt-6 text-5xl md:text-6xl font-extrabold gradient-text leading-none tabular-nums">
            <CountUp end={8.05} />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted mt-2">
            CGPA
          </p>
        </div>
      </div>
    </section>
  );
}
