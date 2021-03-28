import React, { Component } from 'react';
import img from './Images/default.jpg';
import { connect } from "react-redux";

class Picture extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            img:img
        }
        this.createImage=this.createImage.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        let files = e.target.files || e.dataTransfer.files;
        
        if (!files.length)
        return;
        this.createImage(files[0]);
    }

    createImage(file){
        
        let reader = new FileReader();
        reader.onload = (e) => {
            this.setState({img: e.target.result});
        };
        reader.readAsDataURL(file);
        
    }

    render()
    {
        return(
            <div>
                <img src={this.props.userCred.imgURL} style={{height:"225px"}} alt={this.props.userCred.imgURL}/>
                <form onSubmit={this.onFormSubmit}  encType="multipart/form-data" >
                    <input className="input_imagem_artigo" type="file"  onChange={this.onChange} />
                   
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userCred: state.eventpnl.userCred,
    };
  };
  
  export default connect(mapStateToProps)(Picture);
  