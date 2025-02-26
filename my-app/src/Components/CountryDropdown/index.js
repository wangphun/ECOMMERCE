



import  Button  from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropdown = () => {
    return(
        
        <Button className='countryDrop'>
                          <div className='info d-flex flex-column'>
                            <span className='label'>YOUR LOCATION</span>
                            <span className='name'>India</span>
                            
                          </div>
                          <span className='ms-3'><FaAngleDown /></span>
                          
                        </Button>
                      
    )

}

export default CountryDropdown;