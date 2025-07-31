import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { expect } from "storybook/test";
import { Container } from "@/components";
import { Row } from "./row";

const meta = {
  title: "Components/Row",
  component: Row,
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
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The `Row` component is a generic polymophic component, used in conjunction with a `Container` component to center child content within a maximum width container",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Row>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "I'm a Row component; I keep your content centered and within a maximum width",
    className: "bg-[white] text-[black] p-5 text-center",
    id: "row-component",
  },
  play: async ({ canvas }) => {
    await expect(
      canvas.getByText(
        "I'm a Row component; I keep your content centered and within a maximum width",
      ),
    ).toHaveAttribute("id", "row-component");

    await expect(
      canvas.getByText(
        "I'm a Row component; I keep your content centered and within a maximum width",
      ).tagName,
    ).toBe("DIV");

    await expect(
      canvas.getByText(
        "I'm a Row component; I keep your content centered and within a maximum width",
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
        "I'm a Row component; I keep your content centered and within a maximum width",
      ).tagName,
    ).toBe("SECTION");
  },
};
