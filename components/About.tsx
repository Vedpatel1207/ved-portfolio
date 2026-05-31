export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
      <div className="section-title">
        <span className="num">01.</span>
        <h2>About Me</h2>
        <span className="line" />
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4 text-muted leading-relaxed">
          <p>
            I'm a <span className="text-white">Data Engineer</span> at{" "}
            <span className="text-accent">MAQ Software</span> with 1.5+ years of experience
            designing and operating production data platforms on{" "}
            <span className="text-white">Microsoft Fabric, Azure Data Factory, and Azure Synapse</span>.
          </p>
          <p>
            I love turning messy multi-source data into clean, governed,
            analytics-ready Lakehouse layers — using PySpark and Spark SQL transformations,
            star-schema semantic models, and CI/CD with Azure DevOps backed by Key Vault and
            Managed Identity.
          </p>
          <p>
            Outside of work I solve algorithm problems competitively — Specialist on Codeforces,
            4-star on CodeChef, and AIR Top 50 in Amazon HackOn out of 28,000+ teams.
          </p>

          {/* Stat row */}
          <div className="!mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { v: "2", l: "MS Certifications" },
              { v: "1000+", l: "DSA Problems" },
              { v: "4★", l: "CodeChef" },
              { v: "1581", l: "Codeforces" },
            ].map((s) => (
              <div
                key={s.l}
                className="card !p-4 text-center"
              >
                <div className="text-2xl font-extrabold gradient-text">{s.v}</div>
                <div className="text-[11px] font-mono text-muted mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="!mt-6 flex flex-wrap gap-2" />
        </div>
        <div className="card">
          <h3 className="text-white font-semibold mb-3">Currently working with</h3>
          <ul className="space-y-2 font-mono text-sm text-muted">
            <li>▹ Microsoft Fabric (Lakehouse, OneLake)</li>
            <li>▹ Azure Data Factory</li>
            <li>▹ Azure Synapse Analytics</li>
            <li>▹ PySpark & Spark SQL</li>
            <li>▹ Power BI Semantic Models</li>
            <li>▹ Azure DevOps CI/CD</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
