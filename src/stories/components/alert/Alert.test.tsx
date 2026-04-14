import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders the message and close button by default", () => {
    render(<Alert message="Your download was successful." />);

    expect(screen.getByText("Your download was successful.")).toBeVisible();
    expect(screen.getByRole("button", { name: "Close alert" })).toBeVisible();
    expect(screen.getByTestId("alert-icon")).toBeVisible();
  });

  it("uses status role for neutral and success states", () => {
    const { rerender } = render(<Alert message="Neutral" type="neutral" />);
    expect(screen.getByRole("status")).toBeVisible();

    rerender(<Alert message="Success" type="success" />);
    expect(screen.getByRole("status")).toBeVisible();
  });

  it("uses alert role for warning and error states", () => {
    const { rerender } = render(<Alert message="Warning" type="warning" />);
    expect(screen.getByRole("alert")).toBeVisible();

    rerender(<Alert message="Error" type="error" />);
    expect(screen.getByRole("alert")).toBeVisible();
  });

  it("closes itself when clicking close in uncontrolled mode", async () => {
    render(<Alert message="Dismiss me" />);

    await userEvent.click(screen.getByRole("button", { name: "Close alert" }));
    expect(screen.queryByText("Dismiss me")).not.toBeInTheDocument();
  });

  it("emits onOpenChange in controlled mode", async () => {
    const onOpenChange = vi.fn();
    render(<Alert message="Controlled" open onOpenChange={onOpenChange} />);

    await userEvent.click(screen.getByRole("button", { name: "Close alert" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
    expect(screen.getByText("Controlled")).toBeVisible();
  });

  it("hides close button when alert is not dismissible", () => {
    render(<Alert message="Static alert" dismissible={false} />);

    expect(screen.queryByRole("button", { name: "Close alert" })).not.toBeInTheDocument();
    expect(screen.getByText("Static alert")).toBeVisible();
  });

  it("does not render when defaultOpen is false", () => {
    render(<Alert message="Initially hidden" defaultOpen={false} />);

    expect(screen.queryByText("Initially hidden")).not.toBeInTheDocument();
  });
});
