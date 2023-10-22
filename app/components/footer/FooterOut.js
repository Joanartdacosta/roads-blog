import Social from "../socials/Social";

export default function FooterOut() {
  return (
    <div className="footer-background width-100 text-center margin-auto padding-10">
      <Social />
      <p className="font-text font-italic">
        Copyright. Direitos reservados - Roads Blog by Rui Costa
      </p>
      <p className="font-text">Website desenvolvido por Joana Costa</p>
    </div>
  );
}
