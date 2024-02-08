import React from "react";
import style from "@/Scss/components/_invitation.module.scss";
import logo from "../../../public/logo.svg";
import logo2 from "../../../public/logo002.svg";
import logo3 from "../../../public/logo003.png";
import Image from "next/image";

const Invite = () => {
  return (
    <div   className={style.invite_component}>
      <div className={style.invite_card_1}>
        <div>
          <Image src={logo} alt="Ochi" />
        </div>
        <div className={style.invite_card_1_text}>
          <h1>&#169; 2019-2024</h1>
        </div>
      </div>
      <div className={style.invite_card_2}>
        <div>
          <Image src={logo2} alt="Ochi" />
        </div>
        <div className={style.invite_card_1_text}>
          <h1>Rating 5.0 on Clutch</h1>
        </div>
      </div>
      <div className={style.invite_card_3}>
        <div>
          <Image src={logo3} alt="Ochi" />
        </div>
        <div className={style.invite_card_1_text}>
          <h1>Business Bootcamp Alumini </h1>
        </div>
      </div>
    </div>
  );
};

export default Invite;
