import React, { useRef } from "react";
import { Button, Col, Input, InputRef, Row } from "antd";
import styles from "./Singin.module.css";
import { LoginReqType } from "../types";

interface Props {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<Props> = ({ login }) => {
  const emailRef = useRef<InputRef | null>(null);
  const passwordRef = useRef<InputRef | null>(null);
  const signinButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    const email = emailRef.current!.input!.value;
    const password = passwordRef.current!.input!.value;
    login({ email, password });
  };

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row>
          <Col span={12}>
            <img
              src="/bg_signin.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Option
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={emailRef}
              />
            </div>
            <div className={styles.password_title}>
              Password <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input.Password
                autoComplete="current-password"
                name="password"
                className={styles.input}
                ref={passwordRef}
              />
            </div>
            <div className={styles.button_area}>
              <Button
                size="large"
                className={styles.button}
                onClick={signinButtonClick}
              >
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
