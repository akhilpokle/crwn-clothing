import React from 'react'

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = "pk_test_20G3gmJM34RnxwO5KlZ7EKBh00Gizq5InG";
   const onToken = token => {
       console.log('token');
   }
    return (
        <StripeCheckout 
            label='Pay Now'
            name = 'CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export const StripeCheckoutButton;