import React from 'react'
import style from '@/Scss/components/landingPage.module.scss'

const LandingPage = () => {
  return (
    <div className={`${style.landing} bg-zinc-900`}>
        <div className={`${style.masker}`}>
            <h1>We Create</h1>
        </div>
    </div>
  )
}

export default LandingPage