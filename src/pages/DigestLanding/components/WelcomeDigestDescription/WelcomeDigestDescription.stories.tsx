import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestDescription } from "./WelcomeDigestDescription";

const meta: Meta<typeof WelcomeDigestDescription> = {
  title: "Components/WelcomeDigestDescription",
  component: WelcomeDigestDescription,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeDigestDescription>;

export const Default: Story = {
  args: {
    text: "Дайджест — це цілий рік пропозицій для здоровʼя, знижок на медичні послуги та товари для здоров’я, корисний контент, щоб ви могли піклуватись про свій організм комфортно та без зайвих зусиль.",
  },
};