const TitleHeader = ({ title, sub }) => {
   return (
    <div className="flex flex-col items-center gap-5">
      <div className=" bg-black-200 py-2 rounded-full w-fit text-center sm:text-left
             text-lg sm:text-xl md:text-2xl
             leading-snug sm:leading-normal
             px-4 sm:px-6 md:px-0
             break-words">
        <p >{ sub }</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;