import PropertyCondition from "@/app/components/PropertyCondition/PropertyCondition";
import type { Meta, StoryObj } from "@storybook/nextjs";

const meta: Meta<typeof PropertyCondition> = {
  title: "Components/UploadSupportingImage",
  component: PropertyCondition,
  tags: ["autodocs"],
  args: {
    title: "Roof",
    imgSrc: "https://picsum.photos/400/200",
    btnText: "Upload images",
    onClickUpload: () => alert("Upload clicked!"),
    defaultChecked: false,
  },
};

export default meta;
type Story = StoryObj<typeof PropertyCondition>;

export const Default: Story = {};
