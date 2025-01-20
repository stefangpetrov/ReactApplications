import React from 'react'
import { Outlet} from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

function RootLayout() {

  return (
    <>
    <MainNavigation/>
    <main>
        {/*navigation.state === 'loading' ? */}
    <Outlet/>
    </main>
    </>
  )
}

export default RootLayout