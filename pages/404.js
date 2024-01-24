import BackButton from "components/ui/back-button";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import SearchField from "../components/search-field";

export default function NotFoundPage() {
  return (
    <Fragment>
      <SearchField />
      <BackButton />
      <main className=" h-full text-center flex flex-col items-center justify-center pt-52 ">
        <div className=" h-12">
          <h1 className=" inline-block mr-[20px] pr-[23px] text-lg font-bold align-top">
            404
          </h1>
          <div className="inline-block">
            <h2 className="text-lg font-semibold h-7">
              This page could not be found.
            </h2>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
