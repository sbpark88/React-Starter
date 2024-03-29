import React, { useEffect, useState } from "react";
import Axios from "axios";

import Pagination from "./components/Pagination";
import axios from "axios";

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
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  // const handlePageChange = (currentPage: number) => setPage(currentPage);
  const handlePageChange = (currentPage: number) => setPage(currentPage);

  useEffect(() => {
    const fetch = async () => {
      const params = { page, size: 10 };
      const {
        data: { totalPages, data },
      } = await axios.get<Response>(dummyApi, { params });

      setTotalPages(totalPages);
      setItems(data);
    };

    fetch();
  }, [page]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        count={totalPages}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
