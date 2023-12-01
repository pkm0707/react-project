import { useState } from "react";
import { Counter } from '../components/Counter';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
export function Products({ product, id }) {
  let styles = {
    color: product.rating >= 4.5 ? "green" : "red",
    fontSize: "15px",
    fontWeight: "bold"
  };
  const [show, setShow] = useState(true);
  let summarystyles = {
    display: show ? "none" : "block",
  };
  const navigate = useNavigate()
  return (
    <div className='container'>
      <img className='poster' src={product.poster} alt={product.name} />
      <div className='spec'>
        <h3 className='name'>{product.name}</h3>
        <p style={styles} className='rating'>⭐ {product.rating}</p>
      </div>
      <div className='counter'>
        <h3 className='price'>Price: {product.price}</h3>
        <Counter />
      </div>
      <div className="button-flex">
        {/* <button onClick={() => setShow(!show)}>view summary</button> */}
        <IconButton aria-label="expand up" color="primary" onClick={() => setShow(!show)}>
          {show ? <ExpandLessIcon fontSize="small"/> : <ExpandMoreIcon fontSize="small"/>}
        </IconButton>
        <IconButton onClick={()=>navigate("/products/" + id)}><InfoIcon/></IconButton>
        <p style={summarystyles} className='summary'>{product.summary}</p>
      </div>
    </div>
  );
}