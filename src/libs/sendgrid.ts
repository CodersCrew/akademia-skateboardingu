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
    products: [];
};

type SubscriptionData = {
    product_name: string;
};

type MailData = {
    to: string;
    templateType: TemplateType;
    templateData: OrderConfirmationData | SubscriptionData;
};

export const sendEmail = async ({
    to,
    templateType,
    templateData,
}: MailData) => {
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

    try {
        await sgMail.send(msg);
        console.log(`Email sent`);
    } catch (error) {
        console.error(error);
    }
};
