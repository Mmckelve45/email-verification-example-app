import React from "react";
import MainHeader from "./main-header";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";

export default function Layout(props) {
  const router = useRouter();
  return (
    <UserProvider>
      {router.asPath !== "/verify-email" && <MainHeader />}
      <main>{props.children}</main>
    </UserProvider>
  );
}
