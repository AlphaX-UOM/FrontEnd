import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EventItem from "./EventItem";
import { CardColumns } from 'reactstrap';
import { Container } from "@material-ui/core";
import { act } from "react-dom/test-utils";
import Pagination from "./pagination";
import axios from "axios";


function EventList(props) {

  const [myeventList, setmyeventList] = useState([]);
  const[count,setconunt]=useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);



  useEffect(() => {
    fetch('https://alphax-api.azurewebsites.net/api/eventplannerservices')
      .then((response) => {
        return response.json();
      })
       .then((responseData) => {
      //   if(mapdata!=null){
      //     responseData = responseData.filter(item => item.district === props.eventmapCompare[mapdata]);
         setmyeventList(responseData);
      //   }
        
        setmyeventList(responseData);
      });
  }, []);


  const filterSort=myeventList.sort((a,b)=>{

    if (a.name < b.name) {
      console.log("Hello");
      return -1;
    }
    if (a.name > b.name) {
      console.log("Hii");
      return 1;
    }
    console.log("What");
    return 0;

  
  })

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filterSort.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);


return (
  <div className="container mt-5">
   
    <EventItem posts={currentPosts}/>
    <Pagination
      currentPage={currentPage}
      postsPerPage={postsPerPage}
      totalPosts={filterSort.length}
      paginate={paginate}
    />
  </div>
);
};


export default EventList;
