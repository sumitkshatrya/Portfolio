import { useRef } from "react";
import { motion as Motion } from "framer-motion";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const contactItems = [
  { icon: FiMail, label: "Email", text: "skumar21082001@gmail.com", href: "mailto:skumar21082001@gmail.com" },
  { icon: FiPhone, label: "Phone", text: "+91 9528865099", href: "tel:+919528865099" },
  { icon: FiMapPin, label: "Location", text: "Moradabad, Uttar Pradesh", href: null },
];

const Contact = () => {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ef8ytjz", "template_o2i1swg", form.current, {
        publicKey: "X5lAVIVNBeHqQtEva",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="section-shell bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1fr] lg:px-8">
        <Motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <p className="section-eyebrow">Contact</p>
          <h2 className="section-title mt-4">Let&apos;s build something useful.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I am open to frontend, MERN stack, full-stack developer roles, and freelance projects where clean implementation matters.
          </p>

          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-400/12 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{item.label}</span>
                    <span className="mt-1 block text-base font-semibold text-white">{item.text}</span>
                  </span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="contact-row">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="contact-row">
                  {content}
                </div>
              );
            })}
          </div>
        </Motion.div>

        <Motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-8"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="user_name" className="form-label">
                Name
              </label>
              <input type="text" id="user_name" name="user_name" className="form-field" placeholder="Your name" required />
            </div>

            <div>
              <label htmlFor="user_email" className="form-label">
                Email
              </label>
              <input type="email" id="user_email" name="user_email" className="form-field" placeholder="you@example.com" required />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea id="message" name="message" rows="6" className="form-field resize-none" placeholder="Tell me about your project" required />
            </div>

            <Motion.button type="submit" whileTap={{ scale: 0.98 }} className="btn-primary w-full justify-center">
              Send Message
              <FiSend className="h-4 w-4" />
            </Motion.button>
          </div>
        </Motion.form>
      </div>
    </section>
  );
};

export default Contact;
