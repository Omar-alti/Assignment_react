import { createContext, useContext, useEffect, useState } from "react";

const ArticleContext = createContext();

export const useArticles = () => useContext(ArticleContext);//

export const ArticleProvider = ({ children }) => {
    const URL = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([]);
    const [article, setArticle] = useState(null);
 
    useEffect(() => {
        getArticles();
    }, [])

    async function getArticles() {
        try {
            const response = await fetch(URL);
            const data = response.json();

            if (response.status === 200)
                setArticles(await data);

        } catch (e) {
            console.warn("Något gick fel: " + e);
        }
    }

    async function getArticle(id) {
        try {
            const response = await fetch(`${URL}/${id}`);
            const data = response.json();

            if (response.status === 200){
                setArticle(await data);
            }
      
        } catch (e) {
            console.warn("Något gick fel: " + e)
        }
    }

    return (
        <ArticleContext.Provider value={{ articles, article, getArticles, getArticle }}>
            {children}
        </ArticleContext.Provider>
    )
}

