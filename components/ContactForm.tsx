"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/realjjemail@gmail.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    const inquiryType = String(data.get("type") || "General");
    data.set("_subject", `DJ Hotwax — ${inquiryType}`);
    data.set("_captcha", "false");
    data.set("_template", "table");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data
      });
      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />
      <label><span>Name</span><input name="name" required autoComplete="name" /></label>
      <label><span>Email</span><input name="email" type="email" required autoComplete="email" /></label>
      <label>
        <span>Inquiry</span>
        <select name="type" defaultValue="Licensing">
          <option>Licensing</option>
          <option>Production collaboration</option>
          <option>Placement</option>
          <option>Creative partnership</option>
          <option>General</option>
        </select>
      </label>
      <label><span>Message</span><textarea name="message" rows={5} required /></label>
      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Start a conversation"}<span>↗</span>
      </button>
      <p className={`form-status ${status}`} aria-live="polite">
        {status === "sent"
          ? "Message received."
          : status === "error"
            ? "Could not send. Email realjjemail@gmail.com."
            : "Licensing · placements · collaborations"}
      </p>
    </form>
  );
}
