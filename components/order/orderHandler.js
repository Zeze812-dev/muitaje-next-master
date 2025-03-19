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


    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const deliveryMethod = formData.get('deliver');
    const comments = formData.get('coments');

    // Формируем содержимое корзины
    const cartItems = cart.map(item => `
        <li>
            ${item.name} - ${item.price} руб.
        </li>
    `).join('');

    // Общая сумма заказа
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    // Формируем HTML-письмо
    const htmlContent = `
        <h1>Новый заказ</h1>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Способ доставки:</strong> ${deliveryMethod}</p>
        <p><strong>Комментарий:</strong> ${comments}</p>
        <h2>Корзина:</h2>
        <ul>
            ${cartItems}
        </ul>
        <h2>Итоговая сумма: ${totalPrice} руб.</h2>
    `;


    await transporter.sendMail({
        from: '"MUIRAJE" <kambulatfanboy@gmail.com>',
        to: formData.get('email'),
        subject: 'YOU ORDER FROM MUIRAJE',
        text: 'YOU ORDER FROM MUIRAJE',
  
    });

    console.log('Email sent successfully');
}
