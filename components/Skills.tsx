const groups = [
  {
    title: "Languages",
    items: ["Python", "SQL", "PySpark", "DAX"],
  },
  {
    title: "Azure Platforms",
    items: [
      "Microsoft Fabric",
      "Azure Data Factory",
      "Azure Synapse Analytics",
      "Azure Functions",
      "Azure Logic Apps",
      "Azure OpenAI",
      "Application Insights",
      "Microsoft Entra ID",
      "Azure Key Vault",
      "Azure DevOps",
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "Apache Spark",
      "Delta Lake",
      "Microsoft Agent Framework",
      "Azure AI Search",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Tools",
    items: ["Power BI", "Power Automate", "Copilot Studio", "Tabular Editor", "Git"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
      <div className="section-title">
        <span className="num">03.</span>
        <h2>Technical Skills</h2>
        <span className="line" />
      </div>
      <p className="text-muted mb-10">Technologies and tools I work with</p>
      <div className="grid md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.title} className="card">
            <h3 className="font-mono text-accent text-sm uppercase tracking-wider mb-4">
              {g.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
