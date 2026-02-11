import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { useState } from "react";

import { IconScoutAngleDown, IconScoutCheckCircle } from "../input-field/InputField.icons";
import { Accordion } from "./Accordion";

const FaqMobileExampleView = () => {
  const [expandedItem, setExpandedItem] = useState<string>("goals");

  return (
    <div
      style={{
        background: "var(--ds-color-bg-disabled)",
        maxWidth: 280,
        minHeight: 560,
        padding: 16,
      }}
    >
      <h2
        style={{
          color: "var(--ds-color-text-primary)",
          fontFamily: "var(--ds-font-family-base)",
          fontSize: "28px",
          fontWeight: 700,
          lineHeight: "36px",
          margin: "8px 0 16px",
        }}
      >
        FAQ
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Accordion
          title="How do I track my workouts in the app?"
          expanded={expandedItem === "workouts"}
          onExpandedChange={(next) => setExpandedItem(next ? "workouts" : "")}
          trailingIcon={<IconScoutAngleDown width={20} height={20} />}
        >
          Track workouts from the home tab and save each session when you finish.
        </Accordion>

        <Accordion
          title="How do I set goals and track my progress?"
          expanded={expandedItem === "goals"}
          onExpandedChange={(next) => setExpandedItem(next ? "goals" : "")}
          trailingIcon={<IconScoutAngleDown width={20} height={20} />}
        >
          <>
            <p style={{ margin: "0 0 8px" }}>
              To set goals and track your progress, follow these steps:
            </p>
            <ol style={{ margin: 0, paddingLeft: 18 }}>
              <li>Navigate to the goals section.</li>
              <li>Set your goals.</li>
              <li>Specify metrics.</li>
              <li>Review and confirm.</li>
              <li>Monitor progress.</li>
              <li>Adjust goals as needed.</li>
            </ol>
          </>
        </Accordion>

        <Accordion
          title="What types of exercises are available in the app?"
          expanded={expandedItem === "exercises"}
          onExpandedChange={(next) => setExpandedItem(next ? "exercises" : "")}
          trailingIcon={<IconScoutAngleDown width={20} height={20} />}
        >
          You can browse cardio, strength, mobility, and guided routines.
        </Accordion>
      </div>
    </div>
  );
};

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  args: {
    title: "What is this design system?",
    description: "Tap to expand",
    defaultExpanded: false,
    disabled: false,
    children:
      "This is a design-system-first workspace where tokens, components, and docs stay aligned across the product.",
    onExpandedChange: fn(),
    leadingIcon: "none",
    trailingIcon: "default",
  },
  argTypes: {
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
      options: ["default", "angleDown", "none"],
      mapping: {
        default: undefined,
        angleDown: <IconScoutAngleDown width={20} height={20} />,
        none: null,
      },
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FaqMobileExample: Story = {
  render: () => <FaqMobileExampleView />,
};

export const Playground: Story = {};

export const Expanded: Story = {
  args: {
    defaultExpanded: true,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    leadingIcon: "checkCircle",
    defaultExpanded: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
