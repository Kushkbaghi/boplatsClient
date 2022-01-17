//--------WORK LIKE FUNKTION FOR EVENT LiSTENER---------//
const AdminReducer = (state, action) => {
  switch (action.type) {
    case "logout":
        // Admin logged out: change proseccsatart to false
        return {
          admin: null,
          proccessStart: false,
          error: false,
        };
        break;
    case "start":
      // proccess start: change proseccsatart to true
      return {
        admin: null,
        proccessStart: true,
        error: false,
      };
      break;
    //  Success proccess: get admin data/action body data
    case "success":
      return {
        admin: action.payload,
        proccessStart: false,
        error: false,
      };
      break;
    // Proccess faliure: get error message from action body/payload
    case "wrong":
      return {
        admin: null,
        proccessStart: false,
        error: action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};
export default AdminReducer;
