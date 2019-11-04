import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">

      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>

      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
        </ul>
      </div>

      <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span>
       {/* <span onClick={() => props.handleClick(props.id)} className="remove">
        𝘅
      </span> */}

    </div>
  );
}

export default FriendCard;

const FriendCard = props => (
  <div className="card" value={props.id} onClick={() => props.handleClick(props.id,props.clicked)}>
     
      <div className="img-container">
          <img alt={props.name} src={props.image} />
      </div>
  </div>
);




// const FriendCard = props => (
//     <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
//         <div className="img-container">
//             <img alt={props.name} src={props.image} />
//         </div>
//     </div>
// );

