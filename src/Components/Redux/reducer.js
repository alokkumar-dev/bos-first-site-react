import { GET_DATA } from "./action";

const initState={
  petData: []
};

export const getReducer = (store = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        petData: payload,
      };
    default:
        return store
  }
};
