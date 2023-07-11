import React from "react";
import './BaiTapBookingTicket.css'
import ThongTinBooking from "./ThongTinBooking";
import danhSachGhe from './../asset/danhSachGhe.json'
import HangGhe from "./HangGhe";

const BookTicket = () => {

  const renderHangGhe = () =>{
    return danhSachGhe.map((hang,index)=>{
        return <div key={index}>
          <HangGhe hangGhe={hang}/>
        </div>
      })
    
  }




  return (
    <div className="bookingMovie"
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        backgroundImage: "url('./img/bgmovie.jpg')",
        backgroundSize: "100%",
      }}
    >
      <div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.6)",
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
                <h1 className="text-warning display-6 fw-bold">Đặt Vé Xem Phim</h1>
                <div className="fs-5 text-white">Màn Hình</div>
                <div className="flex justify-center row">
                <div className="screen"></div></div>
                {renderHangGhe()} 
            </div>
            <div className="col-4">
                <div className="text-white my-5 fw-bold fs-2">Danh Sách Ghế Bạn Chọn</div>
                <ThongTinBooking/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
