import Button from '@mui/material/Button';
import { IoMdMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-3 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span className='icon1 me-2'><IoMdMenu /></span>
                            <span className='text'>ALL CATEGORIES</span>
                            <span className='icon2 ms-2'><FaAngleDown /></span>
                        </Button>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline-item ms-auto'>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Men</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Women</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Beauty</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Watches</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Kids</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Gift</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Blog</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                            <li className='list list-inline-item'>
                                <Link to="/"><Button>Contact</Button></Link>
                                <div className='submenu shadow'>
                                <Link to="/"><Button>Clothing</Button></Link>
                                <Link to="/"><Button>Footwear</Button></Link>
                                <Link to="/"><Button>Watches</Button></Link>
                                <Link to="/"><Button>Clothing</Button></Link>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navigation;