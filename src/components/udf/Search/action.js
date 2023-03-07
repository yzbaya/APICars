// Register

import axios from "axios";
export const getLocality = () => async (dispatch) => {
  dispatch({ type: "GET_LOCALITY" });
  try {
    // const res = await axios.post(
    //   "http://localhost:5000/Client/registerClient",
    //   newUser
    // );
    dispatch({
      type: "GET_LOCALITY_SUCCESS",
      payload: [
        { id: 416, name: "Tunis : Aéroport Tunis-Carthage" },
        { id: 418, name: "The Tunis : Port la Goulette" },
        { id: 419, name: "Tunis ville" },
        { id: 420, name: "Bizerte ville" },
        { id: 421, name: "Nabeul ville" },
        { id: 422, name: "Hammamet ville" },
        { id: 423, name: "Tabarka : Aéroport Tabarka" },
        { id: 425, name: "Enfidha: Aéroport Enfidha" },
        { id: 426, name: "Sousse ville" },
        { id: 427, name: "Monastir : Aéroport Habib Bourguiba" },
        { id: 429, name: "Mahdia ville" },
        { id: 430, name: "Sfax : Aéroport de Sfax-Thyna" },
        { id: 431, name: "Sfax ville" },
        { id: 432, name: "Gafsa ville" },
        { id: 433, name: "Djerba : Aéroport Djerba Mellita" },
        { id: 436, name: "Tozeur : Aéroport Tozeur Nefta" },
      ],
    });
  } catch (error) {
    dispatch({ type: "GET_LOCALITY_FAILED", payload: error.message });
  }
};
export const postSearch = (newSearch) => async (dispatch) => {
  dispatch({ type: "GET_CARS_AVAILABILITY" });
  try {
    console.log(newSearch);
    // const res = await axios.post(
    //   "http://localhost:5000/Client/registerClient",
    //   newSearch
    // );
    const data = require("../../../cars.json");

    const res = { data: data };
    console.log("okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
    dispatch({ type: "GET_CARS_AVAILABILITY_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({
      type: "GET_CARS_AVAILABILITY_FAILED",
      payload: error.response.data,
    });
  }
};

// export const userLogin = (userCred) => async (dispatch) => {
//   dispatch({ type: USER_LOGIN });
//   try {
//     const res = await axios.post(
//       "http://localhost:5000/Client/login",
//       userCred
//     );
//     localStorage.setItem("token", res.data.token);
//     dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: USER_LOGIN_FAILED });
//     console.log(error);
//   }
// };

// export const get_profile = () => async (dispatch) => {
//   dispatch({ type: GET_PROFILE });

//   const config = {
//     headers: {
//       Authorization: localStorage.getItem("token"),
//     },
//   };
//   try {
//     const res = await axios.get(
//       "http://localhost:5000/Client/currentuser",
//       config
//     );
//     dispatch({ type: GET_PROFILE_SUCCESS, payload: res.data });
//   } catch (error) {
//     dispatch({ type: GET_PROFILE_FAILED, payload: error.response.data });
//   }
// };

// export const log_out = () => (dispatch) => {
//   dispatch({ type: LOG_OUT });
//   try {
//     localStorage.removeItem("token");
//   } catch (error) {
//     console.log(error);
//   }
// };
