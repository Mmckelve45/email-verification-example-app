import { formatDateString } from "../../helpers/utils";
import Link from "next/link";
import React from "react";

export default function SeasonCard(props) {
  const {
    season_id,
    num_episodes,
    summary,
    shark_info,
    start_date,
    end_date,
  } = props;

  const formattedStartDate = formatDateString(start_date);
  const formattedEndDate = formatDateString(end_date);

  return (
    <div
      id="hideScroll"
      className={`flex flex-col bg-sharkBlue/30 items-center rounded-2xl border-gray-900 shadow-lg p-2 h-96 overflow-auto max-w-lg text-white `}
    >
      <Link href={`/seasons/${season_id}`}>
        <h1 className=" font-bold text-xl ">
          Season {season_id}
        </h1>
      </Link>
      <h3 className="text-lg font-medium">
        <Link href={`/episodes/season/${season_id}`}>
          ({num_episodes} episodes)
        </Link>
      </h3>
      <h3 className=" text-sm">
        {formattedStartDate} - {formattedEndDate}
      </h3>
      <hr className="border-t-4 border-sharkBlue my-2 w-full"></hr>
      <h2 className="font-bold text-lg ">Summary</h2>
      <div className="flex flex-col items-start align-start">
        <h2 className=" text-lg ">{summary}</h2>
        <div className=" self-center">
          <h2 className="font-bold text-lg">Shark Info</h2>
        </div>
        <h2 className="text-lg ">{shark_info}</h2>
      </div>
    </div>
  );
}
