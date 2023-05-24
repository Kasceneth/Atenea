import { useState } from "react"
import { MealList } from "./MealList";
import "./Styles.css"
import { useFetch } from "./CustomHookFetch";



export const Home = () => {
    const [cal, setCal] = useState(2000);
    const [mealData, setMealData] = useState(null);
    const uri = process.env.REACT_APP_URL;
    const k = process.env.REACT_APP_KEY;

    const [data] = useFetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)
            

    function getMeals() {
        /*fetch(`${uri}apiKey=${k}&timeFrame=day&targetCalories=${cal}`)
            .then((response) => response.json())
            .then((data) => {

                setMealData(data);
                console.log(data);

            })
            .catch(() => {
                console.log("error")
            })*/
            setMealData(data);
            
    }


    function handleChange(e) {
        setCal(e.target.value);
    }

    return (
        <div class="p5 text-center bg-light" id="divHeader">
            <section class="container">
                <h1> QUÉ QUIERES COMER</h1>
                
                <input type='number'
                    placeholder="Calorias"
                    onChange={handleChange} />
                    
                    <div class="container"> <br></br>
                                    <button type="submit"
                    class="btn btn-primary mb-2"
                    onClick={getMeals}>Mostrar</button>
                    </div>
            
                   
            </section>
            {mealData && <MealList mealData={mealData}/>}
            
        </div>
    )

}