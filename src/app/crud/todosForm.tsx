'use client'
import React from 'react';
import { useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/features/todosSlice';

export default function TodosForm() {
    const [ name, setName] = useState<string>('');
    const dispatch = useAppDispatch();

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) : void => {
        setName(e.target.value)
    }

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(name))
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type='text' onChange={changeHandler}/>
            <button>Add todo</button>
        </form>
    </div>
  )
}
