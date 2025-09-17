/* eslint-env node */
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// === Gmail Setup ===
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// === Twilio Setup ===
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// === Route ===
app.post("/send", async (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  if (!phone) {
    return res.status(400).json({
      success: false,
      error: "Phone number is required for WhatsApp.",
    });
  }

  // Prepare WhatsApp number in proper format
  let whatsappNumber = phone.trim();
  if (!whatsappNumber.startsWith("+")) {
    return res.status(400).json({
      success: false,
      error: "Phone number must include country code, e.g., +94771234567",
    });
  }
  whatsappNumber = `whatsapp:${whatsappNumber}`;

  let emailResult = null;
  let whatsappResult = null;

  // 1️⃣ Send Gmail
  try {
    emailResult = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form: ${subject}`,
      text: `📩 New Contact Form
Name: ${name},
Email: ${email},
Subject: ${subject},
Message: ${message},
Phone: ${phone}`,
    });
    console.log("Email sent:", emailResult.response);
  } catch (err) {
    console.error("Email error:", err);
  }

  // 2️⃣ Send WhatsApp via Twilio
  try {
    whatsappResult = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio sandbox number
      to: 'whatsapp:+94722822039',
      body: `📩 New Contact Form
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
Phone: ${phone}`,
    });
    console.log("WhatsApp message sent:", whatsappResult.sid);
  } catch (err) {
    console.error("WhatsApp error:", err);
  }

  // 3️⃣ Return response
  if (emailResult || whatsappResult) {
    res.json({
      success: true,
      message: "Message processed.",
      emailSent: !!emailResult,
      whatsappSent: !!whatsappResult,
    });
  } else {
    res.status(500).json({
      success: false,
      error: "Both Gmail and WhatsApp failed. Check server logs.",
    });
  }
});

// === Start Server ===
app.listen(5000, () =>
  console.log("Server running on http://localhost:5000")
);
