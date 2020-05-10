import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Example = ({ pagination: { page, prev, next }, onLoadPage }) => {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled={prev ? false : true}>
        <PaginationLink previous href="#" onClick={() => onLoadPage(prev)} />
      </PaginationItem>
      {prev && (
        <PaginationItem>
          <PaginationLink href="#" onClick={() => onLoadPage(prev)}>
            {prev}
          </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem>
        <PaginationLink href="#">{page}</PaginationLink>
      </PaginationItem>
      {next && (
        <PaginationItem>
          <PaginationLink href="#" onClick={() => onLoadPage(next)}>
            {next}
          </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem disabled={next ? false : true}>
        <PaginationLink next href="#" onClick={() => onLoadPage(next)} />
      </PaginationItem>
    </Pagination>
  );
};

export default Example;
