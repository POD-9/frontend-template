import { useState } from "react"
import Search from '../../public/images/Search.svg'
import { useProducts } from "../context/ProductsContext"


const SearchBox = ({bgColor, border}:{bgColor:string, border:string}) => {
  const [search, setSearch] = useState("")

  // Import the dispatcher
  const{filterDispatch} = useProducts()

  // Helper function to handle enter key press
  function keydownHandler(event:any) {
    if(event.keyCode === 13) { 
      dispatcher(event.target.value)
    }
  }

  // helper function to dispatch search on enter key press or search logo click
  function dispatcher(searchString: string) {
    filterDispatch({
      type: 'FILTER_BY_SEARCH',
      payload: searchString
    })
  }

  return (
    <>
      <div className='relative w-full'>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={keydownHandler}
          type='text'
          placeholder='Search what you need  '
          className={`h-14 px-4 w-full rounded active:outline-none focus:outline-none border ${bgColor} ${border}`}
        />
        <img src={Search} alt='search' className='absolute top-4 right-3 cursor-pointer' onClick={() => dispatcher(search)}/>
      </div>
    </>
  )
}

export default SearchBox


