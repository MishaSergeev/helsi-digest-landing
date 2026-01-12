import type { Meta, StoryObj } from "@storybook/react";
import { DigestCalendar } from "./DigestCalendar";
import { mockDigests } from "../../../../mocks/digestMocks";

const meta: Meta<typeof DigestCalendar> = {
  title: "Components/DigestCalendar",
  component: DigestCalendar,
  tags: ["autodocs"],
  argTypes: {
    activeDigest: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof DigestCalendar>;

export const Default: Story = {
  args: {
    digests: mockDigests,
    activeDigest: null,
  },
};

export const WithActiveDigest: Story = {
  args: {
    digests: mockDigests,
    activeDigest: mockDigests[11], 
  },
};