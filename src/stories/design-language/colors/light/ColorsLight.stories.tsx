import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import "../colors-tokens.css";

type ColorToken = {
  name: string;
  cssVar: string;
  hex: string;
  rgb: string;
};

type ColorSection = {
  title: string;
  description: string;
  tokens: ColorToken[];
};

const LIGHT_COLOR_SECTIONS: ColorSection[] = [
  {
    title: "Alerts",
    description:
      "Alerts often use colors to convey critical alerts, warnings, informative, success or neutral messages. The colors ensure the quickly understand the nature of the alert without reading the text.",
    tokens: [
      { name: "Neutral", cssVar: "--color-alerts-neutral", hex: "#6B7280", rgb: "107,114,128" },
      {
        name: "Informative",
        cssVar: "--color-alerts-informative",
        hex: "#3479EB",
        rgb: "52,121,235",
      },
      { name: "Success", cssVar: "--color-alerts-success", hex: "#16A249", rgb: "22,162,73" },
      { name: "Medium", cssVar: "--color-alerts-medium", hex: "#E7B008", rgb: "231,176,10" },
      { name: "High", cssVar: "--color-alerts-high", hex: "#EE4343", rgb: "238,67,67" },
    ],
  },
  {
    title: "Text",
    description:
      "Text color pretend to have readability and conveying information. It is important when applying color in our texts to have enough contrast with the background.",
    tokens: [
      { name: "Primary", cssVar: "--color-text-primary", hex: "#000000", rgb: "0,0,0" },
      { name: "Secondary", cssVar: "--color-text-secondary", hex: "#52525B", rgb: "82,82,91" },
      { name: "Linked", cssVar: "--color-text-linked", hex: "#2362EA", rgb: "35,98,234" },
      { name: "Inverted", cssVar: "--color-text-inverted", hex: "#FFFFFF", rgb: "255,255,255" },
    ],
  },
  {
    title: "Surfaces",
    description:
      "Surfaces colors define the background of components or areas within the screen or interface. Remember to keep pattern or consistency across your surfaces to contribute into a cohesive visual identity.",
    tokens: [
      { name: "Primary", cssVar: "--color-surfaces-primary", hex: "#FFFFFF", rgb: "255,255,255" },
      { name: "Secondary", cssVar: "--color-surfaces-secondary", hex: "#F4F4F5", rgb: "244,244,245" },
    ],
  },
  {
    title: "Icons",
    description:
      "Icons can have different purposes in a design. Color allow to enhance recognition and convey meaning. For example the ones that are active from the ones that are showing an inactive item.",
    tokens: [
      { name: "Primary", cssVar: "--color-icons-primary", hex: "#000000", rgb: "0,0,0" },
      { name: "Secondary", cssVar: "--color-icons-secondary", hex: "#52525B", rgb: "82,82,91" },
      { name: "Inverted", cssVar: "--color-icons-inverted", hex: "#FFFFFF", rgb: "255,255,255" },
    ],
  },
  {
    title: "States",
    description:
      "The different states of an element can be identified by color. For example something that is active, or inactive from something that is tappable.",
    tokens: [
      { name: "Active", cssVar: "--color-states-active", hex: "#202024", rgb: "32,32,36" },
      { name: "Inactive", cssVar: "--color-states-inactive", hex: "#71717A", rgb: "113,113,122" },
      { name: "Tappable", cssVar: "--color-states-tappable", hex: "#2362EA", rgb: "35,98,234" },
    ],
  },
  {
    title: "Highlight",
    description:
      "By highlighting elements you focus the attention into an specific item, area or action. Keep in mind that the highlight color should be different from the background to keep the contrast and make the visual impact that you want.",
    tokens: [
      {
        name: "Primary",
        cssVar: "--color-highlight-primary",
        hex: "#91C3FC",
        rgb: "145,195,252",
      },
      {
        name: "Secondary",
        cssVar: "--color-highlight-secondary",
        hex: "#2362EA",
        rgb: "35,98,234,10",
      },
    ],
  },
  {
    title: "Borders",
    description:
      "Borders can serve different purposes, such as indicating interactive elements or separating sections from others. It is important to allow the users to recognize if a border is decorative or if they convey specific information.",
    tokens: [
      { name: "Primary", cssVar: "--color-borders-primary", hex: "#52525B", rgb: "82,82,91" },
      { name: "Secondary", cssVar: "--color-borders-secondary", hex: "#D4D4D8", rgb: "212,212,216" },
    ],
  },
];

const ColorsLightView = () => (
  <div className="ds-colors-page" data-theme="light">
    {LIGHT_COLOR_SECTIONS.map((section) => (
      <section key={section.title} className="ds-colors-page__section">
        <h1 className="ds-colors-page__title">{section.title}</h1>
        <p className="ds-colors-page__description">{section.description}</p>

        <div className="ds-colors-page__grid">
          {section.tokens.map((token) => (
            <article key={`${section.title}-${token.name}`} className="ds-color-token">
              <div className="ds-color-token__canvas">
                <div className="ds-color-token__card">
                  <div
                    className="ds-color-token__swatch"
                    style={{ backgroundColor: `var(${token.cssVar})` }}
                    aria-hidden
                  />
                  <div className="ds-color-token__body">
                    <h2 className="ds-color-token__name">{token.name}</h2>
                    <p className="ds-color-token__meta">Hex: {token.hex}</p>
                    <p className="ds-color-token__meta">RGB: {token.rgb}</p>
                  </div>
                </div>
              </div>
              <p className="ds-color-token__label">{token.name}</p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const meta = {
  title: "Design Language/Colors/Light",
  component: ColorsLightView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ColorsLightView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {
  render: () => <ColorsLightView />,
};
