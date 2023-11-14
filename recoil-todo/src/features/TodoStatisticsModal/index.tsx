import React, { useCallback, useState } from "react";
import styled from "@emotion/styled/macro";
import Modal from "../../components/Modal";
import { HiOutlineTrash } from "react-icons/hi";
import COLORS from "../../constants/Colors";
import { useRecoilCallback, useRecoilState, useRecoilValue } from "recoil";
import { todoStatisticsModalOpenState, todoStatisticsState } from "./atom";
import {
  filteredTodoListState,
  selectedDateState,
  Todo,
  todoListState,
} from "../TodoList/atom";

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

const TodoStatisticsModal: React.FC = () => {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  const [isOpen, setIsOpen] = useRecoilState<boolean>(
    todoStatisticsModalOpenState,
  );

  const selectedDate: Date = useRecoilValue(selectedDateState);

  const filteredTodoList: Todo[] = useRecoilValue(
    filteredTodoListState(selectedDate),
  );

  const statistics = useRecoilValue(todoStatisticsState(selectedDate));

  const handleClose = () => {
    setIsOpen(false);
  };

  const removeTodo = (id: string) => {
    debugger;
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Container>
        <Card>
          <Date>2023-11-11</Date>
          <Statistics>
            할 일 {statistics.total - statistics.done}개 남음
          </Statistics>
          <TodoList>
            {filteredTodoList.map((todo) => (
              <TodoItem key={todo.id}>
                <Content>{todo.content}</Content>
                <TodoActions>
                  <TodoActionButton
                    secondary
                    onClick={() => removeTodo(todo.id)}
                  >
                    <HiOutlineTrash />
                  </TodoActionButton>
                </TodoActions>
              </TodoItem>
            ))}
          </TodoList>
        </Card>
      </Container>
    </Modal>
  );
};

export default TodoStatisticsModal;
