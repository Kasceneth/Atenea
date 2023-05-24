
import { useEffect, useState } from "react"
import "./Styles.css"
import { useFetch } from "./CustomHookFetch";

export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    const [data] = useFetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)




    useEffect(() => {
        const k = process.env.REACT_APP_KEY;
        fetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`)
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
                console.log(data.image);

            })

            .catch(() => {
                console.log("error")
            })
    },
        [meal.id])
    return (

        
            <div class="card"  id="divCard">
        < img src = { imageUrl } class="card-img-top" alt = "receta" />
            <div class="card-body">
                <h5  class="fst-italic">{meal.title}</h5>
                <ul>
                    <li class="list-group-item">Tiempo de preparación:{meal.readyInMinutes} minutos</li>
                    <li class="list-group-item">Porciones:{meal.servings}</li>
                </ul>

                <div>
                    <a href={meal.sourceUrl} class="btn btn-primary">Ir a la receta</a>
                </div>
            </div>
            </div >
        
           
        
    )
}