import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.slice(props.index, props.index + 4).map(sushi => {
            return(
              <Sushi sushi={sushi} eaten={props.eaten} eatSushi={props.eatSushi} key={sushi.id}/>
            )
          })
        }
        <MoreButton nextFour={props.nextFour} />
      </div>
    </Fragment>
  )
}

export default SushiContainer