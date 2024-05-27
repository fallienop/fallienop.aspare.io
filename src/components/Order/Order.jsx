import React from 'react'
import style from './Order.module.css'
import { IoIosClose } from "react-icons/io";
import AsyncSelect from 'react-select/async';
import CustomSliderStyles from '../FilterPage/Customs/CustomSliderStyles';
import { customSelectStyle, customModelSelectStyle } from '../FilterPage/Customs/CustomSelectStyles';

let makes = [
    { value: 'Honda', label: 'Honda' },
    { value: 'Toyota', label: 'Toyota' },
    { value: 'Mercedes', label: 'Mercedes' }


];
const yearsOptions = [];

for (let year = (new Date().getFullYear()); year >= 1980; year--) {
    yearsOptions.push({ value: year, label: year.toString() });
}
const Order = () => {
    return (
        <div className={style.main}>
            <IoIosClose className={style.closeButton} />
            <h2>Sifariş et</h2>
            <p className={style.productDetailTitle}>Məhsul Detalları</p>
            <div className={style.productDetail}>

            </div>
            <div className={style.doubleSelect}>
                <div className={style.make}>
                    <p className={style.titleStyle}>Marka</p>
                    <AsyncSelect
                        styles={customModelSelectStyle}
                        cacheOptions
                        defaultOptions={makes}
                    // loadOptions={promiseOptions}
                    />
                </div>

                <div className={style.make}>
                    <p className={style.titleStyle}>Model</p>
                    <AsyncSelect
                        styles={customModelSelectStyle}
                        cacheOptions
                        defaultOptions
                    // loadOptions={promiseOptions}
                    />
                </div>

            </div>

            <div className={style.doubleSelect}>
                <div className={style.make}>
                    <p className={style.titleStyle}>İstehsal tarixi</p>
                    <AsyncSelect
                        styles={customModelSelectStyle}
                        cacheOptions
                        defaultOptions={yearsOptions}
                    // loadOptions={promiseOptions}
                    />
                </div>

                <div className={style.make}>
                    <p >Vin Kod</p>
                    <input className={style.inputt} type='text' />
                </div>

            </div>

            <div className={style.make}>
                <p >Ehtiyat hissəsinin adı</p>
                <input className={style.inputt} type='text' />
            </div>


            <div className={style.make}>
                <p >Məhsulun təsviri</p>
                <textarea className={style.textArea} />
            </div>

            <p className={style.productDetailTitle}>Sifariş edən şəxsin məlumatları</p>


            <div className={style.doubleSelect}>
                <div className={style.make}>
                    <p className={style.titleStyle}>Adınız</p>
                    <input className={style.inputt} type='text' />


                </div>

                <div className={style.make}>
                    <p>Phone</p>
                    <input className={style.inputt} type='tel' pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" required />
                </div>



            </div>

            <div className={style.make}>
                <p>Email</p>
                <input className={style.inputt} type='email' />
            </div>
 
 <button className={style.sendButton}>Göndər</button>
        </div>
    )
}

export default Order