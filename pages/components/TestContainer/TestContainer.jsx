import React from 'react'

type Props = {
  name: String
}

export const TestContainer = ({ name }: Props) => {
  return (
    <div>
      <div>TestContainerdddd</div>
      <p>{name}</p>
    </div>
  )
}
