import "../styles/dist/globals.css";
import type { AppProps } from "next/app";
// import {wrapper} from "../redux/store"
import { UserProvider } from "@auth0/nextjs-auth0";
import "../styles/dist/header.css";
import "../styles/dist/tweetDisplay.css";
import "../styles/dist/homepage.css";
import "../styles/dist/createTweet.css";
import "../styles/dist/Home.module.css";
import "../styles/dist/pageNotFound.css";
import "../styles/dist/profilePage.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
        <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp)
