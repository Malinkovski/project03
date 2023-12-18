import Cookies from "js-cookie";

export const getUserSessionId = () => {
    let userId = "";
          
    const userIdSession = sessionStorage.getItem("user");
    if (userIdSession) {
      userId = userIdSession;
    } else {
      const userIdCookies = Cookies.get("loggedInUser");
      if (userIdCookies) {
        userId = userIdCookies;
      }
    }
    if (userId !== "") {
        userId = userId.replace(/"/g, "");
      }
    return userId;
}
