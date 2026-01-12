import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestImage } from "./WelcomeDigestImage";
import { mockDigest } from "../../../../mocks/digestMocks";

const meta: Meta<typeof WelcomeDigestImage> = {
  title: "Atoms/WelcomeDigestImage",
  component: WelcomeDigestImage,
  tags: ["autodocs"],
  argTypes: {
    isMobile: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeDigestImage>;

export const Desktop: Story = {
  render: () => <WelcomeDigestImage digest={mockDigest} />,
};

export const Mobile: Story = {
  render: () => (
    <div style={{ maxWidth: "375px" }}>
      <WelcomeDigestImage digest={{ ...mockDigest, webImage: mockDigest.mobileImage }} />
    </div>
  ),
};
