import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { InputField } from "./InputField";
import { IconScoutAngleDown, IconScoutCheckCircle } from "./InputField.icons";

const meta = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "you@company.com",
    helperText: "Usa tu correo corporativo",
    status: "default",
    disabled: false,
    required: false,
    showCharacterCount: false,
    leadingIcon: "none",
    trailingIcon: "none",
  },
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "error", "success"],
    },
    leadingIcon: {
      control: { type: "select" },
      options: ["none", "checkCircle"],
      mapping: {
        none: undefined,
        checkCircle: <IconScoutCheckCircle width={20} height={20} />,
      },
    },
    trailingIcon: {
      control: { type: "select" },
      options: ["none", "angleDown"],
      mapping: {
        none: undefined,
        angleDown: <IconScoutAngleDown width={20} height={20} />,
      },
    },
  },
} satisfies Meta<typeof InputField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    showCharacterCount: true,
    leadingIcon: "checkCircle",
    trailingIcon: "angleDown",
    errorText: "",
    required: true
  }
};

export const WithRequiredAndIcons: Story = {
  args: {
    label: "Label",
    required: true,
    value: "Selected",
    readOnly: true,
    helperText: "Maximum ### characters",
    leadingIcon: "checkCircle",
    trailingIcon: "angleDown",
    maxLength: 7,
    showCharacterCount: true,
  },
};

export const Dropdown: Story = {
  args: {
    label: "Label",
    value: "Selected",
    readOnly: true,
    helperText: "Selected",
    leadingIcon: "checkCircle",
    trailingIcon: "angleDown",
    onClick: fn(),
    "aria-haspopup": "listbox",
  },
};

export const Error: Story = {
  args: {
    required: true,
    status: "error",
    errorText: "Completa este campo con un valor valido",
    helperText: undefined,
  },
};

export const Success: Story = {
  args: {
    status: "success",
    helperText: "Correo validado correctamente",
    value: "norman@company.com",
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "disabled@company.com",
  },
};
