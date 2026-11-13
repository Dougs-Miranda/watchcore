"use client";

import { useState } from "react";

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
  {
    question: "Quanto custa um projeto e como funciona o orçamento?",
    answer: "[RESPOSTA A DEFINIR]",
  },
  {
    question: "Qual é o prazo médio de entrega?",
    answer: "[RESPOSTA A DEFINIR]",
  },
  {
    question: "Hospedagem e domínio estão incluídos?",
    answer: "[RESPOSTA A DEFINIR]",
  },
  {
    question: "Vocês oferecem suporte e manutenção após a publicação?",
    answer: "[RESPOSTA A DEFINIR]",
  },
  {
    question: "O que preciso enviar para começar?",
    answer: "[RESPOSTA A DEFINIR]",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="faq-section section-shell" id="faq">
      <div className="faq-copy">
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
        <a className="button button-primary faq-cta" href="#contato">
          Conte sua ideia <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const questionId = `faq-question-${index + 1}`;
          const answerId = `faq-answer-${index + 1}`;

          return (
            <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
              <h3 className="faq-item-heading">
                <button
                  className="faq-trigger"
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="faq-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">
                    +
                  </span>
                </button>
              </h3>
              <div
                className={`faq-panel${isOpen ? " is-open" : ""}`}
                id={answerId}
                role="region"
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
                inert={!isOpen}
              >
                <div className="faq-panel-inner">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
