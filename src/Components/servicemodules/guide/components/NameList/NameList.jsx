import React,{useState,useEffect} from 'react';
import NameListEle from './NamelistEle';
import {Row,Col } from 'react-bootstrap';
import NameListMenu from '../SidemenuFilter/Namelist/NameSideMenu'



function NameList(props){
    
 const language = props.location.data.language;
 //console.log(language);

    const [nameList,setNameList]=useState(null);

    useEffect(() => {
        fetch("https://localhost:44328/api/Guideinfoes")
          .then(res => res.json())
          .then( (data) =>{
             setNameList(data);
             
          }
            
           
            
          )
      }, [])
   

  
    const nameListComponent=()=>{
        return  nameList && nameList.filter(person => person.language1 === language).map((Aname)=>{
         
      
        return(
            <NameListEle
              
            key={Aname.id}
             name={Aname.name1} 
             city={Aname.city}
             email={Aname.email}
             lang={Aname.language1}
             Rating={Aname.age}
             cost={Aname.costPerDay}
             avatar={Aname.imageurl}

            />
        );
        })  ;
    };
const addUsserHandler=()=>{
   const newUsser={
    "id":3,
    "name":{"title":"Mrs","first":"Stella","last":"jaxon"},
    "location":{"city":"kilinocchi"},
    "email":"polamuna.yuid@example.com",
    "dob":{"date":"1983-02-26T19:18:16.968Z","age":37},
    "picture":{"medium":"https://randomuser.me/api/portraits/med/women/54.jpg"},
   }

   setNameList((nameList)=>nameList.concat(newUsser));
}



    return(

     
       <> 
            
            <div style={{background: "linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%)"} }>
              
            <Row  style={{width: "100%", height: "100%"}}>
                 <Col>
                 
                 <NameListMenu/>
                 
                   
                 </Col>
                 <Col xs={10}>
                     <Row>
                        {nameListComponent()}
                     </Row>
                 
                 </Col>

                 </Row>
            
             </div>
       
        </>  
          
        
    );
}

export default NameList;