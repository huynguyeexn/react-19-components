import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Button from "@/components/button";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const Primary: Story = {
  args: {
    type: "primary",
    label: "Button",
  },
};

export const Dashed: Story = {
  args: {
    type: "dashed",
    label: "Button",
  },
};

export const Link: Story = {
  args: {
    type: "link",
    label: "Button",
  },
};

export const Text: Story = {
  args: {
    type: "text",
    label: "Button",
  },
};
