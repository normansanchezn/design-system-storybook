import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { RadioGroup } from "./RadioGroup";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Radio buttons are typically used when users need to make a single selection from a list of options. They are called radio buttons because, like tuning a radio, selecting one option deselects any others within the same group. This means that only one option can be selected at a time. Commonly used for questions with mutually exclusive answers, for example when selecting a payment method.",
      },
    },
  },
  args: {
    label: "Payment method",
    options: [
      { label: "Credit Card", value: "credit" },
      { label: "PayPal", value: "paypal" },
      { label: "Amazon Pay", value: "amazon" },
    ],
    defaultValue: "credit",
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstExample: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: "Credit Card", value: "credit" },
      { label: "PayPal", value: "paypal", disabled: true },
      { label: "Amazon Pay", value: "amazon" },
    ],
  },
};
