import React from 'react'
import MultiActionAreaCard from '../../Components/CardComponent/Card'
import Styles from './Home.module.scss';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import zomoto from '../../assets/Logo/Zomato_logo.png';
import Swiggy from '../../assets/Logo/Swiggy-logo-png.webp'
import Fassos from '../../assets/Logo/faaso_logo.jpg'
import UberEats from '../../assets/Logo/uber-eats-logo.png'

const Home = () => {
    const restoObj = [
        { id: '0', name: 'Zomto', logo: zomoto, link: '' },
        { id: '1', name: 'Swiggy', logo: Swiggy, link: '' },
        { id: '2', name: 'Fassos', logo: Fassos, link: '' },
        { id: '3', name: 'UberEats', logo: UberEats, link: '' },
    ]
    return (
        <div className={Styles.container}>
            <div className={Styles.Qr_container} >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        '& > :not(style)': {
                            m: 1,
                        },
                    }}
                >
                    {restoObj.map((ele) => {
                        return (

                            <Paper elevation={3} >
                                <MultiActionAreaCard name={ele?.name} link={ele?.link} logo={ele?.logo} />
                            </Paper>
                        )
                    })}
                </Box>
            </div>
        </div>
    )
}

export default Home
