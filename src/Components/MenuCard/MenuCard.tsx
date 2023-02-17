import React from 'react'
import Styles from './MenuCard.module.scss'
import { Checkbox } from '@mui/material'


const MenuCard = () => {

    const MenuList = () => {
        return (
            <div className={Styles.card_container} >
                <div className={Styles.inner_container} >
                    <div className={Styles.check_box_conatiner} > <Checkbox  defaultChecked /></div>
                    <div className={Styles.description_conatienr}>
                        <div>title</div>
                        <div>desciption / Price</div>
                    </div>
                    <div className={Styles.image_conatiner}>image</div>
                </div>
            </div>
        )
    }

    return (
        <div className={Styles.menu_outer_conatiner}>
            <MenuList/>
        </div>
    )
}

export default MenuCard
