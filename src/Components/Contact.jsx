import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
  transition: { duration: 0.6 },
};

export const Contact = () => {
  const contactHighlights = [
    "Open to full-time software engineering roles",
    "Fast response for project collaboration",
    "Available for remote and hybrid opportunities",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.2 }}
      >
        Let’s Build Something Great
      </motion.h2>

      <motion.p
        className="section-subtitle"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.2 }}
      >
        Have a role or project in mind? Share the details and I’ll get back to
        you shortly.
      </motion.p>

      <motion.div
        className="contact-content"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="contact-intro">
          {contactHighlights.map((item) => (
            <div key={item} className="contact-point">
              <span>•</span>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name..."
            required
            value={formData.name}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email..."
            required
            value={formData.email}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message..."
            required
            value={formData.message}
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              } `}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </motion.section>
  );
};
