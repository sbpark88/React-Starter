import moment from 'moment-timezone';
import React, { useState } from 'react';
import 'moment/locale/ko';

function MomentExample() {
  const momentDate = moment('2021-03-01');
  const newMomentDate = momentDate.add(1, 'w');
  const clonedNewMomentDate = newMomentDate.clone().add(1, 'w');

  const [day, setDay] = useState('');
  const findDayHandler = (event) =>
    setDay(moment(event.target.value, 'YYYY-MM-DD').format('dddd'));

  const to = moment('2021-05-21 17:00');
  const from = moment('2023-01-31 16:32');
  const diffSeconds = to.diff(from, 's');
  const diffHours = to.diff(from, 'h');
  const diffDays = to.diff(from, 'd');

  return (
    <section>
      <article>
        <h1>Moment</h1>
        <div>Immutable Check</div>
        <div>
          momnetDate : {momentDate.format()}
          <br />
          newMomentDate : {newMomentDate.format()}
          <br />
          clonedNewMomentDate : {clonedNewMomentDate.format()}
        </div>
      </article>
      <hr />
      <article>
        <h1>Summer Time New York</h1>
        <div>
          2018년 3월 10일 13시 +1일 :
          {moment
            .tz('2018-03-10 13:00:00', 'America/New_York')
            .add(1, 'd')
            .format()}
        </div>
        <div>
          2018년 3월 10일 13시 +24시간 :
          {moment
            .tz('2018-03-10 13:00:00', 'America/New_York')
            .add(24, 'h')
            .format()}
        </div>
      </article>
      <hr />
      <article>
        <h1>윤년</h1>
        <div>
          2017년 1월 1일 -1년 :{moment('2017-01-01').add(-1, 'y').format()}
          <br />
          2017년 1월 1일 -1년 :{moment('2017-01-01').subtract(1, 'y').format()}
        </div>
        <div>
          2017년 1월 1일 -365일 :{moment('2017-01-01').add(-365, 'd').format()}
          <br />
          2017년 1월 1일 -365일 :
          {moment('2017-01-01').subtract(365, 'd').format()}
        </div>
      </article>
      <hr />
      <article>
        <h1>한국어로 표기하기</h1>
        <div>{moment('07-16-2023').format('YYYY년 M월 D일')}</div>
        <div>{moment('07-16-2023').format('YYYY년 MM월 DD일')}</div>
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

export default MomentExample;
