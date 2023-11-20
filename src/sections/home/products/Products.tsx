import { Column, Container, Row } from "@/styles";
import { ProductsDesc, ProductsTitle, ProductsWrap } from "./products.s";
import { ProductItem } from "./components";

const products = [1,2,3,4,5,6,7,8,9,]

export const Products = () => {
  return (
    <ProductsWrap>
      <Container>
        <ProductsTitle>The most popular ads</ProductsTitle>
        <ProductsDesc>
          Lorem ipsum dolor sit amet consectetur. Ipsum nibh risus vitae etiam
          vulputate. Leo ornare sed phasellus enim.
        </ProductsDesc>
        <Column width="100%" gap={14}>
          {products.map((product, index) => (
            <Row size={3} difference={10.5} key={index} >
              <ProductItem />
            </Row>
          ))}
        </Column>
      </Container>
    </ProductsWrap>
  );
};
