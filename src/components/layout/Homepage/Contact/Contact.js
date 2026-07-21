import Container from "../../../ui/Container";
import SectionHeader from "../../../ui/SectionHeader";
import ContactForm from "./ContactForm";
import ContactImage from "./ContactImage";

function Contact() {
  return (
    <section className="mt-[140px] mb-[140px]">
      <Container>
        <SectionHeader
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />

        <div className="relative overflow-hidden rounded-[45px] bg-light px-[100px] py-[60px]">
          <div className="flex justify-between items-center">
            <ContactForm />

            <ContactImage />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
