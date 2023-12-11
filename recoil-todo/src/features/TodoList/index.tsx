import React from "react";
import styled from "@emotion/styled/macro";
import COLORS from "../../constants/Colors";
import { OptionalTodo, selectedTodoState, Todo, todoListState } from "./atom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { todoStatisticsModalOpenState } from "../TodoStatisticsModal/atom";

const TodoItem = styled.li<{ done?: boolean; selected?: boolean }>`
  max-width: 100px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  background-color: ${({ done, selected }) =>
    selected ? COLORS.PURPLE : done ? "transparent" : COLORS.OPAQUE_PURPLE};
  padding: 2px 4px;
  margin: 0;
  border-radius: 8px;
  font-size: 10px;
  text-decoration: ${({ done }) => done && "line-through"};
  cursor: pointer;
`;

const EtcItem = styled.li`
  padding: 2px 4px;
  margin: 0;
  font-size: 10px;
  cursor: pointer;
`;

const Base = styled.ul`
  list-style: none;
  margin: 36px 0 0 0;
  padding: 0;
  width: 100%;
  height: 60px;

  ${TodoItem} + ${TodoItem} {
    margin-top: 1px;
  }

  ${TodoItem} + ${EtcItem} {
    margin-top: 1px;
  }
`;

interface Props {
  todos: Array<Todo>;
}

const MAX_TODO_DISPLAY_LENGTH = 3;

const TodoList: React.FC<Props> = ({ todos }) => {
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);
  const selectedTodo = useRecoilValue<OptionalTodo>(selectedTodoState);

  const setSelectedTodo = useSetRecoilState<OptionalTodo>(selectedTodoState);
  const setTodoStatisticsModalOpen = useSetRecoilState<boolean>(
    todoStatisticsModalOpenState,
  );

  const handleClick = (e: React.SyntheticEvent<HTMLLIElement>, todo: Todo) => {
    e.stopPropagation();
    setSelectedTodo(
      selectedTodo?.id === todo.id && selectedTodo.date === todo.date
        ? null
        : todo,
    );
  };

  const makeTodoDone = (e: React.SyntheticEvent<HTMLLIElement>, todo: Todo) => {
    e.stopPropagation();

    setTodoList((currVal) =>
      currVal.map((value) =>
        value.id === todo.id ? { ...value, done: true } : value,
      ),
    );
  };

  const handleTodoStatisticsModalOpen = (
    e: React.SyntheticEvent<HTMLLIElement>,
  ) => {
    e.stopPropagation();
    setTodoStatisticsModalOpen(true);
  };

  return (
    <Base>
      {todos.slice(0, MAX_TODO_DISPLAY_LENGTH).map((todo, index) => (
        <TodoItem
          key={todo.id}
          done={todo.done}
          onClick={(e) => handleClick(e, todo)}
          onDoubleClick={(e) => makeTodoDone(e, todo)}
        >
          {todo.content}
        </TodoItem>
      ))}
      {todos.length > MAX_TODO_DISPLAY_LENGTH && (
        <EtcItem onClick={handleTodoStatisticsModalOpen}>{`그 외 ${
          todos.length - MAX_TODO_DISPLAY_LENGTH
        }개...`}</EtcItem>
      )}
    </Base>
  );
};

export default TodoList;
