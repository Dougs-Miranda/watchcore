const aboutDescription =
  "Somos um estúdio de desenvolvimento web que transforma ideias em experiências digitais. Trabalhamos lado a lado com cada cliente para criar soluções claras, úteis e preparadas para evoluir.";

const mockupServices = ["Design", "Código", "Web"];

const values = [
  "Projetos pensados para pessoas",
  "Design e tecnologia em parceria",
  "Clareza em cada etapa",
];

export default function QuemSomos() {
  return (
    <section className="manifesto" id="sobre" aria-labelledby="quem-somos-title">
      <div className="shell manifesto-inner">
        <div className="quem-somos-copy">
          <p className="eyebrow">Quem está por trás da Watchcore</p>
          <h2 id="quem-somos-title">
            Tecnologia boa
            <br />
            <span>começa com boas conversas.</span>
          </h2>
          <p className="manifesto-description">{aboutDescription}</p>
          <a className="button button-primary manifesto-cta" href="#contato">
            Conte sua ideia <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="web-mockup" aria-hidden="true">
          <div className="mockup-toolbar">
            <div className="mockup-window-dots">
              <i />
              <i />
              <i />
            </div>
            <span className="mockup-address">seu-projeto.com</span>
            <span className="mockup-menu-mark">•••</span>
          </div>
          <div className="mockup-page">
            <div className="mockup-page-nav">
              <span className="mockup-wordmark">sua marca</span>
              <span className="mockup-nav-links">sobre&nbsp;&nbsp; serviços&nbsp;&nbsp; contato</span>
              <span className="mockup-nav-button">Vamos conversar</span>
            </div>
            <div className="mockup-page-content">
              <div className="mockup-copy">
                <span className="mockup-kicker">UMA NOVA EXPERIÊNCIA</span>
                <h3>
                  Sua marca,
                  <br />
                  pronta para crescer.
                </h3>
                <p>
                  Um espaço digital feito para apresentar o que torna seu
                  negócio único.
                </p>
                <span className="mockup-action">Conheça o projeto&nbsp; ↗</span>
              </div>
              <div className="mockup-art">
                <span className="mockup-art-orbit" />
                <span className="mockup-art-card">
                  <i />
                  <i />
                  <i />
                  <b />
                </span>
                <span className="mockup-art-accent" />
              </div>
            </div>
            <div className="mockup-page-footer">
              {mockupServices.map((service) => (
                <span key={service}>{service}</span>
              ))}
            </div>
          </div>
        </div>

        <ul className="manifesto-points" aria-label="Nosso jeito de trabalhar">
          {values.map((value) => (
            <li key={value}>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m4 10 4 4 8-8" />
              </svg>
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
    </section>
  );
}
