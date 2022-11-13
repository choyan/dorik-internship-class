import { useQuery } from "@tanstack/react-query"
import { getQuotes, getQuote } from "../services/quotes.service"

export function useGetQuotes(){
    return useQuery({
        queryKey: ['quotes'],
        queryFn: getQuotes,
        // refetchOnWindowFocus: true,
        // refetchInterval: 5000
    })
}

// 300 - 400

// Single quote
export function useGetQuote(id) {
    return useQuery({
        queryKey: ['quote', id],
        queryFn: () => getQuote(id),
        enabled: !!id
    })
}

// delete quote
export function useDeleteQuote() {

}

// update quote
export function useUpdateQuote() {

}

// server state