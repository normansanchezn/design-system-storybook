import { createElement } from "react";
import type { Preview } from "@storybook/nextjs-vite";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global color theme",
      defaultValue: "light",
      toolbar: {
        icon: "paintbrush",
        dynamicTitle: true,
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === "dark" ? "dark" : "light";

      return createElement(
        "div",
        {
          "data-theme": theme,
          style: {
            backgroundColor: "var(--ds-color-canvas)",
            color: "var(--ds-color-text-primary)",
            minHeight: "100vh",
            padding: "16px",
          },
        },
        createElement(Story),
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
};

export default preview;
