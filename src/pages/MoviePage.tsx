import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MoviePage() {

  const { movieId } = useParams()

  const [count, setCount] = useState(0)


  useEffect(() => {
    // 🚫 NEVER change a watched variable within this method
    // it will cause an infinite loop 
    // setCount(count + 1)
    console.log('the count changed')
  }, [count])

  // onMounted && a watch
  useEffect(() => {

    console.log('hey neat', movieId)



  }, [movieId])


  return (

    <div className="MoviePage">
      this is the movie page!!!!! {movieId}

      <button onClick={() => setCount(count + 1)}>{count}</button>

    </div>
  )

}
export default observer(MoviePage)