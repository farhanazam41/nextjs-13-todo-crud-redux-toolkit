"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { deleteTodo } from "@/redux/features/todosSlice";

interface TodosListProps {
	activateEditForm: (id: number) => void;
}

export default function TodosList(props: TodosListProps) {
	const { activateEditForm } = props;
	const todosState = useAppSelector((state) => state.todosReducer);
	const dispatch = useAppDispatch();
	const { todos } = todosState;

	return (
		<div>
			TodosList
			<ul>
				{todos.map((todo) => {
					return (
						<div key={todo.id}>
							<li>
								{todo.name}
								<button onClick={() => activateEditForm(todo.id)}>Edit</button>
								<button onClick={() => dispatch(deleteTodo(todo))}>
									delete
								</button>
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
