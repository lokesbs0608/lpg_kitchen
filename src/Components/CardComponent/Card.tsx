import * as React from 'react';
import Card from '@mui/material/Card';

import CardMedia from '@mui/material/CardMedia';
import Styles from './Card.module.scss'
interface Porops {
  name: string;
  link: string;
  logo: string;
}


export default function MultiActionAreaCard({ name, link, logo }: Porops) {
  return (
    <div className={Styles.container}>
      <div className={Styles.image_container}>
        <img src={logo} alt=""  width='100%' height='100%'/>
      </div>

      <div className={Styles.link_container}>
        <a href="{link}">Order Now</a>
      </div>
    </div>
  );
}