import React,{useState} from "react";
import sidebarcss from "./Sidebar.module.css";

const Sidebar = (props)=>{

    const [navWidth,updatenavWidth] = useState("0");

    const openNav = ()=>{
        updatenavWidth("250px");
    }

    const closeNav = ()=>{
        updatenavWidth("0"); 
    }
   

return (<div>
            <div className={sidebarcss.navbar} style={{width:navWidth}} >
                {/* <span className="float-right mr-1" style={{cursor:"pointer",fontSize:"20px"}} onClick={toggleNav}>
                    &#9747;
                </span> */}
                <button type="button" className="close mr-1" onClick={closeNav}>
                    <span aria-hidden="true" className="text-white" >&times;</span>
                </button>
                <div className="mt-5">
                    <span className="text-white d-flex justify-content-center">Menu</span>
                    <div className="mt-5">
                        <button type="button" className="btn btn-dark" style={{width:"100%"}}>Burger Builder</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark" style={{width:"100%"}}>Order History</button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-dark" style={{width:"100%"}}>Account Info</button>
                    </div>
                </div>
            </div>

            <span style={{cursor:"pointer",fontSize:"30px"}} onClick={openNav}>
                &#9776;<span style={{marginLeft:"10px",fontSize:"20px"}}>Menu</span>
            </span>
        </div>);
}

export default Sidebar;