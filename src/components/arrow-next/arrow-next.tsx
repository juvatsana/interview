import SvgNext from '../../assets/svg-icons/svg-next'
import './arrow-next.css'

function ArrowNext({ handleNext }: any) {
  return (
    <div
      data-testid="arrow-next"
      className="arrow-next w-5 h-5 sm:w-10 sm:h-10 flex bg-slate-600 fixed text-center justify-center items-center top-1/2 bottom-2/4"
      onClick={handleNext}
    >
      <SvgNext />
    </div>
  )
}

export default ArrowNext
