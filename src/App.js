import logo from './logo.svg';
import './App.css';
import MyApp  from "./Components/Paypay/MyApp";
import StripeApp  from "./Components/Stripe/StripeApp";

function App() {
  return (
    <div className="App">
      <StripeApp/><br/><br/>
      {/* <MyApp /><br/><br/> */}

    </div>
  );
}

export default App;
