// Write your code here

import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteItem} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
