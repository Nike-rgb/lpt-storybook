import StepProgressVertical from "@/app/components/StepProgress/StepProgressVertical";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof StepProgressVertical> = {
  title: "Components/StepProgressVertical",
  component: StepProgressVertical,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof StepProgressVertical>;

export const WithoutSubSteps: Story = {
  args: {
    currentStep: 1,
    state: "progress",
    steps: [
      { title: "Submitted" },
      { title: "Under Review" },
      { title: "Approved" },
      { title: "Completed" },
    ],
  },
};

export const WithSubSteps: Story = {
  args: {
    currentStep: 1,
    state: "progress",
    steps: [
      { title: "Submitted" },
      {
        title: "Under Review",
        substeps: {
          steps: ["Initial Review", "Final Review"],
          currentSubstep: 0,
          status: "progress",
        },
      },
      {
        title: "Approved",
        substeps: {
          steps: [
            "Approval Notification",
            "Documentation",
            "Payment Processing",
          ],
          currentSubstep: 0,
          status: "progress",
        },
      },
      {
        title: "Completed",
        substeps: {
          steps: ["Final Steps", "Feedback Collection"],
          currentSubstep: 0,
          status: "progress",
        },
      },
    ],
  },
};
