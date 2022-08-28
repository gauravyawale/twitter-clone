import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Meta, { MetaDataProps } from "../../components/Meta";

const metaData: MetaDataProps = {
  title: "Profile Page",
  keywords: "profile, user, homepage, social",
  description:
    "user profile page",
  canonical: "/profile",
};

const Profile = () => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!(user || isLoading)) {
      router.push("/api/auth/login");
    }
    // eslint-disable-next-line
  }, [user, isLoading]);
  return (
    <div className="profile-container">
      <Meta metaData={metaData}/>
      {user || isLoading ? (
        <>
          <picture>
            <img
              src={user?.picture ? user.picture : ""}
              alt="profile-pic"
              className="profileImage"
            />
          </picture>
          <h2>{user?.name}</h2>
          <h4 className="user-email">{user?.email}</h4>
          <Link href={"/"}>
            <a className="link">Back</a>
          </Link>
        </>
      ) : (
        <h3 className="logIn">
          You are not logged in. Redirecting to login...
        </h3>
      )}
    </div>
  );
};

export default Profile;
