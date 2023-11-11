import React, { useCallback, useState } from "react";
import styled from "@emotion/styled/macro";
import COLORS from "../../constants/Colors";
import Modal from "../../components/Modal";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <Container>
        <Card>
          <Date>2023-11-11</Date>
          <InputTodo placeholder="새로운 이벤트" />
        </Card>
      </Container>
    </Modal>
  );
};

export default TodoFormModal;