import { Card, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {

  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/${item.id}`, { state: item })}>
      <Card.Body>
        <Card.Title>{item.item_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{item.description}</Card.Subtitle>
        <Badge pill bg="secondary">Quantity: {item.quantity}</Badge>
      </Card.Body>
    </Card>
  )
}

export default ItemCard;