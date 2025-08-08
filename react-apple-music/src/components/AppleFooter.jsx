import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer-custom">
      <Container>
        <Row className="text-start">
          <Col>
            <a href="#italiano">Italia</a> | <a href="#english">English (UK)</a>
          </Col>
        </Row>
        <hr />
        <Row className="text-start">
          <Col className="text-muted">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </Col>
        </Row>
        <Row className="text-start mt-3">
          <Col>
            <a href="#termini">Condizioni dei servizi internet</a> |{' '}
            <a href="#privacy">Apple Music e privacy</a> |{' '}
            <a href="#cookie">Avviso sui cookie</a> |{' '}
            <a href="#supporto">Supporto</a> |{' '}
            <a href="#feedback">Feedback</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;