import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { CheckboxGroup } from "./CheckboxGroup";

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
  args: {
    label: "Menu",
    options: [
      { label: "Email", value: "email" },
      { label: "Push notifications", value: "push" },
      { label: "SMS", value: "sms" },
    ],
    helperText: "Select all options you want to receive.",
    defaultValue: ["email"],
  },
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuExample: Story = {};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: "Email", value: "email" },
      { label: "Push notifications", value: "push", disabled: true },
      { label: "SMS", value: "sms" },
    ],
  },
};

export const Controlled: Story = {
  args: {
    value: ["email", "sms"],
  },
};
