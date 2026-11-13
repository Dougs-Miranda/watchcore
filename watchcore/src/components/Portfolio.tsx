"use client";

import { useEffect, useRef, useState } from "react";

type Project = {
  number: string;
  category: string;
  name: string;
  summary: string;
  brand: string;
  headline: string;
  description: string;
  action: string;
  theme: "interiors" | "analytics" | "organic" | "energy";
  liveUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",
    category: "Landing page",
    name: "Brix Energia",
    summary: "Landing page da BESA Energia Compartilhada.",
    brand: "BESA",
    headline: "Economize na sua conta de luz.",
    description:
      "Energia compartilhada, sem instalação, direto para a sua casa.",
    action: "Simule sua economia",
    theme: "energy",
    liveUrl: "https://www.brixenergia.com.br/",
  },
  {
    number: "02",
    category: "Dashboard web",
    name: "Pulse Analytics",
    summary: "Um painel claro para transformar dados em decisões.",
    brand: "pulse",
    headline: "Seus dados. Em perspectiva.",
    description:
      "Acompanhe o que importa e encontre o próximo passo com confiança.",
    action: "Explorar plataforma",
    theme: "analytics",
  },
  {
    number: "03",
    category: "Landing page",
    name: "Terra & Grão",
    summary: "Uma página de marca para uma nova forma de consumir.",
    brand: "terra & grão",
    headline: "Mais perto da origem.",
    description:
      "Produtos honestos, cultivados com cuidado e feitos para compartilhar.",
    action: "Descubra a marca",
    theme: "organic",
  },
];

function ProjectPreview({ project }: { project: Project }) {
  return (
    <div className={`preview-canvas preview-canvas-${project.theme}`}>
      <div className="preview-site-nav">
        <span className="preview-wordmark">{project.brand}</span>
        <div className="preview-nav-items" aria-hidden="true">
          <span>Sobre</span>
          <span>Projetos</span>
          <span>Contato</span>
        </div>
        <span className="preview-menu-mark" aria-hidden="true">
          ↗
        </span>
      </div>
      <div className="preview-site-content">
        <div className="preview-site-copy">
          <p className="preview-kicker">{project.category}</p>
          <h3>{project.headline}</h3>
          <p className="preview-description">{project.description}</p>
          <span className="preview-site-action">
            {project.action} <span aria-hidden="true">↗</span>
          </span>
        </div>
        <div className="preview-art" aria-hidden="true">
          {project.theme === "interiors" && (
            <div className="interiors-art">
              <span className="interiors-sun" />
              <span className="interiors-arch" />
              <span className="interiors-chair" />
              <span className="interiors-caption">01 — luz & matéria</span>
            </div>
          )}
          {project.theme === "analytics" && (
            <div className="analytics-art">
              <div className="analytics-stat">
                <small>Receita recorrente</small>
                <strong>R$ 48.290</strong>
                <span>↗ 12,8% este mês</span>
              </div>
              <div className="analytics-chart">
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="analytics-art-footer">
                <span>Jan</span>
                <span>Fev</span>
                <span>Mar</span>
                <span>Abr</span>
              </div>
            </div>
          )}
          {project.theme === "organic" && (
            <div className="organic-art">
              <span className="organic-orbit organic-orbit-one" />
              <span className="organic-orbit organic-orbit-two" />
              <span className="organic-stem" />
              <span className="organic-leaf organic-leaf-one" />
              <span className="organic-leaf organic-leaf-two" />
              <span className="organic-seal">DA TERRA<br />PRA MESA</span>
            </div>
          )}
          {project.theme === "energy" && (
            <div className="energy-art">
              <span className="energy-sun" />
              <span className="energy-ray energy-ray-one" />
              <span className="energy-ray energy-ray-two" />
              <span className="energy-horizon" />
              <span className="energy-panel">
                <i />
                <i />
                <i />
              </span>
              <span className="energy-home">
                <i />
              </span>
              <span className="energy-label">ENERGIA COMPARTILHADA</span>
            </div>
          )}
        </div>
      </div>
      <div className="preview-site-footer">
        <span>
          {project.liveUrl ? "SITE PUBLICADO" : "CONCEITO DEMONSTRATIVO"}
        </span>
        <span>DESIGN + DESENVOLVIMENTO</span>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (activeProject && dialog && !dialog.open) {
      dialog.showModal();
    }
  }, [activeProject]);

  return (
    <section className="portfolio-section section-shell" id="criacoes">
      <div className="portfolio-heading">
        <div>
          <p className="eyebrow">Uma ideia de cada vez</p>
          <h2>
            Nossas <span>criações.</span>
          </h2>
        </div>
        <p>
          Explore um projeto publicado e conceitos demonstrativos de diferentes
          experiências para a web.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <button
            className="portfolio-card"
            key={project.number}
            type="button"
            onClick={() => setActiveProject(project)}
            aria-haspopup="dialog"
            aria-label={`${project.liveUrl ? "Abrir site publicado" : "Abrir prévia demonstrativa"}: ${project.name}`}
          >
            <div className="portfolio-card-preview">
              {project.liveUrl ? (
                <div className="portfolio-card-live-preview" aria-hidden="true">
                  <iframe
                    className="portfolio-card-live-frame"
                    src={project.liveUrl}
                    title={`Início do site publicado ${project.name}`}
                    loading="lazy"
                    tabIndex={-1}
                  />
                </div>
              ) : (
                <ProjectPreview project={project} />
              )}
              <span className="portfolio-open">
                Ver prévia <span aria-hidden="true">↗</span>
              </span>
            </div>
            <div className="portfolio-card-info">
              <div>
                <span className="portfolio-category">{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
              </div>
              <span className="portfolio-card-number">{project.number}</span>
            </div>
          </button>
        ))}
      </div>
      <p className="portfolio-disclaimer">
        Brix Energia abre o site publicado. Os demais cards são conceitos
        demonstrativos.
      </p>

      {activeProject && (
        <dialog
          className="portfolio-dialog"
          ref={dialogRef}
          aria-labelledby="portfolio-dialog-title"
          onClose={() => setActiveProject(null)}
          onClick={(event) => {
            if (event.target === dialogRef.current) {
              dialogRef.current.close();
            }
          }}
        >
          <div className="portfolio-dialog-header">
            <div>
              <span className="portfolio-category">
                {activeProject.category} ·{" "}
                {activeProject.liveUrl
                  ? "Site publicado"
                  : "Conceito demonstrativo"}
              </span>
              <h2 id="portfolio-dialog-title">{activeProject.name}</h2>
            </div>
            <button
              className="portfolio-dialog-close"
              type="button"
              aria-label="Fechar prévia"
              onClick={() => dialogRef.current?.close()}
            >
              ×
            </button>
          </div>
          <div className="portfolio-dialog-preview">
            {activeProject.liveUrl ? (
              <div className="published-site-preview">
                <div className="published-site-toolbar">
                  <span className="published-site-dots" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>www.brixenergia.com.br</span>
                  <span className="published-site-indicator">
                    <i /> publicado
                  </span>
                </div>
                <div className="published-site-viewport">
                  <iframe
                    className="published-site-frame"
                    src={activeProject.liveUrl}
                    title={`Prévia ao vivo do site ${activeProject.name}`}
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            ) : (
              <ProjectPreview project={activeProject} />
            )}
          </div>
          <div className="portfolio-dialog-footer">
            <p>
              {activeProject.liveUrl
                ? "Esta prévia carrega o site publicado. Abra a página completa para navegar por todas as seções."
                : "Gostou dessa direção? Vamos conversar sobre uma experiência pensada para o seu negócio."}
            </p>
            {activeProject.liveUrl ? (
              <a
                className="button button-primary"
                href={activeProject.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Abrir site completo <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <a
                className="button button-primary"
                href="https://wa.me/5511958841805?text=Oi%2C%20vi%20as%20pr%C3%A9vias%20do%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
              >
                Quero um projeto assim <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </dialog>
      )}
    </section>
  );
}
