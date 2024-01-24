import {
  getSession,
  handleAuth,
  handleCallback,
  handleLogin,
  handleLogout,
} from "@auth0/nextjs-auth0";

export default handleAuth({
  login: async (req, res) => {
    let authParams = {};
    if (req.query.connection) {
      authParams.connection = req.query.connection;
    }
    try {
      await handleLogin(req, res, {
        // Not using these currently but you can pass additional params to the authorize endpoint
        // getLoginState,
        authorizationParams: authParams,
        // authorizationParams: {
        //   connection: "Username-Password-Authentication",
        // },
      });
    } catch (e) {
      console.error(e);
    }
  },
  logout: async (request, response) => {
    try {
      const currSession = await getSession(
        request,
        response
      );
      const currUser = currSession?.user;
      // Deletes cookie at Auth0 Issuer Base URL.  Standard logout only deletes at domain URL locally
      const logoutUrl = `${process.env.AUTH0_ISSUER_BASE_URL}/v2/logout?returnTo=${process.env.AUTH0_BASE_URL}&client_id=${process.env.AUTH0_CLIENT_ID}`;
      await handleLogout(request, response, {
        // Cover case of user needing to verify email and signing out instead.
        returnTo: !currUser
          ? logoutUrl
          : process.env.AUTH0_BASE_URL,
      });
    } catch (error) {
      console.error(error);
      response
        .status(error.status ?? 500)
        .end(error.message);
    }
  },
  callback: async (req, res) => {
    var afterCallback = process.env.AUTH0_BASE_URL;
    try {
      if (
        req.query.error_description ===
        "Please verify your email before logging in."
      ) {
        return res.redirect(
          `${process.env.AUTH0_BASE_URL}/verify-email`
        );
      }
      await handleCallback(req, res, {
        redirectUri: afterCallback,
      });
    } catch (error) {
      console.error(error);
      res.status(error.status || 500).end(error.message);
    }
  },
});

// Was using loginState when I wanted a user to return to a specific page after login
// I stripped that piece out of the implementation.  Can pass to handleLogin
// const getLoginState = (req, loginOptions) => {
//   const returnTo = req.query.returnTo;
//   console.log(req);

//   return {
//     ...loginOptions,
//     returnTo,
//   };
// };
