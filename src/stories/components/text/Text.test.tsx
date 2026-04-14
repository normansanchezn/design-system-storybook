import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Text } from "./Text";

describe("Text", () => {
  it("renders as span with body1 variant by default", () => {
    render(<Text label="Default text" />);

    const text = screen.getByText("Default text");
    expect(text.tagName).toBe("SPAN");
    expect(text).toHaveClass("text", "text--body1");
  });

  it("renders with semantic tag and selected variant", () => {
    render(<Text label="Section title" as="h2" variant="title2" />);

    const title = screen.getByRole("heading", { level: 2, name: "Section title" });
    expect(title).toHaveClass("text", "text--title2");
  });

  it("calls click handler", async () => {
    const onClick = vi.fn();
    render(<Text label="Clickable" as="p" onClick={onClick} />);

    await userEvent.click(screen.getByText("Clickable"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
