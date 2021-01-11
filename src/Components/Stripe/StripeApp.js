import React from "react";
import "./style.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51I8H8BEcFqtOMJjJlPqicWV8LF2cXuj5olnix89tv2d7HWc212ZxsFYv5GySSeFlemEXhDBMAwM5azcoMAi9v5en00jLySGARn");

const StripeApp = () => {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default StripeApp;


// import React, { useState } from "react";
// import {
//     Elements,
//     CardElement,
//     useStripe,
//     useElements,
// } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import "./style.css";



// class StripeApp extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             stripe: loadStripe(
//                 "pk_test_51I8H8BEcFqtOMJjJlPqicWV8LF2cXuj5olnix89tv2d7HWc212ZxsFYv5GySSeFlemEXhDBMAwM5azcoMAi9v5en00jLySGARn"
//             )
//         }
//     }

//     render() {
//         return (
//             <div className="main">
//                 <Elements stripe={this.state.stripe}>
//                     <CheckoutForm />
//                 </Elements>
//             </div>
//         );
//     }
// }

// export default StripeApp;


// function CheckoutForm() {
//     const [isPaymentLoading, setPaymentLoading] = useState(false);
//     const stripe = useStripe();
//     const elements = useElements();
//     const payMoney = async (e) => {
//         e.preventDefault();
//         if (!stripe || !elements) {
//             return;
//         }
//         setPaymentLoading(true);
//         // const clientSecret = getClientSecret();
//         const clientSecret = "sk_test_51I8H8BEcFqtOMJjJMoEloKc7VUFbISeYMTQK3z90iWaBcQuS4r11LNUlkFR15KLZrQE5wGDUIagQZCVw5ZUN1RtN00YahI1dPS"
//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//             payment_method: {
//                 card: elements.getElement(CardElement),
//                 billing_details: {
//                     name: "Faruq Yusuff",
//                 },
//             },
//         });
//         setPaymentLoading(false);
//         if (paymentResult.error) {
//             alert(paymentResult.error.message);
//         } else {
//             if (paymentResult.paymentIntent.status === "succeeded") {
//                 alert("Success!");
//             }
//         }
//     };

//     return (
//         <div
//             style={{
//                 padding: "3rem",
//             }}
//         >
//             <div
//                 style={{
//                     maxWidth: "500px",
//                     margin: "0 auto",
//                 }}
//             >
//                 <form
//                     style={{
//                         display: "block",
//                         width: "100%",
//                     }}
//                     onSubmit={payMoney}
//                 >
//                     <div
//                         style={{
//                             display: "flex",
//                             flexDirection: "column",
//                             alignItems: "center",
//                         }}
//                     >
//                         <CardElement
//                             className="card"
//                             options={{
//                                 style: {
//                                     base: {
//                                         backgroundColor: "white"
//                                     }
//                                 },
//                             }}
//                         />
//                         <button
//                             className="pay-button"
//                             disabled={isPaymentLoading}
//                         >
//                             {isPaymentLoading ? "Loading..." : "Pay"}
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }