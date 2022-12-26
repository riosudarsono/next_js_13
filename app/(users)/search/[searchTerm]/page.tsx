import React from 'react'
import { SearchResult } from '../../../../typings'

type PageProps = {
    params: {
        searchTerm: string
    }
}

const search = async (searchTerm: string) => {
    const res = await fetch (
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    )
    // throw new Error("Opsss!!. Terjadi Kesalahan")
    const data: SearchResult = await res.json()
    return data
}

async function SearchResult({ params: { searchTerm } }: PageProps) {
    const searchResult = await search(searchTerm)
    return (
        <div>
            <p className='text-gray-500 text-sm'>You searched for: {searchTerm}</p>
            <ol className='space-y-5 p-5'>
                {
                    searchResult.organic_results.map((result) => (
                        <li key={result.position} className='list-decimal'>
                            <p className='font-bold'>{result.title}</p>
                            <p>{result.snippet}</p>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default SearchResult