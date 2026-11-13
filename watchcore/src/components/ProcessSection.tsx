"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Entendemos",
    description:
      "Conversamos sobre seus objetivos, seu público e o que o projeto precisa entregar.",
    receives: "Resumo do projeto",
    timeframe: "1 dia",
  },
  {
    number: "02",
    title: "Planejamos",
    description:
      "Definimos escopo, estrutura e direção visual antes de começar a construir.",
    receives: "Escopo e referência visual",
    timeframe: "2 a 3 dias",
  },
  {
    number: "03",
    title: "Desenvolvemos",
    description:
      "Transformamos o plano em uma experiência rápida, acessível e pronta para diferentes telas.",
    receives: "Acesso a uma versão de teste",
    timeframe: "Conforme o escopo",
  },
  {
    number: "04",
    title: "Publicamos",
    description:
      "Revisamos cada detalhe e colocamos seu projeto no ar, com tudo pronto para seguir evoluindo.",
    receives: "Site no ar e orientações",
    timeframe: "1 dia",
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  useEffect(() => {
    const observedSteps = stepRefs.current.filter(
      (step): step is HTMLLIElement => step !== null,
    );

    if (!("IntersectionObserver" in window) || observedSteps.length === 0) {
      return;
    }

    const visibility = new Map<Element, number>();
    let observer: IntersectionObserver | null = null;
    const observeSteps = () => {
      observer?.disconnect();
      visibility.clear();
      observedSteps.forEach((step) => visibility.set(step, 0));

      const centerInset = Math.max(0, Math.floor(window.innerHeight / 2) - 1);
      const nextObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            visibility.set(entry.target, entry.intersectionRatio);
          });

          const mostVisible = observedSteps.reduce((bestStep, step) =>
            (visibility.get(step) ?? 0) > (visibility.get(bestStep) ?? 0)
              ? step
              : bestStep,
          );
          const visibleRatio = visibility.get(mostVisible) ?? 0;

          if (visibleRatio > 0) {
            setActiveStep(observedSteps.indexOf(mostVisible));
          }
        },
        {
          rootMargin: `-${centerInset}px 0px -${centerInset}px 0px`,
          threshold: [0, 0.01, 0.05, 0.1],
        },
      );
      observer = nextObserver;

      observedSteps.forEach((step) => nextObserver.observe(step));
    };

    observeSteps();
    window.addEventListener("resize", observeSteps);

    return () => {
      window.removeEventListener("resize", observeSteps);
      observer?.disconnect();
    };
  }, []);

  return (
    <section className="approach-section" id="processo">
      <div className="section-shell approach-inner">
        <div className="approach-copy">
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
          </div>
          <a className="button button-primary approach-cta" href="#contato">
            Conte sua ideia <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ol className="steps-list" aria-label="Etapas do processo">
          {steps.map((step, index) => (
            <li
              className={`step-card${activeStep === index ? " is-active" : ""}`}
              key={step.number}
              ref={(element) => {
                stepRefs.current[index] = element;
              }}
              aria-current={activeStep === index ? "step" : undefined}
            >
              <span className="step-number">{step.number}</span>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p className="step-description">{step.description}</p>
                <div className="step-details">
                  <p>
                    <span>Você recebe:</span> {step.receives}
                  </p>
                  <p>
                    <span>Prazo:</span> {step.timeframe}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
