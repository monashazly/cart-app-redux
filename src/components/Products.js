import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img style={{ height : '200px' , width:'200px'}} src={product.image} />
              <Card.Body>
                <Card.Title>{product.Title}</Card.Title>
                <Card.Text>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  {product.price}$
                </Card.Text>
                <Button variant="primary" onClick={()=>{
                   dispatch(addToCart(product))
                }}>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
