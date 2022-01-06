import React from 'react';

const BurgerSummary = (props)=>{

    const ing = [...props.ingredient];
    const meatCount = ing.filter(item=>item==="Meat").length;
    const cheeseCount = ing.filter(item=>item==="Cheese").length;
    const saladCount = ing.filter(item=>item==="Salad").length;
    const baconCount = ing.filter(item=>item==="Bacon").length;

return(<div>
<button type="button" className="btn btn-warning mt-4" data-toggle="modal" data-target="#exampleModalCenter">
  Order Now
</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title d-flex justify-content-center" id="exampleModalLongTitle">Order Summary</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" className="text-danger" >&times;</span>
        </button>
      </div>
      <div className="modal-body bg-light p-3">
          <div className="ml-5">
              <div><label>A delicious burger with following ingredient,</label></div>
              <div><ul>
              {meatCount > 0 ? (<li>
            <label style={{minWidth:"80px"}}>Meat</label>{meatCount} qty</li>) : null}
            {cheeseCount > 0 ? (<li>
            <label style={{minWidth:"80px"}}>Cheese</label>{cheeseCount} qty</li>) : null}
            {saladCount > 0 ? (<li>
            <label style={{minWidth:"80px"}}>Salad</label>{saladCount} qty</li>) : null}
            {baconCount > 0 ? (<li>
            <label style={{minWidth:"80px"}}>Bacon</label>{baconCount} qty</li>) : null}
                  </ul></div>
            <hr/>
        <div><label style={{minWidth:"135px"}}>Total </label>{props.price}</div>
        </div>
    </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Pay Now</button>
      </div>
    </div>
  </div>
</div>
</div>);

}

export default BurgerSummary;