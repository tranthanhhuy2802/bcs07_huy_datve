const initialState = {
  danhSachGheDangDat: [],
};

export const bookticketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DAT_GHE": {
      // console.log(action.payload);
      const index = state.danhSachGheDangDat.findIndex(
        (ghe) => ghe.soGhe == action.payload.soGhe
      );

      const newDanhSachGheDangDat = [...state.danhSachGheDangDat];

      // console.log(index);

      if (index == -1) {
        newDanhSachGheDangDat.push(action.payload);
      } else {
        newDanhSachGheDangDat.splice(index, 1);
      }

      return { ...state, danhSachGheDangDat: newDanhSachGheDangDat };
    }

    case "REMOVE_GHE": {
      const index = state.danhSachGheDangDat.findIndex(
        (ghe) => ghe.soGhe == action.payload.soGhe
      );

      const newDanhSachGheDangDat = [...state.danhSachGheDangDat];
      console.log(index);

      if (index != -1) {
        newDanhSachGheDangDat.splice(index, 1);
      }

      return { ...state, danhSachGheDangDat: newDanhSachGheDangDat };
    }

    default:
      return { ...state };
  }
};
