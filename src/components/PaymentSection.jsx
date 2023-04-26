import React from "react";
import Paypal from "../assets/images/paypal.jpg";
import MasterCard from "../assets/images/master-card.jpg";
import "../styles/PaymentSection.css";

const PaymentSection = () => {
    return (
        <div className="payment-method">
            <h1>Payment Information</h1>
            <form>
                <div className="form-control">
                    <input
                        type="radio"
                        name="transfer"
                        value="Direct Bank Transfer"
                    />
                    <label htmlFor="Direct Bank Transfer">
                        Direct Bank Transfer
                    </label>
                </div>
                <div className="form-control">
                    <input
                        type="radio"
                        name="transfer"
                        value="Cheque Payment"
                    />
                    <label htmlFor="Cheque Payment">Cheque Payment</label>
                </div>
                <div className="form-control">
                    <input type="radio" name="transfer" value=" Master Card" />
                    <label htmlFor="Master Card">Master Card</label>
                    <div className="form-img">
                        <img src={MasterCard} alt="MasterCard" />
                    </div>
                </div>
                <div className="form-control">
                    <input type="radio" name="transfer" value="Paypal" />
                    <label htmlFor="Paypal">Paypal</label>
                    <div className="form-img">
                        <img src={Paypal} alt="Paypal" />
                    </div>
                </div>
                <button>Reserve Now</button>
            </form>
        </div>
    );
};

export default PaymentSection;
