import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestavrantCard = (props) => {
    const { resData} = props;


    const {loggedInUser} = useContext(UserContext);

   const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla ,  } =  resData?.info
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img 
            className="rounded-lg w-52 h-32"
            alt="res-logo" src={ CDN_URL + cloudinaryImageId} />
            <h3  className="font-bold py-3 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{sla.slaString} </h4>
            <h4>User: {loggedInUser} </h4>
        </div>
    )
}


export const withPromtedLabel = (RestavrantCard) => {
    return (props) => {
        return (
            <div>
                <lablel className="absolute bg-black text-white m-2 p-2 rounded-lg">Open</lablel>
                <RestavrantCard {...props}/>
            </div>
        )
    }
}

export default RestavrantCard;