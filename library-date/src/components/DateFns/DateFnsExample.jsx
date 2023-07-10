import {
  add,
  addDays,
  addHours,
  addWeeks,
  differenceInDays,
  differenceInHours,
  differenceInSeconds,
  format,
  sub,
  subDays,
  subYears,
} from 'date-fns';
import {
  format as timeZoneFormat,
  formatInTimeZone,
  toDate,
} from 'date-fns-tz';

import ko from 'date-fns/locale/ko';
import React, { useState } from 'react';

function DateFnsExample() {
  const justDate = new Date('2021-03-01');
  const newDateFnsDate = add(justDate, { weeks: 1 });
  const clonedDateFnsDate = addWeeks(newDateFnsDate, 1);

  const [day, setDay] = useState('');
  const findDayHandler = (event) =>
    setDay(format(new Date(event.target.value), 'EEEE', { locale: ko }));

  const to = new Date('2021-05-21 17:00');
  const from = new Date('2023-01-31 16:32');
  const diffSeconds = differenceInSeconds(to, from);
  const diffHours = differenceInHours(to, from);
  const diffDays = differenceInDays(to, from);

  return (
    <section>
      <article>
        <h1>Immutable Check</h1>
        <div>
          dayjsDate : {justDate.toISOString()}
          <br />
          newDateFnsDate : {newDateFnsDate.toISOString()}
          <br />
          clonedDateFnsDate : {clonedDateFnsDate.toISOString()}
        </div>
      </article>
      <hr />
      <article>
        <h1>Summer Time New York</h1>
        <div>
          2018년 3월 11일 13시 +1일 :
          {timeZoneFormat(
            addDays(new Date('2018-03-11 13:00:00'), 1),
            'yyyy-MM-dd E HH시 XXX',
            { timeZone: 'America/New_York', locale: ko }
          )}
          <br />
          {timeZoneFormat(
            addDays(
              toDate(new Date('2018-03-11 13:00:00'), {
                timeZone: 'America/New_York',
              }),
              1
            ),
            'yyyy-MM-dd E HH시 XXX',
            { timeZone: 'America/New_York', locale: ko }
          )}
        </div>
        <div>
          2018년 3월 11일 13시 +24시간 :
          {timeZoneFormat(
            addHours(new Date('2018-03-11 13:00:00'), 24),
            'yyyy-MM-dd E HH시 XXX',
            { timeZone: 'America/New_York', locale: ko }
          )}
          <br />
          {timeZoneFormat(
            addHours(
              toDate(new Date('2018-03-11 13:00:00'), {
                timeZone: 'America/New_York',
              }),
              24
            ),
            'yyyy-MM-dd E HH시 XXX',
            { timeZone: 'America/New_York', locale: ko }
          )}
        </div>
      </article>
      <hr />
      <article>
        <h1>윤년</h1>
        <div>
          2017년 1월 1일 -1년 :
          {add(new Date('2017-01-01'), { years: -1 }).toISOString()}
          <br />
          2017년 1월 1일 -1년 :
          {subYears(new Date('2017-01-01'), 1).toISOString()}
        </div>
        <div>
          2017년 1월 1일 -365일 :
          {sub(new Date('2017-01-01'), { days: 365 }).toISOString()}
          <br />
          2017년 1월 1일 -365일 :
          {subDays(new Date('2017-01-01'), 365).toISOString()}
        </div>
      </article>
      <hr />
      <article>
        <h1>한국어로 표기하기</h1>
        <div>{format(new Date('07-16-2023'), 'yyyy년 M월 d일')}</div>
        <div>{format(new Date('07-16-2023'), 'yyyy년 MM월 dd일')}</div>
      </article>
      <hr />
      <article>
        <h1>요일 구하기</h1>
        <input type='date' onChange={findDayHandler} />
        <div>{day}</div>
      </article>
      <hr />
      <article>
        <h1>두 날짜 비교</h1>
        <div>2021-05-21 17:00 과 2023-01-31 16:32 의 시간 차이는?</div>
        <div>{diffSeconds}초</div>
        <div>{diffHours}시간</div>
        <div>{diffDays}일</div>
      </article>
    </section>
  );
}

export default DateFnsExample;
