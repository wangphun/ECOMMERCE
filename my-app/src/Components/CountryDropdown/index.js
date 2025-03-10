import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoSearch, IoCloseSharp } from "react-icons/io5";
import { useState, useContext } from "react";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import React from 'react';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const context = useContext(MyContext);

    // Filter countries based on search input
    const filteredCountries = context?.countryList?.filter((item) =>
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>YOUR LOCATION</span>
                    <span className='name'>India</span>
                </div>
                <span className='ms-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModel' TransitionComponent={Transition}>
                <h4 className='mb-0'>Choose Your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><IoCloseSharp /></Button>

                <div className='headerSearch w-100'>
                    <input
                        type='text'
                        placeholder='Search for your area...'
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Button><IoSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {filteredCountries?.length > 0 ? (
                        filteredCountries.map((item, index) => (
                            <li key={index}>
                                <Button onClick={() => {
                                    setIsOpenModal(false);
                                    setSearchTerm(""); // Clear search input on selection
                                }}>
                                    {item.country}
                                </Button>
                            </li>
                        ))
                    ) : (
                        <li>
                            <p>No results found</p>
                        </li>
                    )}
                </ul>
            </Dialog>
        </>
    );
};

export default CountryDropdown;
