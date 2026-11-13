import Image from "next/image";
import FooterBackToTop from "@/src/components/FooterBackToTop";
import { WHATSAPP_URL } from "@/src/lib/contactConfig";

const BRAND_DESCRIPTION = "Ideias que encontram seu lugar na web.";
const EMAIL_ADDRESS = "contato@watchcore.com.br";
const COMPANY_LEGAL_NAME = "";
const COMPANY_TAX_ID = "";
const PRIVACY_POLICY_URL = "";

const EXPLORE_LINKS = [
  { label: "Serviços", href: "#servicos" },
  { label: "Nossas criações", href: "#criacoes" },
  { label: "Como trabalhamos", href: "#processo" },
  { label: "A WatchCore", href: "#sobre" },
  { label: "Perguntas frequentes", href: "#faq" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", url: "", icon: "instagram" },
  { label: "LinkedIn", url: "", icon: "linkedin" },
  { label: "GitHub", url: "", icon: "github" },
] as const;

const PRIVACY_POLICY_LINK = PRIVACY_POLICY_URL
  ? [{ label: "Política de Privacidade", href: PRIVACY_POLICY_URL }]
  : [];

const LEGAL_DETAILS = [COMPANY_LEGAL_NAME, COMPANY_TAX_ID].filter(Boolean);

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div className="footer-brand">
          <a className="brand" href="#inicio" aria-label="WatchCore — início">
            <Image
              className="brand-logo"
              src="/brand/watchcore_logo.png"
              alt="WatchCore"
              width={2160}
              height={720}
            />
          </a>
          <p>{BRAND_DESCRIPTION}</p>
        </div>

        <nav className="footer-column" aria-label="Rodapé">
          <h2 className="footer-label">Explore</h2>
          <ul>
            {EXPLORE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-column footer-contact">
          <h2 className="footer-label">Contato</h2>
          <ul>
            <li>
              <a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a>
            </li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </li>
          </ul>
          {SOCIAL_LINKS.some((link) => link.url.trim()) && (
            <ul className="footer-socials" aria-label="Redes sociais">
              {SOCIAL_LINKS.filter((link) => link.url.trim()).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <SocialIcon name={link.icon} />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="section-shell footer-bottom">
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} WatchCore</span>
          {LEGAL_DETAILS.length > 0 && (
            <span className="footer-company-details">
              {LEGAL_DETAILS.join(" · ")}
            </span>
          )}
          {PRIVACY_POLICY_LINK.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <FooterBackToTop />
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: (typeof SOCIAL_LINKS)[number]["icon"] }) {
  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle className="footer-social-dot" cx="18" cy="6" r="1" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M5.2 8.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6ZM3.7 10h3v10h-3V10Zm5 0h2.9v1.4h.1c.4-.8 1.4-1.7 2.9-1.7 3.1 0 3.7 2 3.7 4.5V20h-3v-5.1c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V20h-3V10Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.2.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.5 2.5 4.2 1.8.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.5 10.5 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .4.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}
