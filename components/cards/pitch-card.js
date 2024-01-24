import { formatNumberAccounting } from "../../helpers/utils";
import Link from "next/link";
import React from "react";

export const categoryColors = {
  Accessories_Gadgets: "bg-Accessories_Gadgets",
  Children: "bg-Children",
  Clothing_Fashion: "bg-Clothing_Fashion",
  Cosmetics_Beauty: "bg-Cosmetics_Beauty",
  Education: "bg-Education",
  Fitness_Outdoors: "bg-Fitness_Outdoors",
  Food_Beverage: "bg-Food_Beverage",
  Health_SelfCare: "bg-Health_SelfCare",
  Lifestyle_Home: "bg-Lifestyle_Home",
  Media_Entertainment: "bg-Media_Entertainment",
  Other: "bg-Other",
  PetProducts: "bg-PetProducts",
  Services: "bg-Services",
  Software_Tech: "bg-Software_Tech",
  Travel_Auto: "bg-Travel_Auto",
};

export default function PitchCard(props) {
  const {
    pitch_id,
    name,
    season_id,
    episode,
    air_date,
    summary,
    entrepreneur_gender,
    entrepreneur,
    is_deal,
    ask_amt,
    ask_perc,
    ask_valuation,
    ask_summary,
    deal_amt_equity,
    deal_perc_equity,
    deal_amt_debt,
    deal_valuation,
    deal_summary,
    bite,
    investors,
    deal_structure,
    category,
    status,
    website,
  } = props.pitch;

  const fromDetail = props.fromDetail;
  const bgColor = is_deal ? "bg-green-300" : "bg-red-300";
  const categoryColor = categoryColors[category];
  if (fromDetail) {
    return (
      <FromPitchDetail
        pitch={props.pitch}
        bgColor={bgColor}
      />
    );
  }

  return (
    !fromDetail && (
      <div
        id="hideScroll"
        className={`flex flex-col items-center relative rounded-2xl shadow-lg p-2 border-gray-900 bg-sharkBlue/30 text-white ${
          !fromDetail && "h-96"
        }  overflow-auto`}
      >
        <div
          className={`rounded-full px-4 py-2 absolute right-2 top-2 font-bold text-black  ${
            is_deal ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {is_deal ? "Deal" : "No Deal"}
        </div>
        <h1 className=" font-bold text-xl">{name}</h1>
        <h1 className="text-sharkBlue font-bold text-lg underline">
          <Link href={`/pitches/${pitch_id}`}>
            Pitch {pitch_id.toString()}
          </Link>
        </h1>
        <h1 className=" font-bold text-lg">
          <Link href={`/seasons/${season_id}`}>
            Season {season_id.toString()}, Episode {episode}
          </Link>
        </h1>
        <h3 className=" text-sm">{air_date}</h3>
        <hr className="border-t-4 border-sharkBlue my-2 w-full"></hr>

        {is_deal && (
          <div className="w-full justify-center flex flex-col items-center">
            <h2 className="font-bold text-lg ">
              Sharks Who Invested
            </h2>
            {investors && (
              <ul className="flex flex-wrap justify-start w-full">
                {investors.map((shark) => (
                  <div
                    className="w-1/2 px-2 py-1 flex justify-center text-lg"
                    key={shark}
                  >
                    <li>{shark}</li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        )}
        <InfoSection title="Summary">{summary}</InfoSection>
        <InfoSection title="Team Gender">
          <div
            className={`rounded-full px-4 py-1 inline text-black font-bold shadow-md ${
              entrepreneur_gender === "Male"
                ? "bg-blue-400"
                : entrepreneur_gender === "Female"
                ? "bg-pink-400"
                : "bg-green-400"
            }`}
          >
            {entrepreneur_gender}
          </div>
        </InfoSection>
        <InfoSection title="Category">
          <div
            className={`${categoryColor} rounded-full px-4 py-1 inline text-black font-bold shadow-md`}
          >
            {category.replace("_", "/")}
          </div>
        </InfoSection>
        <div className="flex flex-row border-b-2 border-sharkBlue w-full py-2" />
        <div className="flex flex-row justify-around w-full text-lg border-b-2 border-sharkBlue">
          <div className="flex flex-col align-middle content-center items-center justify-start w-1/2 p-2">
            <h3 className="font-bold">Ask Summary</h3>
            <h3>{ask_summary}</h3>
          </div>
          {is_deal && (
            <div className="flex flex-col border-l-2 border-sharkBlue"></div>
          )}
          {is_deal && (
            <div className="flex flex-col align-middle content-center items-center  justify-center w-1/2 p-2">
              <h3 className="font-bold">Deal Summary</h3>
              <h3>{deal_summary}</h3>
            </div>
          )}
        </div>
      </div>
    )
  );
}

function InfoSection(props) {
  return (
    <div className="w-full justify-start flex flex-row items-center py-0.5">
      <h2 className="font-bold text-lg">
        {props.title}:{" "}
        <span className="text-lg font-normal">
          {props.children}
        </span>
      </h2>
    </div>
  );
}

function FromPitchDetail(props) {
  const {
    pitch_id,
    name,
    season_id,
    episode,
    air_date,
    summary,
    entrepreneur_gender,
    entrepreneur,
    is_deal,
    ask_amt,
    ask_perc,
    ask_valuation,
    ask_summary,
    deal_amt_equity,
    deal_perc_equity,
    deal_amt_debt,
    deal_valuation,
    deal_summary,
    bite,
    investors,
    deal_structure,
    category,
    status,
    website,
  } = props.pitch;
  const bgColor = props.bgColor;
  return (
    <div className="flex flex-col py-4 mb-8 w-full">
      <div
        className={`flex flex-col items-center relative rounded-2xl shadow-lg p-2 border-gray-900 bg-sharkBlue/30 text-white overflow-auto w-full`}
      >
        <div
          className={`rounded-full px-4 py-2 absolute right-2 top-2 text-black font-bold shadow-md ${
            is_deal ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {is_deal ? "Deal" : "No Deal"}
        </div>
        <h1 className=" font-bold text-xl">{name}</h1>
        <h1 className=" font-bold text-lg">
          Pitch {pitch_id.toString()}
        </h1>
        <h1 className=" font-bold text-lg">
          <Link href={`/seasons/${season_id}`}>
            Season {season_id.toString()}, Episode {episode}
          </Link>
        </h1>
        <h3 className=" text-sm">{air_date}</h3>
        <hr className="border-t-4 border-sharkBlue my-2 w-full"></hr>

        {is_deal && (
          <div className="w-full justify-center flex flex-col items-center">
            <h2 className="font-bold text-lg ">
              Sharks Who Invested
            </h2>
            {investors && (
              <ul className="flex flex-wrap justify-start w-full">
                {investors.map((shark) => (
                  <div
                    className="w-1/2 px-2 py-1 flex justify-center text-lg"
                    key={shark}
                  >
                    <li>{shark}</li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        )}
        <InfoSection title="Summary">{summary}</InfoSection>

        <InfoSection title="Entrepreneurs">
          <div className="inline">
            {entrepreneur.map((ent, ind) => (
              <React.Fragment key={ind}>
                {ent}
                {ind < entrepreneur.length - 1 && ", "}
              </React.Fragment>
            ))}
          </div>
        </InfoSection>
        <InfoSection title="Team Gender">
          <div
            className={`rounded-full px-4 py-1 inline text-black font-bold shadow-md ${
              entrepreneur_gender === "Male"
                ? "bg-blue-400"
                : entrepreneur_gender === "Female"
                ? "bg-pink-400"
                : "bg-green-400"
            }`}
          >
            {entrepreneur_gender}
          </div>
        </InfoSection>
        <InfoSection title="Category">
          <div
            className={`${
              "bg-" + category
            } rounded-full px-4 py-1 inline text-black font-bold shadow-md`}
          >
            {category.replace("_", "/")}
          </div>
        </InfoSection>
        {deal_structure && (
          <InfoSection title="Deal Structure">
            <div className="inline">
              {deal_structure.map((struct, ind) => (
                <React.Fragment key={ind}>
                  {struct}
                  {ind < deal_structure.length - 1 && ", "}
                </React.Fragment>
              ))}
            </div>
          </InfoSection>
        )}
        {status && (
          <InfoSection title="Status">{status}</InfoSection>
        )}
        {website && (
          <InfoSection title="Website">
            <a
              className="underline color-blue-500"
              href={
                website.startsWith("http")
                  ? website
                  : `http://${website}`
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              {website}
            </a>
          </InfoSection>
        )}
        <div className="flex flex-row border-b-2 border-sharkBlue w-full py-2" />
        <div className="flex flex-row justify-around w-full text-lg border-b-2 border-sharkBlue">
          <div className="flex flex-col align-middle content-center items-center justify-start w-1/2 p-2">
            <h3 className="font-bold">Ask Summary</h3>
            <h3>{ask_summary}</h3>
            <h3 className="font-bold">Ask Valuation</h3>
            <h3>{formatNumberAccounting(ask_valuation)}</h3>
          </div>
          {is_deal && (
            <div className="flex flex-col border-l-2 border-sharkBlue"></div>
          )}
          {is_deal && (
            <div className="flex flex-col align-middle content-center items-center  justify-center w-1/2 p-2">
              <h3 className="font-bold">Deal Summary</h3>
              <h3>{deal_summary}</h3>
              <h3 className="font-bold">Deal valuation</h3>
              <h3>
                {formatNumberAccounting(deal_valuation)}
              </h3>
            </div>
          )}
        </div>
        {is_deal && bite && (
          <div className="flex flex-col w-full">
            <div className="flex flex-col align-middle content-center items-center  justify-start p-2">
              <h3 className="font-bold">
                Valuation {bite > 0 ? "Gain" : "Bite"}
              </h3>
              <h3>{formatNumberAccounting(bite)}</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
