import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import "../typography-tokens.css";

type TypographyToken = {
  name: string;
  sample: string;
  sizeVar: string;
  lineHeightVar: string;
  weightVar: string;
  size: string;
  lineHeight: string;
  weight: number;
  previewSize: string;
  previewLineHeight: string;
};

type TypographySection = {
  title: string;
  description: string;
  tokens: TypographyToken[];
};

const TYPOGRAPHY_SECTIONS: TypographySection[] = [
  {
    title: "Display & Titles",
    description: "Main heading scale for high emphasis content.",
    tokens: [
      {
        name: "Display",
        sample: "Display",
        sizeVar: "--ds-typography-display-size",
        lineHeightVar: "--ds-typography-display-line-height",
        weightVar: "--ds-typography-display-weight",
        size: "68px",
        lineHeight: "92px",
        weight: 600,
        previewSize: "42px",
        previewLineHeight: "50px",
      },
      {
        name: "Large Title",
        sample: "Large Title",
        sizeVar: "--ds-typography-largeTitle-size",
        lineHeightVar: "--ds-typography-largeTitle-line-height",
        weightVar: "--ds-typography-largeTitle-weight",
        size: "40px",
        lineHeight: "52px",
        weight: 600,
        previewSize: "34px",
        previewLineHeight: "42px",
      },
      {
        name: "Title 1",
        sample: "Title 1",
        sizeVar: "--ds-typography-title1-size",
        lineHeightVar: "--ds-typography-title1-line-height",
        weightVar: "--ds-typography-title1-weight",
        size: "32px",
        lineHeight: "40px",
        weight: 600,
        previewSize: "30px",
        previewLineHeight: "38px",
      },
      {
        name: "Title 2",
        sample: "Title 2",
        sizeVar: "--ds-typography-title2-size",
        lineHeightVar: "--ds-typography-title2-line-height",
        weightVar: "--ds-typography-title2-weight",
        size: "28px",
        lineHeight: "36px",
        weight: 600,
        previewSize: "27px",
        previewLineHeight: "34px",
      },
      {
        name: "Title 3",
        sample: "Title 3",
        sizeVar: "--ds-typography-title3-size",
        lineHeightVar: "--ds-typography-title3-line-height",
        weightVar: "--ds-typography-title3-weight",
        size: "24px",
        lineHeight: "32px",
        weight: 600,
        previewSize: "24px",
        previewLineHeight: "32px",
      },
    ],
  },
  {
    title: "Subtitles",
    description: "Secondary heading styles and stronger subtitle alternative.",
    tokens: [
      {
        name: "Subtitle 1",
        sample: "Subtitle 1",
        sizeVar: "--ds-typography-subtitle1-size",
        lineHeightVar: "--ds-typography-subtitle1-line-height",
        weightVar: "--ds-typography-subtitle1-weight",
        size: "20px",
        lineHeight: "26px",
        weight: 600,
        previewSize: "20px",
        previewLineHeight: "26px",
      },
      {
        name: "Subtitle 2 Stronger",
        sample: "Subtitle 2 Stronger",
        sizeVar: "--ds-typography-subtitle2-size",
        lineHeightVar: "--ds-typography-subtitle2-line-height",
        weightVar: "--ds-typography-subtitle2Stronger-weight",
        size: "16px",
        lineHeight: "22px",
        weight: 700,
        previewSize: "16px",
        previewLineHeight: "22px",
      },
      {
        name: "Subtitle 2",
        sample: "Subtitle 2",
        sizeVar: "--ds-typography-subtitle2-size",
        lineHeightVar: "--ds-typography-subtitle2-line-height",
        weightVar: "--ds-typography-subtitle2-weight",
        size: "16px",
        lineHeight: "22px",
        weight: 600,
        previewSize: "16px",
        previewLineHeight: "22px",
      },
    ],
  },
  {
    title: "Body",
    description: "Paragraph styles for standard and emphasized reading blocks.",
    tokens: [
      {
        name: "Body 1 Stronger",
        sample: "Body 1 Stronger",
        sizeVar: "--ds-typography-body1-size",
        lineHeightVar: "--ds-typography-body1-line-height",
        weightVar: "--ds-typography-body1Stronger-weight",
        size: "14px",
        lineHeight: "20px",
        weight: 700,
        previewSize: "14px",
        previewLineHeight: "20px",
      },
      {
        name: "Body 1 Strong",
        sample: "Body 1 Strong",
        sizeVar: "--ds-typography-body1-size",
        lineHeightVar: "--ds-typography-body1-line-height",
        weightVar: "--ds-typography-body1Strong-weight",
        size: "14px",
        lineHeight: "20px",
        weight: 600,
        previewSize: "14px",
        previewLineHeight: "20px",
      },
      {
        name: "Body 1",
        sample: "Body 1",
        sizeVar: "--ds-typography-body1-size",
        lineHeightVar: "--ds-typography-body1-line-height",
        weightVar: "--ds-typography-body1-weight",
        size: "14px",
        lineHeight: "20px",
        weight: 400,
        previewSize: "14px",
        previewLineHeight: "20px",
      },
    ],
  },
  {
    title: "Captions",
    description: "Small text styles for metadata, helpers and compact labels.",
    tokens: [
      {
        name: "Caption 1 Stronger",
        sample: "Caption 1 Stronger",
        sizeVar: "--ds-typography-caption1-size",
        lineHeightVar: "--ds-typography-caption1-line-height",
        weightVar: "--ds-typography-caption1Stronger-weight",
        size: "12px",
        lineHeight: "16px",
        weight: 700,
        previewSize: "12px",
        previewLineHeight: "16px",
      },
      {
        name: "Caption 1 Strong",
        sample: "Caption 1 Strong",
        sizeVar: "--ds-typography-caption1-size",
        lineHeightVar: "--ds-typography-caption1-line-height",
        weightVar: "--ds-typography-caption1Strong-weight",
        size: "12px",
        lineHeight: "16px",
        weight: 600,
        previewSize: "12px",
        previewLineHeight: "16px",
      },
      {
        name: "Caption 1",
        sample: "Caption 1",
        sizeVar: "--ds-typography-caption1-size",
        lineHeightVar: "--ds-typography-caption1-line-height",
        weightVar: "--ds-typography-caption1-weight",
        size: "12px",
        lineHeight: "16px",
        weight: 400,
        previewSize: "12px",
        previewLineHeight: "16px",
      },
      {
        name: "Caption 2 Strong",
        sample: "Caption 2 Strong",
        sizeVar: "--ds-typography-caption2-size",
        lineHeightVar: "--ds-typography-caption2-line-height",
        weightVar: "--ds-typography-caption2Strong-weight",
        size: "10px",
        lineHeight: "14px",
        weight: 600,
        previewSize: "10px",
        previewLineHeight: "14px",
      },
      {
        name: "Caption 2",
        sample: "Caption 2",
        sizeVar: "--ds-typography-caption2-size",
        lineHeightVar: "--ds-typography-caption2-line-height",
        weightVar: "--ds-typography-caption2-weight",
        size: "10px",
        lineHeight: "14px",
        weight: 400,
        previewSize: "10px",
        previewLineHeight: "14px",
      },
    ],
  },
];

const TypographyLightView = () => (
  <div className="ds-typography-page" data-theme="light">
    {TYPOGRAPHY_SECTIONS.map((section) => (
      <section key={section.title} className="ds-typography-page__section">
        <h1 className="ds-typography-page__title">{section.title}</h1>
        <p className="ds-typography-page__description">{section.description}</p>

        <div className="ds-typography-page__grid">
          {section.tokens.map((token) => (
            <article key={`${section.title}-${token.name}`} className="ds-typography-token">
              <p
                className="ds-typography-token__sample"
                style={{
                  fontSize: token.previewSize,
                  lineHeight: token.previewLineHeight,
                  fontWeight: token.weight,
                }}
              >
                {token.sample}
              </p>
              <h2 className="ds-typography-token__name">{token.name}</h2>
              <p className="ds-typography-token__meta">Size: {token.size}</p>
              <p className="ds-typography-token__meta">Line-height: {token.lineHeight}</p>
              <p className="ds-typography-token__meta">Weight: {token.weight}</p>
              <p className="ds-typography-token__meta">
                Vars: {token.sizeVar} / {token.lineHeightVar} / {token.weightVar}
              </p>
            </article>
          ))}
        </div>
      </section>
    ))}
  </div>
);

const meta = {
  title: "Design Language/Typography/Light",
  component: TypographyLightView,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TypographyLightView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tokens: Story = {
  render: () => <TypographyLightView />,
};
