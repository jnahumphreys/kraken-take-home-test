import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Box } from "./box";

const meta = {
  title: "Components/Box",
  component: Box,
  argTypes: {
    children: {
      control: false,
    },
    as: {
      control: false,
    },
    className: {
      control: false,
    },
    id: {
      control: false,
    },
  },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The box component is a generic polymophic component, used as a basis for other compositional React components",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "I'm a Box component; I may be small, but I'm very mighty!",
    as: "section",
    className: "bg-[white] text-[black] p-5 text-center",
    id: "box-component",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(
        "I'm a Box component; I may be small, but I'm very mighty!",
      ),
    ).toHaveAttribute("id", "box-component");

    await expect(
      canvas.getByText(
        "I'm a Box component; I may be small, but I'm very mighty!",
      ).tagName,
    ).toBe("SECTION");

    await expect(
      canvas.getByText(
        "I'm a Box component; I may be small, but I'm very mighty!",
      ),
    ).toHaveClass("bg-[white] text-[black] p-5 text-center", { exact: true });
  },
};
