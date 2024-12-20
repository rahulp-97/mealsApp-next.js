import { useRouter } from "next/navigation";

function MealDetails(props) {
    const { params } = props;
  return (
    <div>
        <h2>MealDetails</h2>
        <p>Meal-id : {params?.['meal-id']}</p>
    </div>
  )
}

export default MealDetails;