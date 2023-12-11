import { off, on } from "../utils/BrowserUtils";
import { RefObject, useEffect, useRef } from "react";

const defaultEvents = ["mousedown", "touchstart"];

const useClickAway = <E extends Event = Event>(
  ref: RefObject<HTMLElement | null>,
  onClickAway: (event: E) => void,
  events: string[] = defaultEvents,
) => {
  // 실행하고자 하는 콜백 함수를 ref 에 등록. 이벤트에 의해 실행되므로 첫 번째 argument 는 Event 타입
  const savedCallback = useRef(onClickAway);

  // 함수가 바뀌면 ref 갱신
  useEffect(() => {
    savedCallback.current = onClickAway;
  }, [onClickAway]);

  // 함수의 lifecycle
  useEffect(() => {
    const handler = (event: E) => {
      const { current: el } = ref;
      // 1. el 이 존재하고
      // 2. el 이 event.target 을 포함하지 않으면(= el 밖을 클릭하면)
      // 3. event 를 argument 로 사용해 저장된 콜백 함수를 실행.
      el && !el.contains(event.target as Node) && savedCallback.current(event);
    };
    for (const eventType of events) {
      on(document, eventType, handler);
    }

    return () => {
      for (const eventType of events) {
        off(document, eventType, handler);
      }
    };
  }, [events, ref]);
};

export default useClickAway;
