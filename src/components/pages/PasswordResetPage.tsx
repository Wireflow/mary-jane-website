"use client";

import React, { useState } from "react";
import SendEmailCodeForm from "../forms/SendEmailCodeForm";
import VerifyEmailCodeForm from "../forms/VerifyEmailCodeForm";
import Image from "next/image";
import Link from "next/link";
import ResetPasswordForm from "../forms/ResetPasswordForm";

type Props = {};

// #### TODO:
// Components:
// Email Form
// Reset Password Form
// Success Message

// Use-case steps:
// 1. Take in user email ***
// 2. Send a request to api to send verification code to email
// 3. Once email is sent, user should see a new input for the code in their email.
// 4. User submits the code they recieved in their email.
// 5. Send a request to api to verify the code with the most recent code related to that user's email.
// 6. The api returns a response indicating whether the code is verified or not.
// 7. If the code is verified, we display the reset password form.
// 8. Once password form is submitted the api will check again if the most recent code is verified.
// 9. Each code only lasts 1 hour.

const PasswordResetPage = (props: Props) => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [email, setEmail] = useState<string | undefined>(undefined);
  const [verified, setVerified] = useState(false);

  return (
    <div className="min-h-screen flex md:justify-center md:items-center">
      {!isEmailSent ? (
        <SendEmailCodeForm
          setEmail={setEmail}
          isEmailSent={isEmailSent}
          setIsEmailSent={setIsEmailSent}
        />
      ) : isEmailSent && !verified ? (
        <VerifyEmailCodeForm
          setIsEmailSent={setIsEmailSent}
          email={email}
          setVerified={setVerified}
        />
      ) : (
        <ResetPasswordForm />
      )}
    </div>
  );
};

export default PasswordResetPage;
