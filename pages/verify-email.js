import React from "react";

function VerifyEmailPage() {
  return (
    <section className="bg-sharkBlue min-h-screen flex flex-col justify-center px-2">
      <div className="w-full sm:min-w-[400px] sm:w-[400px] px-4 sm:mx-auto bg-sharkBlack shadow-lg rounded-md text-white">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6  bg-blueGray-200 border-0">
          <header className=" pr-10 pl-10 pb-6 text-center flex-shrink-0 block ">
            <div
              title="sharktank-api"
              id="custom-prompt-logo"
              className=" w-auto h-[60px] static m-auto bg-transparent bg-center bg-contain bg-no-repeat"
              //   style="width: auto !important; height: 60px !important; position: static !important; margin: auto !important; padding: 0 !important; background-color: transparent !important; background-position: center !important; background-size: contain !important; background-repeat: no-repeat !important"
            ></div>
            <img
              className=" h-[100px] block object-contain max-w-full mx-auto"
              id="prompt-logo-center"
              src="https://sharktank-api.s3.amazonaws.com/Shark+Tank+API+(1024+x+500+px).png"
              alt="sharktank-api"
            />
            <h1 className=" my-2 text-lg text-center pt-8 cec9a2f61 c7a7a5b24">
              An email has been sent to you. Please verify
              your email before continuing.
            </h1>
          </header>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="relative w-full mb-3">
              <a href="/api/auth/login">
                <button className="border-0 px-3 py-3 text-sharkBlack bg-sharkBlue rounded shadow hover:scale-[1.02] transition-all w-full duration-75 hover:bg-sharkTeal font-bold">
                  Continue
                </button>
              </a>
            </div>
            <div className="relative w-full mb-1 text-sm">
              {/* Probaby if a user hasn't signed up in the last 5 minutes send email in an action.
              Get rid of details below. */}

              <p>
                Didn't get an email?{" "}
                <span className="text-sharkBlue">
                  <a href="/api/auth/login">Resend</a>
                </span>
              </p>
            </div>
          </div>
          <div className=" flex justify-center w-full mb-3 text-sm text-gray-400">
            {/* Probaby if a user hasn't signed up in the last 5 minutes send email in an action.
              Get rid of details below. */}

            <p>
              Wrong email?{" "}
              <span className="text-sharkBlue/50">
                <a href="/api/auth/logout">Sign Out</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VerifyEmailPage;
