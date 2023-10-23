export default function CurrentTime() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="margin-auto text-center padding-10">
      <p className="font-text font-italic"> © {currentYear} </p>
      <p className="font-text font-italic">ESTRADAS - Rui Costa</p>
    </div>
  );
}
