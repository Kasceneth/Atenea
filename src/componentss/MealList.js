import { Meal } from "./Meal";


export function MealList({mealData}){
    const nutrients = mealData.nutrients;

    return(
        <main >
            <section className="container">
                <h1 >Información Nutricional</h1>
                <ul className="list-group list-group-numbered">
                    <li className="list-group-item">Calorias:   {nutrients.calories.toFixed(0)}     <br></br> Cantidad por porción.</li>
                    <li className="list-group-item">Carbohidratos: {nutrients.carbohydrates.toFixed(0)} g</li>
                    <li className="list-group-item">Grasas: {nutrients.fat.toFixed(0)}g</li>
                    <li className="list-group-item">Proteína: {nutrients.protein.toFixed(0)}g</li>
                </ul>
            </section>
            <section className="conatiner">
                {mealData.meals.map((meal)=>{
                    return <Meal key={meal.id} meal={meal}/>
                }
                
                )}
            </section>
        </main>
    )
}