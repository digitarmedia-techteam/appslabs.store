
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email Template for the Business (Admin Notification)
const generateAdminEmail = (data: any) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #f8fafc; color: #0f172a; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); overflow: hidden; }
    .header { background: #4f46e5; padding: 24px; text-align: center; }
    .header h1 { color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; font-weight: 600; margin-bottom: 4px; display: block; }
    .value { font-size: 16px; color: #1e293b; background: #f1f5f9; padding: 12px; border-radius: 8px; }
    .footer { background: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Lead Received</h1>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Name</span>
        <div class="value">${data.name}</div>
      </div>
      <div class="field">
        <span class="label">Email</span>
        <div class="value">${data.email}</div>
      </div>
      <div class="field">
        <span class="label">Subject</span>
        <div class="value">${data.subject}</div>
      </div>
      <div class="field">
        <span class="label">Message</span>
        <div class="value" style="white-space: pre-wrap;">${data.message}</div>
      </div>
    </div>
    <div class="footer">
      AppsLabs Automated Lead System
    </div>
  </div>
</body>
</html>
`;

// Email Template for the Client (Acknowledgment)
const generateClientEmail = (name: string) => `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: 'Inter', sans-serif; background-color: #020617; color: #f8fafc; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); overflow: hidden; }
    .header { background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 40px 24px; text-align: center; }
    .logo-text { font-size: 28px; font-weight: 800; color: white; letter-spacing: -0.02em; margin-bottom: 8px; display: block; }
    .logo-dot { color: #38bdf8; }
    .content { padding: 40px 32px; }
    .greeting { font-size: 24px; margin-bottom: 24px; color: #ffffff; font-weight: 700; }
    .message { font-size: 16px; line-height: 1.6; color: #cbd5e1; margin-bottom: 32px; }
    .btn { display: inline-block; background: #4f46e5; color: white; padding: 14px 28px; text-decoration: none; border-radius: 12px; font-weight: 600; font-size: 14px; }
    .footer { padding: 32px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid rgba(255,255,255,0.05); }
    .socials { margin-top: 16px; }
    .social-link { color: #94a3b8; text-decoration: none; margin: 0 8px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="logo-text">AppsLabs<span class="logo-dot">.</span>store</span>
      <div style="color: rgba(255,255,255,0.8); font-size: 14px;">Next-Gen Digital Development</div>
    </div>
    <div class="content">
      <h2 class="greeting">Hi ${name},</h2>
      <p class="message">
        Thank you for reaching out to AppsLabs. We've received your message and our team of digital engineers is already reviewing your inquiry.
        <br><br>
        We aim to respond to all inquiries within 24 hours. In the meantime, feel free to explore our latest case studies.
      </p>
      <a href="https://appslabs.store#showcase" class="btn">View Showcase</a>
    </div>
    <div class="footer">
      <p>© 2024 AppsLabs Global. All rights reserved.</p>
      <div class="socials">
        <a href="#" class="social-link">Twitter</a>
        <a href="#" class="social-link">LinkedIn</a>
        <a href="#" class="social-link">GitHub</a>
      </div>
    </div>
  </div>
</body>
</html>
`;

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        // 1. Validate Input
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // 2. Configure Transporter
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com', // Default to Gmail for basic use, adjust as needed
            port: parseInt(process.env.SMTP_PORT || '587'),
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 3. Send Email to Business (Admin)
        await transporter.sendMail({
            from: `"AppsLabs Lead" <${process.env.SMTP_USER}>`,
            to: process.env.BUSINESS_EMAIL || process.env.SMTP_USER,
            replyTo: email,
            subject: `New Lead: ${subject || 'Contact Form Submission'}`,
            html: generateAdminEmail({ name, email, subject, message }),
        });

        // 4. Send Confirmation to Client
        await transporter.sendMail({
            from: `"AppsLabs Team" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "We've received your message - AppsLabs",
            html: generateClientEmail(name),
        });

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Email Error:', error);
        return NextResponse.json(
            { error: 'Failed to send email', details: error.message },
            { status: 500 }
        );
    }
}
