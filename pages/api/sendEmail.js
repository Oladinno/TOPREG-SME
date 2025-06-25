import sgMail from '@sendgrid/mail';

export default async function SendEmail(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { subject, description, email, name } = req.body;
  const referer = req.headers.referer;

  const content = {
    to: ['contact@bstefanski.com'],
    from: 'contact@bstefanski.com',
    subject: subject,
    text: description,
    html: `<div>
      <h1>Name: ${name}</h1>
      <h1>E-mail: ${email}</h1>
      <p>${description}</p>
      <p>Sent from: ${referer || 'Not specified or hidden'}</p>
    </div>`,
  };

  try {
    await sgMail.send(content);
    res.status(204).end();
  } catch (error) {
    console.error('ERROR', error);
    res.status(400).send({ message: error.message || 'Failed to send email' });
  }
}
