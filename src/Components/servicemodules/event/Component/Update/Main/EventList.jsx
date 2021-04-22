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


    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://alphax-api.azurewebsites.net/api/eventplannerservices/");
      setmyeventList(res.data);
      setLoading(false);
    };

    fetchPosts();
    
    
    // fetch(`https://alphax-api.azurewebsites.net/api/eventplannerservices/`)

    //   .then((response ) => {

    //     return response.json();
    //   })
    //   .then((responseData) => {
     
    //       setmyeventList(responseData);
    //       setLoading(false);
     
     
    

      
       
    //   });
  }, []);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myeventList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

//   const EventListComponent = () => {
    
    
   
//     return myeventList.map((aCat,index) => {


 
        
//         return (
//           <div>
 
//           <EventItem
  
//             item={aCat}
//             key={aCat.id}
//             name={aCat.name}
//             price={aCat.price}
//             img="https://www.touropia.com/gfx/d/best-places-to-visit-in-sri-lanka/yala_national_park.jpg?v=1"
//           />
        
//         </div>
       
//         );

      
  

     
      
   
//     });
//   };

//   return (
    

  
//     <Container>
      
      	
//     <div className="col-12">
//     <CardColumns fluid="md">
//     <div class="container-fluid py-2" >
  
      
//       <div>{EventListComponent(
        
 
     
//       )
       

//    }
   
//       </div>
      
//       </div>
//       </CardColumns>
  
//   </div>
//   </Container>
  
//   );
// }
return (
  <div className="container mt-5">
   
    <EventItem posts={currentPosts}/>
    <Pagination
      currentPage={currentPage}
      postsPerPage={postsPerPage}
      totalPosts={myeventList.length}
      paginate={paginate}
    />
  </div>
);
};


export default EventList;
