import React, { useState } from "react";
import { Row } from "reactstrap";

import BlogItem from "./BlogItem";

const Blogs = ({ blogs }) => {
  return (
    <Row>
      {blogs.length > 0 &&
        blogs.map((blog, index) => <BlogItem blog={blog} index={index} />)}
    </Row>
  );
};

export default Blogs;
