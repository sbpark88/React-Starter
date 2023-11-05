import React from "react";
import usePagination, {
  Props as PaginationProps,
} from "../hooks/usePagination";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import styled from "@emotion/styled/macro";
import { AiOutlineEllipsis } from "react-icons/ai";

// const Navigation = function ({ children }: any) {
//   return <div></div>;
// };

const Navigation = styled.div``;

const Button = styled.button<{ selected?: boolean }>`
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: 0;
  margin: 0;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: normal;
  background-color: ${({ selected }) => (selected ? "#3d6afe" : "#fff")};
  cursor: pointer;
  border-radius: 100%;
  width: 48px;
  height: 48px;

  &:hover {
    background-color: #ccc;
    color: #fff;
  }

  &:active {
    opacity: 0.8;
  }
`;

const PaginationItem = styled.li``;

const PaginationItemList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  ${PaginationItem} + ${PaginationItem} {
    margin-left: 8px;
  }
`;

const Pagination: React.FC<PaginationProps> = ({
  count,
  page,
  onPageChange,
  disabled,
  siblingCount,
  boundaryCount,
}) => {
  const { items } = usePagination({
    count,
    page,
    onPageChange,
    disabled,
    siblingCount,
    boundaryCount,
  });

  const getLabel = (item: number | string) => {
    if (typeof item === "number") return item;
    else if (item.indexOf("ellipsis") > -1) return <AiOutlineEllipsis />;
    else if (item.indexOf("prev") > -1) return <GrFormPrevious />;
    else if (item.indexOf("next") > -1) return <GrFormNext />;
    else return item;
  };

  return (
    <Navigation>
      <PaginationItemList>
        {items.map(({ key, onClick, disabled, selected, item }) => (
          <PaginationItem key={key}>
            <Button onClick={onClick} disabled={disabled} selected={selected}>
              {getLabel(item)}
            </Button>
          </PaginationItem>
        ))}
      </PaginationItemList>
    </Navigation>
  );
};

export default Pagination;
