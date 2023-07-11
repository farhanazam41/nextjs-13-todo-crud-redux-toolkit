"use client";
import React from "react";
import { useState } from "react";
import TodosList from "./todosList";
import TodosForm from "./todosForm";
import EditTodosForm from "./editTodosForm";

export default function TodosHome() {
  const [isEdit, setIsEdit] =useState(false);
  const [todoId, setTodoId] = useState<number>(0);

  const activateEditForm = (id: number): void => {
    setIsEdit(true);
    setTodoId(id)
  }

  // const fetchData = async () => {
  //   let res = await fetch('https://jsonplaceholder.typicode.com/users');
  //   res = await res.json();

  //   console.log(res)
  // }
  // fetchData();


  const activateTodoForm = () : void => {
    setIsEdit(false)
  }
	return (
		<div>
			Todos Page
      {!isEdit && <TodosForm/>}
      {isEdit && <EditTodosForm todoId={todoId} activateTodoForm={activateTodoForm}/>}
			<TodosList activateEditForm={activateEditForm}/>
		</div>
	);
}
