import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import path from 'path';
import SiteContent from './models/SiteContent.js';
import { siteData } from './data/siteData.js';
import { aboutPageData } from './data/aboutdata.js';
import { contactPageData } from './data/contactdata.js';
import { portfolioPageData } from './data/portfoliodata.js';
import { careersPageData } from './data/careerdata.js';
import { leadershipPageData } from './data/teamdata.js';
import contentRoutes from './routes/content.routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 5002;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
}));
app.use('/images', express.static(path.join(process.cwd(), 'public', 'images')));

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
connectDB();
app.use('/api', contentRoutes);

// SMTP configuration (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,  // Your Gmail email address from .env file
    pass: process.env.GMAIL_PASS,  // Your Gmail app password from .env file
  },
});

// Endpoint to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Validate if the required fields exist
  if (!name || !email || !message) {
    return res.status(400).send('Name, email, and message are required.');
  }

  // HTML email content with proper styling and logo
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Sender email
    to: process.env.RECIPIENT_EMAIL,  // Recipient email from .env file
    subject: `New Message from ${name}`,  // Proper subject line
    html: `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              color: #333;
              margin: 0;
              padding: 0;
              background-color: #f4f4f4;
            }
            .email-container {
              width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 8px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            }
            .email-header {
              text-align: center;
              margin-bottom: 20px;
            }
            .email-header img {
              max-width: 200px;
              height: auto;
            }
            .email-content {
              font-size: 16px;
              line-height: 1.6;
            }
            .email-footer {
              text-align: center;
              font-size: 14px;
              color: #888;
              margin-top: 20px;
            }
            .email-footer a {
              color: #4CAF50;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="email-container">
            <div class="email-header">
              <img src="https://sgca.ssanimations.in/images/LOGO.PNG" alt="Company Logo" />
            </div>
            <div class="email-content">
              <h2>You have received a new message!</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <div class="email-footer">
              <p>Thank you for contacting us!</p>
              <p>If you have any questions, feel free to <a href="mailto:support@yourcompany.com">contact us</a>.</p>
            </div>
          </div>
        </body>
      </html>
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error:', error);
      return res.status(500).send('Error sending email');
    }
    return res.status(200).send('Email sent: ' + info.response);
  });
});

// Endpoint to seed data
app.post('/seed', async (req, res) => {
  await connectDB();

  const existing = await SiteContent.findOne();
  if (existing) {
    return res.status(400).json(
      { message: 'Data already seeded' }
    );
  }

  await SiteContent.create({
    siteData,
    aboutPageData,
    contactPageData,
    portfolioPageData,
    careersPageData,
    leadershipPageData,
  });

  res.status(200).json({ message: 'Data seeded successfully' });
});

// Listen on the specified port
app.listen(port, (err) => {
  if (err && err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);  // Exit with failure status code
  }
  if (err) {
    console.error(`Error occurred: ${err.message}`);
    return process.exit(1);  // Exit with failure status code
  }
  console.log(`Server running at https://sgca.ssanimations.in:${port}`);
});
