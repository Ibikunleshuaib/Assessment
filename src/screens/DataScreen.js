import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listData } from '../actions/dataActions'

const DataScreen = () => {
    const dispatch = useDispatch()
    const dataList = useSelector(state => state.dataList)
    const { data } = dataList
    const value = data
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            dispatch(listData())
        }, 1000);
        return () => {
            clearInterval(intervalId); 
        }
    }, [dispatch])
    
    return (
        <>
            <h1>Time in Lagos Nigeria</h1>
            <h3>{value}</h3>
        </>
    )
}

export default DataScreen
