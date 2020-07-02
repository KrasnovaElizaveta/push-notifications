'use strict';
const express = require('express');
const webpush = require('web-push');

const publicVapidKey = 'BBXVirIB08nGFB_KwhHkTlS_hOqNY7CkfcdrI_kGpPdzPOxB45KLvd5PaM_ISdguCsKuwPfIc12XDjS_NrhtaW4' || process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = '9Q0eYfwaS5j2dSb8o02xNZrMxeKoj73lEG6RQmhnclw' || process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails('mailto:krasnovaliza575@mail.com', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
    const subscription = req.body;
    res.status(201).json({});
    const payload = JSON.stringify({ title: 'test' });

    console.log(subscription);

    webpush.sendNotification(subscription, payload).catch(error => {
        console.error(error.stack);
    });
});

app.use(require('express-static')('./'));

app.listen(3000);
