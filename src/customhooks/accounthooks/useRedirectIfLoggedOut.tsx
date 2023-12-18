/* import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

const useRedirectIfLoggedOut = () => {
  const router = useRouter();

  useEffect(() => {
    const userStatus = Cookies.get("loggedInUser");
    const userSession = sessionStorage.getItem("user");
    

    if (!userSession || !userStatus) {
      router.replace("/account/login");
    }
  }, []);

  return null;
};

export default useRedirectIfLoggedOut;
 */