import { GradientInterface } from "../App";
import Card from './Card'

  
interface CardProps {
    gradientSettings: GradientInterface;
    setGradientSettings: React.Dispatch<any>
}


const Cards: React.FC<CardProps> = ({gradientSettings, setGradientSettings}) => {

    return (
        <div className="cards__container">
            <Card color={gradientSettings.color1} breakpoint={gradientSettings.break1}  setGradientSettings={setGradientSettings} id={1}/>
            <Card color={gradientSettings.color2} breakpoint={gradientSettings.break2}  setGradientSettings={setGradientSettings} id={2}/>
            <Card color={gradientSettings.color3} breakpoint={gradientSettings.break3}  setGradientSettings={setGradientSettings} id={3}/>
        </div>
    )
}

export default Cards;