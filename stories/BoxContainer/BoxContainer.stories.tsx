import React from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import BoxContainer from "@/app/components/BoxContainer/BoxContainer";

const meta: Meta<typeof BoxContainer> = {
  title: "Layout/Container",
  component: BoxContainer,
  tags: ["autodocs"],
  argTypes: {
    radius: {
      control: { type: "number" },
    },
    padding: {
      control: { type: "text" },
    },
    background: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "select" },
      options: ["default", "bordered-left"],
      defaultValue: "default",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BoxContainer>;

export const Default: Story = {
  args: {
    children: <p>This is the default Container</p>,
    variant: "default",
  },
};

export const BorderedLeft: Story = {
  args: {
    children: <p>This Container has a left border</p>,
    variant: "bordered-left",
  },
};
