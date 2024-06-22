import { Badge } from "./ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"

function ListOfMovies( movies) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 ">
    {movies.map(movie => (
      <li key={movie.id}>
        <Card className="h-full">
          <CardHeader className="flex items-center justify-between text-pretty">{movie.title}</CardHeader>
          <CardContent><img src={movie.poster} alt={movie.title}/></CardContent>
          <CardFooter className='flex gap-2'>
            <Badge>{movie.year}</Badge>
            <Badge variant='destructive'>{movie.type}</Badge>
          </CardFooter>
        </Card>
      </li>
    ))}
  </ul>
  )
}

function NoMovies() {
  return (
    <p>No movies</p>
  )
}

export default function Movies({movies}) {
  const hasMovies = movies.length > 0
  return (
    hasMovies ? ListOfMovies(movies) : NoMovies()
  )
}