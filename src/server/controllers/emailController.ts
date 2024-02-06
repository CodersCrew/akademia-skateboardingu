import { MailData, emailService } from '../services/emailService';

export const sendEmail = async (mailData: MailData) => {
    const response = await emailService.sendEmail(mailData);
    return response;
};
