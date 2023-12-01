import { useState } from "react";
import { Colorbox } from '../components/Colorbox';

export function Addcolor() {
  const [color, setColor] = useState("skyblue");
  const [colorList, setColorList] = useState(["orange", "green", "yellow", "pink"]);
  let styles = {
    fontSize: "20px",
    backgroundColor: color,
    padding: "10px",
    margin: "10px",
    width: "250px"
  };
  return (
    <div className='colorbox'>
      <div className='inbutton'>
        <input type='text' style={styles} value={color} onChange={(event) => setColor(event.target.value)} />
        <button style={{ backgroundImage: "linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)", width: "100px", height: "25px" }} onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr, index) => (
        <Colorbox key={index} color={clr} />
      ))}
    </div>
  );
}