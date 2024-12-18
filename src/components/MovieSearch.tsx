import { useState } from 'react'
import { AppState } from '../AppState'
import { moviesService } from '../services/MoviesService'
import { observer } from 'mobx-react'

export default function MovieSearch() {

  const [search, setSearch] = useState('')
  function findMovies() {
    event?.preventDefault()
    const form = event?.target as HTMLFormElement
    setSearch(form.search.value)
    moviesService.searchMovies(form.search.value)
  }


  function previousPage() {
    console.log(search)
    moviesService.changeSearchPage(AppState.currentPage - 1, search)
  }

  function nextPage() {
    console.log(search)
    moviesService.changeSearchPage(AppState.currentPage + 1, search)
  }

  const Pagination = observer(() => {

    if (!search) return <></>

    return (
      <div className='pagination d-flex justify-content-around'>
        <button title='previous' onClick={previousPage} disabled={AppState.currentPage == 1}>
          <i className="mdi mdi-chevron-left"></i>
        </button>

        <span>
          {AppState.currentPage} of {AppState.totalPages}
        </span>


        <button title='next' onClick={nextPage} disabled={AppState.currentPage >= AppState.totalPages}>
          <i className="mdi mdi-chevron-right"></i>
        </button>
      </div>
    )
  })



  return (
    <>
      <form className="MovieSearch" onSubmit={findMovies}>
        <div className="input-group">
          <input className='form-control' type="text" required minLength={2} name='search' />
          <button className="btn">
            <i className="mdi mdi-magnify"></i>
          </button>
        </div>
      </form>


      <Pagination />


    </>
  )

}