import React from "react";
import PropTypes from 'prop-types';

const BugerBuilder = (props)=>{
    return(<div className="mb-2 mt-5 d-flex justify-content-center">
        <label className="mr-5"  style={{minWidth:"50px"}}>{props.type}</label>
        <button className="mr-5 btn btn-primary" onClick={props.add} >More</button>
        <button className="btn btn-danger" onClick={props.remove} disabled={props.isDisabled} >less</button>
    </div>)
}

BugerBuilder.propTypes = {type:PropTypes.string.isRequired,
                          add:PropTypes.func.isRequired,
                        remove:PropTypes.func.isRequired,
                    isDisabled:PropTypes.bool.isRequired};

export default BugerBuilder;