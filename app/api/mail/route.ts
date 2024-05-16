import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'singhalbspr@gmail.com',
        pass: process.env.mail_pass,
    }
});

// Email data



export async function POST(req:NextRequest){
    try{
        const {
            senderName,
            senderEmail,
            mailContent
        }:{
            senderName:string,
            senderEmail:string,
            mailContent:string
        } = await req.json();
    
        const mailOptions = {
            from: 'singhalbspr@gmail.com',
            to: 'singhalbspr4896@gmail.com',
            subject: `Email from ${senderName} - ${senderEmail} using Portfolio Website`,
            text: `${mailContent}`,
        };
          
          // Send the email
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
        return NextResponse.json('Email sent successfully')
    }catch(err){
        console.error('Error sending email:', err);
        return NextResponse.json('Error sending email, try after some')
    }
}