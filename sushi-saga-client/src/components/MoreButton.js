import React from 'react'

const MoreButton = (props) => {
    return <button onClick={e => props.nextFour(e)}>
            More sushi!
          </button>
}

export default MoreButton