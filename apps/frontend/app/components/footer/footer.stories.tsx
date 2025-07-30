import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Footer } from "./footer";

const meta = {
  title: "App/Layout/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The footer component displays legal and company information for Octopus Energy Ltd.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {} satisfies Story;
