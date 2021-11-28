export const movieClicked = (movie) => {
  return {
    type: 'MOVIE_SELECTED',
    payload: movie
  }
}
