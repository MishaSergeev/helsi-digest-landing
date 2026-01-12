import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestAction } from "./WelcomeDigestAction";

const meta: Meta<typeof WelcomeDigestAction> = {
  title: "Components/WelcomeDigestAction",
  component: WelcomeDigestAction,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WelcomeDigestAction>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{ marginBottom: "48px" }}>
        <button
          disabled
          style={{
            maxWidth: "328px",
            fontSize: "16px",
            padding: "13px 15px",
            borderRadius: "8px",
            backgroundColor: "#4ea5ff",
            color: "#fff",
            border: "1px solid #4ea5ff",
            cursor: "not-allowed",
          }}
        >
          Переглянути пропозиції дайджесту
        </button>
      </div>
    );
  },
};
