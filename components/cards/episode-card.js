import { formatDateString } from "../../helpers/utils";
import Link from "next/link";
import React from "react";

export default function EpisodeCard(props) {
  const {
    episode_id,
    sharks,
    season_id,
    date,
    companies,
    fromDetail = false,
  } = props;

  const formattedDate = formatDateString(date);
  return (
    <div
      className={`${
        fromDetail && "mb-8 py-4 h-full"
      } flex flex-col`}
    >
      <div
        id="hideScroll"
        className={`flex flex-col border-gray-900 bg-sharkBlue/30 items-center p-2 h-96 overflow-auto max-w-lg rounded-2xl shadow-lg text-white ${
          fromDetail && "h-full max-w-xl"
        }`}
      >
        <Link href={`/episodes/${episode_id}`}>
          <h1 className=" font-bold text-xl">
            Episode {episode_id}
          </h1>
        </Link>
        <h3 className=" text-sm">{formattedDate}</h3>
        <hr className="border-t-4 border-sharkBlue my-2 w-full"></hr>

        <div className="w-full justify-center flex flex-col items-center">
          <h2 className="font-bold text-lg ">Sharks</h2>
          <ul className="flex flex-wrap justify-start w-full">
            {sharks.map((shark) => (
              <div
                className="w-1/2 px-2 py-1 flex justify-center"
                key={shark}
              >
                <li>{shark}</li>
              </div>
            ))}
          </ul>
        </div>
        <div className="w-full justify-center flex flex-col items-center">
          <h2 className="font-bold text-lg ">Pitches</h2>

          <ul className="flex flex-wrap justify-start w-full">
            {companies.map((company) => (
              <div
                className="w-full md:w-1/2 px-2 py-1"
                key={company.id}
              >
                <CompanyTile
                  id={company.id}
                  name={company.name}
                  isDeal={company.isDeal}
                />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function CompanyTile(props) {
  const { id, name, isDeal } = props;
  const dealColor = isDeal ? "bg-green-300" : "bg-red-300";
  return (
    <Link href={`/pitches/${id}`}>
      <li className={`${dealColor} rounded p-2`}>
        <h5 className=" text-black">{name}</h5>
      </li>
    </Link>
  );
}
