import React from 'react';
import BurgerContent from "../BurgerContent/BurgerContent";

const Main = (props)=>{
    return(<div className="row" style={{minHeight:"100%"}} >
    {/* Menu */}
     <div className="col-md-2 shadow p-2 ml-4 mr-2 mb-4" style={{backgroundColor:"rgb(234,133,65,0.25)"}}> 
         <h6>Menu</h6>
     </div>
     <div className="col-md-9">
        <BurgerContent></BurgerContent>
     </div>

    </div>)
}

export default Main;