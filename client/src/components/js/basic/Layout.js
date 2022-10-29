import React from 'react'
import Footer from './Footer'
import Main from './Main'
import Header from './header/Header'
import { Outlet } from 'react-router-dom';
import '../../css/basic/Layout.scss';
import { Link, useLocation } from 'react-router-dom';



export default function Layout() {

  const location = useLocation().pathname;

  console.log(location)
  let pageStyle = (location === '/login') || (location === '/signup');
  console.log(pageStyle)
  return (
    <>
      {pageStyle ? 
        <div className='loginLayout'>
          <Header/>
          <div></div>
          <Main pageStyle={pageStyle}>
            <Outlet/>
          </Main>
        </div> : 
        <div className='appLayout'>
          <Header/>
          <div></div>
          <Main>
            <Outlet/>
          </Main>
          <Footer/>
        </div>}
    </>
  )
}
