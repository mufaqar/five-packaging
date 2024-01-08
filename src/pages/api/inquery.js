export default function (req, res) {
     const nodemailer = require('nodemailer');
   
     const EMAIL = "softsgens@gmail.com";
     const GMAIL_PASSWORD = "bczjxzfatgxsebrz";
     const blobUrl = 'blob:http://localhost:3000/f3d31245-9f42-4b6b-8f90-56c55dfe9af0';


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
       to: `mufaqar@gmail.com, ${req.body.email}`,
       subject: `Message From ${req.body.name}`,
       text: req.body.detail + " | Sent from: " + req.body.email,
       html: `
         <p><strong>Name: </strong> 'ssss'</p>
         <p>${req.body.file}</p>
        
       `,
       
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
   