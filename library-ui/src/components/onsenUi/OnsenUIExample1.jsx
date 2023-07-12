import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import {
  ActionSheet,
  ActionSheetButton,
  AlertDialog,
  Button,
  Input,
  ListItem,
} from 'react-onsenui';
import { useEffect, useState } from 'react';
import OnsenUIPage from './OnsenUIPage';
import { debounce } from '../Utils';

const MAX_INPUT_NUMBER = 9_999_999_999;
const MIN_INPUT_NUMBER = -9_999_999_999;

function OnsenUIExample1() {
  const [disableAction, setDisableAction] = useState(true);
  const [actionSheetOn, setActionSheetOn] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  const [result, setResult] = useState(0);
  const [numA, setNumA] = useState();
  const [numB, setNumB] = useState();

  const popResult = (operator) => {
    setResult(Calculator[operator](numA, numB));
    setActionSheetOn(false);
    setAlertOn(true);
  };

  const activateCalcuateActionButton = () => {
    if (numA === undefined || numB === undefined) setDisableAction(true);
    else setDisableAction(false);
  };

  useEffect(activateCalcuateActionButton, [numA, numB]);

  return (
    <OnsenUIPage center='계산기'>
      <ListItem>
        <InputNumber
          label='첫 번째 숫자를 입력해주세요: '
          keyUpHandler={InputNumberSafeSetter(setNumA)}
        />
        <InputNumber
          label='두 번째 숫자를 입력해주세요: '
          keyUpHandler={InputNumberSafeSetter(setNumB)}
        />
      </ListItem>
      <Button
        modifier='large--cta'
        onClick={() => setActionSheetOn(true)}
        disabled={disableAction}
      >
        계산하기
      </Button>
      <ActionSheet visible={actionSheetOn} title='연산자를 선택하세요'>
        <ActionSheetButton onClick={() => popResult('+')} children='더하기' />
        <ActionSheetButton onClick={() => popResult('-')} children='빼기' />
        <ActionSheetButton onClick={() => popResult('*')} children='곱하기' />
        <ActionSheetButton onClick={() => popResult('/')} children='나누기' />
        <ActionSheetButton
          onClick={() => setActionSheetOn(false)}
          modifier='destructive'
        >
          취소
        </ActionSheetButton>
      </ActionSheet>
      <AlertDialog visible={alertOn} onPostHide={() => setResult(0)} calcelable>
        <div className='alert-dialog-title'>결과</div>
        <div className='alert-dialog-content'>{result}</div>
        <div className='alert-dialog-footer'>
          <Button
            onClick={() => setAlertOn(false)}
            className='alert-dialog-button'
          >
            Ok
          </Button>
        </div>
      </AlertDialog>
    </OnsenUIPage>
  );
}

export default OnsenUIExample1;

const Calculator = {
  '+': (lhs, rhs) => lhs + rhs,
  '-': (lhs, rhs) => lhs - rhs,
  '*': (lhs, rhs) => lhs * rhs,
  '/': (lhs, rhs) => (rhs === 0 ? Infinity : lhs / rhs),
};

const InputNumber = ({ label, keyUpHandler }) => (
  <div>
    <label>{label}</label>
    <Input
      type='number'
      onKeyUp={keyUpHandler}
      style={{
        textAlignLast: 'right',
        margin: '10px 0',
        minWidth: '80px',
      }}
      modifier='underbar'
      min={-MIN_INPUT_NUMBER}
      max={MAX_INPUT_NUMBER}
    />
  </div>
);

const InputNumberSafeSetter = (setter) => (event) => {
  const value = event.target.value;
  if (value === '') {
    setter(undefined);
    return;
  }
  const num = Number(value);
  if (num > MAX_INPUT_NUMBER) return;
  if (num < MIN_INPUT_NUMBER) return;
  setter(num);
};
