import MealItem from "./MealItem";

const MealsGrid = ({ meals }) => {
  return (
    <ul className="grid w-[90%] max-w-[90rem] grid-cols-[repeat(auto-fill,minmax(20rem,_1fr))] gap-[3rem] my-[2rem] mx-auto list-none p-0">
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
