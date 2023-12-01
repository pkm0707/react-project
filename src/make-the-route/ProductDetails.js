import { Button } from "@mui/material";
import { useNavigate,useParams} from 'react-router-dom';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
export function ProductDetails({productList}) {
  const { productid } = useParams();
  const navigateto = useNavigate;
  const product = productList[productid]
  let styles = {
    color: product.rating >= 4.5 ? "green" : "red",
    fontSize: "15px",
    fontWeight: "bold"
  };
  return (
    <div>
      <iframe width="1536" height="400" src={product.video} title={product.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className='spec'>
        <h3 className='name'>{product.name}</h3>
        <p style={styles} className='rating'>⭐ {product.rating}</p>
      </div>
      <div className='counter'>
        <h3 className='price'>Price: {product.price}</h3>
      </div>
      <Button variant="contained" onClick={()=>navigateto(-1)} startIcon={<ArrowCircleLeftIcon fontSize="small"/>} >Back</Button>
    </div>
  );
}
