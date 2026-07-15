import { NextResponse } from "next/server";
import { mailOptions, transporter } from "../../../../config/nodemailer";

export const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  subject: "Subject",
  message: "Message",
};

export const generateEmailContent = (data) => {
  const text = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}:\n${val}\n\n`),
    ""
  );

  const html = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`),
    ""
  );

  return { text, html };
};

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    await transporter.sendMail({
      ...mailOptions,
      ...generateEmailContent({ name: email, subject, message }),
      subject: subject,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}