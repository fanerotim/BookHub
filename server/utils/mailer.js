const nodemailer = require('nodemailer')

exports.mailer = async (userDetails) => {

    const transporter = nodemailer.createTransport({
        host: "mail.book-hub.fanerotim.com",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: "info@book-hub.fanerotim.com",
            pass: "[waS1NIZ[NB6",
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Book-Hub" <info@book-hub.fanerotim.com>', // sender address
            to: userDetails.email, // list of receivers
            subject: "Book-Hub Registration", // Subject line
            text: "Hey there! Thank you for registering on our website.", // plain text body
            html: 
            `<h2>Hi ${userDetails.username},</h2>
            <h2>Welcome to <b>Book-Hub</b>!</h2>
            <ul>
                <h3>Here’s a quick overview of what you can do:</h3>
                <li>✨ Explore: Search and add books to your collection.</li>
                <li>📚 Organize: Easily keep track of the books you’ve read, plan to read, or are currently reading.</li>
                <li>👥 Connect: Join other readers in sharing and discovering new titles.</li>
            </ul>
            
            <h4>To get started, simply log in to your account, browse our catalog, and start adding books to your list!</h4>

            <p>If you have any questions, feel free to reach out to us at info@book-hub.fanerotim.com. We’d love to hear from you.</p>
            
            <h2>Happy Reading\n,
            The Book-Hub Team</h2>`, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error)
    return 'Successul Registration'
}
