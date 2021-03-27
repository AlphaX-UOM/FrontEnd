import React, { useState, useEffect, Component } from "react";
import { storage } from "../../../../src/config/firebaseConfig";
import "./post-guide.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

class PostGuideForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      language:"",
      dateofbirth: "",
      
      telephone: "",
      costperday: "",
      Detail: '',
      pictures: [],

      image: null,
      url: "",
      progressx: false,
      progress: "",
    };
    this.onDrop = this.onDrop.bind(this);
  }
  handleChange = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] });
    }
  };

  handleUpload = () => {};

  Changehandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onDrop(picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture),
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref(`images`)
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ url: url });
            this.setState({ progressx: true });
          });
      }
    );
    if (this.state.progressx === true) {
    }
    setTimeout(
      function () {
        //Start the timer
        axios
          .post("https://alphax-api.azurewebsites.net/api/tourguideservices", {
            name: this.state.name,
            dob: this.state.dateofbirth,
            pnumber: this.state.telephone,
            language: this.state.language,
            costPerDay:this.state.costperday,
            otherDetails: this.state.Detail,
            imgURL: this.state.url,
          })
          .then((response) => {
            console.log(response);
            alert("ok");
          })
          .catch((error) => {
            console.log(error);
          });
      }.bind(this),
      4000
    );
  };

  

  render() {
    return (
      <div className="container-fluid mback">
        <br />
        <div className="container ">
          <form className="fback" onSubmit={this.handleSubmit}>
            <h1 className="h4 h1style">
              <strong>Fill in the details</strong>
            </h1>
            <hr />
            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-3 ">
                <label htmlFor="name">Bussiness Name</label>
                <input
                  type="Text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={this.state.name}
                  onChange={this.Changehandler}
                />
              </div>
             
              <div className="col-sm-4"></div>
            </div>

            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <label htmlFor="inputEmail4">Date of Birth</label>
                <input
                  type="date"
                  className="form-control"
                  id="inputEmail4"
                  name="dateofbirth"
                  value={this.state.dateofbirth}
                  onChange={this.Changehandler}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row formmarge">
              <div className="col-sm-2"></div>
             
              <div className="col-sm-4"></div>
            </div>
            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label htmlFor="exampleFormControlSelect2">Languages</label>
                  <select className="form-control tm-select"  name="language" value={this.state.language} onChange={this.Changehandler} >
                                                <option value=""></option>
                                                <option value="English">English</option>
                                                <option value="Korean">Korean</option>
                                                <option value="Japanees">Japanees</option>
                                                <option value="German">German</option>


                                            </select>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <label htmlFor="pnumber">TelePhone</label>
                <input
                  type="number"
                  name="telephone"
                  className="form-control"
                  id="pnumber"
                  value={this.state.telephone}
                  onChange={this.Changehandler}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>

            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <label htmlFor="district">Cost per day</label>
                <input
                  type="Text"
                  className="form-control"
                  name="costperday"
                  id="district"
                  value={this.state.costperday}
                  onChange={this.Changehandler}
                />
              </div>
              <div className="col-sm-4"></div>
            </div>
            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-6">
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">Description</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1" name="Detail"
                    rows="3" value={this.state.Detail} onChange={this.Changehandler}/>
                </div>
              </div>
              <div className="col-sm-4"></div>
            </div>
            <hr />
            <div className="row formmarge">
                            <div className="col-sm-3"></div>
                            <div className="col-sm-6">




                                <input type="file" onChange={this.handleChange} />
                                {/*<button onClick={this.handleUpload}>Upload</button>*/}

                                <br/>
                                <hr/>
                                {/*{this.state.url}*/}
                                <img src={this.state.url || "http://via.placeholder.com/300"} alt="firebase-image" className="imgsize" />
                            </div>
                            <div className="col-sm-3"></div>
                        </div>

            <div className="row formmarge">
              <div className="col-sm-2"></div>
              <div className="col-sm-5"></div>
              <div className="col-sm-5-center">
                <button className="btn btn-primary" type="submit">
                  Post ad
                </button>
              </div>
            </div>
            <hr />
          </form>
        </div>
      </div>
    );
  }
}

export default PostGuideForm;
