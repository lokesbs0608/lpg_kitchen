import * as  React from 'react'
import Styles from './MenuCard.module.scss'
import Swiggy from '../../assets/Logo/Swiggy-logo-png.webp';
import data from '../../data/MenuList.json';



interface Props {
    title: string;
    image: string;
    description: string;
    Chicken: string | undefined;
    Prawns: string | undefined;
    Egg: string | undefined;
    Veg: string | undefined;
    Status: boolean | null | undefined;
}

const MenuCard = () => {

    const MenuList = ({ title, Veg, Chicken, Status, Egg, Prawns }: Props) => {
        return (
            <div className={Styles.outer_conatiner}>
                <div className={Styles.container} >
                    <div className={Styles.img_container} >
                        <img width={'100%'} height={'100%'} src={Swiggy} alt="" />
                    </div>
                    <div className={Styles.product_name_container}>
                        <div style={{ fontWeight: '600' }}>{title}</div>
                        <div style={{ fontSize: '12px', }}>
                            <div style={{ display: 'flex', gap: '15px' }}>
                                {Veg && (
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ color: '#3ea23e', fontWeight: '600' }}>Veg</div>
                                        <span>₹{Veg}</span>
                                    </div>
                                )}

                                {Chicken && (
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ color: '#A52A2A', fontWeight: '600' }}>Chicken</div>
                                        <span style={{fontSize:'11px'}} >₹{Chicken}</span>
                                    </div>
                                )}

                                {Prawns && (
                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ color: '#A52A2A', fontWeight: '600' }}>Prawns</div>
                                        <span style={{fontSize:'11px'}}>₹{Prawns}</span>
                                    </div>
                                )}
                                

                                {Egg && (

                                    <div style={{ textAlign: 'center' }}>
                                        <div style={{ color: '#e8c758', fontWeight: '600' }}>Egg</div>
                                        <span style={{fontSize:'11px'}}>₹{Egg}</span>
                                    </div>)

                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        )
    }




    return (
        <div className={Styles.menu_outer_conatiner}>
            {data.menuList.map((item) => {
                return (
                    <div className={Styles.cat_container } >
                        <div className={Styles.cat_heading}>{item.title.toLocaleUpperCase()}</div>
                        <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center'}}>
                        {item.menu.map((ele) => {
                            return (
                                <div  >
                                    {ele?.status && (
                                        <MenuList key={ele.id} title={ele.title} Status={ele?.status} image={''} description={ele.description} Chicken={ele?.Chicken} Prawns={ele?.Pranws} Egg={ele?.Egg} Veg={ele?.Veg} />

                                    )}
                                </div>

                            )
                        })}
                        </div>
                  
                    </div>
                )
            })}

        </div>
    )
}

export default MenuCard
