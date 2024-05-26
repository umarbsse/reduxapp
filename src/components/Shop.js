import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/index';

export default function Shop() {
  const dispatch = useDispatch();
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  const balance = useSelector(state=>state.amount)
  return (
    <div>
        <h2>Buy Adidas shows 100 USD</h2>
        {/*
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(500))}}>-</button>
      Update Balance
      <button className="btn btn-primary mx-2" onClick={()=>{dispatch(actionCreators.depositMoney(500))}}>+</button> */}


      <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(500)}}>-</button>
      Update Balance ({balance})
      <button className="btn btn-primary mx-2" onClick={()=>{depositMoney(500)}}>+</button>
    </div>
  )
}
