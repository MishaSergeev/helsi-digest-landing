import type { Meta, StoryObj } from "@storybook/react";
import { DigestCard } from "./DigestCard";
import { mockDigest } from "../../../../mocks/digestMocks";

const meta: Meta<typeof DigestCard> = {
  title: "Components/DigestCard",
  component: DigestCard,
  tags: ["autodocs"],
  argTypes: {
    digest: { control: false },
    isActive: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof DigestCard>;

export const Default: Story = {
  args: {
    digest: mockDigest,
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    digest: mockDigest,
    isActive: true,
  },
};
