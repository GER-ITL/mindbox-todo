import clsx from 'clsx'
import { FC } from 'react'
import { useTodoList } from '../../hooks/useTodoList'
import { ITodo, ITodoNextList } from '../../types/todo.type'
import InputForm from '../form/InputForm'
import SideBar from '../ui/sidebar/SideBar'
import s from './TodoList.module.scss'

const TodoList: FC = () => {
	const {
		todos,
		activeTodos,
		list,
		completedTodos,
		setCompletedTodos,
		setTodos,
		setList,
		toggleTodo,
		handleRemove,
		putTodos,
	} = useTodoList()
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<h1>todos</h1>
			<InputForm putTodos={putTodos} />
			<div className={s.list}>
				{list === 'all_list' && (
					<>
						<ul>
							{todos.map((todo: ITodo) => {
								return (
									<li
										key={todo.id.getTime()}
										className={clsx({
											[s.completed]: todo.done,
										})}
									>
										<input
											type='checkbox'
											checked={todo.done}
											onChange={() => {
												toggleTodo(todo.id)
												!todo.done
													? setCompletedTodos([
															...completedTodos,
															{ id: todo.id, value: todo.text },
													  ])
													: setCompletedTodos([
															...completedTodos.filter(
																(item: any) => item.id !== todo.id
															),
													  ])
											}}
										/>{' '}
										{todo.text}
									</li>
								)
							})}
						</ul>
					</>
				)}
				{list === 'completed_list' && (
					<>
						<ul>
							{completedTodos.map((todo: ITodoNextList) => {
								return (
									<li
										onClick={() => handleRemove(todo.id)}
										key={todo.id.getTime()}
										className={clsx({
											[s.completed]: true,
										})}
									>
										{todo.value}
									</li>
								)
							})}
						</ul>
					</>
				)}
				{list === 'active_list' && (
					<>
						<ul>
							{activeTodos.map((todo: ITodo) => {
								return (
									<li
										onClick={() => handleRemove(todo.id)}
										key={todo.id.getTime()}
										className={clsx({
											[s.completed]: todo.done,
										})}
									>
										{todo.text}
									</li>
								)
							})}
						</ul>
					</>
				)}
			</div>
			<SideBar
				todos={todos}
				list={list}
				setList={setList}
				setCompletedTodos={setCompletedTodos}
				setTodos={setTodos}
				activeTodos={activeTodos}
			/>
		</div>
	)
}

export default TodoList
