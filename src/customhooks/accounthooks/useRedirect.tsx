import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem('user');
    const userCookie = Cookies.get('loggedInUser');

    if (userSession || userCookie) {
      router.replace('/account/profile');
    } else if (!userCookie) {
      router.replace('/account/login');
    }
  }, []);

  return null;
};

export default useRedirect;
