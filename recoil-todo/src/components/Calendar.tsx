import React, { useCallback, useMemo, useState } from "react";
import styled from "@emotion/styled/macro";
import { isSameDay } from "../utils/CalendarUtils";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const COLOR = {
  WHITE: "#F8F7FA",
  LIGHT_GRAY: "#C9C8CC",
  PURPLE: "#7047EB",
  LIGHT_BLACK: "#313133",
  BLACK: "#28272A",
};

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`;

const Title = styled.h1`
  margin: 0;
  padding: 8px 24px;
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  color: ${COLOR.WHITE};
`;

const ArrowButton = styled.button<{ pos: "left" | "right" }>`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  font-size: 18px;
  cursor: pointer;
  color: ${COLOR.WHITE};
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  padding-block: 12px;

  > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      color: ${COLOR.WHITE};
    }
  }
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  text-align: center;
  color: ${COLOR.LIGHT_GRAY};
  padding: 8px;
  position: relative;
`;

const DisplayDate = styled.div<{ isToday?: boolean; isSelected?: boolean }>`
  color: ${({ isToday }) => isToday && COLOR.WHITE};
  background-color: ${({ isToday, isSelected }) =>
    isSelected ? COLOR.PURPLE : isToday ? COLOR.LIGHT_BLACK : ""};
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

const Base = styled.div`
  width: 100%;
  height: 100vh;
  padding: 24px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  background-color: ${COLOR.BLACK};
  ${Header} + ${Table} {
    margin-top: 36px;
  }
`;

const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

const MONTHS = (monthIndex: number): string => `${(monthIndex + 1) % 12}월`;

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const { year, month, firstDay, lastDay } = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();

    return {
      year,
      month,
      firstDay: new Date(year, month, 1),
      lastDay: new Date(year, month + 1, 0),
    };
  }, [selectedDate]);

  const selectDate = useCallback((date: Date) => {
    setSelectedDate(date);
  }, []);

  const pad = useCallback(() => {
    return Array.from({ length: firstDay.getDay() }, (_, padding) => (
      <TableData key={"pad_" + padding} />
    ));
  }, [firstDay]);

  const range = useCallback(() => {
    return Array.from({ length: lastDay.getDate() }, (_, date) => {
      const thisDay = new Date(year, month, date + 1);
      const today = new Date();

      return (
        <TableData key={date} onClick={() => selectDate(thisDay)}>
          <DisplayDate
            isToday={isSameDay(today, thisDay)}
            isSelected={isSameDay(selectedDate, thisDay)}
          >
            {new Date(year, month, date + 1).getDate()}
          </DisplayDate>
        </TableData>
      );
    });
  }, [year, month, lastDay, selectDate, selectedDate]);

  const render = () => {
    const items = [...pad(), ...range()];
    const weeks = Math.ceil(items.length / 7);

    return Array.from({ length: weeks }, (_, week) => {
      const weekStart = week * 7;
      return (
        <tr key={"week_" + week}>{items.slice(weekStart, weekStart + 7)}</tr>
      );
    });
  };

  const previousMonth = useCallback(() => {
    return selectDate(
      new Date(selectedDate.setMonth(selectedDate.getMonth() - 1)),
    );
  }, [selectDate, selectedDate]);

  const nextMonth = useCallback(() => {
    return selectDate(
      new Date(selectedDate.setMonth(selectedDate.getMonth() + 1)),
    );
  }, [selectDate, selectedDate]);

  return (
    <Base>
      <Header>
        <ButtonContainer>
          <ArrowButton pos="left" onClick={previousMonth}>
            <BiChevronLeft />
          </ArrowButton>
          <Title>{`${MONTHS(month)} ${year}`}</Title>
          <ArrowButton pos="right" onClick={nextMonth}>
            <BiChevronRight />
          </ArrowButton>
        </ButtonContainer>
      </Header>
      <Table>
        <TableHeader>
          <tr>
            {DAYS.map((day) => (
              <th key={day} align="center">
                {day}
              </th>
            ))}
          </tr>
        </TableHeader>
        <TableBody>{render()}</TableBody>
      </Table>
    </Base>
  );
};

export default Calendar;
