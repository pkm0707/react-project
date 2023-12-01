import { useState } from "react";
let profile = [
  {
  name : "Mr.Robert Downey Jr",
  img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-mF6EKbA0w0-VPCuws4Zulvw0z-EiSDMOYaGFvq48oUl7EaJ-E4uTef9qHG57c4AlVs&usqp=CAU"
  },
  {
    name : "Mr.Chris Evans",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqimp8YriJHxuVn_iOejHPy4rdymesL47TvA&usqp=CAU"
  },
  {
    name : "Mr.Mark Ruffalo ",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCkyKsHbNmduVLkbkJCff6O1UgXd0XBI03Ej7-wcijS-P19XPA0yHHMmNuypglCtb1Fvw&usqp=CAU"
  },
  {
    name : "Mr.Chris Hemsworth",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmOgxuNE0GeqAGrTn5KTrLnTxjuk-5L1hjA&usqp=CAU"
  },
  {
    name : "Ms.Scarlett Johansson",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZx7UoA9iQzyK3_IP9PToGDuYLU8Sqgq_vw&usqp=CAU"
  },
  {
    name : "Mr.Tom Hiddleston",
    img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBN8igRLZTnqFCnSZFTgwRAbAwI0b1KFyxdA&usqp=CAU"
  }
]
export function ProfileLike(){
  let initialprofile = profile
  return(
    <div className="profile">
      <div className="profile-container">
      {initialprofile.map((usr,index)=>(<Profile name={usr.name} img={usr.img} id={index}/>))}
      </div>
    </div>
  );
}
function Profile({ name, img }) {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div className="mainb">
      <img className="img1" src={img} alt={name} />
      <h3 className="h2" style={{color:"white"}}>{name}</h3>
      <button className="button1" onClick={() => {
        setLike(like + 1);
        console.log(like);
      }}>{like}👍</button>
      <button className="button2" onClick={() => {
        setDislike(dislike + 1);
        console.log(dislike);
      }}>{dislike}👎</button>
    </div>
  );
}