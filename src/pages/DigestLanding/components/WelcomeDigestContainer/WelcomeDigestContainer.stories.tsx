import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestContainer } from "./WelcomeDigestContainer";
import { mockDigest } from "../../../../mocks/digestMocks";

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
    subtitle: "Дайджест січня від Helsi:",
    title: "Ментальне здоров’я",
    description:
      "Дайджест — це цілий рік пропозицій для здоровʼя...",
    digest: mockDigest,
  },
};

export const LongTexts: Story = {
  args: {
    subtitle: "Дуже довгий підзаголовок для перевірки на нові рядки",
    title:
      "Дуже довгий заголовок для перевірки як він переноситься на нові рядки",
    description:
      "Дуже довгий опис для перевірки як він переноситься на нові рядки",
    digest: mockDigest,
  },
};
