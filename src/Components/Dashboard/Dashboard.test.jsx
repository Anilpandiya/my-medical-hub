import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard";

test("renders My Medical HUB text", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  expect(screen.getByText(/My Medical HUB/i));
});

test("renders buttons for Doctor & Patient", () => {
  render(
    <Router>
      <Dashboard />
    </Router>
  );
  expect(screen.getAllByRole("button"));
});
