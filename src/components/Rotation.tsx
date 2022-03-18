import { GradientInterface } from "../App";

interface Rotation {
    setGradientSettings:  React.Dispatch<any>,
}


const Rotation: React.FC<Rotation> = ({setGradientSettings}) => {


    const rotationHandler = (e:any) => {
        setGradientSettings((prev: GradientInterface) =>({...prev, rotation: e.target.value  }))
    }

  
    return(
        <div className="rotation__container">
        <div className="range-slider">
        <h2>Rotation</h2>
            <input className="range-slider__range rotation__slider"  onChange={rotationHandler} type="range" min="0" max="360"></input>
            </div>
        </div>
    )



}

export default Rotation;