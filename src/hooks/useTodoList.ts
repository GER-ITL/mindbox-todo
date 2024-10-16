import { useEffect, useState } from 'react'
import { ITodo, ITodoNextList } from '../types/todo.type'

export const useTodoList = () => {
	const [todos, setTodos] = useState<ITodo[]>([])
	const [completedTodos, setCompletedTodos] = useState<ITodoNextList[]>([])
	const [activeTodos, setActiveTodos] = useState<ITodo[]>([])

	const [list, setList] = useState('all_list')
	const putTodos = (value: string) => {
		if (value)
			setTodos([...todos, { id: new Date(), text: value, done: false }])
	}
	const handleRemove = (id: Date) => {
		setTodos(todos.filter(item => item.id !== id))
		setCompletedTodos(completedTodos.filter(item => item.id !== id))
	}
	useEffect(() => {
		setActiveTodos([...todos.filter(item => item.done === false)])
	}, [todos])

	const toggleTodo = (id: Date) => {
		setTodos(
			todos.map(todo => {
				if (todo.id !== id) return todo
				return {
					...todo,
					done: !todo.done,
				}
			})
		)
	}
	return {
		todos,
		activeTodos,
		completedTodos,
		list,
		setActiveTodos,
		setCompletedTodos,
		setTodos,
		setList,
		toggleTodo,
		handleRemove,
		putTodos,
	}
}
