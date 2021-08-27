import React from 'react'
import { useMediaQuery } from 'react-responsive'
import HomePage from '../pages/HomePage'
import HomePageMobile from '../pages/HomePageMobile'

const Example = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1180px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1180px)' })

  return <div>
    {isDesktopOrLaptop && <HomePage/>}
    {isTabletOrMobile && <HomePageMobile/>}
  </div>
}

export default Example;