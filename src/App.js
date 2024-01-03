// import logo from './logo.svg';
import './App.css';
import * as data from './data.json';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Pagination } from "swiper";
import { useState } from 'react';

function App() {
  const [filterData, setFilterData] = useState(data?.default)
  const [color, setColor] = useState("")
  const [print, setPrint] = useState(false)
  const [collar, setCollar] = useState(false)
  const [size, setSize] = useState("")
  const [price, SetPrice] = useState("")

  console.log("filterData", filterData)
  console.log("color", color)
  console.log("print", print)
  console.log("collar", collar)
  console.log("size", size)

  console.log("price", price)

  const clickSetColor = (e) => {
    setColor(e)
    pricedata(e)
    const colorFilter = data?.default?.filter((y) => y?.color === e && y?.print === print && y?.collar === collar)
    console.log("colorFilter", colorFilter)
    setFilterData(colorFilter)
  }

  const clickSetCollar = (e) => {
    setCollar(e)
    pricedata(e)
    const colorFilter = data?.default?.filter((y) => y?.color === color && y?.print === print && y?.collar === collar)
    setFilterData(colorFilter)
  }

  const clickSetPrint = (e) => {
    setPrint(e)
    pricedata(e)
    const colorFilter = data?.default?.filter((y) => y?.color === color && y?.print === e && y?.collar === collar)
    setFilterData(colorFilter)
  }
  const clickSize = (e, amount) => {
    setSize(e)
    SetPrice(price + amount)
  }

  const pricedata = (e) => {
    if (e === "Irish Navy" || color === "Irish Navy") {
      if (collar) {
        if (print) {
          SetPrice(160)
        } else {
          SetPrice(130)
        }
      } else {
        SetPrice(100)
      }
    } else if (e === "Bay Green" || color === "Bay Green") {
      if (collar) {
        if (print) {
          SetPrice(260)
        } else {
          SetPrice(230)
        }
      } else {
        SetPrice(200)
      }
    } else if (e === "Black" || color === "Black") {
      if (collar) {
        if (print) {
          SetPrice(360)
        } else {
          SetPrice(330)
        }
      } else {
        SetPrice(300)
      }
    }


  
  }

  return (
    <>
      <div className='swiper'>
        <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
          {filterData?.map((e) => {
            return (
              <SwiperSlide>
                <div>
                  <img src={e?.image} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className='text'>
        <div className='name'>
          {filterData[0]?.name}
        </div>
        <div className='dflex text'>
          <div className='dflex'>
            <div className='price'>
              price:
            </div>
            <div className='price'>
              ₹ {price}
            </div>
          </div>

          <div className='size'>
            {filterData[0]?.size?.map((e) => {
              return (
                <button className={size === e?.id ? "active" : "button"} onClick={() => clickSize(e?.id, e?.price)}>{e?.size}</button>
              )
            })}

          </div>
        </div>
      </div>
      <div>
        <div className='color'>
          <button className='IrishNavy' onClick={() => clickSetColor("Irish Navy")}>Irish Navy</button>
          <button className='BayGreen' onClick={() => clickSetColor("Bay Green")}>Bay Green</button>
          <button className='Black' onClick={() => clickSetColor("Black")}>Black</button>
          <button className={color?.replace(" ", "")}>Select Color: {color}</button>
        </div>
      </div>
      <div>
        <div className='color'>
          <button className='IrishNavy' onClick={() => clickSetCollar(true)}>With Collar</button>
          <button className='BayGreen' onClick={() => clickSetCollar(false)}>Without Collar</button>
          <button className={color?.replace(" ", "")}>Select Collar: {collar ? "With Collar" : "Without Collar"}</button>
        </div>
      </div>
      <div>
        <div className='color'>
          <button className='IrishNavy' onClick={() => clickSetPrint(true)}>With Print</button>
          <button className='BayGreen' onClick={() => clickSetPrint(false)}>Without Print</button>
          <button className={color?.replace(" ", "")}>Select Print: {print ? "With Print" : "Without Print"}</button>
        </div>
      </div>
    </>
  );
}

export default App;
