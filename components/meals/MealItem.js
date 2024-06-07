import Link from "next/link";
import Image from "next/image";

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className="flex flex-col justify-between h-full rounded-[4px] shadow-[0_0_12px_rgba(0,0,0,0.3)] overflow-hidden transition duration-[0.3s] ease-in-out text-[#fff6cb] bg-gradient-to-r from-[#2c1e19] to-[#25200f]">
      <header>
        <div className="relative h-[20rem] object-cover">
          <Image src={image} alt={title} fill />
        </div>
        <div className="pt-[0.5rem] px-[1rem] pb-0">
          <h2 className="m-0 text-[1.5rem] font-display">{title}</h2>
          <p className="m-0 text-[0.75rem] text-[#cfa69b] italic">
            by {creator}
          </p>
        </div>
      </header>
      <div className="flex flex-col justify-between h-full">
        <p className="pt-[0.5rem] px-[1rem] pb-0">{summary}</p>
        <div className="p-[1rem] text-right">
          <Link
            className="inline-block mt-[1rem] py-[0.5rem] px-[1rem] rounded-[0.5rem] bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white font-bold hover:bg-gradient-to-r hover:from-[#fd4715] hover:to-[#f9b241]"
            href={`/meals/${slug}`}
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
