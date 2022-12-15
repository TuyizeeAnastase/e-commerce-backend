import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phone_number = process.env.PHONE_NUMBER;

const client = new twilio(accountSid, authToken);
export const sendMessage = (message, phone) => {
  return client.messages
    .create({
      body: message,
      from: phone_number,
      to: phone,
    })
    .then((message) => console.log(message.sid));
};
