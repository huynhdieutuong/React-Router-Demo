import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Col
} from "reactstrap";

const BlogItem = ({ blog }) => {
  return (
    <Col xs="12" sm="6" md="3" className="mb-3">
      <Card>
        <CardImg top width="100%" src={blog.coverUrl} alt={blog.title} />
        <CardBody>
          <CardTitle>{blog.title.toUpperCase()}</CardTitle>
          <CardText>{blog.description.slice(0, 50) + '...'}</CardText>
          <Button color="primary">Read More</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlogItem;
