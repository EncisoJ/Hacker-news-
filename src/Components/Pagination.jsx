import React, { useState } from 'react'
import { useNewsContext } from '../util/context'

const Pagination = () => {
  const { setPage, handlePage } = useNewsContext()
  return (
    <div>

      <button className="previous" onClick={() => handlePage('dec')}>Previous</button>
      <button className="next" onClick={() => handlePage('inc')}>Next</button>
    </div>
  )
}

export default Pagination