/* import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const useCookieIdentify = () => {
  const router = useRouter();

  useEffect(() => {
    const loggedInUserId = Cookies.get("loggedInUserId");
    const users = localStorage.getItem("users");

    if (loggedInUserId && users) {
      const usersParsed = JSON.parse(users);
      const loggedInUser = usersParsed.find(
        (user: any) => user.email === loggedInUserId
      );

      if (loggedInUser) {
        router.replace("/account/profile");
      }
    }
  }, []);

  return null;
};

export default useCookieIdentify;
 */