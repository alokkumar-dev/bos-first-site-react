import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Redux/action";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
export const Home = () => {
  const { petData } = useSelector((store) => store.petData);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const getPetData = () => {
    axios.get("http://localhost:8080/data").then((res) => {
      dispatch(getData(res.data));
    });
  };
  useEffect(() => {
    getPetData();
  }, []);
  let counter = 1;

  const handleCostSort = (e)=>{
      const {id,value} = e.target;
      if(id == 'sortByCost' && value=='high'){
          petData.sort((a,b)=>a.cost-b.cost);
          
      }
  }

  return (
    <>
      <div>
        <select name="" id="sortByCost" onChange={handleCostSort}>
          <option value="">--sort by cost--</option>
          <option value="high">Low to high</option>
          <option value="low">Low to low</option>
        </select>
      </div>

      <div className="homeContainer">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost per day</th>
              <th>Verified</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {petData.map((el) => (
              <tr onClick={() => navigate(`/listing/${el.id}`)} key={el.id}>
                <td>{counter++}</td>
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.address}</td>
                <td>{el.capacity}</td>
                <td>{el.cost}</td>
                <td>{el.selectVerify}</td>
                <td>{el.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
