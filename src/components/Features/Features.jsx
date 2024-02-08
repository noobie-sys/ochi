import React from 'react'
import style from '@/Scss/components/_features.module.scss'
import Card from '@/layout/card'
import image from '../../../public/illus.png'
import image2 from '../../../public/illus-2.jpg'

const Features = () => {
  return (
    <div className={style.features}>

        <div className={style.feature__text}>
            <h1 className='text-8xl'>Featured Projects</h1>
        </div>
        <div className={style.feature__card}>
            <div className={style.feature__cards}>

            <Card image={image} heading={"FYDE"} dir={"left-full"} />
            <Card image={image2} heading={"VISE"} dir={"right-[80%]"} />
            <Card image={image} heading={"Trawa"} dir={"left-full"} />
            <Card image={image2} heading={"PremiumBlend"} dir={"right-[80%]"} />
            </div>
        </div>
    </div>
  )
}

export default Features