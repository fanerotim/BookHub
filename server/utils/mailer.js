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
            html: `
             Hi ${userDetails.username},

            <h1>Welcome to <b>Book-Hub</b>! We’re thrilled to have you join our community of book lovers. Whether you’re here to keep track of your reading, discover new books, or build your own personal library, you’re in the right place.</h1>

            Here’s a quick overview of what you can do:

    ✨ Explore: Search and add books to your collection.
    📚 Organize: Easily keep track of the books you’ve read, plan to read, or are currently reading.
    👥 Connect: Join other readers in sharing and discovering new titles.

    To get started, simply log in to your account, browse our catalog, and start adding books to your list!

    If you have any questions, feel free to reach out to us at [support email]. We’d love to hear from you.

    Happy Reading,
    The Book-Hub Team

    P.S. Don’t forget to check out our new arrivals and community recommendations!
            `, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
    }

    main().catch(console.error)
    return 'Successul Registration'
}
