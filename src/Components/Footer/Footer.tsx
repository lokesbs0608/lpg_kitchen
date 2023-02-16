
import * as React from 'react';
import fourMb from '../../assets/Logo/faaso_logo.jpg'
import Styles from './Footer.module.scss'

function Footer() {
    return (
        <div className={Styles.footer_conatienr} >
            <div className={Styles.logo_conatiner}>
            <img src={fourMb} alt="" width='100%' height='100%' />
            </div>
            Powerd by 4Mb
        </div>
    )
}

export default Footer;
