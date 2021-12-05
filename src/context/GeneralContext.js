import React, {createContext, useState,useEffect} from 'react'
import Axios from 'axios'
//CREATE CONTEXT
export const GeneralContext = createContext();

//CREATE A PROVIDER
const GeneralProvider = (props) => {

    //CREATE STATE OF CONTEXT
    const[calories,setCalories] = useState('')
    const[queryRecipe,setQueryRecipe] = useState('')
    const[typeRecipe,setTypeRecipe] = useState('')
    const[dietRecipe,setDietRecipe] = useState('')
    const[cuisineRecipe,setCuisineRecipe] = useState('')
    const[intoleranceRecipe,setIntoleranceRecipe] = useState('')

    const [mealPlan, setMealPlan] = useState([]);
    const [recipes,setRecipes] = useState([])
    const getMealPlan = async()=>{
        const main = 'https://api.spoonacular.com/mealplanner/generate?'
        const apiKey = 'apiKey='
        const caloriesSearch = `&targetCalories=${calories}`
        const url = `${main}${apiKey}${caloriesSearch}`
        //const mockurl = 'https://eb318ab7-bbdf-49e5-9045-da7fd1e13d92.mock.pstmn.io/mockRecipe'
        const response = await Axios.get(url)
        setMealPlan(response.data)
        //console.log(response.data.week.monday.meals)
    }  
    const getRecipe = async()=>{
        const main = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=&addRecipeInformation=true'
        const query = queryRecipe.length > 0 ? `&query=${queryRecipe}`:''
        const type = typeRecipe.length > 0 ? `&type=${typeRecipe}` : ''
        const diet = dietRecipe.length > 0 ? `&diet=${dietRecipe}` : ''
        const cuisine = cuisineRecipe.length > 0 ? `&cuisine=${cuisineRecipe}` : ''
        const intolerance = intoleranceRecipe.length > 0 ? `&intolerances=${intoleranceRecipe}` : ''
        const url = `${main}${query}${type}${diet}${cuisine}${intolerance}`
        const mockurl = 'https://b80eb744-ff7a-431f-a590-fc6b4e9f9d53.mock.pstmn.io/type'
        const response = await Axios.get(url)
        setRecipes(response.data.results)
        //console.log(response.data.results)
    }
    useEffect(() => {
        if(typeRecipe.length > 0 || dietRecipe.length > 0 || cuisineRecipe.length > 0 || intoleranceRecipe.length > 0)
            getRecipe()
        //console.log('type:',typeRecipe,' diet:',dietRecipe,' cuisine:',cuisineRecipe,' intolerance:',intoleranceRecipe)
    }, [typeRecipe,dietRecipe,cuisineRecipe,intoleranceRecipe])
    return(
        <GeneralContext.Provider
            value={{
                
                calories,
                mealPlan,
                recipes,
                queryRecipe,
                typeRecipe,
                dietRecipe,
                cuisineRecipe,
                intoleranceRecipe,
                setQueryRecipe,
                getMealPlan,
                getRecipe,
                setCalories,
                setDietRecipe,
                setTypeRecipe,
                setCuisineRecipe,
                setIntoleranceRecipe
            }}
        >
            {props.children}
        </GeneralContext.Provider>
    )
}

export default GeneralProvider;