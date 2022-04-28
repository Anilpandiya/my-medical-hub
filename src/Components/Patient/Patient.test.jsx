import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Patient from "./Patient";

test("renders Patient Portal Text", () => {
  render(
    <Router>
      <Patient />
    </Router>
  );
  expect(screen.getByText(/Appointment Portal - Pateint/i));
});

test("renders Patient sub text info", () => {
  render(
    <Router>
      <Patient />
    </Router>
  );
  expect(screen.getByText(/check the scheduled appointments./i));
});

test("renders Eventcalendar component", () => {
  render(
    <Router>
      <Patient />
    </Router>
  );
  expect(screen.findAllByAltText("Eventcalendar"));
});
