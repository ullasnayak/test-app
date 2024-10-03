import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../../api/HomeMovie/HomeMovie";

export function useMoviesQuery(query: string) {
    const { isLoading, isError, data, refetch } = useQuery({
        queryKey: ["movies", query],
        queryFn: () => fetchMovies(query),
        staleTime: 1000
    });

    return { isLoading, isError, data, refetch };
}


