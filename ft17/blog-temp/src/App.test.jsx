import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App", () => {
  it("renders the blog title", () => {
    render(<App />);
    expect(screen.getByText(/Calvin Cheptoo's Blog/i)).toBeInTheDocument();
  });
});
