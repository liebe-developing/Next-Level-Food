import { MealsGrid, MealsHeader } from "@/components";
import { getMeals } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getMeals();

  return (
    <>
      <MealsHeader />
      <main>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;
