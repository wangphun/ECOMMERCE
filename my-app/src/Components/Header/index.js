import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import CountryDropdown from '../CountryDropdown';

import  Button  from '@mui/material/Button';
import { FaRegUser } from "react-icons/fa6";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox';
import Navigation from'../Navigation';
const Header = () => {
  console.log('Header component rendered'); // Debugging log

  return (
    <>
      <div className='headerWrapper'>
        <div className='top-script bg-blue'>
          <div className='container'>
            <p className='mb-0 mt-0 text-center'>
              Due to the <b>Covid 19</b> epidemic, orders may be processed with a slight delay
            </p>
          </div>
        </div>
        <header className='header'>
          <div className='container'>
            <div className='row justify-content-between'>
              <div className='logoWrapper d-flex align-items-center col-sm-2'>
                <Link to={'/'}>
                  <img src={logo} alt='logo' />
                </Link>
              </div>
              <div className='col-sm-10 d-flex align-items-center part2'>
                <CountryDropdown/>
             <SearchBox/>

                <div className='part3 d-flex align-items-center ms-auto'>
                  <Button className='circle me-3 '><FaRegUser /></Button>
                
                <div className='ms-auto cartTab d-flex align-items-center'>
                  <span className='price'>$5.56</span>
                 <div className='position-relative ml-2'>
                 <Button className='circle' ><IoBagOutline  /></Button>
                 <span className='count d-flex align-items-center justify-content-center'>1</span>
                 </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Navigation/>

       
      </div>
    </>
  );
};

export default Header;