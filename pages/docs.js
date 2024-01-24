import { RedocStandalone } from "redoc";

const ApiDocPage = ({ content }) => {
  return (
    // <div className="pt-2 text-white bg-[#1f2d37]">
    <div className=" bg-white text-black">
      <div className="h-4 bg-[#1f2937] w-full " />
      <RedocStandalone
        // specUrl="http://petstore.swagger.io/v2/swagger.json"
        specUrl="openapi.json"
        options={{
          nativeScrollbars: true,
          theme: {
            colors: {
              // tonalOffset: 1,
              primary: { main: "#38b6ff" },
              text: {
                // primary: "black",
                // secondary: "white",
              },
              gray: {
                // 50: "white",
                // 100: "true",
              },
              border: {
                light: "pink",
                dark: "pink",
              },
            },
            sidebar: {
              // backgroundColor: "#38b6ff",
              // backgroundColor: "#1f2d37",
              // textColor: "white",
              // activeTextColor: "#38b6ff",
              // backgroundColor: "null",
            },
            rightPanel: {
              backgroundColor: "#1f2937",
            },
          },
        }}
      />
    </div>
  );
};

// export async function getStaticProps() {
//   const filePath = path.join(
//     process.cwd(),
//     "docs",
//     "api.md"
//   );
//   const content = fs.readFileSync(filePath, "utf8");
//   return {
//     props: {
//       content,
//     },
//   };
// }

export default ApiDocPage;
