"use client";

import { useState } from "react";

type Job = {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
};

const jobs: Job[] = [
  {
    company: "MAQ Software",
    role: "Data & AI Engineer 1",
    period: "Jul 2025 — Present",
    location: "Noida, India",
    bullets: [
      "Architected end-to-end Bronze/Silver/Gold medallion architecture on Microsoft Fabric OneLake (Delta/Parquet) with reusable PySpark transformations, schema enforcement, and data quality checks, improving downstream query latency by ~35%.",
      "Built incremental ingestion pipelines using Azure Data Factory and Fabric Pipelines, orchestrating PySpark and Spark SQL notebooks for joins, cleaning, and enrichment across multi-source datasets.",
      "Designed star-schema Power BI semantic models with fact and conformed dimension tables, optimized DAX measures, and RLS over Lakehouse data, improving report responsiveness by ~25% for 1000+ business users.",
      "Implemented CI/CD with Azure DevOps YAML pipelines and Fabric Deployment Pipelines across Dev/UAT/Prod, integrating Azure Key Vault–backed secrets and Managed Identity authentication for governed, secure releases.",
      "Optimized PySpark and Spark SQL workloads through partitioning, broadcast joins, and V-Order on Delta tables, reducing job runtime by ~20–30% on large datasets.",
      "Built a production Data agent on the Microsoft Agent Framework with tool-orchestrated metadata retrieval, few-shot grounding, syntax validation, and DAX execution via an Azure Logic App over Power BI semantic models, raising answer accuracy from ~70% to ~93% through iterative error analysis.",
      "Deployed and secured the Azure Function App with Entra ID App Registration, surfaced it via a Power Automate custom connector integrated into Copilot Studio and Microsoft Teams, and instrumented Application Insights for question, response, generated DAX, retry counts, and end-to-end and per-tool latency.",
    ],
  },
  {
    company: "MAQ Software",
    role: "Associate Software Engineer",
    period: "Dec 2024 — Jun 2025",
    location: "Noida, India",
    bullets: [
      "Delivered end-to-end ETL/ELT workflows in Microsoft Fabric using Dataflows Gen2, Lakehouse tables, and tabular models across 5+ business entities, improving data quality and consistency by ~15–20%.",
      "Engineered PySpark and Python notebooks processing ~10K records/day for translation, sentiment analysis, PII redaction, and classification, producing analytics-ready curated tables on OneLake (Delta format).",
      "Authored Spark SQL transformations for staging, joining, cleaning, and enrichment across curated layers, enforcing referential integrity and row-level validation rules.",
      "Automated scheduled pipelines with monitoring, retry logic, and email alerting, reducing manual intervention by ~90% and cutting failure detection time by ~50–60%.",
      "Implemented role-based access (RLS) and workspace-level governance in Power BI and Fabric for secure, audited access to sensitive datasets.",
      "Collaborated on Git-based development workflows in Azure DevOps using branching, pull requests, and code reviews.",
    ],
  },
];

export default function Experience() {
  const [active, setActive] = useState(0);
  const job = jobs[active];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 lg:px-10 py-24">
      <div className="section-title">
        <span className="num">02.</span>
        <h2>Experience</h2>
        <span className="line" />
      </div>
      <div className="grid md:grid-cols-[240px_1fr] gap-8">
        <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-l border-border">
          {jobs.map((j, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-left px-4 py-3 whitespace-nowrap md:whitespace-normal border-l-2 -ml-px transition-colors ${
                i === active
                  ? "text-white border-accent bg-accent/5"
                  : "text-muted border-transparent hover:text-white hover:bg-accent/5"
              }`}
            >
              <div className="font-semibold text-sm">{j.role}</div>
              <div className="font-mono text-[11px] text-muted mt-0.5">
                {j.period.split(" — ")[0]}
              </div>
            </button>
          ))}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-white">
            {job.role}{" "}
            <span className="text-accent">@ {job.company}</span>
          </h3>
          <p className="font-mono text-sm text-muted mt-1">
            {job.period} · {job.location}
          </p>
          <ul className="mt-6 space-y-3">
            {job.bullets.map((b, i) => (
              <li key={i} className="flex gap-3 text-muted leading-relaxed">
                <span className="text-accent shrink-0">▹</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
