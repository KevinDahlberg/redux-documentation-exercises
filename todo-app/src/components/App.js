import React from 'react'
import Footer from './Footer'
import AddToDo from '../containers/AddToDo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
