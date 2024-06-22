import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { ModeToggle } from './components/mode-toggle'
import Movies from './components/Movies';
import { useMovies } from './hooks/useMovies';
import { FormEvent, useEffect, useRef, useState } from 'react';

function useSearch () { 
  const [search, updateSearch] = useState<string>('')
  const [error, setError] = useState<string | null>('')
  const isFirstInput = useRef(true)

  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return  
    }
    if (search === '') {
      setError('Cant search for empty string')
      return
    }

    if (search.length < 3) {
      setError('Cant search for less than 3 characters')
      return
    }

    setError(null)

  }, [search])
  

  return {error, search, updateSearch}
}




export default function App() {


  const {movies} = useMovies ()
  const {error, search, updateSearch} = useSearch()


  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    updateSearch(search)
  }

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    updateSearch(event.currentTarget.value)
  }


    
  return (
    <div className='flex flex-col  items-center justify-center w-full'>
      <header className='flex flex-col  items-center justify-center h-[200px] gap-3'>                                                              
      <h1>Movie Finder</h1>
      <form onSubmit={handleSubmit} className="flex justify-center items-center">
      <Input  value={search} name='search' onChange={handleChange}  placeholder='Avenger, Matrix, Star Wars ...'/>
      <p>{error}</p>
      <Button type='submit'>Finder</Button>
      <ModeToggle/>
      </form>
      </header>
      <main className="flex justify-center  max-w-[800px] px-4 items-centerc w-full">
        <Movies movies={movies}/>
      </main>
    </div>
  )
}
