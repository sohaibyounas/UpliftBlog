"use client";

import React from "react";
import { motion } from "motion/react";
import ContactImagePanel from "./ContactImagePanel";
import ContactForm from "./ContactForm";
import { fadeUp } from "@/hooks/animations";

export default function ContactSection() {
  return (
    <section
      id="contact-us"
      className="mx-auto max-w-6xl xl:max-w-7xl px-4 sm:px-12 pt-15 scroll-mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0}
      >
        <ContactImagePanel />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={0.15}
      >
        <ContactForm />
      </motion.div>
    </section>
  );
}
