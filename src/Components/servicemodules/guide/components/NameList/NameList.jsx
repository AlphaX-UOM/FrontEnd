import React,{useState,useEffect} from 'react';
import NameListEle from './NamelistEle';
import {Row,Col, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { render } from '@testing-library/react';
import FormSearch from '../formsearch';

import guide from '../../../../../images/guide-img/img/img-2.svg';
import './formlist.css'
import connect from "react-redux/es/connect/connect";


function NameList(props){
    const { form_language,date,date1 } = props;
    const [language3,setLanguage3]=useState("x");
    const [rating,setrating]=useState("x");
    const [cost,setcost]=useState("x");

    const [language3x,setLanguage3x]=useState("x");
    const [ratingx,setratingx]=useState("x");
    const [costx,setcostx]=useState("x");


    useEffect(() => {
        console.log(form_language);
        console.log(date);
        console.log(date1);
    },[])
    function NameListMenu(){
       

        function submitthis(){
            return(
                setLanguage3(language3x),
                setrating(ratingx),
                setcost(costx)
            )
        }

        const handleInputlanguage1 = (event) => {
            setLanguage3x(language1 => event.target.value);
        }
        const handleInputlanguage2 = (event) => {
            setratingx(language1 => event.target.value);
        }

        const handleInputlanguage3 = (event) => {
            setcostx(language1 => event.target.value);
        }
        setNamelistlan(language3);
  
            return(
                <div>
                  
                   <div styles={{alignItems: 'center'}}>
                       
                   {/* <Card style={{ width: '10rem', height: '60rem', backgroundColor:'gray'}}>
                   <div>
                  <Card.Img variant="top" src={guide} style={{ height: '100px' , padding: '10px'}}/>
                  </div>
                   <Card.Body>
                   <Card.Title>Select Your Guide</Card.Title> */}
                   <div styles={{alignItems: 'center',justifyContent: 'space-between'}}>
                   <div style={{ padding: '10px'}}>
                   <select className='form-input-g' id="language" placeholder='Search' onChange={handleInputlanguage1}  > 
                  <option value="Hindi">Language</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Chinees">Chinees</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="x">----</option>
                  </select>
                   </div>
                   <div style={{ padding: '10px'}}>
                   <select className='form-input-g' id="rating" placeholder='Search' onChange={handleInputlanguage2} > 
                  <option value="all">Rating</option>
                  <option value='5'>5</option>
                  <option value='4'>4</option>
                  <option value='3'>3</option>
                  <option value='2'>2</option>
                  <option value="x">----</option>
                  </select>
                   </div>
                   <div style={{ padding: '10px'}}>
                   <select className='form-input-g' id="price" placeholder='Search' onChange={handleInputlanguage3}  > 
                  <option value="all">Price</option>
                  <option value=" 3000">3000</option>
                  <option value="4000">4000</option>
                  <option value="5000">5000</option>
                  <option value="6000">6000</option>
                  <option value="x">----</option>
                  </select>
                  <button type="button" className="form-input-btn-g1"   onClick={submitthis}> Search</button>
                   </div>
                   
                   </div>
                   {/* </Card.Body>
                   
                    <Card.Body>
                   
                    </Card.Body>
                    </Card> */}
                   </div>
                  
                </div>
               
            );
            
         
        
        
        
        }
        
        

   function selection(){
       if(namelistlan==='"x"'||namelistlan==="x" && cost=== "x" && rating === "x"){
           return(nameListComponent())
       }
      else if(namelistlan !== "x" && cost=== "x" && rating === "x"){
        return(nameListComponent1())
    }
    else if(namelistlan === "x" && cost!== "x" && rating === "x"){
        return(nameListComponent2())
    }
    else if(namelistlan === "x" && cost=== "x" && rating !== "x"){
        return(nameListComponent3())
    }
    else if(namelistlan === "x" && cost!== "x" && rating !== "x"){
        return(nameListComponent4())
    }
    else if(namelistlan !== "x" && cost!== "x" && rating === "x"){
        return(nameListComponent5())
    }
    else if(namelistlan !== "x" && cost=== "x" && rating !== "x"){
        return(nameListComponent6())
    }
    else if(namelistlan !== "x" && cost!== "x" && rating !== "x"){
        return(nameListComponent7())
    }
       else{
        return(nameListComponent1())
       }
   }     
        
      

        
const language = props.location.data.language;
const [namelistlan,setNamelistlan]=useState('"x"')
   

 console.log(namelistlan);

    const [nameList,setNameList]=useState(null);

    useEffect(() => {
        fetch("https://run.mocky.io/v3/a3bb3139-db9a-4077-810d-e3af6b2e5eeb")
          .then(res => res.json())
          .then( (data) =>{
             setNameList(data);
             
          }
            
           
            
          )
      }, [])
   
    
  
    const nameListComponent=()=>{
        return  nameList && nameList.filter(person => person.language1===language).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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

    const nameListComponent1=()=>{
        return  nameList && nameList.filter(person => (person.language1===namelistlan) ).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
    const nameListComponent2=()=>{
        return  nameList && nameList.filter(person => (person.language1===language) && (person.costPerDay== cost) ).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
     
    const nameListComponent3=()=>{
        return  nameList && nameList.filter(person => (person.language1===language) && (person.age== rating) ).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
    const nameListComponent4=()=>{
        return  nameList && nameList.filter(person => (person.language1===language) && (person.age== rating) && (person.costPerDay== cost) ).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
    const nameListComponent5=()=>{
        return  nameList && nameList.filter(person => (person.language1===namelistlan) && (person.costPerDay== cost)).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
    const nameListComponent6=()=>{
        return  nameList && nameList.filter(person => (person.language1===namelistlan) && (person.age== rating)).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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

    const nameListComponent7=()=>{
        return  nameList && nameList.filter(person => (person.language1===namelistlan) && (person.age== rating)&& (person.costPerDay== cost)).map((Aname,i)=>{
         
      
        return(
            <NameListEle
              
            key={i}
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
                 <div style={{paddingTop: "10px"}}>
                 <NameListMenu/>
                 </div>
                   
                 </Col>
                 <Col xs={10}>
                     <Row>
                        {selection()}
                     </Row>
                 
                 </Col>

                 </Row>
            
             </div>
       
        </>  
          
        
    );
}


const mapStateToProps = (state) => {
    return {

        form_language:state.guide_input_reducer.language,
        date:state.guide_input_reducer.date,
        date1:state.guide_input_reducer.date1

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)( NameList);
