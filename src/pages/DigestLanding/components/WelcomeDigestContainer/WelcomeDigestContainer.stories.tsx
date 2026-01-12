import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestContainer } from "./WelcomeDigestContainer";
import { mockDigest, mockDigestLong } from "../../../../mocks/digestMocks";

const meta: Meta<typeof WelcomeDigestContainer> = {
  title: "Organisms/WelcomeDigestContainer",
  component: WelcomeDigestContainer,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeDigestContainer>;

export const Default: Story = {
  args: {
    digest: mockDigest,
  },
};

export const LongTexts: Story = {
  args: {
    digest: mockDigestLong,
  },
};
