import React,{Component} from 'react';
import Listitem from '../../servicemodules/transport/listitem'


class transportproviderlist extends Component{
    state = {
        providers :[ {
            id:1,
            name: "Tharindu Traders plc",
            vehicletype:"Car",
            priceperday:2500.00,
            ratings:4.3,

            },
            {
                id:2,
                name: "Thiwanka Traders plc",
                vehicletype:"Van",
                priceperday:2500.00,
                ratings:4.3,

            }
        ]
    };


     provideritem = (
        <div>
            {this.state.providers.map((provider) => {
                return <Listitem
                    id={provider.id}
                    name={provider.name}
                    price={provider.priceperday}
                    vtype={provider.vehicletype}
                    rating={provider.ratings}
                />
            })}
        </div>
    );


    render() {

        return (

                    <div>
                {this.provideritem}

            </div>

        );
    }
}

export default transportproviderlist;
