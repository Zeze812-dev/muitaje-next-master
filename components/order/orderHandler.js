import nodemailer from "nodemailer";

export async function orderHandler(formData, a) {

    console.log("Form Data:", formData);
    console.log("Additional Data:", a);

    // Создаем транспорт для отправки почты
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER, // Используем переменные окружения
            pass: process.env.EMAIL_PASS, // Используем переменные окружения
        },
    });

    try {
        // Отправляем письмо
        const info = await transporter.sendMail({
            from: '"MUIRAJE" <kambulatfanboy@gmail.com>', // Отправитель
            to: 'hukuto24@Mail.ru', // Получатель из formData
            subject: 'YOU ORDER FROM MUIRAJE', // Тема письма
            text: 'YOU ORDER FROM MUIRAJE', // Текстовая версия письма
            html: 'This <i>message</i> with <strong>attachments</strong>.', // HTML-версия письма
        });

        console.log("Email sent successfully:", info.messageId);
    } catch (error) {
        console.error("Error sending email:", error);
    }
}
