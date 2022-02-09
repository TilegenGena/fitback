import axios from 'axios';
import React, { useReducer } from 'react';
import { API } from '../helpers/const';

export const AdminContext = React.createContext()

const INIT_STATE = {
    fitbacks: null
}; 
const reducer = ( state, action ) => {
    switch (action.type) {
        case "GET_FITBACKS":
            return {...state, fitbacks: action.payload}
            default: 
            return state;
    }
}
const AdminProvider = (props) => {
    const [ state, dispatch] = useReducer(reducer, INIT_STATE)

    const addFitback = async (newFitback) =>{
        try{
             await axios.post(API, newFitback )
        }catch (error){
            console.log(error);
        }
    }
    const getFitbacks = async () =>{
        try{
             const response = await axios(API)
            let action = {
                type: 'GET_FITBACKS',
                payload: response.data
            }
            dispatch(action)
        } catch (error) {
            console.log("getFitbacks >", error);
        }
    }

    return (
        <AdminContext.Provider
        value={{
            addFitback,
            getFitbacks,
            fitbacks: state.fitbacks,
        }}
        >
            {props.children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;