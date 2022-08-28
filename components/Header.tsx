import Image from "next/image";
import Link from "next/link";
import React from "react";
import twitterLogo from "../public/twitterLogo.png";
import { useUser } from "@auth0/nextjs-auth0";

const Header = () => {
  const { user, error, isLoading } = useUser();
  return (
    <nav className="Left">
      <div className="hero-img">
        <Image src={twitterLogo} alt="logo" />
      </div>
      <Link href="/">
        <div className="header-buttons">Home</div>
      </Link>
      <Link href={`/profile/${user?.email?.split("@")[0]}`}>
        <div className="header-buttons">Profile</div>
      </Link>
      <Link href="/api/auth/logout">
        <div className="header-buttons">Logout</div>
      </Link>
    </nav>
  );
};

export default Header;
