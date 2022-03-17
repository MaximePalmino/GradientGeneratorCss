import { GradientInterface } from "../App";
import Card from './Card'

  
interface CardProps {
    gradientSettings: GradientInterface;
    setGradientSettings: React.Dispatch<any>
}


const Cards: React.FC<CardProps> = ({gradientSettings, setGradientSettings}) => {

    return (
        <>
            <Card color={gradientSettings.color1}  setGradientSettings={setGradientSettings} id={1}/>
            <Card color={gradientSettings.color2}  setGradientSettings={setGradientSettings} id={2}/>
            <Card color={gradientSettings.color3}  setGradientSettings={setGradientSettings} id={3}/>
        </>
    )
}

export default Cards;