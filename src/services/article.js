import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const rapidApiKey = import.meta.env.VITE_RAPID_ARTICLE_KEY;





export const articleApi = createApi ({
    reducerPath:'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl : 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        preparedHeaders : (headers) =>{
            hearders.set('X-RapidAPI-Key',rapidApiKey);
            hearders.set('X-RapidAPI-Host','article-extractor-and-summarizer.p.rapidapi.com');
        return headers;
        
        },
    
    }),
    endpoints: (builder) => ({
        getSummary : builder.query({
            query : (params) => `/summarize?url=${encodeURI(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;