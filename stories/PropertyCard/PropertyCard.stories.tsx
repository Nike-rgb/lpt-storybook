import PropertyCard from "@/app/components/PropertyCard/PropertyCard";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { FaMapMarkerAlt } from "react-icons/fa";

const meta: Meta<typeof PropertyCard> = {
  title: "Components/PropertyCard",
  component: PropertyCard,
};

export default meta;

type Story = StoryObj<typeof PropertyCard>;

export const Default: Story = {
  args: {
    image: "https://picsum.photos/800/200",
    location: {
      location: "305 Higgins Canyon Rd, Half Moon Bay, CA 94019, United States",
      icon: <FaMapMarkerAlt className="text-gray-500" size={20} />,
    },
    savings: {
      estimate: "690",
      bonus: "100",
    },
    containerRadius: "rounded-xl ",
    actionButton: true,
    openOptions: () => alert("Options clicked"),
  },
};
