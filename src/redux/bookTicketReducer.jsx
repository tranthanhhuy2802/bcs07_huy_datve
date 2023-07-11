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
        console.log(`Im adding: ${action.payload.soGhe}`);
        newDanhSachGheDangDat.push(action.payload);
      } else {
        console.log(`Im removing: ${action.payload.soGhe}`);
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
        console.log(`Im removing: ${action.payload.soGhe}`);
        newDanhSachGheDangDat.splice(index, 1);
      }

      return { ...state, danhSachGheDangDat: newDanhSachGheDangDat };
    }

    default:
      return { ...state };
  }
};
