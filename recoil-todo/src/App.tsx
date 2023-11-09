import React from "react";
import { atom, selector, useRecoilValue } from "recoil";
import axios from "axios";

const todosUrl = "https://jsonplaceholder.typicode.com/todos/";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

interface Response {
  status: number;
  data: Todo;
}

const todoIdState = atom({
  key: "todoIdS*tate",
  default: 1,
});

const todoItemQuery = selector({
  key: "todoItemQuery",
  get: async ({ get }) => {
    const id = get(todoIdState);
    const { data: todo } = await axios.get<Todo>(todosUrl + id);
    return todo;
  },
});

function App() {
  const data = useRecoilValue(todoItemQuery);

  return (
    <div>
      {data.title}
      {data.userId}
    </div>
  );
}

export default App;
