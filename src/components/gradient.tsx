import { useEffect, useState } from "react";
import { GradientInterface } from "../App";


interface GradientProps {
    gradientSettings: GradientInterface;
}

const Gradient: React.FC<GradientProps> = ({gradientSettings}) => {

    const [style, setStyle] = useState<any>()

    useEffect(() => {

        setStyle(`linear-gradient(${gradientSettings.rotation}deg,${gradientSettings.color1} 
            ${gradientSettings.break1}%, ${gradientSettings.color2} ${gradientSettings.break2}%, ${gradientSettings.color3} ${gradientSettings.break3}%)`)
    },)

    return (
        <>
            <div className="gradient" style={{background: `linear-gradient(${gradientSettings.rotation}deg, ${gradientSettings.color1} 
                ${gradientSettings.break1}%, ${gradientSettings.color2} ${gradientSettings.break2}%, ${gradientSettings.color3} ${gradientSettings.break3}%`}}></div>
            <p>{style}</p>
        </> 
    )
}

export default Gradient