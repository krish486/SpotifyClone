import { useState } from "react"
import { allsongs } from "../../dashboard/api/songsApi";

export let useSearchHook = () => {
    let songs = allsongs()
    let [searchValue, setSearchValue] = useState("");
    let [searched, setSearched] = useState([])
    let timmer;

    let search = (e) => {

        clearInterval(timmer)
        let value = e.target.value

        timmer = setTimeout(() => {
            setSearchValue(value)
            let arr = songs.filter((elem) => elem.title.toLowerCase().includes(value.toLowerCase()))
            setSearched(arr)
        }, 500)

    }

    return {
        search,
        searched,
        searchValue
    }
}