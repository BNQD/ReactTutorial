import React, {useEffect} from 'react'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import AnecdoteFilter from './components/AnecdoteFilter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeAnecdotes())
	}, [dispatch])
	
  return (
    <div>
      <h2>Anecdotes</h2>
			<Notification />
			<AnecdoteForm />
			<AnecdoteFilter />
			<AnecdoteList />
    </div>
  )
}

export default App