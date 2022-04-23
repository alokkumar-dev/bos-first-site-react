import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const ListingDetails = ()=>{
    const [data, setData]= useState({});
    const {id} = useParams();
    const getListingDetails = ()=>{
        axios.get(`http://localhost:8080/data/${id}`).then((res)=>{
            setData(res.data);
        })
    }

    useEffect(()=>{
        getListingDetails();
    },[])
    return(
        <>
            {
                <div>
                    <h2>{data.name}</h2>
                    <h3>{data.city}</h3>
                    <h3>{data.address}</h3>
                    <h3>{data.capacity}</h3>
                    <h3>{data.cost}</h3>
                    <h3>{data.selectVerify}</h3>
                    <h3>{data.rating}</h3>
                    <h3>{data.Accepted_Pet_type}</h3>
                    <h3>{data.Accepted_Pet_size}</h3>
                    <h3>{data.adult_supervision}</h3>
                    <h3>{data.sleep_place}</h3>
                    <h3>{data.potty}</h3>
                    <h3>{data.walks}</h3>
                    <h3>{data.type_of_home}</h3>
                    <h3>{data.outdoor_size}</h3>
                    
                </div>
            }
        </>
    )
}   