import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Text } from './Text';

const meta = {
    title: 'Components/Text',
    component: Text,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'display',
                'largeTitle',
                'title1',
                'title2',
                'title3',
                'subtitle1',
                'subtitle2Stronger',
                'subtitle2',
                'body1Stronger',
                'body1Strong',
                'body1',
                'caption1Stronger',
                'caption1Strong',
                'caption1',
                'caption2Strong',
                'caption2',
            ],
        },
        as: {
            control: { type: 'select' },
            options: ['span', 'p', 'h1', 'h2', 'h3'],
        },
    },
} satisfies Meta<typeof Text>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Display: Story = {
    args: {
        variant: "display",
        as: "h1",
        label: "Display",
    },
};

export const LargeTitle: Story = {
    args: {
        variant: "largeTitle",
        as: "h1",
        label: "Large Title",
    },
};

export const Title1: Story = {
    args: {
        variant: "title1",
        as: "h2",
        label: "Title 1",
    },
};

export const Title2: Story = {
    args: {
        variant: "title2",
        as: "h2",
        label: "Title 2",
    },
};

export const Title3: Story = {
    args: {
        variant: "title3",
        as: "h3",
        label: "Title 3",
    },
};

export const Subtitle1: Story = {
    args: {
        variant: "subtitle1",
        as: "h3",
        label: "Subtitle 1",
    },
};

export const Body1Stronger: Story = {
    args: {
        variant: "body1Stronger",
        as: "p",
        label: "Body 1 Stronger",
    },
};

export const Body1Strong: Story = {
    args: {
        variant: "body1Strong",
        as: "p",
        label: "Body 1 Strong",
    },
};

export const Body1: Story = {
    args: {
        variant: "body1",
        as: "p",
        label: "Body 1",
    },
};

export const Caption1Stronger: Story = {
    args: {
        variant: "caption1Stronger",
        as: "span",
        label: "Caption 1 Stronger",
    },
};

export const Caption1Strong: Story = {
    args: {
        variant: "caption1Strong",
        as: "span",
        label: "Caption 1 Strong",
    },
};

export const Caption1: Story = {
    args: {
        variant: "caption1",
        as: "span",
        label: "Caption 1",
    },
};

export const Caption2Strong: Story = {
    args: {
        variant: "caption2Strong",
        as: "span",
        label: "Caption 2 Strong",
    },
};

export const Caption2: Story = {
    args: {
        variant: "caption2",
        as: "span",
        label: "Caption 2",
    },
};
