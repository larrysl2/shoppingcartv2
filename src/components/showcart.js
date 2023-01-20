// import React from "react";
// import "../styles/showcartstyle.css";
// const ShowCart = (props)=>{
//     return (
//         <div className="showcart">
//             <img className="cartimg" src={props.product.image}></img>
//             <div>{props.product.name}</div>
//             <div>{props.product.price}</div>

//         </div>
//     )
// }
// export default ShowCart;
import React from "react";
import "../styles/showcartstyle.css";
const ShowCart = (props)=>{
const handleDelete = (e) => {
//call the delete function that was passed in through props and pass in the product id
props.deleteProduct(props.product.id);
}
return (
<div className="showcart">
<img className="cartimg" src={props.product.image}></img>
<div>{props.product.name}</div>
<div>{props.product.price}</div>
<button onClick={handleDelete}>Delete</button>
</div>
)
}
export default ShowCart;
//cart image to be rendered when view cart is clicked
