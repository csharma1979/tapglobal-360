import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// POST - Submit demo form request and send email (no DB saving)
export const POST = async (req) => {
  try {
    const body = await req.json();

    const {
      firstname,
      lastname,
      email,
      companyName,
      phoneno,
      countryCode,
      message,
      formType,
    } = body;

    console.log("Received Data:", {
      firstname,
      lastname,
      email,
      companyName,
      phoneno,
      countryCode,
      message,
      formType,
    });

    // Send an email
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "anishakumari0423@gmail.com",
        pass: "rcjuxzxcwwfeskir",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "support@a2zhome-solutions.com",
      subject: formType === "demo" ? "New Demo Request" : "New Sales Enquiry",
      text: `A new ${formType} request has been submitted: 
             Name: ${firstname} ${lastname}
             Email: ${email}
             Company Name: ${companyName}
             Phone Number: ${countryCode} ${phoneno}
             Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message: "Form submitted successfully and email sent.",
    });
  } catch (error) {
    console.log(error, "An error occurred while submitting the form");
    return NextResponse.json({
      error: "An error occurred while submitting the form.",
    });
  }
};

// GET - Disabled for static site (no database operations)
export const GET = async () => {
  return NextResponse.json(
    { message: "Demo form submissions are not stored in static mode" },
    { status: 405 }
  );
};