import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Row } from "@/components";
import { Container } from "./container";

const meta = {
  title: "Components/Container",
  component: Container,
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
  subcomponents: { Row },
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The `Container` component is a generic polymophic component, used in conjunction with a `Row` component to layout page content",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "I'm a Container component; I'm responsible for the layout of your content",
    className: "bg-[white] text-[black] p-5 text-center",
    id: "container-component",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(
        "I'm a Container component; I'm responsible for the layout of your content",
      ),
    ).toHaveAttribute("id", "container-component");

    await expect(
      canvas.getByText(
        "I'm a Container component; I'm responsible for the layout of your content",
      ).tagName,
    ).toBe("DIV");

    await expect(
      canvas.getByText(
        "I'm a Container component; I'm responsible for the layout of your content",
      ),
    ).toHaveClass("bg-[white] text-[black] p-5 text-center");
  },
};

export const WithCustomTag: Story = {
  args: {
    ...Default.args,
    as: "section",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(
        "I'm a Container component; I'm responsible for the layout of your content",
      ).tagName,
    ).toBe("SECTION");
  },
};
