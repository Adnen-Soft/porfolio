// src/components/About.js
import React, { useState, useEffect } from "react";
import axios from "axios";


const Filter =  ({ setActiveGenre, ActiveGenre,setfiltered,Popular }) => {
    const [categories, setcategories] = useState(['All']);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchcats = async () => {
        try {
          const response = await axios.get(
            "https://backend.adnenhamouda.tn/wp-json/wl/v1/portfolio-categories"
          );
          setcategories(response.data);
         // Update state with the data
          setLoading(false); // Stop the loading indicator
        } catch (err) {
          setError(err.message); // Set an error message
          setLoading(false); // Stop the loading indicator
        }
      };
    
      useEffect(() => {
        fetchcats() ;// Call the function to fetch data when the component mounts
      }, []);

      useEffect(() => {
        if(ActiveGenre=="All"){
            setfiltered(Popular);
            return;
        }
        const filtered=Popular.filter((project)=>project.categories.includes(ActiveGenre));
        setfiltered(filtered);
      }, [ActiveGenre]);
  return (
    <div className="mt-2 mb-4">
    <input key="0" type="checkbox"  checked={ActiveGenre === "All"} onClick={()=>setActiveGenre("All")} aria-label="All" class="btn btn-sm m-1" />
     {categories.map((item) => (
                
                <input key={item.id} type="checkbox"  checked={ActiveGenre === item.name} onClick={()=>setActiveGenre(item.name)} aria-label={item.name} class="btn btn-sm m-1" />
              ))}
    
   
    </div>
  );
};

export default Filter;
