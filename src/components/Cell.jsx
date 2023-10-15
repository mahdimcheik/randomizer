import { useState } from "react";

export default function Cell({listPrisoners, color}){
    let [cellColor, setCellColor] = useState(color);
    function changeColor(e){
        setCellColor(e.target.value);
    }
    return (
        <div className="cell">
            <h4>Group Name</h4>
            <input type="color" value={cellColor} onChange={(e) =>changeColor(e)}/>
            <hr />
            {listPrisoners.map( prisoner => <h6 key={prisoner.id} style={{backgroundColor : cellColor }}>{prisoner.name} </h6>)}
        </div>
    )
}