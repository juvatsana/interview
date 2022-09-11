import { useQuery } from '@apollo/client'
import SvgLoading from '../../assets/svg-icons/svg-loading'
import { GET_IMAGES } from '../../queries/get-images'
import Carousel from '../carousel/carousel'
import './app.css'

function App() {
  const { loading, error, data } = useQuery(GET_IMAGES, {
    variables: { limit: 6 },
  })

  if (loading) return <SvgLoading />

  if (error) return <div>error</div>

  return <Carousel images={data.image} />
}

export default App
