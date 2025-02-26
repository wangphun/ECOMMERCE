import  Button  from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navigation = () =>{

    return (
                <nav>
                         <div className='container'>
                             <div className='row'>
               
                               <div className='col-sm-3 navPart1'>
                                 <Button className='allCatTab align-items-center'>
                                    <span className='icon1 me-2'><IoMdMenu/></span>
                                   <span className='text'>ALL CATEGORIES</span>
                                   <span className='icon2 ms-2'><FaAngleDown/></span>
               
                                 </Button>
                               </div>
               
                               <div className='col-sm-9 navPart2 d-flex align-items-center'>
                                <ul className='list list-inline-item w-100'>
                                    <li className='list list-inline-item'><Link to="/">Home</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Fashion</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Electronic</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Bakery</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Grocery</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Blog</Link></li>
                                    <li className='list list-inline-item'><Link to="/">Contact Us</Link></li>
                                </ul>
                               </div>
               
                             </div>
                         </div>
                       </nav>
    )
}
  
export default Navigation;