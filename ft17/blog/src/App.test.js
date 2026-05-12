import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blog title", () => {
  render(<App />);
  expect(screen.getByText(/Calvin Cheptoo's Blog/i)).toBeInTheDocument();
});
