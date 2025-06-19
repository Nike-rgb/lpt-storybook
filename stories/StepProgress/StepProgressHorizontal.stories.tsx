import StepProgressHorizontal from "@/app/components/StepProgress/StepProgressHorizontal";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof StepProgressHorizontal> = {
  title: "Components/StepProgressHorizontal",
  component: StepProgressHorizontal,
  tags: ["autodocs"],
  args: {
    steps: ["Submitted", "Under Review", "Approved", "Completed"],
  },
};

export default meta;
type Story = StoryObj<typeof StepProgressHorizontal>;

export const Default: Story = {
  args: {
    currentStep: 1,
    state: "progress",
  },
};
