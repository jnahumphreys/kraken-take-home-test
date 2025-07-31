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

export const Default: Story = {
  play: async ({ canvas }) => {
    const specificationsRegion = canvas.getByRole("region", {
      name: "Specifications",
    });

    await expect(specificationsRegion).toBeInTheDocument();

    const regionQueries = within(specificationsRegion);
    const heading = regionQueries.getByRole("heading", { level: 2 });
    await expect(heading).toHaveTextContent("Specifications");

    const terms = regionQueries.getAllByRole("term");
    await expect(terms).toHaveLength(5);

    const definitions = regionQueries.getAllByRole("definition");
    await expect(definitions).toHaveLength(5);

    await expect(regionQueries.getByText("Brand")).toBeInTheDocument();
    await expect(regionQueries.getByText("Phillips")).toBeInTheDocument();

    await expect(
      regionQueries.getByText("Item weight (g)"),
    ).toBeInTheDocument();
    await expect(regionQueries.getByText("77")).toBeInTheDocument();
  },
};
