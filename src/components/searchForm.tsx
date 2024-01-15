import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface Stock {
    id: number;
    name: string;
}

function SearchForm() {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [searchResults, setSearchResults] = useState<Stock[]>([]);

    const stocks: Stock[] = [
        { id: 1, name: "Stock Name 1" },
        { id: 2, name: "Stock Name 2" },
        // Add other stock data
    ];

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (event.target.value !== "") {
            const results = stocks.filter((stock) =>
                stock.name.toLowerCase().includes(event.target.value.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };

    const handleAlert = () => {
        if (searchResults.length === 0 && searchTerm !== "") {
            window.alert("Term not found");
        }
    };

    return (
        <div className="">
            <form action="" className="md:w-[400px] mx-auto w-[350px]">
                <div className="relative">
                    <input
                        type="text"
                        id="search"
                        placeholder="Search"
                        name="search"
                        value={searchTerm}
                        onChange={handleSearch}
                        className="w-full h-12 p-4 rounded-[7px] bg-[#F3F3F3] focus:border-none outline-0 ring-0 placeholder:text-txt_Clr text-lg"
                    />
                    <button type="button" onClick={handleAlert}>
                        <AiOutlineSearch className="text-2xl text-txt_Clr h-5 w-5 absolute top-3.5 right-3 fill-current" />
                    </button>
                </div>
            </form>
            <ul>
                {searchResults.length > 0 ? (
                    searchResults.map((stock) => (
                        <li key={stock.id}>{stock.name}</li>
                    ))
                ) : (
                    <li>{searchTerm !== "" ? "Term not found" : ""}</li>
                )}
            </ul>
        </div>
    );
}

export default SearchForm;
