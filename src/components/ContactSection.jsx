import React from "react";
import ContactImagePanel from "./ContactImagePanel";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="w-full mx-auto px-6 pt-15 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <ContactImagePanel />
      <ContactForm />
    </section>
  );
}
