import React,{Component,useEffect,useState}  from 'react';

import { connect } from 'react-redux';

import * as actions from '../../../../../store/actions/index';


class Guide_filters extends Component{

    constructor(props) {
        super(props)
        this.state = {


            language: '',
            price:'',
            rating:'',
            

        }


    }

    Changehandler=(event) => {
        this.setState({ [event.target.name]: event.target.value })
      this.props.set_Guide_filter(event.target.value);
    };
    Changehandler_02=(event) => {
        this.setState({ [event.target.name]: event.target.value })
        this.props.set_Guide_filter_02(event.target.value);
    };
    Changehandler_03=(event) => {
        // this.setState({ [event.target.name]: event.target.value })
        // this.props.set_Guide_filter_03(event.target.value);
    };

render(){
        return (

            <div>
                <br/>
                <div className="container viewp">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Language</label>
                                        <select className="form-control tm-select "  name="language"  onChange={this.Changehandler}>

                                            
                                            <option value="All">All</option>
                                            <option value="English">English</option>
                                            <option value="Japanees">Japanees</option>
                                            <option value="Korean">Korean</option>
                                            <option value="German">German</option>
                                            

                                        </select>
                                    </div>
                                </div>
                                <hr/>
                             
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Price</label>
                                        <select className="form-control tm-select" name="price" onChange={this.Changehandler_02}  >
                                            <option value="All">All</option>
                                            <option value="6000">6000 </option>
                                            <option value="5000">5000 </option>
                                            <option value="4000">4000</option>
                                            <option value="3000">3000</option>
                                            <option value="2500">2500</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="">Rating</label>
                                        <select className="form-control tm-select" name="rating" onChange={this.Changehandler_03}  >
                                            <option value="All">5</option>
                                            <option value=">100">4</option>
                                            <option value="100">3</option>
                                            <option value="50">2</option>
                                            <option value="25">1</option>

                                        </select>
                                    </div>
                                </div>
                            </div>


                        </div>




                    </div>
                </div>

            </div>

        );
    }




}



const mapStateToProps = state => {
    return {


    }
};

const mapDispatchToProps = dispatch => {
    return {
        set_Guide_filter:  items => {dispatch(actions.set_guide_language_filter(items)) },
         set_Guide_filter_02:  items => {dispatch(actions.set_guide_price_filter(items)) },
        // set_Guide_filter_03:  items => {dispatch(actions.set_Guide_filter_03(items)) }
    }
};
export default  connect(mapStateToProps, mapDispatchToProps)(Guide_filters);
