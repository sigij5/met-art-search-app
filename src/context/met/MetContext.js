import { createContext, useReducer } from "react";
import metReducer from "./MetReducer";

const MetContext = createContext();

const MET_URL = process.env.REACT_APP_MET_URL;

export const MetProvider = ({ children }) => {
  const initialState = {
    works: [],
    work: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(metReducer, initialState);

  const searchArt = async (text) => {
    setLoading();

    const artArray = [];
    // const params = new URLSearchParams({ q: text });
    //   const fetchResults = async () => {
    //     setLoading();
    await fetch(`${MET_URL}/search?artistOrCulture=true&q=${text}`)
      .then((res) => res.json())
      .then((data) => {
        const idArray = data.objectIDs.slice(0, 25);
        // console.log(idArray);

        return idArray.map(
          (id) =>
            fetch(`${MET_URL}/objects/${id}`)
              .then((res) => res.json())
              .then((data) => {
                if (data.isPublicDomain) {
                  artArray.push(data);
                  dispatch({
                    type: "GET_WORKS",
                    payload: artArray,
                  });
                  //   setWorks(artArray);
                }
              })
              .catch((err) => {
                console.log("Request failed", err);
              })
          //   setLoading(false)
        );
      });
  };

  const getWork = async (objectID) => {
    setLoading(true);

    const response = await fetch(`${MET_URL}/objects/${objectID}`);

    if (response.status === 4040) {
      window.location = "/notfound";
    } else {
      const data = await response.json();

      dispatch({
        type: "GET_WORK",
        payload: data,
      });
    }
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const clearWorks = () => {
    dispatch({ type: "CLEAR_WORKS" });
  };

  return (
    <MetContext.Provider
      value={{
        works: state.works,
        loading: state.loading,
        work: state.work,
        searchArt,
        clearWorks,
        getWork,
      }}
    >
      {children}
    </MetContext.Provider>
  );
};

export default MetContext;
