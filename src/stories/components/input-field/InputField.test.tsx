import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputField } from "./InputField";

describe("InputField", () => {
  it("renders label, helper and character count", () => {
    render(
      <InputField
        label="Email"
        helperText="Use your corporate email"
        value="hello"
        readOnly
        maxLength={20}
        showCharacterCount
      />,
    );

    const input = screen.getByLabelText("Email");
    expect(input).toBeVisible();
    expect(screen.getByText("Use your corporate email")).toBeVisible();
    expect(screen.getByText("5/20")).toBeVisible();
    expect(input).toHaveAttribute("aria-describedby");
  });

  it("shows error text and aria-invalid when status is error", () => {
    render(
      <InputField
        label="Email"
        status="error"
        helperText="Default helper"
        errorText="This value is required"
      />,
    );

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(screen.getByText("This value is required")).toBeVisible();
    expect(screen.queryByText("Default helper")).not.toBeInTheDocument();
  });

  it("handles typing in uncontrolled mode", async () => {
    const onChange = vi.fn();
    render(<InputField label="Name" onChange={onChange} />);

    const input = screen.getByLabelText("Name");
    await userEvent.type(input, "abc");

    expect(onChange).toHaveBeenCalledTimes(3);
    expect(input).toHaveValue("abc");
  });

  it("respects disabled state", async () => {
    const onChange = vi.fn();
    render(<InputField label="Name" disabled onChange={onChange} />);

    const input = screen.getByLabelText("Name");
    expect(input).toBeDisabled();

    await userEvent.type(input, "blocked");
    expect(onChange).not.toHaveBeenCalled();
    expect(input).toHaveValue("");
  });
});
