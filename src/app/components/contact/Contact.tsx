import ContactForm from "./ContactForm";
import SocialMediaCards from "./SocialMediaCards";
import Separator from "../Separator";
import ContactIntro from "./ContactIntro";

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-6">
        <Separator />

        <div className="mb-12">
          <ContactIntro />
        </div>

        <ContactForm />

        <div className="mt-20">
          <SocialMediaCards />
        </div>
      </div>
    </section>
  );
}