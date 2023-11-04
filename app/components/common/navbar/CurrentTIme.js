export default function CurrentTime() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="m-auto text-center p-10">
      <p className="italic"> © {currentYear} </p>
      <p className="italic">ESTRADAS - Rui Costa</p>
    </div>
  );
}
