
import Styles from './Card.module.scss'
interface Porops {
  name: string;
  link: string;
  logo: string;
}

const handlenaviagton = (link: string)=>{

    window.location.replace(link)


}

export default function MultiActionAreaCard({ name, link, logo }: Porops) {
  return (
    <div className={Styles.container}>
      <div className={Styles.image_container} onClick={()=>handlenaviagton(link)}>
        <img src={logo} alt=""  width='100%' height='100%'/>
      </div>

      <div className={Styles.link_container}>
        <a href="{link}">Order Now</a>
      </div>
    </div>
  );
}