export default function (req, res) {
     const nodemailer = require('nodemailer');
   
     const EMAIL = "softsgens@gmail.com";
     const GMAIL_PASSWORD = "bczjxzfatgxsebrz";
   
     const transporter = nodemailer.createTransport({
       port: 465,
       host: "smtp.gmail.com",
       auth: {
         user: EMAIL,
         pass: GMAIL_PASSWORD
       },
       secure: true,
     });
   
     const mailData = {
       from: EMAIL,
       to: `zunairgillani54@gmail.com, ${req.body.email}`,
       subject: `Message From ${req.body.name}`,
       text: req.body.detail + " | Sent from: " + req.body.email,
       html: `
         <p><strong>Name: </strong> 'ssss'</p>
       `,
       attachments: [
         {
           filename: 'file.jpg', // Replace with the desired file name
           content: Buffer.from(req.body.file, 'base64') // Assuming req.body.file contains base64 data
         }
       ]
     };
   
     transporter.sendMail(mailData, function (err, info) {
       if (err) {
         console.log(err);
         res.status(500).json({ message: "Error sending email!" });
       } else {
         res.status(200).json({ message: "Email sent!", info });
       }
     });
   }
   