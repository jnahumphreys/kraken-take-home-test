import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { Specifications } from "./specifications";

const meta = {
  title: "Pages/Product/Specifications",
  component: Specifications,

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The `Specifications` component is used within a `Product` type page and renders the product specifications",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Specifications>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
