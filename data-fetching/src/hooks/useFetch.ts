import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch<T = unknown>( url: string) {
    const [data, setData ] = useState<T | null>(null)
    const [isFetching, setIsFetching,] = useState(true);
    const [error, setError] = useState<Error | null>(null)


    useEffect(() => {
        axios.get(url)
        .then(response => {
          setData(response.data);
          }) 
          .catch(err => {
            setError(err);
          })
        .finally(() => {
            setIsFetching(false);
        })  
      }, [])
      return { data , isFetching };
}