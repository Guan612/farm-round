import { useState, useEffect } from "react";
import { getTemp } from "../../api/contorll";

const getTempData = () => {
    const [temp, setTemp] = useState(25);
    const [rh, setRH] = useState(60);

    const tempData = async () => {
        const res = await getTemp();
        //console.log(res.data)
        setTemp(res.data.temp);
        setRH(res.data.rh);
        
    };
    return { temp, rh, tempData };
};

export { getTempData };
