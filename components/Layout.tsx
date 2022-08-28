import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { useRouter } from "next/router";
const Layout = ({ children }: any) => {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  
  return (
    <div className="homePage">
      {user ? (
        <Link href="/api/auth/login">
          <a>Login</a>
        </Link>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;
