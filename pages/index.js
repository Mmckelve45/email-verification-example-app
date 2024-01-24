import { Inter } from "next/font/google";
import React from "react";
import Head from "next/head";
import SearchField from "components/search-field";
import { useUser } from "@auth0/nextjs-auth0/client";
import LoadingIndicator from "components/ui/loading-indicator";
import IntroSection from "components/ui/home-intro-section";
import AboutSection from "components/ui/home-about-section";

const inter = Inter({ subsets: ["latin"] });

function HomePage(props) {
  const { user, error, isLoading } = useUser();

  return (
    <div className="flex flex-col justify-center space-y-2 pb-8 mb-12 text-white text-base">
      <Head>
        <title>Shark Tank API</title>
        <meta
          name="description"
          // This shows up in a search result on google search engine
          content="Welcome to the Shark Tank API Home Page. Use Shark Tank data to develop your projects"
        />
      </Head>

      <SearchField initialValue={""} />
      {isLoading && <LoadingIndicator />}

      <div className="flex justify-center text-center font-bold text-xl pb-4 px-8">
        {user ? (
          <h2>Welcome {user.name} 👋</h2>
        ) : (
          <h2 className="">
            Welcome to the Shark Tank API 👋
          </h2>
        )}
      </div>
      <IntroSection />
      <AboutSection />
    </div>
  );
}

// export async function getStaticProps(context) {
//   const data = await getFeaturedEvents();
//   return {
//     props: {
//       events: data,
//     },
//     // Every half hour regenerate for new incoming request.
//     revalidate: 1800,
//   };
// }

export default HomePage;
