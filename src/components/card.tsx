import { GradientInterface } from "../App";


interface CardProps {
    color: string,
    setGradientSettings: React.Dispatch<any>,
    id: number,
    breakpoint: number
}


const Card:  React.FC<CardProps> = ({color, setGradientSettings, id, breakpoint}) => {


    const colorHandler = (e:any) => {
        const name = `color${id}`
        console.log(e.target.value)
        setGradientSettings((prev: GradientInterface) => ({...prev, [name]: e.target.value}))
    }
    const breakpointHandler = (e:any) => {
        const breaks = `break${id}`
        setGradientSettings((prev: GradientInterface) => ({...prev, [breaks]: e.target.value }))
    }

    return (
        <div className="card__container">
            {/* <h2>{color}</h2> */}
            <input onChange={colorHandler} type="color" value={color}></input>
            <div className="range-slider">
            <h2>Breakpoint</h2>

            <input className="range-slider__range" value={breakpoint} onChange={breakpointHandler} type="range" min="0" max="100"></input>
            <span className="range-slider__value">{breakpoint}</span>
            </div>
        </div>
    )
}

export default Card;