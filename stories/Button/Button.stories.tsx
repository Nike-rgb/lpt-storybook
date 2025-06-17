import Button, { ButtonProps } from "@/app/components/Button/Button";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { BiPlus } from "react-icons/bi";

const meta: Meta<ButtonProps> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["contained", "outlined", "ghost"],
    },
    buttonType: {
      control: { type: "radio" },
      options: ["button", "icon-button", "fab"],
    },
    size: {
      control: { type: "radio" },
      options: ["small", "default", "large"],
    },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const ButtonExample: Story = {
  args: {
    text: "Button",
    variant: "contained",
    buttonType: "button",
    size: "default",
    startIcon: <BiPlus />,
    disabled: false,
  },
};
