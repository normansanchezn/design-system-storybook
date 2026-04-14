import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { CheckboxGroup } from "./CheckboxGroup";

describe("CheckboxGroup", () => {
  it("toggles selections independently", async () => {
    const onChange = vi.fn();
    render(
      <CheckboxGroup
        label="menu"
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ]}
        onValueChange={onChange}
      />,
    );

    const first = screen.getByLabelText("A");
    const second = screen.getByLabelText("B");

    await userEvent.click(first);
    expect(onChange).toHaveBeenLastCalledWith(["a"]);
    await userEvent.click(second);
    expect(onChange).toHaveBeenLastCalledWith(["a", "b"]);
    await userEvent.click(first);
    expect(onChange).toHaveBeenLastCalledWith(["b"]);
  });

  it("does not emit changes when group is disabled", async () => {
    const onChange = vi.fn();
    render(
      <CheckboxGroup
        label="menu"
        disabled
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ]}
        onValueChange={onChange}
      />,
    );

    const first = screen.getByLabelText("A");
    expect(first).toBeDisabled();

    await userEvent.click(first);
    expect(onChange).not.toHaveBeenCalled();
  });

  it("emits next values in controlled mode without mutating checked state", async () => {
    const onChange = vi.fn();
    render(
      <CheckboxGroup
        label="menu"
        value={["a"]}
        options={[
          { label: "A", value: "a" },
          { label: "B", value: "b" },
        ]}
        onValueChange={onChange}
      />,
    );

    const first = screen.getByLabelText("A");
    const second = screen.getByLabelText("B");

    await userEvent.click(second);
    expect(onChange).toHaveBeenCalledWith(["a", "b"]);
    expect(first).toBeChecked();
    expect(second).not.toBeChecked();
  });
});
