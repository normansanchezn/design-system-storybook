import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RadioGroup } from "./RadioGroup";

describe("RadioGroup", () => {
  it("allows single selection", async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        label="category"
        options={[
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ]}
        onValueChange={onChange}
      />,
    );

    const first = screen.getByLabelText("One");
    const second = screen.getByLabelText("Two");

    await userEvent.click(second);
    expect(onChange).toHaveBeenLastCalledWith("two");
    expect(second).toBeChecked();
    expect(first).not.toBeChecked();
  });

  it("does not allow selecting disabled options", async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        label="category"
        options={[
          { label: "One", value: "one" },
          { label: "Two", value: "two", disabled: true },
        ]}
        onValueChange={onChange}
      />,
    );

    const second = screen.getByLabelText("Two");
    expect(second).toBeDisabled();

    await userEvent.click(second);
    expect(onChange).not.toHaveBeenCalled();
    expect(second).not.toBeChecked();
  });

  it("emits the next value in controlled mode without changing internal selection", async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup
        label="category"
        value="one"
        options={[
          { label: "One", value: "one" },
          { label: "Two", value: "two" },
        ]}
        onValueChange={onChange}
      />,
    );

    const first = screen.getByLabelText("One");
    const second = screen.getByLabelText("Two");

    await userEvent.click(second);
    expect(onChange).toHaveBeenCalledWith("two");
    expect(first).toBeChecked();
    expect(second).not.toBeChecked();
  });
});
