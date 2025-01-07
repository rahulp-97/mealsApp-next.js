import Image from "next/image";
import { useRouter } from "next/navigation";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import NotFound from "../not-found";

//dynamic meta data
export async function generateMetadata(props) {
  const { params } = props;
  const meal = getMeal(params?.mealSlug);
  if (!meal) return <NotFound />;
  return {
    title: meal?.title,
    description: meal?.summary
  }
};

function MealDetails(props) {
  const { params } = props;
  const meal = getMeal(params?.mealSlug);
  if (!meal) return <NotFound />;
  meal.instructions = meal?.instructions?.replace(/\n/g, "<br />");
  return (
    <div>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image alt="meal details image" src={meal?.image} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal?.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal?.creator_email}`}>{meal?.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{ __html: meal?.instructions }}
        ></p>
      </main>
    </div>
  );
}

export default MealDetails;
