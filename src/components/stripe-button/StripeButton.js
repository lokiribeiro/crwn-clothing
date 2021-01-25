import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = (price) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51AzpvaLWYXu0pe3p2GIkzYL1fOARwYtme6VUGkt0rqHRqrEevhDhTuN8BRjvtD7dysntk05sBw4RypVCr5JfpyVo00FnIKYmGd';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
