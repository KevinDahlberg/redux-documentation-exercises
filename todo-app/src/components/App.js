import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddToDo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = ({ params }) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'} />
    <Footer />
  </div>
)

export default App
