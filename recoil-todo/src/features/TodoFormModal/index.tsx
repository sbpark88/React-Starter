import React, { useCallback, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled/macro";
import COLORS from "../../constants/Colors";
import Modal from "../../components/Modal";
import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { v4 as uuidv4 } from "uuid";
import { selectedDateState, Todo, todoListState } from "../TodoList/atom";
import { todoFormModalOpenState } from "./atom";
import { getSimpleDateFormat } from "../../utils/CalendarUtils";

const Date = styled.small`
  display: block;
  color: ${COLORS.LIGHT_GRAY};
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: ${COLORS.LIGHT_GRAY};
  caret-color: ${COLORS.LIGHT_GRAY};
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: ${COLORS.DARK_BLACK};

  ${Date} + ${InputTodo} {
    margin-top: 24px;
  }
`;

const Container = styled.div`
  width: 100vw;
  max-height: 386px;
  padding: 8px;
`;

const TodoFormModal: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [todo, setTodo] = useState<string>("");
  const [isOpen, setIsOpen] = useRecoilState<boolean>(todoFormModalOpenState);

  const selectedDate = useRecoilValue(selectedDateState);
  const todoList = useRecoilValue(todoListState);

  const reset = () => {
    setTodo("");
    inputRef.current?.focus();
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const addTodo = useRecoilCallback(
    ({ snapshot, set }) =>
      () => {
        const todoList = snapshot.getLoadable(todoListState).getValue();
        console.log(todoList);
        const newTodo: Todo = {
          id: uuidv4(),
          content: todo,
          done: false,
          date: selectedDate,
        };
        set(todoListState, [...todoList, newTodo]);
      },
    [todo, selectedDate, todoList],
  );

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    addTodo();
    reset();
    handleClose();
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Container>
        <Card>
          <Date>{getSimpleDateFormat(selectedDate)}</Date>
          <InputTodo
            ref={inputRef}
            placeholder="새로운 이벤트"
            onKeyDown={handleKeyPress}
            onChange={handleChange}
          />
        </Card>
      </Container>
    </Modal>
  );
};

export default TodoFormModal;
