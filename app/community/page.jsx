import { communityIcon, eventsIcon, mealIcon } from "@/assets";
import Image from "next/image";

const PerkLinks = [
  { title: "Share & discover recipes", img: mealIcon, alt: "A delicious meal" },
  {
    title: "Find new friends & like-minded people",
    img: communityIcon,
    alt: "A crowd of people, cooking",
  },
  {
    title: "Participate in exclusive events",
    img: eventsIcon,
    alt: "A crowd of people at a cooking event",
  },
];
const CommunityPage = () => {
  return (
    <>
      <header
        className={
          "flex flex-col gap-[1rem] mt-[5rem] mx-auto mb-[5rem] max-w-[75rem] text-[#ddd6cb] text-[1.5rem] text-center"
        }
      >
        <h1 className="font-display font-bold text-[2rem] sm:text-[3.4rem]">
          One shared passion:{" "}
          <span
            className={
              "bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent  text-[2.5rem] sm:text-[3.4rem]"
            }
          >
            Food
          </span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={"w-[90%] max-w-[40rem] mt-0 mx-auto text-center"}>
        <h2 className="font-display text-[2rem] mb-[3rem] text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className={"list-none my-[3rem] mx-0 p-0 "}>
          {PerkLinks.map((link) => (
            <li
              key={link.title}
              className="flex flex-col border border-gray-800 shadow-lg mb-4 p-4 rounded-lg items-center gap-[2rem]"
            >
              <Image
                src={link.img}
                alt={link.alt}
                className="w-[8rem] h-[8rem] object-contain"
              />
              <p className="font-display text-[1.5rem] font-bold m-0 text-[#ddd6cb]">
                {link.title}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default CommunityPage;
