import { describe, expect, it, vi } from "vitest";
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

  it("does not toggle when disabled", async () => {
    const onExpandedChange = vi.fn();
    render(
      <Accordion title="title" disabled onExpandedChange={onExpandedChange}>
        <div>content</div>
      </Accordion>,
    );

    const button = screen.getByRole("button", { name: "title" });
    expect(button).toBeDisabled();

    await userEvent.click(button);
    expect(screen.queryByText("content")).not.toBeVisible();
    expect(onExpandedChange).not.toHaveBeenCalled();
  });

  it("emits change in controlled mode without toggling internal state", async () => {
    const onExpandedChange = vi.fn();
    render(
      <Accordion title="title" expanded={false} onExpandedChange={onExpandedChange}>
        <div>content</div>
      </Accordion>,
    );

    const button = screen.getByRole("button", { name: "title" });
    await userEvent.click(button);

    expect(onExpandedChange).toHaveBeenCalledWith(true);
    expect(screen.queryByText("content")).not.toBeVisible();
  });
});
