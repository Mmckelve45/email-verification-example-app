import React from "react";
import Link from "next/link";

export default function SharkCard(props) {
  const {
    shark_id,
    name,
    summary,
    description,
    img,
    dob,
    is_guest,
    fromDetail = false,
  } = props;

  const birthday = new Date(dob);
  const currentDate = new Date();
  const timeDifference = currentDate - birthday;
  const age = Math.floor(
    timeDifference / (365.25 * 24 * 60 * 60 * 1000)
  );

  return (
    <div className="flex flex-col">
      <div
        id="hideScroll"
        className={`flex flex-col border-gray-900 bg-sharkBlue/30 text-white items-center rounded-2xl shadow-lg p-2 ${
          !fromDetail && "h-96"
        } overflow-auto`}
      >
        <div className=" w-full h-40">
          <img
            src={img}
            alt={`${name} photo`}
            className="object-contain w-full h-full "
          />
        </div>
        {!fromDetail ? (
          <Link href={`/sharks/${shark_id}`}>
            <h1 className=" font-bold text-xl ">{name}</h1>
          </Link>
        ) : (
          <h1 className=" font-bold text-xl ">{name}</h1>
        )}
        <h3 className="text-lg font-medium">
          ({is_guest ? "Guest Shark" : "Main Shark"})
        </h3>
        <h3 className=" text-sm">{age} years old</h3>
        <hr className="border-t-4 border-sharkBlue my-2 w-full"></hr>
        <h2 className="font-bold text-lg ">Summary</h2>
        <div className="flex flex-col items-start align-start">
          <h2 className=" text-lg ">{summary}</h2>
          <div className=" self-center">
            <h2 className="font-bold text-lg">
              Background
            </h2>
          </div>
          <h2 className="text-lg ">{description}</h2>
        </div>
      </div>
    </div>
  );
}
