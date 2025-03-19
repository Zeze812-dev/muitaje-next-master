'use server';

import nodemailer from 'nodemailer';

export async function orderHandler(formData, cart) {
    console.log(formData, cart);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kambulatfanboy@gmail.com',
            pass: 'pvurpoycibimpgdi',
        },
    });

    await transporter.sendMail({
        from: '"MUIRAJE" <kambulatfanboy@gmail.com>',
        to: formData.get('email'),
        subject: 'YOU ORDER FROM MUIRAJE',
        text: 'YOU ORDER FROM MUIRAJE',
        html: 'This <i>message</i> with <strong>attachments</strong>.',
    });

    console.log('Email sent successfully');
}