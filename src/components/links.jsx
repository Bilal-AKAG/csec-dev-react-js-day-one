const Links = () => {
  return (
    <div className="mt-4 p-2 flex justify-center ">
      <div className="  grid grid-cols-1 gap-[16px] md:grid-cols-2 ">
        <Grid
          title="React.js"
          discription="ReactJS is a component-based JavaScript library used to build dynamic and interactive user interfaces. It simplifies the creation of single-page applications (SPAs) with a focus on performance and maintainability"
          source="https://react.dev/"
        />
        <Grid
          title="Tailwindcss"
          discription="Tailwind CSS is a CSS framework that helps developers build responsive and customizable websites. It's a utility-first framework, which means it provides a set of classes that can be combined to style elements"
          source="https://tailwindcss.com/"
        />
        <Grid
          title="React Router"
          discription="React Router is a library for handling routing and navigation in React JS Applications. It allows you to create dynamic routes providing a seamless user experience by mapping various URLs to components."
          source="https://reactrouter.com/"
        />
        <Grid
          title="NPM"
          discription="npm stands for Node Package Manager. It’s a library and registry for JavaScript software packages.npm also has command-line tools to help you install the different packages and manage their dependencies"
          source="https://www.npmjs.com/"
        />
      </div>
    </div>
  );
};
const Grid = ({ title, discription,source }) => {
  return (
    <>
      <div className="border sm:w-[390px] hover:border-blue-500 hover:shadow-lg shadow-blue-200 transition-all duration-150 p-3 rounded-[4px]">
        <a className="flex gap-0.5 mb-1 px-2 py-1 rounded-[4px] font-bold bg-gray-200 hover:bg-gray-400 transition-colors duration-200 w-[fit-content]" href={source}>
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="19px"
            
          >
            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
          </svg>
        </a>
        <p className="px-2 text-justify">{discription}</p>
      </div>
    </>
  );
};
export default Links;
