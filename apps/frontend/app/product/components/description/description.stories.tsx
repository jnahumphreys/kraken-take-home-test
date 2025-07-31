import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect, within } from "storybook/test";

import { Description } from "./description";

const meta = {
  title: "Pages/Product/Description",
  component: Description,

  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The `Description` component is used within a `Product` type page and renders the product description",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Description>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas }) => {
    const descriptionRegion = canvas.getByRole("region", {
      name: "Description",
    });

    await expect(descriptionRegion).toBeInTheDocument();

    const regionQueries = within(descriptionRegion);
    const heading = regionQueries.getByRole("heading", { level: 2 });
    await expect(heading).toHaveTextContent("Description");

    const paragraph = regionQueries.getByRole("paragraph");
    await expect(paragraph.tagName).toBe("P");
    await expect(paragraph).toHaveTextContent(
      "Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb switches on instantly, no wait around warm start and flicker free features make for a great all purpose bulb",
    );
  },
};
