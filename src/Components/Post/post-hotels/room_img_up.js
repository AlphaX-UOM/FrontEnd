import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ImageUploader from 'react-images-upload';
import * as actions from '../../../store/actions/index';
import { storage } from "../../../config/firebaseConfig";


class room_img_up extends Component {
    constructor(props) {
        super(props)
        this.state = {

            pictures: [],

            image: null,
            url1: '',
            url2: '',
            url3: '',

            progressx: false,
            progress: ''

        }

        this.onDrop = this.onDrop.bind(this);

    }


    onDrop = (picture) => {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    handleUpload1 = () => {

        const uploadTask1 = storage.ref(`images/${this.state.pictures[0].name}`).put(this.state.pictures[0]);
        uploadTask1.on(
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
                    .child(this.state.pictures[0].name)
                    .getDownloadURL()
                    .then((url1) => {
                        this.setState({ url1: url1 });
                        this.props.setimgurl1(url1);
                        this.setState({ progressx: true });
                    });
            }
        );
    };

    handleUpload2 = () => {

        const uploadTask2 = storage.ref(`images/${this.state.pictures[1].name}`).put(this.state.pictures[1]);
        uploadTask2.on(
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
                    .child(this.state.pictures[1].name)
                    .getDownloadURL()
                    .then((url2) => {
                        this.setState({ url2: url2 });
                        this.props.setimgurl2(url2);
                        this.setState({ progressx: true });
                    });
            }
        );
    };

    handleUpload3 = () => {

        const uploadTask3 = storage.ref(`images/${this.state.pictures[2].name}`).put(this.state.pictures[2]);
        uploadTask3.on(
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
                    .child(this.state.pictures[2].name)
                    .getDownloadURL()
                    .then((url3) => {
                        this.setState({ url3: url3 });
                        this.props.setimgurl3(url3);
                        this.setState({ progressx: true });
                    });
            }
        );
    };

    render() {
        return (
            <div>
                <div className="row formmarge">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">

                        {/*<input type="file" onChange={this.handleChange} required name='image' />*/}

                        <label htmlFor="image1">Upload image 1 of the Room</label>
                        <br />

                        <hr />
                        {/*{this.state.url}*/}
                        <hr />
                        {/*{this.state.url}*/}
                        <img src={this.state.url1 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" required />

                        <br />

                    </div>
                    <div className="col-sm-3"></div>




                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">


                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg', '.jfif']}
                            maxFileSize={5242880}
                            withPreview={true}
                            singleImage={true}

                        />
                    </div>

                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-secondary "
                            onClick={this.handleUpload1}>Upload
                </button>
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                <div className="row formmarge">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">

                        {/*<input type="file" onChange={this.handleChange} required name='image' />*/}

                        <label htmlFor="image1">Upload image 2 of the Room</label>
                        <br />

                        <hr />
                        {/*{this.state.url}*/}
                        <hr />
                        {/*{this.state.url}*/}
                        <img src={this.state.url2 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" required />

                        <br />

                    </div>
                    <div className="col-sm-3"></div>




                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">


                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg', '.jfif']}
                            maxFileSize={5242880}
                            withPreview={true}
                            singleImage={true}

                        />
                    </div>

                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-secondary "
                            onClick={this.handleUpload2}>Upload
                </button>
                    </div>

                    <div className="col-sm-3"></div>
                </div>

                <div className="row formmarge">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">

                        {/*<input type="file" onChange={this.handleChange} required name='image' />*/}

                        <label htmlFor="image1">Upload image 3 of the Room</label>
                        <br />

                        <hr />
                        {/*{this.state.url}*/}
                        <hr />
                        {/*{this.state.url}*/}
                        <img src={this.state.url3 || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" required />

                        <br />

                    </div>
                    <div className="col-sm-3"></div>




                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">


                        <ImageUploader
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif', '.jpeg', '.jfif']}
                            maxFileSize={5242880}
                            withPreview={true}
                            singleImage={true}

                        />
                    </div>

                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <button type="button" className="btn btn-secondary "
                            onClick={this.handleUpload3}>Upload
                </button>
                    </div>

                    <div className="col-sm-3"></div>
                </div>

            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setimgurl1: (url1) => dispatch(actions.get_hotel_post_img_url1(url1)),
        setimgurl2: (url2) => dispatch(actions.get_hotel_post_img_url2(url2)),
        setimgurl3: (url3) => dispatch(actions.get_hotel_post_img_url3(url3)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(room_img_up);