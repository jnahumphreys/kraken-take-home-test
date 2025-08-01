import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { ProductTitle } from "./product-title";

const meta = {
  title: "Pages/Product/ProductTitle",
  component: ProductTitle,

  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "The `ProductTitle` component is a child of `ProductHeader` and used within a `Product` type page to display the product title and subtitle",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProductTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithSubtitle: Story = {
  args: {
    title: "Energy saving light bulb",
    subtitle: "25W // Packet of 4",
  },
  play: async ({ canvas }) => {
    const titleRegion = canvas.getByRole("banner");

    const regionQueries = within(titleRegion);
    const title = regionQueries.getByRole("heading", { level: 1 });
    await expect(title).toHaveTextContent("Energy saving light bulb");

    const subTitle = regionQueries.getByRole("paragraph");
    await expect(subTitle).toHaveTextContent("25W // Packet of 4");
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: WithSubtitle.args.title,
  },
  play: async ({ canvas }) => {
    const titleRegion = canvas.getByRole("banner");

    const regionQueries = within(titleRegion);
    const title = regionQueries.getByRole("heading", { level: 1 });
    await expect(title).toHaveTextContent("Energy saving light bulb");

    const subTitle = regionQueries.queryByRole("paragraph");
    await expect(subTitle).toBeNull();
  },
};
