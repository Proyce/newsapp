const API_KEY = "955552661b2a4d018ca8db24cf87012b";
const articleUrl = "https://newsapi.org/v2/top-headlines";
const category_general = "general";
const category_business = "business";
const category_sports = "sports";
const category_technology = "technology";
const category_science = "science";
const category_entertainment = "entertainment";
const country_ng = "ng";
const country_us = "us";

export const fetchGeneralArticles = async () => {
    const response = await fetch(
        `${articleUrl}?country=${country_ng}&category=${category_general}`, {headers : {"X-API-KEY": API_KEY}}
    );
    const json = await response.json();
    return json;
};

export const searchArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic}&sortBy=publishedAt&apiKey=${API_KEY}`,
    { headers: { "X-API-KEY": API_KEY } }
  );
  const json = await response.json();
  return json;
};