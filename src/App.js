import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import React from 'react';
import PaymentPage from './components/PaymentPage'
import Auth from './components/Auth';



const App = () => {

  return (
<React.Fragment>

 {/*  <PaymentPage/> */}

 <Auth/>

</React.Fragment>



  );
};

export default App;