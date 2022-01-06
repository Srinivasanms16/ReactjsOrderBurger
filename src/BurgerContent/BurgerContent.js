import React,{useState} from "react";
import Buger from '../burger/Buger';
import BugerBuilder from "../bugerbuilder/BugerBuilder";
import BurgerSummary from '../burgerSummary/BurgerSummary';


const BurgerContent = (props)=>{

    const ingType = ["Meat","Cheese","Salad","Bacon"]

    const [ingredient,updateingredient]=useState([]);
    const [price,updateprice] = useState(5);

    const addIngredient = (ing)=>{
        const uping = [...ingredient];
        uping.push(ing);
        updateingredient(uping);
        const rate = individualRate(ing);
        let sum = price + rate;
        updateprice(sum);
    }

    const removeIngredient = (ing)=>{
        const uping = [...ingredient];
        const idx = uping.lastIndexOf(ing);
        if(idx != -1)
        {
        uping.splice(idx,1);
        updateingredient(uping);
        const rate = individualRate(ing);
        let sum = price - rate;
        updateprice(sum);
        }
    }

    const individualRate = (ing)=>{
        switch (ing) {
            case "Meat":
                    return 5;
                case "Cheese":
                    return 3;
                case "Salad":
                    return 2;
                case "Bacon":
                    return 6;
        }
    }
    const orderSummary = ()=>{
        alert(price);
    }

    const showRemoveButton = (type)=>{
         return ingredient.includes(type);
    }
    return(<div className="row" style={{minHeight:"100%"}}>
            {/* Burger*/}
            <div className="col-md-4 shadow ml-5 p-3 mb-4 mr-2 bg-light rounded" >
                <Buger ingredient={ingredient}></Buger>
            </div>
            {/* Burger Builder */}
            <div className="col-md-5 shadow p-3 mb-4 ml-4 bg-light  rounded">
                <div className="d-flex justify-content-center">
                    <h4>Build you own Burger !</h4>
                </div>
                {ingType.map((item)=><BugerBuilder key={item} type={item} add={()=>addIngredient(item)}
                remove={()=>removeIngredient(item)} isDisabled={!showRemoveButton(item)} ></BugerBuilder>)}
    
                <div className="d-flex justify-content-center">
                    <BurgerSummary ingredient={ingredient} price={price}></BurgerSummary>
                </div>
                
                <div>
                    <label className="d-flex justify-content-center mt-2">Total Price :{price}</label>
                </div>
            </div>
    </div>);
}

export default BurgerContent;