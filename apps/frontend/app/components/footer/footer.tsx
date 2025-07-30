import { Container, Row } from "@/components";

function Footer() {
  return (
    <Container className="bg-hemocyanin px-5" as="footer">
      <Row className="py-5 text-xs leading-tight text-purpleHaze md:flex md:flex-col md:md:gap-y-1">
        <small>
          Octopus Energy Ltd is a company registered in England and Wales.
        </small>
        <small>
          Registered number: 09263424. Registered office: 33 Holborn, London,
          EC1N 2HT. Trading office: 20-24 Broadwick Street, London, W1F 8HT
        </small>
      </Row>
    </Container>
  );
}

export { Footer };
