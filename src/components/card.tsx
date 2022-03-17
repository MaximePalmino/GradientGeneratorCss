import { useEffect } from "react";
import { isPropertySignature } from "typescript"
import { GradientInterface } from "../App";


interface CardProps {
    color: string,
    setGradientSettings: React.Dispatch<any>,
    id: number
}


const Card:  React.FC<CardProps> = ({color, setGradientSettings, id}) => {


    const colorHandler = (e:any) => {
        const name = `color${id}`
        setGradientSettings((prev: GradientInterface) => ({...prev, [name]: e.target.value}))
    }
    const breakpointHandler = (e:any) => {
        const breaks = `break${id}`
        setGradientSettings((prev: GradientInterface) => ({...prev, [breaks]: e.target.value }))
    }

    return (
        <>
            <h2>{color}</h2>
            <input onChange={colorHandler} type="color" value={color}></input>
            <input onChange={breakpointHandler} type="range"></input>
        </>
    )
}

export default Card