import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { throttle } from "throttle-debounce";

const dummyApi = "https://api.instantwebtools.net/v1/passenger";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quaters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

interface Response {
  totalPassengers: number;
  totalPages: number;
  data: Array<Passenger>;
}

function App() {
  const listRef = useRef<HTMLUListElement | null>(null);
  const currentPageRef = useRef<number>(0);

  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);

  const getPassengers = async () => {
    const params = { page: currentPageRef.current, size: 50 };

    try {
      const {
        data: { totalPages, data: passenger },
      } = await axios.get<Response>(dummyApi, { params });

      setPassengers((prevState) => [...prevState, ...passenger]);
      setIsLast(totalPages === currentPageRef.current);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getPassengers();
  }, []);

  const handleScroll = throttle(1000, () => {
    console.log("scroll event trigger");
    if (listRef.current) {
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;

      const offset = 100; // 하단에 100px 만큼 남았을 때 다음 페이지를 불러올 수 있도록 isScrollBottom 을 토글
      setIsScrollBottom(scrollHeight - scrollTop - offsetHeight < offset);

      console.log(
        "scrollHeight",
        scrollHeight,
        "scrollTop",
        scrollTop,
        "offsetHeight",
        offsetHeight,
        "page",
        currentPageRef.current + 1,
      );
    }
  });

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;
      !isLast && getPassengers();
    }
  }, [isLast, isScrollBottom]);

  return (
    <div className="App">
      <ul ref={listRef} className="list" onScroll={handleScroll}>
        {passengers.map((passenger) => (
          <li className="item" key={passenger._id}>
            {passenger.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
