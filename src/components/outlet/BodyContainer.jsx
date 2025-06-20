import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../nav-bar/NavBar';

const BodyContainer = () => {
	return (
    <div>
      <div className=" sticky top-0 z-50 ">
        <NavBar />
      </div>
      <div className='p-8'>
        <Outlet />
      </div>
    </div>
  );
}

export default BodyContainer;