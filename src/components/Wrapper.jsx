import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='w-4/5 m-auto'>
      {children}
    </div>
  )
}

export default Wrapper