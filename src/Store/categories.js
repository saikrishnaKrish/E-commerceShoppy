export function loadCategories(){
    
    return function (dispatch){

        fetch("https://run.mocky.io/v3/297308ac-aeb0-4e98-8868-9c1d3a878a4c")
        .then((res)=>{
            // console.log('sao')
            return res.json();
        })
        .then((res)=>{
            console.log('sao')
            dispatch({type:"LOAD_CATEGORIES_DONE",payload:res})
        });
    };
}


function CategoriesReducer(state={categories:[]},action){
    console.log('categories reducer');

    switch(action.type){
        case "LOAD_CATEGORIES_DONE":{
            return {
                ...state,
                categories:action.payload
            }
        }

        default:{
            return state;
        }
    }
}

export default CategoriesReducer;