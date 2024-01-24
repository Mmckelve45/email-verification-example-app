import { useRouter } from "next/router";
import React, { useRef, useState } from "react";
import LoadingIndicator from "./ui/loading-indicator";

export default function SearchField(props) {
  const { initialValue } = props;
  const searchElement = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const [badSearch, setBadSearch] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    const apiUrl = searchElement.current.value;
    // setSearchTerm(searchElement.current.value);
    if (apiUrl === undefined || apiUrl.trim() === "") {
      return;
    }
    if (
      !apiUrl
        .trim()
        .includes(
          `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/`
        )
    ) {
      setBadSearch(true);
      return;
    }
    if (badSearch) {
      setBadSearch(false);
    }
    const pathAfterApi = apiUrl.split(
      `${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/`
    )[1];

    await router.push(`/${pathAfterApi}`);
    setIsLoading(false);
  }

  const inputClass = `font-sans py-2 px-4 rounded-l border-none bg-white  text-base text-black w-full self-center ${
    badSearch && "bg-red-200"
  }`;
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <LoadingIndicator />
      </div>
    );
  }

  // TODO: /api/x is not working.  Search bar only shows /x

  return (
    <div className="flex justify-center align-middle w-full">
      <div className="py-12 w-3/4 2xl:w-1/2 flex flex-col justify-center">
        <form
          onSubmit={handleSubmit}
          id="search-form"
          className="flex justify-center"
        >
          <input
            // className="font-Quicksand py-2 px-4 rounded-l border-none bg-white text-base text-black w-1/2 sm:w-3/4 lg:w-1/2 self-center"
            className={inputClass}
            type="search"
            placeholder={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/episodes`}
            ref={searchElement}
            defaultValue={initialValue}
          />
          <button className="font-sans py-2 px-4 rounded-r border-none bg-sharkBlue text-black font-bold text-base hover:bg-sharkTeal transition-all duration-200 hover:scale-110">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}
