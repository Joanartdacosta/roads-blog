import "@testing-library/jest-dom";
import Title from "@/pages/index";
import { render, screen } from "@testing-library/react";

describe("ROADS App", () => {
  it("renders the ROADS app", () => {
    render(<Title />);

    expect(screen.getByText("ESTRADA FORA")).toBeInTheDocument();
  });
});
