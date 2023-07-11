import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
	id: number;
	name: string;
}


export interface TodosList {
	todos: Todo[];
}

const initialState: TodosList = {
	todos: [
		{
			id: 1,
			name: "Learn React",
		},
		{
			id: 2,
			name: "Learn Next",
		},
		{
			id: 3,
			name: "Learn Svelte",
		},
	],
};

export const todos = createSlice({
	name: "todos",
	initialState,
	reducers: { // synchronous action creators
		getTodos: (state) => {
			state.todos;
		},
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos = [...state.todos, { id: state.todos.length + 1, name: action.payload}]
        },
        editTodo: (state, action: PayloadAction<Todo>) => {

            const id = action.payload?.id;
            state.todos = [...state.todos].map(todo => {
                if(todo.id === id) {
                    return { id: action.payload.id, name: action.payload.name}
                }else{
                    return todo
                }
            })
        },
		deleteTodo: (state, action: PayloadAction<Todo>) => {
			console.log(action, 'action')
			state.todos = [...state.todos].filter(todo => {
				return todo.id !== action.payload.id
			})
		}
	},
});

export const { getTodos, addTodo,editTodo, deleteTodo} = todos.actions;

export default todos.reducer
