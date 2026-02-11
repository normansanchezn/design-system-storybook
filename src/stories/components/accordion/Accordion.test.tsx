import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Accordion } from "./Accordion";

describe("Accordion", () => {
  it("toggles expanded state when clicked", async () => {
    render(
      <Accordion title="title">
        <div>content</div>
      </Accordion>,
    );

    const button = screen.getByRole("button", { name: "title" });
    expect(screen.queryByText("content")).not.toBeVisible();

    await userEvent.click(button);
    expect(screen.getByText("content")).toBeVisible();

    await userEvent.click(button);
    expect(screen.queryByText("content")).not.toBeVisible();
  });
});
