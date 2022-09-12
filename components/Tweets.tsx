import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaRegComments } from "react-icons/fa";
import { TweetsProps } from "./CreateTweet";
import { v4 as uuidv4 } from "uuid";

const profilePhoto =
  "https://imgs.search.brave.com/s_KtUzyCL39A07JRD-ZDGyewFjqaGaSaqWvvakNskpc/rs:fit:666:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/OHl1bnZyUUE4YTBN/WTVraHhoX2lRSGFG/UiZwaWQ9QXBp";

const Tweets = ({ isCreate, userTweets }: any) => {
  const [tweetsArray, setTweetsArray] = useState<TweetsProps[]>(userTweets);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [tweetsPerPage, setTweetsPerPage] = useState<number>(10);
  const indexofLastTweet = tweetsPerPage * currentPage;
  let currentTweetsList: any = [];
  currentTweetsList = currentTweetsList.concat(
    tweetsArray?.slice(0, indexofLastTweet)
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localData = localStorage.getItem("tweets");
      if (localData !== null) {
        const parsedData = JSON.parse(localData);
        const mergeTweets = [...tweetsArray, ...parsedData];
        const sortedData = mergeTweets.sort(
          (a: TweetsProps, b: TweetsProps) => b.createdAt - a.createdAt
        );
        setTweetsArray(sortedData);
      }
    }
  }, []);

  const handleScroll = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleLikes = (id: number) => {
    const addLikes = tweetsArray?.map((tweet) => {
      if (id === tweet.createdAt) {
        return {
          ...tweet,
          likes: tweet.likes + 1,
        };
      }
      return tweet;
    });

    localStorage.setItem("tweets", JSON.stringify(addLikes));
    setTweetsArray(addLikes);
  };

  const handleDislikes = (id: number) => {
    const addLikes = tweetsArray?.map((tweet) => {
      if (id === tweet.createdAt) {
        return {
          ...tweet,
          dislikes: tweet.dislikes + 1,
        };
      }
      return tweet;
    });

    localStorage.setItem("tweets", JSON.stringify(addLikes));
    setTweetsArray(addLikes);
  };

  return (
    <div className="Middle">
      {currentTweetsList?.length &&
        currentTweetsList.map((tweet: TweetsProps) => {
          return (
            <div className="tweet-container" key={uuidv4()}>
              <picture>
                {/* <source srcSet={profilePhoto} type="image/webp" /> */}
                <img
                  src={tweet?.userProfile || profilePhoto}
                  alt="profile picture"
                  className="profile-photo"
                />
              </picture>

              <div className="tweet-details">
                <h1 className="tweet-username">
                  {tweet?.username}{" "}
                  <span className="tweet-time">
                    {new Date(tweet?.createdAt).toLocaleString()}
                  </span>
                </h1>
                <p className="tweet-message">{tweet?.message}</p>
                {tweet?.file && (
                  <div className="tweet-image">
                    <Image src={tweet?.file} alt="post picture" layout="fill" />
                  </div>
                )}
                <div className="icon-container">
                  <div className="tweet-icons">
                    <FaRegThumbsDown
                      className="icon"
                      onClick={() => handleDislikes(tweet.createdAt)}
                    />
                    {tweet?.dislikes}
                  </div>

                  {/* <FaRegComments className="tweet-icons" /> */}
                  <div className="tweet-icons">
                    <FaRegThumbsUp
                      className="icon"
                      onClick={() => handleLikes(tweet.createdAt)}
                    />
                    {tweet?.likes}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      {tweetsArray?.length !== currentTweetsList?.length ? (
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <button
            onClick={handleScroll}
            type="button"
            style={{ cursor: "pointer" }}
          >
            Load More
          </button>
        </div>
      ) : (
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          No more tweets found!
        </div>
      )}
    </div>
  );
};

export default Tweets;
