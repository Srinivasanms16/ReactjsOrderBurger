import React from 'react';
import bicss from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";

const Burgeringredient = (props)=>{

    let value = null;
    switch (props.type) {
        case "BreadTop":
            value = (<div className={bicss.BreadTop}>
                <div className={bicss.Seeds1}></div>
                <div className={bicss.Seeds2}></div>
            </div>);
            break;
        case "BreadBottom":
            value = <div className={bicss.BreadBottom}></div>
            break;
        case "Meat":
            value = <div className={bicss.Meat}></div>
            break;
        case "Cheese":
            value = <div className={bicss.Cheese}></div>
            break;
        case "Salad":
            value = <div className={bicss.Salad}></div>
            break;
        case "Bacon":
            value = <div className={bicss.Bacon}></div>
            break;
        case "Seeds1":
            value = <div className={bicss.Seeds1}></div>
            break;
        case "Seeds2":
            value = <div className={bicss.Seeds2}></div>
            break;
        default:
            return null;
            break;
    }

    return value;
}

Burgeringredient.propTypes = {type:PropTypes.string.isRequired}

export default Burgeringredient;