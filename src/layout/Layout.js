import React from 'react';
import Main from "../Main/Main";
import BurgerContent from "../BurgerContent/BurgerContent";
import burgerlogo from "../assests/images/burger-logo.png";
import Sidebar from "../Sidebar/Sidebar";

const Layout = (props)=>{

    return(<div>
        <div className="row" style={{minHeight:"10vh"}}>
            <div className="col-md-1">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-11 mt-2 d-flex justify-content-center">
            <h2 className="mr-2">Desi</h2>
            <img src={burgerlogo} style={{maxHeight:"50px",maxWidth:"60px"}}></img>
            <h2 className="ml-2">Burger</h2>
            </div>
        </div>
        <div className="row" style={{minHeight:"82vh"}}>
                    {/* <div className="col-md-2 shadow bg-light p-2 ml-4 mr-2 mb-4 rounded" > 
                        <div className="d-flex justify-content-center">
                            <h5 className="mt-2">Menu</h5>   
                        </div>
                        <hr/>
                        <div>
                            <button type="button" class="btn btn-light" style={{width:"100%"}}>Burger Builder</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light" style={{width:"100%"}}>Order History</button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-light" style={{width:"100%"}}>Account Info</button>
                        </div>
                    </div> */}
                    <div className="offset-md-2 col-md-10">
                        <BurgerContent></BurgerContent>
                    </div>
        </div>
        <div className="row" style={{minHeight:"4vh"}}>
        <div className="col-md-12">
            <h6 className="float-right pt-1">@powered by Srinivasan A</h6>
        </div>
        </div>
    </div>);
}

export default Layout;
