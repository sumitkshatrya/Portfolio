import emailjs from "@emailjs/browser";
import { motion as Motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiAlertCircle,
  FiArrowUpRight,
  FiCheckCircle,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiLoader,
  FiMail,
  FiMapPin,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { profileData } from "../data/profileData";

const Contact = () => {
  const formRef = useRef(null);
  const [formState, setFormState] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formState.user_name.trim()) return "Please enter your name.";
    if (!formState.user_email.trim()) return "Please enter your email.";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.user_email)) {
      return "Please provide a valid email address.";
    }
    if (!formState.message.trim()) return "Please enter a message.";
    if (formState.message.trim().length < 10) {
      return "Message must be at least 10 characters long.";
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setStatus("error");
      setErrorMessage(validationError);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Verified EmailJS configuration from existing codebase
      await emailjs.sendForm(
        "service_ef8ytjz",
        "template_o2i1swg",
        formRef.current,
        {
          publicKey: "X5lAVIVNBeHqQtEva",
        }
      );

      setStatus("success");
      setFormState({ user_name: "", user_email: "", subject: "", message: "" });
    } catch (err) {
      console.error("EmailJS submission error:", err);
      setStatus("error");
      setErrorMessage(
        `Failed to deliver message via EmailJS. Please reach out directly to ${profileData.contact.email}.`
      );
    }
  };

  return (
    <section id="contact" className="section-shell bg-dark-base relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Direct Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="section-eyebrow">Get in Touch</p>
              <h2 className="section-title mt-3">
                Let&apos;s build something meaningful.
              </h2>
              <p className="section-copy">
                Have an interesting product, engineering challenge, or opportunity?
                I&apos;d be glad to connect.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3">
              <a
                href={`mailto:${profileData.contact.email}`}
                className="editorial-card !p-4 flex items-center gap-3.5 group hover:border-accent-violet/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-dark-border bg-dark-card text-accent-violetLight group-hover:bg-accent-violet group-hover:text-white transition-colors">
                  <FiMail className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-subtle block">
                    Email Address
                  </span>
                  <span className="text-sm font-semibold text-editorial-primary group-hover:text-accent-violetLight transition-colors">
                    {profileData.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={`tel:${profileData.contact.phone.replace(/\s+/g, "")}`}
                className="editorial-card !p-4 flex items-center gap-3.5 group hover:border-accent-violet/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-dark-border bg-dark-card text-accent-blue group-hover:bg-accent-blue group-hover:text-white transition-colors">
                  <FiPhone className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-subtle block">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-editorial-primary group-hover:text-accent-blue transition-colors">
                    {profileData.contact.phone}
                  </span>
                </div>
              </a>

              <div className="editorial-card !p-4 flex items-center gap-3.5">
                <div className="grid h-10 w-10 place-items-center rounded-lg border border-dark-border bg-dark-card text-emerald-400">
                  <FiMapPin className="h-4 w-4" />
                </div>
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-editorial-subtle block">
                    Location
                  </span>
                  <span className="text-sm font-semibold text-editorial-primary">
                    {profileData.contact.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="border-t border-dark-border pt-6">
              <span className="font-mono text-xs uppercase tracking-wider text-editorial-subtle block mb-3">
                Verified Profiles & Resume:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href={profileData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !min-h-10 !px-3.5 !py-1.5 !text-xs font-mono"
                >
                  <FiGithub className="h-3.5 w-3.5" />
                  GitHub
                  <FiArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={profileData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !min-h-10 !px-3.5 !py-1.5 !text-xs font-mono"
                >
                  <FiLinkedin className="h-3.5 w-3.5 text-accent-blue" />
                  LinkedIn
                  <FiArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href={profileData.socials.resume}
                  download
                  className="btn-secondary !min-h-10 !px-3.5 !py-1.5 !text-xs font-mono"
                >
                  <FiDownload className="h-3.5 w-3.5 text-accent-violetLight" />
                  Resume PDF
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Accessible, Validated EmailJS Form */}
          <div className="lg:col-span-7">
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="editorial-card !p-6 sm:!p-8 shadow-2xl"
            >
              <h3 className="text-xl font-bold text-editorial-primary">
                Send an Engineering Inquiry
              </h3>
              <p className="mt-1 text-xs text-editorial-muted">
                Messages dispatch directly to my inbox via verified EmailJS service.
              </p>

              {/* Status Notifications */}
              {status === "success" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-400"
                >
                  <FiCheckCircle className="h-4 w-4 flex-none mt-0.5" />
                  <div>
                    <p className="font-bold">Message sent successfully!</p>
                    <p className="mt-0.5 text-editorial-muted">
                      Thank you for reaching out. I will respond to your email shortly.
                    </p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div
                  role="alert"
                  className="mt-6 flex items-start gap-3 rounded-lg border border-rose-500/30 bg-rose-500/10 p-4 text-xs text-rose-400"
                >
                  <FiAlertCircle className="h-4 w-4 flex-none mt-0.5" />
                  <div>
                    <p className="font-bold">Unable to deliver message</p>
                    <p className="mt-0.5 text-rose-300">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="user_name" className="form-label">
                      Your Name <span className="text-accent-violetLight">*</span>
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      value={formState.user_name}
                      onChange={handleChange}
                      placeholder="e.g. Alex Morgan"
                      disabled={status === "loading"}
                      className="form-field"
                    />
                  </div>

                  <div>
                    <label htmlFor="user_email" className="form-label">
                      Email Address <span className="text-accent-violetLight">*</span>
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      value={formState.user_email}
                      onChange={handleChange}
                      placeholder="alex@company.com"
                      disabled={status === "loading"}
                      className="form-field"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="form-label">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Full-Stack Opportunity, etc."
                    disabled={status === "loading"}
                    className="form-field"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="form-label">
                    Message <span className="text-accent-violetLight">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell me about your product, project scope, or opportunity..."
                    disabled={status === "loading"}
                    className="form-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary w-full justify-center !min-h-12 font-mono text-xs"
                >
                  {status === "loading" ? (
                    <>
                      <FiLoader className="h-4 w-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <FiSend className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
