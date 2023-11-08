import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

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

interface Props {
  children: any;
  isLastItem: boolean;
  onFetchMorePassengers: () => void;
}

const Item: React.FC<Props> = ({
  children,
  isLastItem,
  onFetchMorePassengers,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref);
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  }, [isLastItem, isIntersecting]);

  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        border: "1px dashed #000",
      }}
    >
      <div style={{ margin: "auto" }}>{children}</div>
    </div>
  );
};

function App() {
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  const getPassengers = async () => {
    console.log(page);
    const params = { size: 10, page };

    try {
      const {
        data: { totalPages, data: passenger },
      } = await axios.get<Response>(dummyApi, { params });

      setPassengers((prevState) => [...prevState, ...passenger]);
      setIsLast(totalPages === page);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    console.log(page);
    !isLast && getPassengers();
  }, [page]);

  return (
    <div className="App">
      {passengers.map((passenger, index) => (
        <Item
          key={passenger._id}
          isLastItem={passengers.length - 1 === index}
          onFetchMorePassengers={() => setPage((prev) => prev + 1)}
        >
          {passenger.name}
        </Item>
      ))}
    </div>
  );
}

export default App;
