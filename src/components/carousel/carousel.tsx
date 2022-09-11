import { useState } from 'react'
import { APIimages } from '../../common/types'
import ArrowNext from '../arrow-next/arrow-next'
import ArrowPrevious from '../arrow-previous/arrow-previous'
import CardList from '../card-list/card-list'

function Carousel({ images }: APIimages) {
  const [currentIndex, setCurrentIndex] = useState(1)

  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
  }

  const handleNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
  }

  return (
    <div data-testid="carousel">
      <div className="container grid grid-cols-5 gap-x-4 gap-y-8">
        <CardList cards={images} currentIndex={currentIndex} />
      </div>
      <ArrowPrevious handlePrevious={handlePrevious} />
      <ArrowNext handleNext={handleNext} />
    </div>
  )
}

export default Carousel
