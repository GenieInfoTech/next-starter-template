import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
// import { describe, it } from "node:test";
import FormHookTest from "@/app/play/FormHookTest";

describe("Page", () => {
  it("renders a heading", () => {
    render(<FormHookTest />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
