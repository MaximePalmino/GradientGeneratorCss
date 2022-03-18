import { useEffect, useState } from "react";
import { GradientInterface } from "../App";


interface GradientProps {
    gradientSettings: GradientInterface;
}

const Gradient: React.FC<GradientProps> = ({gradientSettings}) => {

    const [style, setStyle] = useState<string>()

    useEffect(() => {
        setStyle(`linear-gradient(${gradientSettings.rotation}deg,${gradientSettings.color1} 
            ${gradientSettings.break1}%, ${gradientSettings.color2} ${gradientSettings.break2}%, ${gradientSettings.color3} ${gradientSettings.break3}%)`)

    },)

    return (
        <div className="gradient__container">
            <div className="gradient" style={{background: `linear-gradient(${gradientSettings.rotation}deg, ${gradientSettings.color1} 
                ${gradientSettings.break1}%, ${gradientSettings.color2} ${gradientSettings.break2}%, ${gradientSettings.color3} ${gradientSettings.break3}%`}}>          
                <p>{style}</p>
            </div>
        </div> 
    )
}

export default Gradient;