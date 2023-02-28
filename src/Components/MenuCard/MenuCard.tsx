import * as  React from 'react'
import Styles from './MenuCard.module.scss'
import Swiggy from '../../assets/Logo/Swiggy-logo-png.webp';
import data from '../../data/MenuList.json'



interface Props {
    title: string;
    price: number;
    image: string;
    description: string;
}

const MenuCard = () => {

    const MenuList = ({ title, price, image, description }: Props) => {
        return (
            <div className="container mt-5">
                <div className="menu-items mt-5">
                    <div className="card mb-3 col-md-6" id="breakfast">
                        <div className="row g-0">
                            <div className="col-md-4 col-sm-12">
                                <img  src={Swiggy} className="img-fluid rounded-start border" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h5 className="d-inline mt-5 mr-4">{title}</h5>
                                        <span className="price text-warning m4-4">{price}</span>
                                    </div>
                                    <p className="card-text">{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
    }




    return (
        <div className={Styles.menu_outer_conatiner}>
            {data.menuList.map((item)=>{
                return(
                    <div>
                        <div>{item.title}</div>
                        {item.menu.map((ele)=>{
                            return(
                                <MenuList  key={ele.id} title={ele.title} price={ele.price} image={''} description={ele.description} />
                            )
                        })}
                    </div>
                )
            })}
        
        </div>
    )
}

export default MenuCard
