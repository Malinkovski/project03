import { useRouter } from "next/router";
import { ErrorProps } from "next/error";
import "../styles/scss/main.css";
import type { AppProps } from "next/app";
import Footer from "../components/PageCommon/Footer/Footer";
import Header from "../components/PageCommon/Header/Header";
import NavigationContextProvider from "../context/NavigationContext";
import CartFavoritesProvider from "../context/CartFavoritesContext";

function MyApp({ Component, pageProps }: AppProps & ErrorProps) {
  const router = useRouter();

  const pagesWithoutHeader = [
    "/account/login",
    "/account/register",
    "/account/profile",
  ];
  const hideComponent = pagesWithoutHeader.includes(router.pathname);

  return (
    <>
      <NavigationContextProvider>
        <CartFavoritesProvider>
          {!hideComponent && <Header />}
          <Component {...pageProps} />
          {!hideComponent && <Footer />}
        </CartFavoritesProvider>
      </NavigationContextProvider>
    </>
  );
}

export default MyApp;
