import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Etage 0", () => {
  render(<App />);
  const etage = screen.getByText(/Etage 0/i);
  expect(etage).toBeInTheDocument();
});
