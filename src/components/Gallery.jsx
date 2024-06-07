import { Col, Card } from 'react-bootstrap';
import { FotoContext } from '../contexts/FotoContext';
import { useContext } from 'react';
import IconHeart from './IconHeart';

export default function Gallery({ filtro = 'home' }) {
  const { fotos } = useContext(FotoContext);

  return (
    <>
      {fotos
        .filter((foto) => (filtro === 'favoritos' ? foto.liked === true : true))
        .map((foto) => (
          <Col key={foto.id}>
            <Card className="text-white">
              <Card.Img variant="top" src={foto.src} alt={foto.alt} />
              <Card.ImgOverlay>
                <Card.Text className="text-end">
                  <IconHeart id={foto.id} />
                </Card.Text>
                <Card.Text className='position-absolute bottom-0 start-0'>{foto.alt}</Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
    </>
  );
}
