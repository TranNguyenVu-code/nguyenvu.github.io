import { useState } from "react";
import type { FormEvent } from "react";
import { profile, sectionContent } from "../data/portfolio";
import {
  buildMailtoUrl,
  isUsableContactEmail,
  isUsableProfileLink,
} from "../utils/contact";
import SectionShell from "./shared/SectionShell";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const available = isUsableContactEmail(
    profile.email,
    profile.contactPlaceholder,
  );
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!available) return;
    window.location.href = buildMailtoUrl(form, profile.email);
  };
  return (
    <SectionShell
      id="contact"
      eyebrow={sectionContent.contact.eyebrow}
      title={sectionContent.contact.title}
      intro={sectionContent.contact.description}
    >
      <div className="contact-grid">
        <div className="contact-card" data-testid="direct-contact">
          <span className="eyebrow">
            {available ? "DIRECT CONTACT" : "CONTACT DETAILS · PLACEHOLDER"}
          </span>
          {available ? (
            <a
              className="contact-email"
              href={`mailto:${profile.email}`}
              data-testid="contact-email-link"
            >
              {profile.email}
            </a>
          ) : (
            <p
              className="contact-email placeholder"
              data-testid="contact-email-placeholder"
            >
              {profile.email}
            </p>
          )}
          <p id="contact-status">
            {available
              ? "Send a note about learning, projects, or collaboration."
              : "Real contact details are coming soon. This example address is a placeholder."}
          </p>
          <div className="contact-channels">
            {profile.socialLinks.length ? (
              profile.socialLinks.map((link) =>
                isUsableProfileLink(link.href, link.placeholder) ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                    data-testid={`contact-social-${link.label.toLowerCase()}`}
                  >
                    {link.label} ↗
                  </a>
                ) : (
                  <span key={link.label}>{link.label} · coming soon</span>
                ),
              )
            ) : (
              <>
                <span>GitHub · profile coming soon</span>
                <span>LinkedIn · profile coming soon</span>
              </>
            )}
          </div>
          <div className="contact-location">
            <span className="status-dot" aria-hidden="true" />{" "}
            {profile.location}
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={submit}
          data-testid="contact-form"
          aria-describedby="contact-status"
        >
          <fieldset disabled={!available}>
            <legend>
              {available
                ? "Write a message"
                : "Message form · available once details are added"}
            </legend>
            <div className="form-row">
              <label htmlFor="contact-name">
                Name
                <input
                  id="contact-name"
                  name="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  data-testid="contact-name-input"
                  placeholder="Your name"
                />
              </label>
              <label htmlFor="contact-email">
                Email
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  data-testid="contact-email-input"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label htmlFor="contact-subject">
              Subject
              <input
                id="contact-subject"
                name="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                data-testid="contact-subject-input"
                placeholder="What’s on your mind?"
              />
            </label>
            <label htmlFor="contact-message">
              Message
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                data-testid="contact-message-input"
                rows={4}
                placeholder="Let’s start a conversation."
              />
            </label>
            <button
              className="action primary"
              type="submit"
              disabled={!available}
              data-testid="contact-submit"
            >
              {available ? "Open email draft ↗" : "Contact details coming soon"}
            </button>
          </fieldset>
        </form>
      </div>
      <footer className="portfolio-footer">
        <span>
          {profile.name} · {profile.location}
        </span>
        <span>Always a student. Always curious.</span>
      </footer>
    </SectionShell>
  );
}
