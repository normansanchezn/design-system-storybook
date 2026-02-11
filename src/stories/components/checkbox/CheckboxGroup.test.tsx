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
});
