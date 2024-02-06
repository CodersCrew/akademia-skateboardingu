import sgMail from '@sendgrid/mail';

const templates = {
    orderConfirmation: process.env
        .SENDGRID_ORDER_CONFIRMATION_TEMPLATE as string,
    subscription: process.env.SENDGRID_SUBSCRIPTION_TEMPLATE as string,
};

type TemplateType = 'orderConfirmation' | 'subscription';

type OrderConfirmationData = {
    first_name: string;
    last_name: string;
    street_name: string;
    street_number: number;
    city: string;
    zip_code: string;
    phone_number: string;
    order_number: string;
    subtotal: string;
    shipping: string;
    total: string;
    // for now it's any, didn't know what type to use
    products: any;
};

type SubscriptionData = {
    product_name: string;
};

interface MailRecipient {
    to: string;
}

interface OrderMail extends MailRecipient {
    templateType: 'orderConfirmation';
    templateData: OrderConfirmationData;
}

interface SubscriptionMail extends MailRecipient {
    templateType: 'subscription';
    templateData: SubscriptionData;
}

export type MailData = OrderMail | SubscriptionMail;

export const emailService = {
    sendEmail: async ({ to, templateType, templateData }: MailData) => {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

        const templateId =
            templateType === 'orderConfirmation'
                ? templates.orderConfirmation
                : templates.subscription;

        const msg = {
            to,
            from: process.env.SENDGRID_FROM as string,
            templateId,
            dynamic_template_data: templateData,
        };

        return await sgMail.send(msg);
    },
};
