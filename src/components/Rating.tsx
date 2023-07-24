import Star from '/images/Star.svg'
import StarOutline from '/images/Star-Outline.svg'
import { RatingInterface } from '../common/types'

const Rating = (props: RatingInterface ) => {
  const { rate, count, size } = props
  
  return (
    <div className="flex ">
      {[...Array(5)].map((_, i) => {
          if(rate > i) {
            return (<img key={i} src={Star} alt="star-filled"
            className={`${size}`}
            />)
          } else {
            return (<img key={i} src={StarOutline} 
              className={`${size}`}alt="star-outline" />)
          }
      })}
    </div>
  )
}

export default Rating
