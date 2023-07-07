import { render, screen } from "@testing-library/react";
import { Navbar } from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar links", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
  });

  test("Should show all links", () => {
    expect(screen.getByText("Favorite")).toBeDefined();
    expect(screen.getByText("Home")).toBeDefined();
  });
});
