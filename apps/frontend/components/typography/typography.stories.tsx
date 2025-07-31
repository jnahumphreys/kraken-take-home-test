import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";

import { Typography } from "./typography";

const meta = {
  title: "Components/Typography",
  component: Typography,
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
    layout: "padded",
    docs: {
      description: {
        component:
          "The `Typography` component is a generic polymophic component, used as a basis for all typographic elements",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "I'm a Typography component; I can support various tags and styles. By default I render as a paragraph tag.",
    id: "typography-component",
  },
  play: async ({ canvas }) => {
    await expect(canvas.getByRole("paragraph")).toHaveTextContent(
      "I'm a Typography component; I can support various tags and styles. By default I render as a paragraph tag.",
    );

    await expect(canvas.getByRole("paragraph")).toHaveAttribute(
      "id",
      "typography-component",
    );

    await expect(canvas.getByRole("paragraph").tagName).toBe("P");
  },
};

export const WithH2Variant: Story = {
  args: {
    ...Default.args,
    variant: "h2",
    as: "h2",
    children: "Here I render as a level 2 heading, with level 2 styling",
  },
  name: "With H2 Variant",

  play: async ({ canvas }) => {
    await expect(canvas.getByRole("heading")).toHaveTextContent(
      "Here I render as a level 2 heading, with level 2 styling",
    );

    await expect(canvas.getByRole("heading").tagName).toBe("H2");
  },
};

export const WithBody1Variant: Story = {
  args: {
    ...Default.args,
    variant: "body1",
    as: "p",
    children: "Here I render as a paragraph tag, with body1 styling",
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByRole("paragraph")).toHaveTextContent(
      "Here I render as a paragraph tag, with body1 styling",
    );

    await expect(canvas.getByRole("paragraph").tagName).toBe("P");
  },
};

export const WithCustomStyles: Story = {
  args: {
    ...Default.args,
    className: "text-purpleHaze",
    children:
      "I support passing styles via the classNames prop; don't go too crazy though, I knida like how I am!",
  },

  play: async ({ canvas }) => {
    await expect(canvas.getByRole("paragraph")).toHaveClass("text-purpleHaze");
  },
};
