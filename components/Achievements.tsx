const items = [
  {
    icon: "🏅",
    title: "Microsoft Certified: Fabric Data Engineer Associate",
    desc: "Microsoft credential validating end-to-end data engineering on Microsoft Fabric.",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/PatelVedkumarHemantbhaiMAQSoftware-6544/47A1C6794DAC8489?sharingId=F2B002F21F6A70C8",
  },
  {
    icon: "🏅",
    title: "Microsoft Certified: Fabric Analytics Engineer Associate",
    desc: "Microsoft credential covering analytics modeling, DAX, and semantic-model design on Microsoft Fabric.",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/PatelVedkumarHemantbhaiMAQSoftware-6544/53AAE269626DBFBD?sharingId=F2B002F21F6A70C8",
  },
  {
    icon: "🏅",
    title: "Microsoft Certified: SQL AI Developer Associate",
    desc: "Microsoft credential validating AI-powered application development on Azure SQL.",
  },
  {
    icon: "🚀",
    title: "Amazon HackOn Semi-Finalist",
    desc: "Qualified for semi-final round in Amazon HackOn Round 3 with All India Rank Top 50 out of 28,000+ teams.",
  },
  {
    icon: "⭐",
    title: "Specialist — Codeforces",
    desc: "Max Rating: 1581 — competitive programming on Codeforces.",
    href: "https://codeforces.com/profile/Ved_Patel",
  },
  {
    icon: "🥇",
    title: "4★ Programmer — CodeChef",
    desc: "Global Rank 67 in CodeChef Starters Round 152 (Div 2).",
    href: "https://www.codechef.com/users/vedpatel1207",
  },
  {
    icon: "📈",
    title: "1000+ Problems Solved",
    desc: "Across Codeforces, CodeChef, LeetCode, CSES, and HackerRank.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
      <div className="section-title">
        <span className="num">04.</span>
        <h2>Achievements</h2>
        <span className="line" />
      </div>
      <p className="text-muted mb-10">Certifications & competitive programming accolades</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => {
          const content = (
            <div className="card h-full flex flex-col">
              <div className="text-3xl mb-3">{it.icon}</div>
              <h3 className="text-white font-semibold mb-2">{it.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{it.desc}</p>
              {it.href && (
                <span className="mt-3 text-accent font-mono text-xs">View →</span>
              )}
            </div>
          );
          return it.href ? (
            <a key={it.title} href={it.href} target="_blank" rel="noopener noreferrer">
              {content}
            </a>
          ) : (
            <div key={it.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
