import { ImageSlideshow } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header
        className={"flex max-sm:flex-wrap gap-[3rem] my-[3rem] mx-auto w-[90%] max-w-[75rem]"}
      >
        <div className="w-[45rem] h-[25rem] pt-[1.5rem]">
          <ImageSlideshow />
        </div>
        <div className="pt-[2rem]">
          <div className={"text-[#ddd6cb] text-[1.5rem]"}>
            <h1 className="text-[2rem] font-bold font-display tracking-[0.15rem] uppercase bg-gradient-to-r from-[#f9572a] to-[#ffc905] text-transparent bg-clip-text">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={"text-[1.5rem] flex gap-[1rem]"}>
            <Link
              className="cta-links bg-transparent font-normal text-[#ff9b05] pl-0 hover:bg-transparent hover:text-[#f9b241] active:bg-transparent active:text-[#f9b241]"
              href="/community"
            >
              Join the community
            </Link>
            <Link
              className="cta-links bg-gradient-to-tr from-[#f9572a] to-[#ffc905] hover:bg-gradient-to-t hover:from-[#f9572a] hover:to-[#ffc905] active:bg-gradient-to-t active:from-[#f9572a] active:to-[#ffc905]"
              href="/meals"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section
          className={
            "flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-[3rem] mx-auto text-center"
          }
        >
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section
          className={
            "flex flex-col text-[#ddd6cb] text-[1.5rem] max-w-[50rem] w-[90%] my-[3rem] mx-auto text-center"
          }
        >
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
