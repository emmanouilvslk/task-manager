const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "manos8991@gmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    });
};

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "manos8991@gmail.com",
        subject: "We would love to see you back someime!",
        text: `Thanks for using our app, ${name}. What made you cancel your account?`,
    });
};

module.exports = { sendWelcomeEmail, sendCancelationEmail };
