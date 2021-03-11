'use strict';


const nodemailer = require('nodemailer');
const CONFIG = require('./../config');
var empty = require('./Empty');

if (CONFIG.EMAIL_CONFIG === null) {
    var email = function(options) {
        nodemailer.createTestAccount((err, account) => {
            let transporter = nodemailer.createTransport({
                host: 'smtp.ethereal.email',
                port: 587,
                secure: false,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });

            if (empty(options.from)) {
                options.from = "Pacific Logging <noreply@neobanco.com>";
            }

            transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log('[FakeSMTP] Message error:');
                    return console.log(error);
                }
                console.log('[FakeSMTP] Message sent: %s', info.messageId);
                console.log('[FakeSMTP] Preview URL: %s', nodemailer.getTestMessageUrl(info));
            });
        });
    }

} else {

    if (CONFIG.EMAIL_CONFIG.PROVIDER == 'mailgun') {

        var email = function(options) {
            var mailgun = require('mailgun-js')({
                apiKey: CONFIG.EMAIL_CONFIG.API_KEY,
                domain: CONFIG.EMAIL_CONFIG.DOMAIN
            });

            if (empty(options.from)) {
                options.from = "Pacific Logging <noreply@" + CONFIG.EMAIL_CONFIG.DOMAIN + ">";
            }

            if (empty(options.text) && !empty(options.html)) {
                options.text = options.html
            }

            var data = {
                from: options.from,
                to: options.to,
                subject: options.subject,
                text: options.text
            };

            mailgun.messages().send(data, function(error, body) {
                console.log("[Mailgun Mail API] Message sent:")
                console.log(body);
            });
        }
    } else if (CONFIG.EMAIL_CONFIG.PROVIDER == "smtp") {

        var email = function(options) {
            var transporter = nodemailer.createTransport({
                // host: CONFIG.EMAIL_CONFIG.DOMAIN,
                // port: CONFIG.EMAIL_CONFIG.PORT,
                // secure: CONFIG.EMAIL_CONFIG.SECURE,
                service: CONFIG.EMAIL_CONFIG.SERVICE,
                auth: CONFIG.EMAIL_CONFIG.AUTH,
            });

            transporter.verify(function(error, success) {
                if (error) {
                    console.log("[Nodemailer SMTP Test] Error:")
                    console.log(error);
                } else {
                    console.log("[Nodemailer SMTP Test] OK!")
                }
            });

            if (empty(options.from)) {
                options.from = CONFIG.EMAIL_CONFIG.AUTH.user;
            }

            transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log('[Nodemailer SMTP] Message error:');
                    return console.log(error);
                }
                console.log('[Nodemailer SMTP] Message sent: %s', info.messageId);
            });

        }

    } else {
        throw new Error("Unknown email provider");
    }

}

module.exports = email;