import Image from "next/image";
import QuemSomos from "@/src/components/QuemSomos";
import Portfolio from "@/src/components/Portfolio";

const services = [
  {
    number: "01",
    symbol: "↗",
    title: "Sites institucionais",
    description:
      "Uma presença digital profissional, com a identidade da sua marca e espaço para crescer.",
    tags: ["Design responsivo", "SEO", "Performance"],
  },
  {
    number: "02",
    symbol: "◎",
    title: "Landing pages",
    description:
      "Páginas objetivas para apresentar uma oferta, lançar uma ideia e transformar visitas em oportunidades.",
    tags: ["Estratégia", "Conversão", "Integrações"],
  },
  {
    number: "03",
    symbol: "⌘",
    title: "Aplicações web",
    description:
      "Produtos e ferramentas digitais sob medida para resolver desafios reais do seu negócio.",
    tags: ["Sistemas", "Dashboards", "Automação"],
  },
];

const steps = [
  {
    number: "01",
    title: "Entendemos",
    description:
      "Conversamos sobre seus objetivos, seu público e o que o projeto precisa entregar.",
  },
  {
    number: "02",
    title: "Planejamos",
    description:
      "Definimos escopo, estrutura e direção visual antes de começar a construir.",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    description:
      "Transformamos o plano em uma experiência rápida, acessível e pronta para diferentes telas.",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Revisamos cada detalhe e colocamos seu projeto no ar, com tudo pronto para seguir evoluindo.",
  },
];

const faqs = [
  {
    question: "Que tipo de projeto a Watchcore desenvolve?",
    answer:
      "Criamos sites institucionais, landing pages e aplicações web sob medida. O formato ideal depende dos objetivos e das necessidades do seu negócio.",
  },
  {
    question: "Como começa um projeto?",
    answer:
      "Começamos com uma conversa para entender sua ideia, seu momento e o resultado que você espera. A partir disso, definimos escopo, etapas e próximos passos.",
  },
  {
    question: "Vocês atendem projetos de qualquer tamanho?",
    answer:
      "Sim. Avaliamos cada necessidade e sugerimos um caminho compatível com o escopo do projeto, da primeira página a uma solução web mais completa.",
  },
];

const whatsappUrl =
  "https://wa.me/5511958841805?text=Oi%2C%20quero%20conversar%20sobre%20um%20projeto%20web.";

export default function Home() {
  return (
    <main>
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
            <a href="#portfolio">Nossas criações</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#quem-somos">A Watchcore</a>
          </div>
          <a className="nav-contact" href="#contato">
            Vamos conversar <span aria-hidden="true">↗</span>
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
            <br />
            merece <span>ir para a web.</span>
          </h1>
          <p className="hero-description">
            Criamos sites e experiências digitais que aproximam sua marca das
            pessoas e ajudam seu negócio a avançar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contato">
              Conte pra gente sua ideia <span aria-hidden="true">↗</span>
            </a>
            <a className="button-text" href="#servicos">
              Explore nossos serviços <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="hero-note">
            <span aria-hidden="true">✳</span> Estratégia, design e
            desenvolvimento em um só lugar.
          </p>
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
              <span className="code-card-status">em construção</span>
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
          <span className="art-index">W / 01</span>
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
            <article className="service-card" key={service.number}>
              <div className="service-card-top">
                <span className="service-number">{service.number} / 03</span>
                <span className="service-symbol" aria-hidden="true">
                  {service.symbol}
                </span>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-tags" aria-label="Recursos">
                {service.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="service-link"
                href="#contato"
                aria-label={`Converse sobre ${service.title.toLowerCase()}`}
              >
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <Portfolio />

      <section className="approach-section" id="processo">
        <div className="section-shell approach-inner">
          <div className="approach-heading">
            <p className="eyebrow">Um processo sem mistério</p>
            <h2>
              Da conversa
              <br />
              <span>ao projeto no ar.</span>
            </h2>
            <p>
              Você acompanha cada etapa. A gente cuida para que cada decisão
              tenha um propósito.
            </p>
            <a className="button button-outline" href="#contato">
              Começar uma conversa <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="steps-list">
            {steps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <span className="step-arrow" aria-hidden="true">
                  ↗
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <QuemSomos />

      <section className="faq-section section-shell" id="faq">
        <div className="faq-heading">
          <p className="eyebrow">Perguntas frequentes</p>
          <h2>
            Antes de começar,
            <br />
            <span>vale saber.</span>
          </h2>
          <p>
            Se sua dúvida não estiver aqui, fale com a gente. Estamos por perto
            para ajudar.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details className="faq-item" key={faq.question}>
              <summary>
                <span className="faq-index">0{index + 1}</span>
                <span>{faq.question}</span>
                <span className="faq-toggle" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact-section section-shell" id="contato">
        <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
        <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
        <div className="contact-content">
          <p className="eyebrow">O próximo passo é uma conversa</p>
          <h2>
            Tem uma ideia
            <br />
            <span>na cabeça?</span>
          </h2>
          <p>
            Vamos entender o que você precisa e pensar juntos em como tirar seu
            projeto do papel.
          </p>
          <div className="contact-actions">
            <a
              className="button button-primary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp <span aria-hidden="true">↗</span>
            </a>
            <a className="contact-email" href="mailto:contato@watchcore.com.br">
              contato@watchcore.com.br
            </a>
          </div>
        </div>
        <span className="contact-coordinate" aria-hidden="true">
          W/CORE — WEB STUDIO
        </span>
      </section>

      <footer className="site-footer">
        <div className="section-shell footer-main">
          <div className="footer-brand">
            <a className="brand" href="#inicio" aria-label="Watchcore — início">
              <Image
                className="brand-logo"
                src="/brand/watchcore_logo.png"
                alt="Watchcore"
                width={2160}
                height={720}
              />
            </a>
            <p>Ideias que encontram seu lugar na web.</p>
          </div>
          <div className="footer-column">
            <span className="footer-label">Explore</span>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#quem-somos">A Watchcore</a>
          </div>
          <div className="footer-column">
            <span className="footer-label">Contato</span>
            <a href="mailto:contato@watchcore.com.br">
              contato@watchcore.com.br
            </a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
        <div className="section-shell footer-bottom">
          <span>© {new Date().getFullYear()} Watchcore</span>
          <a href="#inicio">De volta ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}
