import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationComponent = (props) => {
  const { handlePageChange, currPage, totalPages, totalCount } = props;

  if (totalPages <= 5) {
    return (
      <div>
        <Pagination aria-label="Page navigation">
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>
          {totalPages >= 2 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(2)}>
                2
              </PaginationLink>
            </PaginationItem>
          )}

          {totalPages >= 3 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(3)}>
                3{" "}
              </PaginationLink>
            </PaginationItem>
          )}

          {totalPages >= 4 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(4)}>
                4
              </PaginationLink>
            </PaginationItem>
          )}

          {totalPages >= 5 && (
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(5)}>
                5{" "}
              </PaginationLink>
            </PaginationItem>
          )}
        </Pagination>
      </div>
    );
  }

  return (
    <div style={{margin:"0 auto", textAlign:"center"}}>
      <Pagination aria-label="Page navigation">
        <PaginationItem>
          <PaginationLink first onClick={() => handlePageChange(1)} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            previous
            onClick={() => {
              if (currPage > 1) handlePageChange(currPage - 1);
            }}
          />
        </PaginationItem>

        {currPage - 2 > 0 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages - 2)}>
              {" "}
              ...{" "}
            </PaginationLink>
          </PaginationItem>
        )}

        {currPage - 1 > 0 && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages - 1)}>
              {" "}
              {currPage - 1}{" "}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
        <PaginationLink active ><div style={{fontWeight:"bold", }}>{currPage}</div></PaginationLink>
        </PaginationItem>

        {currPage < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages + 1)}>
              {" "}
              {currPage + 1}{" "}
            </PaginationLink>
          </PaginationItem>
        )}

        {currPage + 2 < totalPages && (
          <PaginationItem>
            <PaginationLink onClick={() => handlePageChange(totalPages + 2)}>
              {" "}
              ...{" "}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink next onClick={() => {if (currPage + 1 < totalPages) handlePageChange(currPage + 1)}} />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last onClick={() => handlePageChange(totalPages)} />
        </PaginationItem>
      </Pagination>
    </div>
  );
};

export default PaginationComponent;
