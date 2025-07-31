import { Container, Row, Typography } from "@/components";

export function Description() {
  return (
    <Container
      as="section"
      className="bg-hemocyanin"
      aria-labelledby="description-heading"
    >
      <Row className="flex flex-col gap-5 py-5">
        <Typography id="description-heading" variant="h2" as="h2">
          Description
        </Typography>
        <Typography variant="body1">
          Available in 7 watts, 9 watts, 11 watts Spiral Light bulb in B22, bulb
          switches on instantly, no wait around warm start and flicker free
          features make for a great all purpose bulb
        </Typography>
      </Row>
    </Container>
  );
}
