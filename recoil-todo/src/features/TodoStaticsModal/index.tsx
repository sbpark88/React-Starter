import React, { useCallback, useState } from "react";
import styled from "@emotion/styled/macro";
import Modal from "../../components/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import COLORS from "../../constants/Colors";

const TodoActionButton = styled.button<{ secondary?: boolean }>`
  border: none;
  background-color: transparent;
  color: ${({ secondary }) => secondary && COLORS.CORAL};
  cursor: pointer;
`;

const TodoActions = styled.span`
  flex: 1 0 5%;
`;

const Content = styled.span`
  flex: 1 0 95%;
`;

const TodoItem = styled.li`
  width: 100%;
  display: flex;
  content: ${COLORS.LIGHT_GRAY};
  align-items: center;
  border-radius: 8px;
`;

const TodoList = styled.ul`
  list-style: circle;
  margin: 0;
  padding: 0;
  width: 100%;

  ${TodoItem} + ${TodoItem} {
    margin-top: 8px;
  }
`;

const Statistics = styled.p`
  color: ${COLORS.PURPLE};
  font-size: 16px;
  font-weight: bold;
`;

const Date = styled.small`
  display: block;
  color: ${COLORS.LIGHT_GRAY};
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: ${COLORS.DARK_BLACK};

  ${Date} + ${TodoList} {
    margin-top: 24px;
  }
`;

const Container = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const TodoStaticsModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Container>
        <Card>
          <Date>2023-11-11</Date>
          <Statistics>할 일 0개 남음</Statistics>
          <TodoList>
            <TodoItem>
              <Content></Content>
              <TodoActions>
                <TodoActionButton>
                  <HiOutlineTrash />
                </TodoActionButton>
              </TodoActions>
            </TodoItem>
          </TodoList>
        </Card>
      </Container>
    </Modal>
  );
};

export default TodoStaticsModal;
