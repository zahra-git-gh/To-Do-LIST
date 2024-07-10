const {Recipient, Sender, MailerSend, EmailParams}=require('mailersend');

const mailersend=new MailerSend({
    apiKey:process.env.MAILER_SEND_API_KEY
});

const sender=new Sender(process.env.MAILER_SEND_EMIAL,process.env.MAILER_SEND_NAME);

const emailSend=async (subject, text, recipient)=>{
    const recipient=[new Recipient(recipient.email, recipient.name)]
    try {
        const emailParams=new EmailParams()
        .setFrom(sender.email)
        .setFromName(sender.name)
        .setRecipients(recipient)
        .setSubject(subject)
        .setText(text);
        await mailersend.email.send(emailParams)
    } catch (error) {
        console.log(error);
    }
};
module.exports={emailSend}