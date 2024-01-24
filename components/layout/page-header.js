import useToggle from "../../hooks/useToggle";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import SearchField from "../search-field";
import DropDownButton from "../ui/filters/dropdown-button";
import JsonSection from "../ui/json-section";
import LoadingIndicator from "../ui/loading-indicator";
import ViewSwitcher from "../ui/viewSwitcher";

export default function PageHeader() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="flex justify-center w-full">
        <LoadingIndicator />
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col align-center justify-center">
      <SearchField
        initialValue={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api${router.asPath}`}
      />
    </div>
  );
}
