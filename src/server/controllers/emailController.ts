import { type EmailData, sendEmail } from '@/server/services/emailService';

export const postEmail = async (mailData: EmailData) => {
  const response = await sendEmail(mailData);

  return { data: response[0] };
};
