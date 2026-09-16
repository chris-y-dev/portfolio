import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./components/experience/Accordion";

test("keeps the current role open by default and exposes a collapsed preview for other roles", async () => {
  render(<Accordion />);

  const currentTitle = screen.getByText("Software Engineer @ Xero", {
    selector: "h3",
  });
  const graduateTitle = screen.getByText("Graduate Software Engineer @ Xero", {
    selector: "h3",
  });

  expect(currentTitle.closest("button")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  expect(screen.getAllByText(/Read more/i).length).toBeGreaterThan(0);

  await userEvent.click(graduateTitle.closest("button")!);

  expect(graduateTitle.closest("button")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  expect(currentTitle.closest("button")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
});
