import React from 'react'

const Dots = ({width , size,color,className}) => {

return(
    <div style={{width:width}} className={`Dots-Container ${className}`}>
        <div style={size?{height:`${size}px`, width:`${size}px`,backgroundColor:color}:{}} className="Dots-Dot"/>
        <div style={size?{height:`${size}px`, width:`${size}px`,backgroundColor:color}:{}} className="Dots-Dot"/>
        <div style={size?{height:`${size}px`, width:`${size}px`,backgroundColor:color}:{}} className="Dots-Dot"/>
    </div>
)
}
export default Dots