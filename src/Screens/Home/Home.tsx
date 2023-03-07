import React from "react";
import MultiActionAreaCard from "../../Components/CardComponent/Card";
import Styles from "./Home.module.scss";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import zomoto from "../../assets/Logo/Zomato_logo.png";
import Swiggy from "../../assets/Logo/Swiggy-logo-png.webp";
import FourMb from '../../assets/Logo/4Mb.png'

const Others = () => {
    const restoObj = [
        {
            id: "0",
            name: "Zomto",
            logo: zomoto,
            link: "https://www.zomato.com/bangalore/lpg-kitchen-rajarajeshwari-nagar-bangalore",
        },
        {
            id: "1",
            name: "Swiggy",
            logo: Swiggy,
            link: "https://www.swiggy.com/restaurants/lpg-kitchen-ideal-homes-twp-rajarajeshwari-nagar-bangalore-687226",
        },
    ];
    return (
        <div className={Styles.container}>
            <div className={Styles.text_center}>
                <h2>LPG KITCHEN</h2>
                <p>Call us on </p>
                <h6 className={Styles.mobile_number}>
                    {" "}
                    <a href="tel:+918792566795">8792566795</a>
                </h6>
                <h1 className="mt-5">Order From</h1>
            </div>
            <div className={Styles.Qr_container}>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        "& > :not(style)": {
                            m: 1,
                        },
                    }}
                >
                    {restoObj.map((ele) => {
                        return (
                            <Paper elevation={3}>
                                <MultiActionAreaCard
                                    name={ele?.name}
                                    link={ele?.link}
                                    logo={ele?.logo}
                                />
                            </Paper>
                        );
                    })}
                </Box>
            </div>
            <p className="mt-5 d-flex align-item-center justify-content-center">
                Under Construction
            </p>
            <p className="mt-5 d-flex align-item-center justify-content-center">
                Powered by

            </p>
            <p className="d-flex align-item-center justify-content-center">
             <img src={FourMb} alt="" />
            </p>
        </div>
    );
};

export default Others;
