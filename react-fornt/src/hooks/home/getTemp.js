import {useState, useEffect} from 'react'
import { getTemp } from "../../api/contorll";

const [temp, setTemp] = useState(0)
const [rh, setRH] = useState(0)

const getTempData = async () => {
    const res = await getTemp()
    setTemp(res.temp)
    setRH(res.rh)
    // console.log(res.data)
    return {temp, rh}
}

export {getTempData}