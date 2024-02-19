import { EmailData, emailService } from '../services/emailService';

export const postEmail = async (mailData: EmailData) => {
    const response = await emailService.sendEmail(mailData);
    return { response: response[0] };
};
