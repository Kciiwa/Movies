import { API_KEY, API_URL } from '../../constants/constants'

function useMovieRating(guestSessionId) {
  const rateMovie = async (movieId, rating) => {
    try {
      const response = await fetch(
        `${API_URL}/3/movie/${movieId}/rating?guest_session_id=${guestSessionId}&api_key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: `{"value":${rating}}`,
        }
      )
      if (!response.ok) {
        throw new Error('Failed to rate the movie.')
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  return rateMovie
}

export default useMovieRating
