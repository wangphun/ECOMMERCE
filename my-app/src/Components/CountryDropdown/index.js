

import  Button  from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";//used to open and close the country Dropdown ...under countrydrop for opening while tapping and under close_ class used for closing.
import Slide from '@mui/material/Slide';//added transition slide to countrydropdown

const Transition = React.forwardRef(function Transition(props, ref) {//added transition slide to countrydropdown
  return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
  const [isOpenModal, setisOpenModal] = useState(false);
    return(
        <>
        <Button className='countryDrop' onClick={()=>setisOpenModal(true)}> 
                          <div className='info d-flex flex-column'>
                            <span className='label'>YOUR LOCATION</span>
                            <span className='name'>India</span>
                            
                          </div>
                          <span className='ms-auto'><FaAngleDown /></span>
                          
                        </Button>
                        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationModel ' TransitionComponent={Transition}>
                          <h4 className='mb-0'>Choose Your Delivery Location</h4>
                          <p>Enter your address and we will specify the offer for your area</p>
                            <Button className='close_'onClick={()=>setisOpenModal(false)}><IoCloseSharp/></Button>

                          <div className='headerSearch w-100'>
                      <input type='text' placeholder='Search for Products...'/>
                     <Button> <IoSearch /></Button>
                      </div>
                      <ul className='countryList'>
                      
  <li><Button onClick={()=>setisOpenModal(false)}>Afghanistan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Albania</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Algeria</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Andorra</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Angola</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Antigua and Barbuda</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Argentina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Armenia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Australia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Austria</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Azerbaijan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bahamas</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bahrain</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bangladesh</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Barbados</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Belarus</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Belgium</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Belize</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Benin</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bhutan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bolivia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bosnia and Herzegovina</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Botswana</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Brazil</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Brunei</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Bulgaria</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Burkina Faso</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Burundi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Cabo Verde</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Cambodia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Cameroon</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Canada</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Central African Republic</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Chad</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Chile</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>China</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Colombia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Comoros</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Congo (Congo-Brazzaville)</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Costa Rica</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Croatia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Cuba</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Cyprus</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Czechia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Denmark</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Djibouti</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Dominica</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Dominican Republic</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Ecuador</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Egypt</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>El Salvador</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Equatorial Guinea</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Eritrea</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Estonia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Eswatini</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Ethiopia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Fiji</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Finland</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>France</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Gabon</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Gambia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Georgia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Germany</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Ghana</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Greece</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Grenada</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Guatemala</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Guinea</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Guinea-Bissau</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Guyana</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Haiti</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Honduras</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Hungary</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Iceland</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>India</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Indonesia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Iran</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Iraq</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Ireland</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Israel</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Italy</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Jamaica</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Japan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Jordan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Kazakhstan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Kenya</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Kiribati</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Kuwait</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Kyrgyzstan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Laos</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Latvia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Lebanon</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Lesotho</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Liberia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Libya</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Liechtenstein</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Lithuania</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Luxembourg</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Madagascar</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Malawi</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Malaysia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Maldives</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Mali</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Malta</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Mexico</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Moldova</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Monaco</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Mongolia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Morocco</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Mozambique</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Myanmar</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Namibia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nepal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Netherlands</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>New Zealand</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nicaragua</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Nigeria</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>North Korea</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Norway</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Oman</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Pakistan</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Panama</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Peru</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Philippines</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Poland</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Portugal</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Qatar</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Romania</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Russia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Saudi Arabia</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Singapore</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>South Africa</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Spain</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Sri Lanka</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Sweden</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Switzerland</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Thailand</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Turkey</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>United Kingdom</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>United States</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Vietnam</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Yemen</Button></li>
  <li><Button onClick={()=>setisOpenModal(false)}>Zimbabwe</Button></li>


                        
                      </ul>
                        </Dialog>
                      
                        </>
    )

}

export default CountryDropdown;