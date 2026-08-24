import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import ContactLink from "@/components/ContactLink";
import CallToAction from "@/components/CallToAction";

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="font-display text-4xl text-cream md:text-5xl">
          Contact
        </h1>
        <p className="mt-2 text-cream">Let&apos;s connect!</p>

        <div className="mt-10 flex flex-col">
          <ContactLink
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            label="Email"
            value="hellolupejara@gmail.com"
            href="mailto:hellolupejara@gmail.com"
          />
          <ContactLink
            icon={<FontAwesomeIcon icon={faPhone} />}
            label="Phone"
            value="(323) 609-5804"
            href="tel:+13236095804"
          />
          <ContactLink
            icon={<FontAwesomeIcon icon={faLinkedin} />}
            label="LinkedIn"
            value="linkedin.com/in/guadalupejara"
            href="https://linkedin.com/in/guadalupejara"
          />
        </div>
      </section>

      <CallToAction />
    </>
  );
}

export default ContactPage;