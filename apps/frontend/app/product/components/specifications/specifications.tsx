import { Container, Row, Typography } from "@/components";

type TermProps = {
  children?: React.ReactNode;
};

function Term(props: TermProps) {
  return <Typography as="dt" variant="body2" {...props} />;
}

type TermDescriptionProps = {
  children?: React.ReactNode;
};

function TermDescription(props: TermDescriptionProps) {
  return <Typography as="dd" variant="body2" {...props} />;
}

export function Specifications() {
  return (
    <Container
      as="section"
      className="bg-siphon"
      aria-labelledby="specification-heading"
    >
      <Row className="flex flex-col gap-5 py-5">
        <Typography id="specification-heading" variant="h2" as="h2">
          Specifications
        </Typography>
        <dl className="grid grid-cols-2 gap-5">
          <Term>Brand</Term>
          <TermDescription>Phillips</TermDescription>
          <Term>Item weight (g)</Term>
          <TermDescription>77</TermDescription>
          <Term>Dimensions (cm)</Term>
          <TermDescription>12.6 x 6.2 x 6.2</TermDescription>
          <Term>Item model number</Term>
          <TermDescription>E27 ES</TermDescription>
          <Term>Colour</Term>
          <TermDescription>Cool daylight</TermDescription>
        </dl>
      </Row>
    </Container>
  );
}
