
import { useEffect, useState } from "react"
import "./Styles.css"
import { useFetch } from "./CustomHookFetch";

export function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");
    const k = process.env.REACT_APP_KEY;
    const [data] = useFetch(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${k}&includeNutrition=false`)




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
        [meal.id]);
    return (

        
            <div className="card"  id="divCard">
        < img src = { imageUrl } className="card-img-top" alt = "receta" />
            <div className="card-body">
                <h5  className="fst-italic">{meal.title}</h5>
                <ul>
                    <li className="list-group-item">Tiempo de preparación:{meal.readyInMinutes} minutos</li>
                    <li className="list-group-item">Porciones:{meal.servings}</li>
                </ul>

                <div>
                    <a href={meal.sourceUrl} className="btn btn-primary">Ir a la receta</a>
                </div>
            </div>
            </div >
        
           
        
    )
}