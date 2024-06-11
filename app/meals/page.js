import { MealsGrid, MealsHeader } from "@/components";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

const MealsPage = async () => {
  return (
    <>
      <MealsHeader />
      <main>
        <Suspense
          fallback={
            <div className="text-center animate-loading-animation">
              Fetching Meals...
            </div>
          }
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
