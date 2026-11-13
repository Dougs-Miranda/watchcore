import Image from "next/image";
import QuemSomos from "@/src/components/QuemSomos";
import Portfolio from "@/src/components/Portfolio";
import ProcessSection from "@/src/components/ProcessSection";
import FaqSection from "@/src/components/FaqSection";
import ContactSection from "@/src/components/ContactSection";
import ScrollReveal from "@/src/components/ScrollReveal";
import SiteFooter from "@/src/components/SiteFooter";

const services = [
  {
    number: "01",
    icon: "globe",
    title: "Sites institucionais",
    description:
      "Uma presença digital profissional, com a identidade da sua marca e espaço para crescer.",
    tags: ["Design responsivo", "SEO", "Performance"],
  },
  {
    number: "02",
    icon: "target",
    title: "Landing pages",
    description:
      "Páginas objetivas para apresentar uma oferta, lançar uma ideia e transformar visitas em oportunidades.",
    tags: ["Estratégia", "Conversão", "Integrações"],
  },
  {
    number: "03",
    icon: "code",
    title: "Aplicações web",
    description:
      "Produtos e ferramentas digitais sob medida para resolver desafios reais do seu negócio.",
    tags: ["Sistemas", "Dashboards", "Automação"],
  },
];

const heroProofPoints = [
  "Sites rápidos e responsivos",
  "Design sob medida",
  "Do briefing à publicação",
];

export default function Home() {
  return (
    <main>
      <ScrollReveal />
      <header className="site-header">
        <nav className="site-nav shell" aria-label="Navegação principal">
          <a className="brand" href="#inicio" aria-label="Watchcore — início">
            <Image
              className="brand-logo"
              src="/brand/watchcore_logo.png"
              alt="Watchcore"
              width={2160}
              height={720}
              priority
            />
          </a>
          <div className="nav-links">
            <a href="#servicos">Serviços</a>
            <a href="#criacoes">Nossas criações</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#sobre">A Watchcore</a>
          </div>
          <a className="nav-contact" href="#contato">
            Conte sua ideia <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true" />
            Desenvolvimento web, do seu jeito
          </p>
          <h1>
            Sua próxima ideia
            <br className="hero-title-break" />
            merece <span className="hero-title-accent">ir para a web.</span>
          </h1>
          <p className="hero-description">
            Criamos sites e experiências digitais que aproximam sua marca das
            pessoas e ajudam seu negócio a avançar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Conte sua ideia <span aria-hidden="true">↗</span>
            </a>
            <a className="button-text" href="#servicos">
              Explore nossos serviços <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">✳</span>
            Estratégia, design e desenvolvimento em um só lugar.
          </p>
          <ul className="hero-proof-points" aria-label="Diferenciais">
            {heroProofPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="hero-art" aria-label="Ilustração de um projeto web">
          <div className="art-glow" aria-hidden="true" />
          <div className="code-card" aria-hidden="true">
            <div className="code-card-top">
              <span className="code-dots">
                <i />
                <i />
                <i />
              </span>
              <span>ideia.jsx</span>
              <span className="code-card-status">online</span>
            </div>
            <div className="code-lines">
              <p>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span> projeto ={" "}
                <span className="code-yellow">{"{"}</span>
              </p>
              <p>
                <span className="code-muted">02</span>{" "}
                <span className="code-blue">ideia</span>:{" "}
                <span className="code-green">&quot;a sua próxima&quot;</span>,
              </p>
              <p>
                <span className="code-muted">03</span>{" "}
                <span className="code-blue">experiência</span>:{" "}
                <span className="code-green">&quot;feita para pessoas&quot;</span>,
              </p>
              <p>
                <span className="code-muted">04</span>{" "}
                <span className="code-blue">resultado</span>:{" "}
                <span className="code-green">&quot;pronta para crescer&quot;</span>
              </p>
              <p>
                <span className="code-muted">05</span>{" "}
                <span className="code-yellow">{"}"}</span>;
              </p>
              <p className="code-blank">
                <span className="code-muted">06</span>
              </p>
              <p>
                <span className="code-muted">07</span>{" "}
                <span className="code-purple">build</span>(projeto);
                <span className="code-cursor" />
              </p>
            </div>
            <div className="code-card-bottom">
              <span>DESIGN + CÓDIGO</span>
              <span>WEB / 2026</span>
            </div>
          </div>
          <div className="floating-note">
            <span className="floating-note-icon" aria-hidden="true">
              ✳
            </span>
            <span>
              <strong>Feito para você</strong>
              <small>sem fórmula pronta</small>
            </span>
          </div>
        </div>
      </section>

      <section className="services-section section-shell" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2>
              Ideias diferentes.
              <br />
              <span>Web feita sob medida.</span>
            </h2>
          </div>
          <p className="section-intro">
            Da primeira presença online a uma solução digital completa, cada
            projeto começa pelo que faz sentido para você.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <a
              className="service-card"
              href="#contato"
              aria-label={`Converse sobre ${service.title.toLowerCase()}`}
              key={service.number}
            >
              <div className="service-card-top">
                <span className="service-number">{service.number} / 03</span>
                <span className="service-icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.6"
                  >
                    {service.icon === "globe" && (
                      <>
                        <circle cx="12" cy="12" r="9" />
                        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
                      </>
                    )}
                    {service.icon === "target" && (
                      <>
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="1" />
                      </>
                    )}
                    {service.icon === "code" && (
                      <>
                        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
                      </>
                    )}
                  </svg>
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-card-footer">
                <ul className="service-tags" aria-label="Recursos">
                  {service.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <span className="service-link" aria-hidden="true">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Portfolio />

      <ProcessSection />

      <QuemSomos />

      <FaqSection />

      <ContactSection />

      <SiteFooter />
    </main>
  );
}
