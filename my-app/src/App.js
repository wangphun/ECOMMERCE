import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import axios from 'axios';
import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

function App() {
    const [countryList, setCountryList] = useState([]);

    useEffect(() => {
        getCountry("https://countriesnow.space/api/v0.1/countries/");
    }, []);

    const getCountry = async (url) => {
        try {
            const response = await axios.get(url);
            setCountryList(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching country data:", error);
        }
    };

    const values = {
        countryList,
    };

    return (
        <BrowserRouter>
            <MyContext.Provider value={values}>
                <Header />
                <Routes>
                    <Route path="/" exact={true} element={<Home />} />
                </Routes>
            </MyContext.Provider>
        </BrowserRouter>
    );
}

export default App;
export { MyContext };
