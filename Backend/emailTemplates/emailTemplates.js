 const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Verify Your Email – Omsheel Group</title>
    <style>
      @media only screen and (max-width: 600px) {
        body {
          padding: 10px !important;
          background-size: 180px !important;
        }
        .container {
          padding: 16px !important;
        }
        .header h1 {
          font-size: 20px !important;
        }
        .code-box {
          font-size: 28px !important;
          letter-spacing: 4px !important;
        }
        .footer {
          font-size: 0.75em !important;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.7;
      color: #2c2c2c;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: url('./Omsheel-wb.png') center center no-repeat;
      background-size: 300px;
    "
  >
    <div
      class="header"
      style="
        background: linear-gradient(135deg, #7f1d8e, #e11d74);
        padding: 24px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      "
    >
      <h1 style="color: white; margin: 0; font-size: 24px;">
        Let’s Get You Verified 
      </h1>
    </div>

    <div
      class="container"
      style="
        background-color: #ffffffdd;
        padding: 24px;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <p style="margin-top: 0;">Hi there,</p>
      <p>
        Welcome to <strong>Omsheel Group</strong> — we’re excited to have you on board.
      </p>
      <p>
        To activate your account and unlock everything we offer, simply use the
        verification code below:
      </p>

      <div
        class="code-box"
        style="
          text-align: center;
          margin: 30px 0;
          padding: 15px;
          border-radius: 8px;
          background: linear-gradient(to right, #7f1d8e, #e11d74);
          color: white;
          font-size: 36px;
          font-weight: bold;
          letter-spacing: 6px;
        "
      >
        {verificationcode}
      </div>

      <p>
        This code is valid for <strong>1 minute </strong>. If it expires,
        you can request a new one anytime.
      </p>
      <p>
        Didn’t sign up with us? No problem — just ignore this message and we’ll take care of the rest.
      </p>

      <p style="margin-bottom: 0;">
        With appreciation,<br />
        <strong>The Omsheel Experience Team</strong>
      </p>
    </div>

    <div
      class="footer"
      style="
        text-align: center;
        margin-top: 25px;
        font-size: 0.8em;
        color: #999;
      "
    >
      <p>This is an automated message from Omsheel Group. Please do not reply.</p>
    </div>
  </body>
</html>`;

 const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Password Reset Successful – Omsheel Group</title>
    <style>
      @media only screen and (max-width: 600px) {
        body {
          padding: 10px !important;
          background-size: 200px !important;
        }
        .container {
          padding: 16px !important;
        }
        .header h1 {
          font-size: 20px !important;
        }
        .code-box {
          font-size: 28px !important;
          letter-spacing: 4px !important;
        }
        .info-box {
          font-size: 14px !important;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.7;
      color: #2c2c2c;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: url('./Omsheel-wb.png') center center no-repeat;
      background-size: 300px;
    "
  >
    <div
      class="header"
      style="
        background: linear-gradient(135deg, #7f1d8e, #e11d74);
        padding: 24px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      "
    >
      <h1 style="color: white; margin: 0; font-size: 24px;">
        Password Updated Successfully 🔐
      </h1>
    </div>

    <div
      class="container"
      style="
        background-color: #ffffffdd;
        padding: 24px;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
      "
    >
      <p style="margin-top: 0;">Hi there,</p>
      <p>
        This is a quick confirmation that your password for
        <strong>Omsheel Group</strong> was successfully changed.
      </p>
      <p>
        <strong>Didn't request this change?</strong> Please reset your password
        immediately and contact our support team.
      </p>

      <p style="margin-bottom: 0;">
        Stay safe,<br />
        <strong>The Omsheel Security Team</strong>
      </p>
    </div>

    <div
      style="
        text-align: center;
        margin-top: 25px;
        font-size: 0.8em;
        color: #999;
      "
    >
      <p>This is an automated message from Omsheel Group. Please do not reply.</p>
    </div>
  </body>
</html>`;

 const PASSWORD_RESET_REQUEST_TEMPLATE = `
 <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Password Reset Code – Omsheel Group</title>
  <style>
    @media only screen and (max-width: 600px) {
      body {
        padding: 10px !important;
        background-size: 180px !important;
      }
      .content {
        padding: 16px !important;
      }
      .code {
        font-size: 28px !important;
        letter-spacing: 4px !important;
      }
      .footer {
        font-size: 0.75em !important;
      }
    }
  </style>
</head>
<body
  style="
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c2c2c;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background: url('./Omsheel-wb.png') center center no-repeat;
    background-size: 300px;
  "
>
  <div
    style="
      background: linear-gradient(135deg, #7f1d8e, #e11d74);
      padding: 24px;
      text-align: center;
      border-radius: 8px 8px 0 0;
    "
  >
    <h1 style="color: white; margin: 0; font-size: 24px;">
      Password Reset Request
    </h1>
  </div>

  <div
    class="content"
    style="
      background-color: #ffffffee;
      padding: 24px;
      border-radius: 0 0 8px 8px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
    "
  >
    <p>Hello,</p>
    <p>We received a request to reset your password for your <strong>Omsheel Group</strong> account.</p>
    <p>Please use the verification code below to reset your password:</p>

    <div
      class="code"
      style="
        text-align: center;
        margin: 30px 0;
        padding: 16px;
        background: linear-gradient(to right, #7f1d8e, #e11d74);
        color: white;
        font-size: 36px;
        font-weight: bold;
        letter-spacing: 8px;
        border-radius: 8px;
      "
    >
      {resetCode}
    </div>

    <p>This code is valid for <strong>1 minutes</strong>. If you didn’t request a password reset, you can safely ignore this message.</p>

    <p style="margin-bottom: 0;">
      Stay secure,<br />
      <strong>The Omsheel Security Team</strong>
    </p>
  </div>

  <div
    class="footer"
    style="
      text-align: center;
      margin-top: 25px;
      font-size: 0.8em;
      color: #999;
    "
  >
    <p>This is an automated message from Omsheel Group. Please do not reply.</p>
  </div>
</body>
</html>
`;

const EMAIL_VERIFIED_SUCCESSFULLY=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verified – Omsheel Group</title>
    <style>
      @media only screen and (max-width: 600px) {
        body {
          padding: 10px !important;
          background-size: 180px !important;
        }
        .content {
          padding: 16px !important;
        }
        .btn {
          padding: 10px 16px !important;
          font-size: 14px !important;
        }
        .footer {
          font-size: 0.75em !important;
        }
      }
    </style>
  </head>
  <body
    style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.7;
      color: #2c2c2c;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background: url('./Omsheel-wb.png') center center no-repeat;
      background-size: 300px;
    "
  >
    <div
      style="
        background: linear-gradient(135deg, #7f1d8e, #e11d74);
        padding: 24px;
        text-align: center;
        border-radius: 8px 8px 0 0;
      "
    >
      <h1 style="color: white; margin: 0; font-size: 24px;">
        Verification Successful ✅
      </h1>
    </div>

    <div
      class="content"
      style="
        background-color: #ffffffee;
        padding: 24px;
        border-radius: 0 0 8px 8px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.08);
      "
    >
      <p>Hi there,</p>
      <p>
        Great news! Your email address has been successfully verified with
        <strong>Omsheel Group</strong>.
      </p>
      <p>
        You can now access all features and updates available to our community.
        We’re thrilled to have you with us!
      </p>

      

      <p>
        Need assistance? Feel free to reach out at
        <a href="mailto:support@omsheel.com" style="color: #e11d74;">support@omsheel.com</a>.
      </p>

      <p style="margin-bottom: 0;">
        With appreciation,<br />
        <strong>The Omsheel Team</strong>
      </p>
    </div>

    <div
      class="footer"
      style="
        text-align: center;
        margin-top: 25px;
        font-size: 0.8em;
        color: #999;
      "
    >
      <p>This is an automated message from Omsheel Group. Please do not reply.</p>
    </div>
  </body>
</html>`

const INCUBATOR_EMAIL_SUCCESS=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Startup Idea Submission</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 24px;
      background: #ffffff;
      background-image: url('./Omsheel-wb.png'); /* Replace with correct path or full URL */
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 280px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      border-radius: 10px;
    }

    .header {
      background: linear-gradient(135deg, #7f1d8e, #e11d74);
      padding: 24px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }

    .header h2 {
      color: white;
      margin: 0;
      font-size: 22px;
    }

    .details {
      padding: 24px;
      background-color: #ffffffdd;
      border-radius: 0 0 10px 10px;
      backdrop-filter: blur(2px);
    }

    .details p {
      font-size: 16px;
      margin: 12px 0;
      color: #333;
    }

    .footer {
      padding: 0 24px 20px;
      font-size: 14px;
      color: #444;
    }

    .footer-note {
      text-align: center;
      color: #999;
      font-size: 12px;
      margin-top: 20px;
    }

    @media only screen and (max-width: 600px) {
      .container {
        padding: 16px;
      }
      .header h2 {
        font-size: 18px;
      }
      .details p {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>🚀 New Startup Idea Submitted</h2>
    </div>

    <div class="details">
      <p><strong>👤 Name:</strong> {name}</p>
      <p><strong>📧 Email:</strong> {email}</p>
      <p><strong>💡 Idea:</strong> {idea}</p>
      <p><strong>💰 Budget:</strong> ₹{budget}</p>
      <p>📩 This submission was received via the <strong>Omsheel Group</strong> platform. Please review and take necessary actions.</p>

    </div>

    <div class="footer">
    </div>

    <div class="footer-note">
      <p>Internal Notification – Omsheel Group</p>
    </div>
  </div>
</body>
</html>`
const CONTACT_SUBMISSION=`<!DOCTYPE html>
 
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Submission</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 0;
      background: #f4f4f4;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 24px;
      background: #ffffff;
      background-image: url('./Omsheel-wb.png'); /* Replace with correct path or full URL */
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 280px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      border-radius: 10px;
    }

    .header {
      background: linear-gradient(135deg, #7f1d8e, #e11d74);
      padding: 24px;
      border-radius: 10px 10px 0 0;
      text-align: center;
    }

    .header h2 {
      color: white;
      margin: 0;
      font-size: 22px;
    }

    .details {
      padding: 24px;
      background-color: #ffffffdd;
      border-radius: 0 0 10px 10px;
      backdrop-filter: blur(2px);
    }

    .details p {
      font-size: 16px;
      margin: 12px 0;
      color: #333;
    }

    .footer {
      padding: 0 24px 20px;
      font-size: 14px;
      color: #444;
    }

    .footer-note {
      text-align: center;
      color: #999;
      font-size: 12px;
      margin-top: 20px;
    }

    @media only screen and (max-width: 600px) {
      .container {
        padding: 16px;
      }
      .header h2 {
        font-size: 18px;
      }
      .details p {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>📨 New Contact Submission</h2>
    </div>

    <div class="details">
      <p><strong>👤 First Name:</strong> {firstName}</p>
      <p><strong>👤 Last Name:</strong> {lastName}</p>
      <p><strong>📧 Email:</strong> {email}</p>
      <p><strong>📞 Phone:</strong> {phone}</p>
      <p><strong>📝 Message:</strong> {message}</p>
      <p>📩 This contact was submitted via the <strong>Omsheel Group</strong> website. Please respond or follow up as needed.</p>
    </div>

    <div class="footer">
    </div>

    <div class="footer-note">
      <p>Internal Notification – Omsheel Group</p>
    </div>
  </div>
</body>
</html>
`
module.exports={PASSWORD_RESET_REQUEST_TEMPLATE,PASSWORD_RESET_SUCCESS_TEMPLATE,VERIFICATION_EMAIL_TEMPLATE,EMAIL_VERIFIED_SUCCESSFULLY,INCUBATOR_EMAIL_SUCCESS,CONTACT_SUBMISSION}