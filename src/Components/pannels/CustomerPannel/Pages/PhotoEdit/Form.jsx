import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios'
import { storage } from "../../../../../../src/config/firebaseConfig";
import Modal from "react-bootstrap/Modal";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {


            pictures: [],

            image: null,
            url: '',
            users:[],

            progressx: false,
            progress: '',
            show:false,

        }
        // this.createImage=this.createImage.bind(this);
        // this.onChange = this.onChange.bind(this);
        this.onDrop = this.onDrop.bind(this);
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }
    showModal = () => {
        this.setState({ show: true });
      };
    
      hideModal = () => {
        this.setState({ show: false });
      };



    componentDidMount() {


        fetch(`https://alphax-api.azurewebsites.net/api/users/${this.props.id}`)
        .then(res => res.json())
        .then(user =>
            this.setState({ users:user})

        )
        .catch(error => {

            this.setState({error: true});
        });

  


    // console.log(this.state.travellers)
        // console.log(this.props);
        // this.props.onInitTransportProvider(this.props.match.params.id);

}




    handleChange = e => {
        if (e.target.files[0]) {
            this.setState({ image: e.target.files[0] });
        }

    };

 UpdatedCom = (e) => {
    e.preventDefault();
    this.setState({ show: true })

}
 UpdatedCom = (e) => {
    e.preventDefault();
    this.setState({ show: true })

}

    handleUpload = () => {

    };




    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }


    handleSubmit = e => {
      
        e.preventDefault();
        console.log(this.state)

        const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({ progress: progress });
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images`)
                    .child(this.state.image.name)
                    .getDownloadURL()
                    .then((url0) => {
                        this.setState({ url: url0 });
                        this.setState({ progressx: true });

                    });




            }
            


        );



        if (this.state.progressx === true) {

        }
        setTimeout(function () { //Start the timer
            axios
                .put(`https://alphax-api.azurewebsites.net/api/users/${this.props.id}`, {

                    id: this.state.users.id,
                    firstName: this.state.users.firstName,
                    lastName: this.state.users.lastName,
                    password: this.state.users.password,
                    dob: this.state.users.dob,
                    address: this.state.users.address,
                    passwordHash:this.state.users.passwordHash,
                    passwordSalt:this.state.users.passwordSalt,
                    verified:this.state.users.verified,
                    email: this.state.users.email,
                    contact: this.state.users.contact,
                    role: this.state.users.role,
                    imgURL: this.state.url,
                 
                })
                .then(response => {
                    console.log(response)
                    this.setState({ show: true })
                 
                 
                })
                .catch(error => {
                    console.log(error)
                })
        }.bind(this), 4000)
        

     

    }

    render() {
        return (
            <div>
                <div className="container ">
                   
                    <div>


                        <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">

                           


                                <input type="file" onChange={this.handleChange}
                             />
                          


                                <br />
                                <hr />
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>


                        <div className="row formmarge">
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-5">

                            </div>
                            <div className="col-sm-2-center">
                                <button className="btn btn-primary" type="submit" onClick={this.handleSubmit}>Upload Image</button>
                            </div>
                        </div>
                        
   
                    </div>

                    <Modal show={this.state.show} onHide={this.hideModal}>

<Modal.Header> Successfully uploaded your image!</Modal.Header>
<Modal.Footer>
<button className="btn btn-danger " type='submit'onClick={this.hideModal}>Close</button>

 
</Modal.Footer>
</Modal>

                
                </div>
                <div>
        

 </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.auth.userId,
    };
};

export default connect(mapStateToProps)(Form);
