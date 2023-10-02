import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadCategories } from "../../Store/categories";

 function Categories(){

    const dispatch= useDispatch();
    // console.log('hie')
    useEffect(()=>{
       dispatch(loadCategories());
    },[]);

    const categories = useSelector((state)=>{
        return state.categories.categories;
    })

// console.log("from ",categories)

    return (<div>
            <ul>
                {categories.length && 
                    categories.map((item)=>(
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>    
    </div>)
}

export default Categories