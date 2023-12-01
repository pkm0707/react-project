import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export function AddProduct(productList, setProductList) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");
  const navigate = useNavigate;
  return (
    <div className="add-product">
      <TextField id="outlined-basic" label="name" variant="filled" value={name} onChange={(event) => setName(event.target.value)} autoComplete="off" />
      <TextField id="outlined-basic" label="poster" variant="filled" value={poster} onChange={(event) => setPoster(event.target.value)} autoComplete="off" />
      <TextField id="outlined-basic" label="price" variant="filled" value={price} onChange={(event) => setPrice(event.target.value)} autoComplete="off" />
      <TextField id="outlined-basic" label="rating" variant="filled" value={rating} onChange={(event) => setRating(event.target.value)} autoComplete="off" />
      <TextField id="outlined-basic" label="summary" variant="filled" value={summary} onChange={(event) => setSummary(event.target.value)} autoComplete="off" />
      <Button variant="contained" onClick={() => {
        let newProduct = {
          name: name,
          poster: poster,
          price: price,
          rating: rating,
          summary: summary
        };
        setProductList([...productList, newProduct]);
        console.log("newProduct =>", newProduct);
        navigate("/products")
      }}
      >Add to product</Button>
    </div>
  );
}
