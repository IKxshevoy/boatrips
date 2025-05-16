"use server";

import { Resend } from "resend";
import sanitizeHtml from "sanitize-html";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailParams = {
  email: string;
  firstName?: string;
  lastName?: string;
  message: string;
};

export const sendEmail = async ({ email, message }: EmailParams) => {
  if (message.length > 1000) {
    throw new Error("Message exceeds maximum length of 1000 characters.");
  }

  // Simple email validation regex (can be stricter if needed)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email format.");
  }

  // Sanitize message to prevent injection (basic)
  const cleanMessage = sanitizeHtml(message, {
    allowedTags: [], // no HTML tags allowed in message
    allowedAttributes: {},
  });

  await resend.emails.send({
    to: "boatripsqa@gmail.com",
    from: "orcDev <onboarding@resend.dev>",
    subject: "Questions & Answers",
    html: `
      <p><strong>From:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <p>${cleanMessage.replace(/\n/g, "<br/>")}</p>
    `,
  });
};
