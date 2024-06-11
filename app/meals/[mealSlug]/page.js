import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

const MealDetailsPage = async ({ params }) => {
  const meal = await getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  const { title, image, creator_email, instructions, summary, creator } =
    meal;

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className="flex py-[2rem] px-[1rem] gap-[3rem] m-auto max-w-[80rem]">
        <div className="relative w-[30rem] h-[20rem]">
          <Image
            className="object-cover rounded-[8px] shadow-mealImgShadow animate-fadeInFromLeft"
            src={image}
            alt={title}
            fill
          />
        </div>
        <div className="pt-[0.5rem] px-[1rem] pb-0 text-[#ddd6cb] max-w-[40rem] animate-fadeInFromRight">
          <h1 className="m-0 text-[3.5rem] uppercase font-display text-shadow">
            {title}
          </h1>
          <p className="text-[1.5rem] text-[#c6a69b] italic">
            by{" "}
            <a
              className="bg-gradient-to-r from-[#f9572a] to-[#ff8a05] bg-clip-text text-transparent"
              href={`mailto:${creator_email}`}
            >
              {creator}
            </a>
          </p>
          <p className="text-[1.5rem]">{summary}</p>
        </div>
      </header>
      <main>
        <p
          className="text-[1.25rem] leading-[1.5] bg-[#6e6464] text-[#13120f] rounded-[8px] shadow-mealImgShadow px-[2rem] py-[1rem] max-w-[60rem] my-[2rem] mx-auto animate-fadeInFrombottom"
          dangerouslySetInnerHTML={{
            __html: instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealDetailsPage;
