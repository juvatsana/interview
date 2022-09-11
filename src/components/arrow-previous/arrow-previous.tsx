import SvgPrevious from '../../assets/svg-icons/svg-previous'
import './arrow-previous.css'

function ArrowPrevious({ handlePrevious }: any) {
  return (
    <div
      data-testid="arrow-previous"
      className="arrow-previous w-5 h-5 sm:w-10 sm:h-10 flex bg-slate-600 fixed text-center justify-center items-center top-1/2 bottom-2/4"
      onClick={handlePrevious}
    >
      <SvgPrevious />
    </div>
  )
}

export default ArrowPrevious
