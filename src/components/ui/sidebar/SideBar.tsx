import clsx from 'clsx'
import { FC } from 'react'
import { ITodo, ITodoNextList } from '../../../types/todo.type'
import s from '../../todoList/TodoList.module.scss'
interface ISideBar {
	list: string
	activeTodos: ITodo[]
	todos: ITodo[]
	setList: React.Dispatch<React.SetStateAction<string>>
	setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>
	setCompletedTodos: React.Dispatch<React.SetStateAction<ITodoNextList[]>>
}

const SideBar: FC<ISideBar> = ({
	list,
	activeTodos,
	setList,
	setTodos,
	setCompletedTodos,
	todos,
}) => {
	return (
		<div className={s.side_bar}>
			<div>
				<span style={{ marginRight: 20, cursor: 'auto' }}>
					{activeTodos.length} items left
				</span>
				<span
					className={clsx({
						[s.active]: list === 'all_list',
					})}
					onClick={() => setList('all_list')}
				>
					All
				</span>
				<span
					className={clsx({
						[s.active]: list === 'completed_list',
					})}
					onClick={() => setList('completed_list')}
				>
					Completed
				</span>
				<span
					className={clsx({
						[s.active]: list === 'active_list',
					})}
					onClick={() => setList('active_list')}
				>
					Active
				</span>
			</div>
			<span
				onClick={() => {
					setTodos(todos.filter((item: any) => item.done !== true))
					setCompletedTodos([])
				}}
			>
				Clear completed
			</span>
		</div>
	)
}

export default SideBar
