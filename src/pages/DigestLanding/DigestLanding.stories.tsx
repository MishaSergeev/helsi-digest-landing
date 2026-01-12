import type { Meta, StoryObj } from "@storybook/react";
import { DigestLanding } from "./DigestLanding";
import { WelcomeDigestContainer } from "./components/WelcomeDigestContainer/WelcomeDigestContainer";
import { DigestCalendar } from "./components/DigestCalendar/DigestCalendar";
import { mockDigests } from "../../mocks/digestMocks";

const meta: Meta<typeof DigestLanding> = {
  title: "Pages/DigestLanding",
  component: DigestLanding,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DigestLanding>;

export const Default: Story = {
  render: () => {
    const activeDigest = mockDigests[11];

    return (
      <div style={{ backgroundColor: activeDigest.backgroundColor }}>
        <div style={{ margin: "0 auto", maxWidth: 1128, display: "flex", flexDirection: "column" }}>
          <WelcomeDigestContainer digest={activeDigest} />
          <DigestCalendar digests={mockDigests} activeDigest={activeDigest} />
        </div>
      </div>
    );
  },
};
