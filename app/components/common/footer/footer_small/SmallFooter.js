import CurrentTime from "../CurrentTime";

export default function SmallFooter() {
  return (
    <div className="text-center text-gray-200 text-xs mb-4">
      <CurrentTime />
    </div>
  );
}
