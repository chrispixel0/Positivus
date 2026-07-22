import Container from "../../../ui/Container";
import FooterTop from "./FooterTop";
import FooterContact from "./FooterContact";
import FooterSubscribe from "./FooterSubscribe";
import FooterBottom from "./FooterBottom";

function Footer() {
  return (
    <footer className="mt-[140px]">
      <Container>
        <div className="rounded-t-[45px] bg-dark px-[60px] pt-[55px] pb-[40px]">
          <FooterTop />

          <div className="mt-[66px] flex justify-between items-start max-md:flex-col">
            <FooterContact />
            <FooterSubscribe />
          </div>

          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
