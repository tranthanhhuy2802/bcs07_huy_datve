import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinBooking extends Component {
  render() {
    console.log(this.props.danhSachGheDangDat);
    return (
      <div className="mt-5">
        <button className="gheDuocChon"></button>
        {"  "}
        <span className="text-light fs-4">Ghế Đã Đặt</span>
        <br />
        <button className="gheDangChon"></button>
        {"  "}
        <span className="text-light fs-4">Ghế Đang Chon</span>
        <br />
        <button className="ghe ms-0"></button>
        {"  "}
        <span className="text-light fs-4">Ghế Trống</span>
        <br />
        <div>
          <div className="table-responsive">
            <table className="table text-warning table-bordered opacity-75 mt-4" border="2">
              <thead>
                <tr>
                  <th scope="col">Số Ghế</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Xóa</th>
                </tr>
              </thead>
              <tbody>
                {this.props.danhSachGheDangDat.map((ghe, index) => {
                  return (
                    <tr key={index}>
                      <td>{ghe.soGhe}</td>
                      <td>{ghe.gia.toLocaleString()}</td>
                      <td>
                        <i
                          style={{ cursor: "pointer" }}
                          className="fa fa-multiply fw-bolder fs-3 text-danger"
                          onClick={() => {
                            this.props.removeGhe(ghe);
                          }}
                        ></i>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="fw-bolder">
                  <td scope="col">Total</td>
                  <td scope="col">
                    {this.props.danhSachGheDangDat
                      .reduce((tongTien, ghe, index) => {
                        // console.log(ghe.gia);
                        return (tongTien += ghe.gia);
                      }, 0)
                      .toLocaleString()}
                  </td>
                  <td scope="col"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.bookTicket.danhSachGheDangDat,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeGhe: (ghe) => {
      const action = {
        type: "REMOVE_GHE",
        payload: ghe,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinBooking);
