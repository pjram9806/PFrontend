import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './components/CheckoutForm';
import React from 'react';
import PaymentPage from './components/PaymentPage'
import Auth from './components/Auth';
import HotelList from './components/HotelList';
import HotelSearch from './components/HotelSearch';



const App = () => {

  return (
<React.Fragment>

 {/*  <PaymentPage/> 
 <Auth/>*/}

<HotelSearch/>
<HotelList/>

 

</React.Fragment>



  );
};

export default App;