"use client";

import { useEffect, useRef, useState } from "react";
import { WHATSAPP_URL } from "@/src/lib/contactConfig";

const EMAIL_ADDRESS = "contato@watchcore.com.br";
const CONTACT_CONTENT = {
  eyebrow: "O próximo passo é uma conversa",
  title: "Tem uma ideia",
  titleAccent: "na cabeça?",
  description:
    "Vamos entender o que você precisa e pensar juntos em como tirar seu projeto do papel.",
  supportTitle: "O que contar na primeira mensagem",
  whatsappLabel: "Conte sua ideia no WhatsApp",
};
const FIRST_MESSAGE_PROMPTS = [
  "O que você quer criar",
  "Prazo desejado",
  "Referências ou sites de que gosta",
];
const RESPONSE_TIME = "Respondemos em até [PRAZO A DEFINIR].";

export default function ContactSection() {
  const [copyFeedback, setCopyFeedback] = useState("");
  const feedbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (feedbackTimeout.current) clearTimeout(feedbackTimeout.current);
    },
    [],
  );

  const handleCopyEmail = async () => {
    let copied = false;

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(EMAIL_ADDRESS);
        copied = true;
      } catch {
        copied = copyEmailWithFallback();
      }
    } else {
      copied = copyEmailWithFallback();
    }

    setCopyFeedback(
      copied
        ? "Copiado!"
        : "Não foi possível copiar. Selecione e copie o endereço.",
    );
    if (feedbackTimeout.current) clearTimeout(feedbackTimeout.current);
    feedbackTimeout.current = setTimeout(() => setCopyFeedback(""), 2200);
  };

  return (
    <section className="contact-section section-shell" id="contato">
      <div className="contact-orbit contact-orbit-one" aria-hidden="true" />
      <div className="contact-orbit contact-orbit-two" aria-hidden="true" />
      <div className="contact-content">
        <p className="eyebrow">{CONTACT_CONTENT.eyebrow}</p>
        <h2>
          {CONTACT_CONTENT.title}
          <br />
          <span>{CONTACT_CONTENT.titleAccent}</span>
        </h2>
        <p className="contact-description">{CONTACT_CONTENT.description}</p>
        <div className="contact-actions">
          <a
            className="button button-primary contact-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {CONTACT_CONTENT.whatsappLabel} <span aria-hidden="true">↗</span>
          </a>
          <div className="contact-email-group">
            <a className="contact-email" href={`mailto:${EMAIL_ADDRESS}`}>
              {EMAIL_ADDRESS}
            </a>
            <button
              className="contact-copy"
              type="button"
              onClick={handleCopyEmail}
              aria-label={`Copiar ${EMAIL_ADDRESS}`}
            >
              Copiar
            </button>
            <span className="contact-copy-feedback" aria-live="polite">
              {copyFeedback}
            </span>
          </div>
        </div>
      </div>

      <aside className="contact-support" aria-labelledby="contact-support-title">
        <h3 id="contact-support-title">{CONTACT_CONTENT.supportTitle}</h3>
        <ul>
          {FIRST_MESSAGE_PROMPTS.map((prompt) => (
            <li key={prompt}>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
              >
                <path d="m4 10 4 4 8-8" />
              </svg>
              <span>{prompt}</span>
            </li>
          ))}
        </ul>
        <p className="contact-response-time">{RESPONSE_TIME}</p>
      </aside>
    </section>
  );
}

function copyEmailWithFallback() {
  const textarea = document.createElement("textarea");
  textarea.value = EMAIL_ADDRESS;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
  }
}
