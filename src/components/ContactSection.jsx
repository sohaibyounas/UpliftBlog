import React from "react";
import ContactImagePanel from "./ContactImagePanel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-15 scroll-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <ContactImagePanel />
      <ContactForm />
    </section>
  );
}
