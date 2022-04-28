import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Doctor from "./Doctor";

test("renders Doctor Portal Text", () => {
  render(
    <Router>
      <Doctor />
    </Router>
  );
  expect(screen.getByText(/Appointment Portal - Doctor/i));
});

test("renders Doctor sub text info", () => {
  render(
    <Router>
      <Doctor />
    </Router>
  );
  expect(screen.getByText(/create an appointment for a patient./i));
});

test("should renders Eventcalendar component", () => {
  render(
    <Router>
      <Doctor />
    </Router>
  );
  expect(screen.findAllByAltText("Eventcalendar"));
});