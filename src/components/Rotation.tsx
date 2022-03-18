import { GradientInterface } from "../App";

interface Rotation {
    setGradientSettings:  React.Dispatch<any>,
}


const Rotation: React.FC<Rotation> = ({setGradientSettings}) => {


    const rotationHandler = (e:any) => {
        setGradientSettings((prev: GradientInterface) =>({...prev, rotation: e.target.value  }))
    }

    return(
        <>
        <h2>Rotation</h2>
            <input onChange={rotationHandler} type="range"></input>
        </>
    )



}

export default Rotation;