export default function QuemSomos() {
  return (
    <section className="manifesto" id="quem-somos" aria-labelledby="quem-somos-title">
      <div className="shell manifesto-inner quem-somos-content">
        <p className="eyebrow">Quem está por trás da Watchcore</p>
        <h2 id="quem-somos-title">
          Tecnologia boa
          <br />
          <span>começa com boas conversas.</span>
        </h2>
        <p className="manifesto-description">
          Somos um estúdio de desenvolvimento web que transforma ideias em
          experiências digitais. Trabalhamos lado a lado com cada cliente para
          criar soluções claras, úteis e preparadas para evoluir.
        </p>
        <div className="manifesto-points" aria-label="Nosso jeito de trabalhar">
          <span>Projetos pensados para pessoas</span>
          <span>Design e tecnologia em parceria</span>
          <span>Clareza em cada etapa</span>
        </div>
      </div>
      <div className="orbit orbit-one" aria-hidden="true" />
      <div className="orbit orbit-two" aria-hidden="true" />
    </section>
  );
}
