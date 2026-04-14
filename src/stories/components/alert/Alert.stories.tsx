import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { Alert } from "./Alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    type: "success",
    message: "Your download was successful.",
    dismissible: true,
    closeButtonLabel: "Close alert",
    defaultOpen: true,
    onOpenChange: fn(),
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["neutral", "informative", "warning", "success", "error"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Neutral: Story = {
  args: {
    type: "neutral",
    message: "Changes are pending review.",
  },
};

export const Informative: Story = {
  args: {
    type: "informative",
    message: "A newer version of this package is available.",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    message: "Storage is almost full. Consider deleting old files.",
  },
};

export const Success: Story = {
  args: {
    type: "success",
    message: "Your download was successful.",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    message: "We could not complete the request. Try again.",
  },
};
