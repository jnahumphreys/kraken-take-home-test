import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

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

export const Default: Story = {
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("contentinfo")).toHaveTextContent(
      "Octopus Energy Ltd is a company registered in England and Wales.Registered number: 09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT",
    );
  },
};

export const ViewportSm: Story = {
  globals: {
    viewport: { value: "sm", isRotated: false },
  },
};

export const ViewportMd: Story = {
  globals: {
    viewport: { value: "md", isRotated: false },
  },
};

export const ViewportLg: Story = {
  globals: {
    viewport: { value: "lg", isRotated: false },
  },
};

export const ViewportXl: Story = {
  globals: {
    viewport: { value: "xl", isRotated: false },
  },
};
