import { render, screen, fireEvent } from "@testing-library/react";
import FairCard from "@/components/dashboard/fairs/UI/fairs_card/FairCard";

test("renders ExampleComponent correctly", () => {
  render(<FairCard />);
  expect(screen.getByText("Saber mais")).toBeInTheDocument();
});
