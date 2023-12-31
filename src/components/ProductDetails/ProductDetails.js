import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Rating from '../Rating/Rating';
import RedirectToPage from '../../utils/redirection';
const ProductDetails = () => {

let data = useSelector((state)=>state.products.products)
data=Object.keys(data).length>0? data:[];

const currentId=useParams().id;
let productData = data.filter((d)=>d.id==currentId)[0]



  return (
    <div>
        {
          productData ? <><h5 className="text-sm text-gray-500">Product Details are : </h5>
          <p>Title: {productData.title}</p>
          <p>Brand:{productData.brand}</p>
          <p>features</p>
          <div>
              {productData.features.map((ele,i)=>{
                return <li key={i}>{ele}</li>
              })}
          </div> 
          <div>
              <p>specs:</p>
                {productData.specs.map((spec)=>{
                  return <li><i>{spec.name} {" "} {spec.value}</i></li>
                })}
          </div>
          <div >
            {productData.images.map((prd,index)=>
              <img style={{width:"100px",height:"100px"}} 
              src={prd} key={index} 
              alt={'image not found'}/>)
            }
            <p>Price: {productData.price.value}</p>
            <p>category : #{productData.brand}</p>
            <Rating rating={productData.rating.value} maxRating={5}/>
            <p>Reviewed by :{productData.rating.count}</p>
          </div></>:<>Product Details not available {RedirectToPage("Home")}</>

        }
    </div>
  )
}

export default ProductDetails