import React, { useEffect, useState } from 'react';
import HotelListItem from './HotelListItem';
import Axios from 'axios';



function HotelList() {

    /*const hotelList = {
        hotelName: 'Citrus',
         district: 'Hikkaduwa',
         hotelAddress: '32/a,Galle Road,Hikkaduwa',
         pNumber: '0912257269',
         avgPrice: 6000,
         stars: 5 
    };*/

    const [hotels, setHotels] = useState([]);
    const [loading, setloading] = useState(false);
    const [search, setSearch] = useState('');


    console.log("I'm here");
    useEffect(() => {
        setloading(true);
        Axios.get('https://localhost:44389/api/hotel')
            .then((responseData) => {
                setHotels(responseData.data);
                setloading(false);
            });
    }, []);

    const filterHotels=hotels.filter(item=>{
        return item.hotelName.toLowerCase().includes(search.toLowerCase())
       })

    const hotelsComponent = () => {
        return filterHotels.map((hotel) => {
            return (
                <div>
                    <HotelListItem
                        hotelName={hotel.hotelName}
                        district={hotel.district}
                        hotelAddress={hotel.hotelAddress}
                        pNumber={hotel.pNumber}
                        avgPrice={hotel.avgPrice}
                        stars={hotel.stars}
                    />
                </div>
            );
        });
    };
    

    return (
        <div>
            <br/>
            <div className="text-center">
             <input type="text"  className='shadow-lg ' placeholder="Search by keyword" onChange={e=>setSearch(e.target.value)} style={{width:'800px', padding: '20px',alignSelf:'center',borderRadius:'15px'}}/>
             </div>
        <React.Fragment>
    
        <div className="container mt-4">
        
          <ul className="list-group">{hotelsComponent()}</ul>
         
        </div>
      </React.Fragment>
      </div>
    );


}

export default HotelList;