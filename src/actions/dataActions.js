import axios from 'axios'
import { 
    DATA_LIST_SUCCESS,
    DATA_LIST_FAIL,
 } from '../constants/dataConstants'
 

 export const listData = () => async (dispatch) => {
    try {
       

        const  { data }  = await axios.get('http://worldtimeapi.org/api/timezone/Africa/Lagos')
        const value = data.datetime
        const actualValue = value.split('T')[1].split('.')[0]
        dispatch({
            type: DATA_LIST_SUCCESS,
            payload: actualValue
        })
    } catch (error) {
            dispatch({
                type: DATA_LIST_FAIL,
                payload: 
                error.response && error.response.data.message 
                ? error.response.data.message 
                : error.message,
            })
    }
 }

 