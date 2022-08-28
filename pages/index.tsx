import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Tweets from "../components/Tweets";
import "../styles/dist/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import CreateTweet from "../components/CreateTweet";
import { useUser } from "@auth0/nextjs-auth0";
import Meta, { MetaDataProps } from "../components/Meta";

const metaData: MetaDataProps = {
  title: "Home Page",
  keywords: "tweets, create Tweet, homepage, social",
  description:
    "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
  canonical: "/",
};

const Home: NextPage = () => {
  const [isCreate, setIsCreate] = useState<boolean>(false);
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  useEffect(() => {
    // console.log(user);
    if (!(user || isLoading)) {
      router.push("/api/auth/login");
    }
    // eslint-disable-next-line
  }, [user, isLoading]);

  return (
    <div>
        <Meta metaData={metaData} />
      {user || isLoading ? (
        <>
          {isCreate && <CreateTweet setIsCreate={setIsCreate} />}
          <div
            className="tweet-toggle"
            onClick={() => setIsCreate(!isCreate)}
            data-testid="toggle-icon"
          >
            +
          </div>
          <div className="Container">
            <Header />
            <Tweets isCreate={isCreate} />
            <Footer />
          </div>
        </>
      ) : (
        <h3 className="logIn">
          You are not logged in. Redirecting to login...
        </h3>
      )}
    </div>
  );
};

export default Home;
