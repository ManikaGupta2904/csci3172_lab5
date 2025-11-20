import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

function renderHeader() {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
}

test("shows the portfolio title", () => {
  renderHeader();
  expect(screen.getByText("My Portfolio")).toBeInTheDocument();
});

test("shows the nav links", () => {
  renderHeader();
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Projects")).toBeInTheDocument();
});