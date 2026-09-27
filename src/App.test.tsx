import React from "react";
import { render, screen } from "@testing-library/react";
import Accordion from "./components/experience/Accordion";

test("shows prior Xero roles inside the current role card", () => {
  render(<Accordion />);

  const currentRoleButton = screen.getByRole("button", {
    name: /Software Engineer @ Xero/,
  });
  expect(currentRoleButton).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  expect(
    screen.getByRole("heading", { name: "Graduate Security Engineer" }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Graduate Software Engineer" }),
  ).toBeInTheDocument();
  expect(screen.getAllByText("2024")).toHaveLength(2);
  expect(
    screen.getByText(/Fraud Alert System that reduced fraudulent sign-ups/),
  ).toBeInTheDocument();
  expect(screen.getByText("Event-Driven Architecture")).toBeInTheDocument();
  expect(screen.getByText("Python")).toBeInTheDocument();
  expect(screen.getByText("Microservices")).toBeInTheDocument();
  const skillGroups = screen.getAllByRole("group");
  expect(skillGroups).toHaveLength(3);
  expect(skillGroups[0]).toHaveAccessibleName("Software Engineer @ Xero skills");
  expect(skillGroups[1]).toHaveAccessibleName("Graduate Security Engineer skills");
  expect(skillGroups[2]).toHaveAccessibleName("Graduate Software Engineer skills");
  expect(screen.getAllByText(/Read more/i).length).toBeGreaterThan(0);
});
