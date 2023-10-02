import Icon from '@mdi/react';
import {mdiStar} from '@mdi/js';
import classNames from 'classnames'

import './Rating.css';

function Rating({rating,maxRating}){
   console.log(rating,maxRating);

   return (<div>
        {new Array(maxRating).fill(0).map((_ , index)=>{
            const isActive= rating > index + 1;
            console.log(isActive)
            return (
                <Icon 
                path={mdiStar}
                size={1.2}
                key={index}
                className={classNames("rating__star",{
                    "rating__star--active":isActive
                })}
                />
            )
        } )}
    </div>)
}

export default Rating;

// map on rating and display filled stars
// map on maxRating - rating to display empty stars

// for loops
// rating
// maxrating-rating

// * * * * // *
// rating // max rating
// **** // another map *

//scaler.com/scm

// you could just create a react app
// host it using cloudfront
// you could upload your application on S3
// you could make your cloudfront point to the S3 folder and server that
// application
// everything now would be your api based
// there is no server req for you to serve

// how do you think your frontend in general is served

// client requests a page
// sever has multiple routes
// routes there are controller
// controller checks that which page has to be served
// picks the html in front of it
// and serves that html
