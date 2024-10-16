import { FC, useState } from 'react'
import s from './InputForm.module.scss'
interface IForm {
	putTodos: (value: string) => void
}
const InputForm: FC<IForm> = ({ putTodos }) => {
	const [value, setValue] = useState('')
	return (
		<form
			onSubmit={e => {
				e.preventDefault()
				putTodos(value)
				setValue('')
			}}
			className={s.input_form}
		>
			<input
				type='text'
				value={value}
				placeholder='What needs to be done ?'
				onChange={e => setValue(e.target.value)}
			/>
		</form>
	)
}

export default InputForm
