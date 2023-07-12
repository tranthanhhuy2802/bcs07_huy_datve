import React, { Component } from "react";
import { connect } from "react-redux";

class HangGhe extends Component {
  renderGhe = () => {
    if(this.props.hangGhe.hang !== ""){
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }

      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );

      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }

      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe fs-5 ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {index + 1}
        </button>
      );
    });
  }else {return this.props.hangGhe.danhSachGhe.map((hang, index) => {
        if(this.props.hangGhe.hang===""){
        return (
          <span className="rowNumber" key={index}>
            {hang.soGhe}
          </span>
        );
        }
      });}
  
  };


  renderHangGhe = () => {
      return (
        <div>        
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    
  };

  render() {
    return <div className="text-light  mt-3 me-5" style={{fontSize:"30px"}}>{this.renderHangGhe()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookTicket.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      const action = {
        type: "DAT_GHE",
        payload: ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
