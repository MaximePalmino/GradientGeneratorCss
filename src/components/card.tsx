import { GradientInterface } from "../App";


interface CardProps {
    color: string,
    setGradientSettings: React.Dispatch<any>,
    id: number
}


const Card:  React.FC<CardProps> = ({color, setGradientSettings, id}) => {


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
            <h2>Breakpoint</h2>
            <input onChange={breakpointHandler} type="range"></input>
        </div>
    )
}

export default Card;