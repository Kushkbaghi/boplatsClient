//--------WORK LIKE EVENT LiSTENER---------//
// If admin logged out
export const Logout= (r) => ({
  type: "logout",

});

// if inlogging procees is staeted
export const ProssesStart = (adminsInput) => ({
  type: "start",
});

// If proccess is successful get user info
export const ProccessSuccess = (admin) => ({
  type: "success",
  payload: admin,
});
// If proccess is not successful get error
export const ProssesFailure = (error) => ({
  type: "wrong",
  payload: error,
});

