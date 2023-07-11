"use client";
import React from "react";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { editTodo } from "@/redux/features/todosSlice";

interface EditTodosFormProps {
	todoId: number;
	activateTodoForm: () => void;
}

export default function EditTodosForm(props: EditTodosFormProps) {
	// access todos from redux store
	const todos = useAppSelector((state) => state.todosReducer.todos);

	// access selected todo id from props
	const { todoId, activateTodoForm } = props;

	// store todoItem state
	const [name, setName] = useState<string>("");

    	// create dispatch instance
	const dispatch = useAppDispatch();

    // find selected todo from todos store
	const findEditTodoItem = todos.find((todo) => todo.id === todoId);

	useEffect(() => {
		if (findEditTodoItem) {
			setName(findEditTodoItem.name);
		}
	}, []);

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setName(e.target.value);
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (findEditTodoItem) {
			dispatch(editTodo({ id: findEditTodoItem?.id, name }));
			activateTodoForm();
		}
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input type='text' onChange={changeHandler} value={name} />
				<button>Edit todo</button>
			</form>
		</div>
	);
}
