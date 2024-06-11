import Link from "next/link";

const MealsHeader = () => {
  return (
    <header className="flex flex-col gap-[2.5rem] mt-[3rem] mb-[5rem] mx-auto w-[90%] max-w-[75rem] text-[#ddd6cb] text-[1.5rem]">
      <h1 className="font-display font-bold text-[2.5rem] sm:text-[3.4rem]">
        Delicious meals, created{" "}
        <span className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent">
          by you
        </span>
      </h1>
      <div>
        <p className="m-0 text-[18px] sm:text-[24px]">
          Choose your favorite recipe and cook it yourself. It is easy ad fun!
        </p>
        <p>
          <Link
            className="inline-block mt-[1rem] py-[0.5rem] px-[1rem] rounded-[0.5rem] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold"
            href="/meals/share"
          >
            Share Your Favorite Recipe
          </Link>
        </p>
      </div>
    </header>
  );
};

export default MealsHeader;
