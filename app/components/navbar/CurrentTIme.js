export default function CurrentTime() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="margin-auto padding-40 display-flex">
      <p className="font-text text-center font-italic"> ESTRADAS - Rui Costa</p>

      <p>
        © {currentYear} website developed by{" "}
        <a href="https://github.com/Joanartdacosta" className="link font-text">
          Joana Costa
        </a>
      </p>
    </div>
  );
}
