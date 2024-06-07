import { Container, Row } from 'react-bootstrap';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="my-3">Fotos de Chile</h1>
        <Row xs={2} md={3} lg={5} className="g-3 mb-3">
          <Gallery filtro={'home'}/>
        </Row>
      </Container>
    </>
  );
}
