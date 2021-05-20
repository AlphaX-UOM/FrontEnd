import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import * as actions from '../../../store/actions/index';
import {storage} from "../../../config/firebaseConfig";

class img_up extends Component {
    constructor(props) {
        super(props)
        this.state = {

            pictures: [],

            image: null,
            url: '',
            progressx: false,
            progress: ''


        }

        this.onDrop = this.onDrop.bind(this);

    }

     handleChange = e => {
        if (e.target.files[0]) {
            this.setState({image: e.target.files[0]});
        }

    };

      Changehandler = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

     onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleUpload = () => {

        const uploadTask = storage.ref(`images/${this.state.pictures[0].name}`).put(this.state.pictures[0]);
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                this.setState({progress: progress});
            },
            error => {
                console.log(error);
            },
            () => {
                storage
                    .ref(`images`)
                    .child(this.state.pictures[0].name)
                    .getDownloadURL()
                    .then(url => {
                        this.setState({url: url});
                        this.props.setimgurl(url);
                        this.setState({progressx: true});
                    });
            }
        );

    };
    render () {
        return(
        <div className="row formmarge">
            <div className="col-sm-3"></div>
            <div className="col-sm-6">

                {/*<input type="file" onChange={this.handleChange} required name='image' />*/}



                <hr/>
                {/*{this.state.url}*/}
                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image"
                     className="imgsize" required/>


                <br/>

            </div>
            <div className="col-sm-3"></div>




            <div className="col-sm-3"></div>
            <div className="col-sm-6">


            <ImageUploader
            withIcon={true}
            buttonText='Choose images'
            onChange={this.onDrop}
            imgExtension={['.jpg', '.gif', '.png', '.gif','.jpeg','.jfif']}
            maxFileSize={5242880}
            withPreview={true}
            singleImage={true}

            />
            </div>

            <div className="col-sm-3"></div>
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
                <button type="button" className="btn btn-secondary "
                        onClick={this.handleUpload}>Upload
                </button>
            </div>

            <div className="col-sm-3"></div>
        </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setimgurl: (url) => dispatch(actions.getimg_url(url)),
    };
};

export default connect(null, mapDispatchToProps)(img_up);