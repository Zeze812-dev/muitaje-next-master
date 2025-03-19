// app/actions/sendEmail.js
'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
    console.log("Form Data:", formData);

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
            from: '"MUIRAJE" <tixomir5150@gmail.com>', // Отправитель
            to: formData.get('email'), // Получатель из formData
            subject: 'YOU ORDER FROM MUIRAJE', // Тема письма
            text: 'YOU ORDER FROM MUIRAJE', // Текстовая версия письма
            html: 'This <i>message</i> with <strong>attachments</strong>.', // HTML-версия письма
        });

        console.log("Email sent successfully:", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: error.message };
    }
}
