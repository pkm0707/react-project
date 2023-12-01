import { Badge, IconButton } from "@mui/material";
import { useState } from "react";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="buttons">
      <IconButton aria-label="like" onClick={()=>{
        setLike(like + 1);
      }}>
      <Badge badgeContent={like} color="primary"><ThumbUpIcon fontSize="small"/></Badge>
      </IconButton>
      <IconButton aria-label="dislike" onClick={()=>{
        setDislike(dislike + 1);
      }}>
      <Badge badgeContent={dislike} color="error"><ThumbDownIcon fontSize="small"/></Badge>
      </IconButton>
    </div>
  );
}