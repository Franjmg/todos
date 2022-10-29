export default function TodoSearch({ searchValue, setSearchValue }) {
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value)
        setSearchValue(event.target.value)
    }

    return(
        <input 
            className="search" 
            type="text" 
            placeholder="Search Task ..."
            value={searchValue}
            onChange={onSearchValueChange}
        />
    )
}