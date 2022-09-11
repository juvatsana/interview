import SvgMore from '../../assets/svg-icons/svg-more'
import { ICard } from '../../common/types'

export const hotfixUrl = (url: string) => {
  return url.replace('/vvv', '/v').replace('/vv', '/v')
}

function Card({ card }: ICard) {
  return (
    <div className="relative">
      <img
        className="block w-full rounded-lg"
        src={hotfixUrl(card.url)}
        alt={card.alt}
      />
      <div className="absolute bottom-8 right-2 h-3 w-3 sm:h-6 sm:w-6 rounded opacity-70 bg-slate-800">
        <SvgMore />
      </div>
      <div className="text-slate-50 text-center truncate">{card.alt}</div>
    </div>
  )
}

export default Card
