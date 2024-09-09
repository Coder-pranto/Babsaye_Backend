const router = require('express').Router()
const SSLCommerzPayment = require('sslcommerz-lts');
const { baseURL, clientURL } = require('../utils/utils');


// SSLCommerz store credentials
const store_id = 'abc66dc23a83e3c2';
const store_passwd = 'abc66dc23a83e3c2@ssl';
const is_live = false; // Set true for live, false for sandbox


const paymentCreate = (req, res) => {
    const { amount, transactionId, supplierName } = req.body;

    const paymentData = {
        total_amount: amount,
        currency: 'BDT',
        tran_id: transactionId, 
        success_url: `${baseURL}/payment/success`,
        fail_url: `${baseURL}/payment/fail`,
        cancel_url: `${baseURL}/payment/cancel`,
        ipn_url: `${baseURL}/payment/ipn`,
        shipping_method: 'NO',
        product_name: 'Supplier Payment',
        product_category: 'Payments',
        product_profile: 'non-physical-goods',
        cus_name: supplierName, 
        cus_email: 'customer@example.com',
        cus_add1: 'Dhaka',
        cus_city: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
    };

    console.log("payment is received!")

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    sslcz.init(paymentData).then(apiResponse => {
        let GatewayPageURL = apiResponse.GatewayPageURL;
        if (GatewayPageURL) {
            res.json({ url: GatewayPageURL });
        } else {
            res.status(400).json({ message: 'Failed to initiate payment' });
        }
    });
}

const paymentSuccess = (req, res)=>{
    res.redirect(`${clientURL}/payment/success`)
}
const paymentFailed = (req, res)=>{
    res.redirect(`${clientURL}/payment/fail`)
}
const paymentCancel = (req, res)=>{
    res.redirect(`${clientURL}/payment_method`)
}


// Payment Initialization Route (From Frontend)
router.post('/init', paymentCreate );
router.post('/success', paymentSuccess );
router.post('/fail', paymentFailed );
router.post('/cancel', paymentCancel );

module.exports = router;



