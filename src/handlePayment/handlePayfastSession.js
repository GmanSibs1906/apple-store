import { generatePreHash, generateSignature } from "./generatePaymentSignature";

const passphrase = "helloworld1990";
const merchant_id = "10027583";
const merchant_key = "ntokols4n2w5l";
const paymentURL = "https://sandbox.payfast.co.za/eng/process";

export const handlePayfastSession = (orderTotal, orderId) => {
  const process = {
    merchant_id: merchant_id,
    merchant_key: merchant_key,
    return_url: `https://jovial-seahorse-ce30a6.netlify.app/`,
    cancel_url: `https://portfolio-fa997.web.app/`,
    notify_url: `https://jovial-seahorse-ce30a6.netlify.app/`,
    name_first: "",
    email_address: "",
    m_payment_id: "",
    amount: orderTotal,
    item_name: orderId,
    item_description: "",
    custom_int1: "",
    custom_str1: "",
    custom_str2: "",
  };

  const encodeURL =
    paymentURL +
    "?signature" +
    generateSignature(process, passphrase) +
    "&" +
    generatePreHash(process);
  return { actionURL: encodeURL };
};
