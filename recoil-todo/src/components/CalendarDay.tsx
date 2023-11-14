import React from "react";
import { getSimpleDateFormat, isSameDay } from "../utils/CalendarUtils";
import styled from "@emotion/styled/macro";
import COLORS from "../constants/Colors";
import { TableData } from "./Calendar";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  filteredTodoListState,
  selectedDateState,
  Todo,
} from "../features/TodoList/atom";
import { todoFormModalOpenState } from "../features/TodoFormModal/atom";
import { todoStatisticsModalOpenState } from "../features/TodoStatisticsModal/atom";
import TodoList from "../features/TodoList";

interface Props {
  date: Date;
}

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  color: ${({ isToday }) => isToday && COLORS.WHITE};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? COLORS.PURPLE : isToday ? COLORS.LIGHT_BLACK : ""};
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  align-self: flex-end;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

const Container = styled.div``;

const CalendarDay: React.FC<Props> = ({ date }) => {
  const today: Date = new Date();

  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  const todoList = useRecoilValue<Todo[]>(filteredTodoListState(date));
  const setTodoFormModalOpen = useSetRecoilState<boolean>(
    todoFormModalOpenState,
  );
  const setTodoStatisticsModalOpen = useSetRecoilState<boolean>(
    todoStatisticsModalOpenState,
  );

  const handleTodoFormModalOpen = (monthDate: number) => {
    setSelectedDate(new Date(selectedDate.setDate(monthDate)));
    setTodoFormModalOpen(true);
  };
  const handleDataSelect = (monthDate: number) => {
    setSelectedDate(new Date(selectedDate.setDate(monthDate)));
  };

  const handleTodoStatisticsModalOpen = (
    e: React.SyntheticEvent<HTMLDivElement>,
  ) => {
    e.stopPropagation();

    setTodoStatisticsModalOpen(true);
  };

  return (
    <TableData
      key={getSimpleDateFormat(date)}
      align="center"
      onDoubleClick={() => handleTodoFormModalOpen(date.getDate())}
    >
      <Container>
        <DisplayDate
          isToday={isSameDay(today, date)}
          isSelected={isSameDay(selectedDate, date)}
          onClick={() => handleDataSelect(date.getDate())}
          onDoubleClick={handleTodoStatisticsModalOpen}
        >
          {date.getDate()}
        </DisplayDate>
        <TodoList todos={todoList} />
      </Container>
    </TableData>
  );
};

export default CalendarDay;
