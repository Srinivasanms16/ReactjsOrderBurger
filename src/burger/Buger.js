import React from 'react';
import PropTypes from 'prop-types'
import Bugeringredient from '../burgerIngredient/Bugeringredient';
import bcss from "./Buger.module.css";

const Buger = (props)=>{
return(
<div className={bcss.buger}>
    <Bugeringredient type="BreadTop"></Bugeringredient>
    {props.ingredient.map((x,i)=> <Bugeringredient key={x+i} type={x}></Bugeringredient>)}
    <Bugeringredient type="BreadBottom"></Bugeringredient>
</div>);
}
Buger.propTypes  = {ingredient:PropTypes.array.isRequired} 
export default Buger;