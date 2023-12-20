import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(35000)

    let timer = null
    useEffect(() => {
        if(count > 0){
            timer = setInterval(() => {
                setCount(count - 350)
            }, 185)
        }

        return () => {
            clearInterval(timer)
        }
    },[count])

    const prepareCount = () => {
        let str = String(count)
        str = str.padStart(4, '0')

        return str.slice(0 , str.length > 4 ? 2 : 1) + "," + str.slice(str.length > 4 ? 2 : 1)
    }

    return <p className="counter">{prepareCount()}+ ALREADY JOINED</p>
}
 
export default Counter;