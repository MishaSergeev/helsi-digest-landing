import type { Meta, StoryObj } from "@storybook/react";
import { WelcomeDigestTitle } from "./WelcomeDigestTitle";

const meta: Meta<typeof WelcomeDigestTitle> = {
  title: "Atoms/WelcomeDigestTitle",
  component: WelcomeDigestTitle,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof WelcomeDigestTitle>;

export const Default: Story = {
  args: {
    text: "Ментальне здоров’я",
  },
};

export const LongText: Story = {
  args: {
    text: "Довгий текст для тестування стилів у компоненті, у разі якщо буде помилка з данним, чи щось ще...",
  },
};