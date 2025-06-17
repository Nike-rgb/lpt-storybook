import Input from "@/app/components/Input/Input";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { FiSearch } from "react-icons/fi";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    inputType: {
      control: { type: "radio" },
      options: ["text", "select", "radio"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

const EndButton = () => (
  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
    <FiSearch />
  </button>
);

export const Text: Story = {
  args: {
    name: "email",
    inputType: "text",
    placeholder: "Enter your email",
    value: "",
    required: true,
    actionButton: <EndButton />,
  },
};

export const Select: Story = {
  args: {
    name: "country",
    value: "",
    inputType: "select",
    placeholder: "Select country",
    options: ["USA", "India", "Germany"],
  },
};

export const Radio: Story = {
  args: {
    name: "gender",
    inputType: "radio",
    options: ["Male", "Female"],
    value: "Female",
  },
};
