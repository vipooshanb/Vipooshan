import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

console.log("TWILIO_SID =", process.env.TWILIO_SID);
console.log("TWILIO_AUTH_TOKEN =", process.env.TWILIO_AUTH_TOKEN);


client.messages.create({
  from: "whatsapp:+14155238886",  // Twilio sandbox number
  to: "whatsapp:+94722822039",    // Your phone number in full international format
  body: "Hello! This is a test message from Twilio sandbox."
})
.then(msg => console.log("Message SID:", msg.sid))
.catch(err => console.error("Twilio error:", err));
