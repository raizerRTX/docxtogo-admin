# Creating a Search bar

The Search bar is a component that allows users to search for content in your app. It is a simple text input with a magnifying glass icon on the left side. The Search bar is a great way to allow users to search for content in your app.

1. Import the input and icon for the search bar
    ```jsx
    import {TextInput} from "flowbite-react";
    import {FaSearch} from "react-icons/fa";
    ```

2. Add the state configuration for the search bar and the data you want to search on
    ```jsx
    const [search, setSearch] = useState("");
    const [filteredData, setFilteredData] = useState(dataFromAPI);
    ```
   
3. Add the search bar to the component/page
    ```jsx
    // add the search bar to the page
     <TextInput
       id="search"
       type="text"
       icon={FaSearch}
       placeholder="Search for anything"
       onChange={(e) => setSearch(e.target.value)}
       required={true}
       className="font-work w-[20rem] h-[2.5rem] text-sm"
     />
    ```
   
4. Add logic and the effect for the search bar
    ```jsx
    import {useEffect} from "react";

    useEffect(() => {
      // add all fields you need to use the filter on
      const field1Matches = data.filter((item) => item.field1.toLowerCase().includes(search.toLowerCase()));
      const field2Matches = data.filter((item) => item.field2.toLowerCase().includes(search.toLowerCase()));
      const field3Matches = data.filter((item) => item.field3.toLowerCase().includes(search.toLowerCase()));
   
      const matches = [...field1Matches, ...field2Matches, ...field3Matches];
      const uniqueMatches = [...new Set(matches)]
      setData(uniqueMatches)
    }, [search]);
    ```
