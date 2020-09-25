/* eslint-disable class-methods-use-this */
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import axios from 'axios';
import beagleImg from '../../images/beagle.jpg';
import dalmatianImg from '../../images/dalmatian.jpg';
import dobermanImg from '../../images/doberman.jpg';

export default class DogBreedDetector extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onClearImage = this.onClearImage.bind(this);
    this.state = {
      imageUrl: '',
      imageName: '',
      prediction: '',
      imageBlob: null,
    };
  }

  onPredict() {
    const { imageBlob } = this.state;
    const formData = new FormData();
    formData.append('image', imageBlob);
    axios.post(
      'https://sravan-abhyasa.herokuapp.com/dog-breed-detector',
      formData,
    ).then((res) => {
      // console.log('success', res);
    }).catch((res) => {
      // console.log('failure', res);
    });
  }

  onClearImage() {
    this.setState({
      imageUrl: '',
      imageName: '',
      prediction: '',
    });
  }

  onFileChange(e) {
    const filePath = e.target.value;
    // console.log(e.target.value, typeof e.target.value);
    if (!filePath) {
      return;
    }
    const fileName = filePath.split('\\')[filePath.split('\\').length - 1];
    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0]),
      imageName: fileName,
      imageBlob: e.target.files[0],
    });
  }

  renderKnownDogTypes() {
    return (
      <ul className="list-inline">
        <li className="list-inline-item">
          <div className="card" style={{ width: '10rem' }}>
            <img src={beagleImg} className="card-img-top" alt="Beagle" />
            <div className="card-body">
              <h5 className="card-title text-center">Beagle</h5>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="card" style={{ width: '10rem' }}>
            <img src={dalmatianImg} className="card-img-top" alt="Dalmatian" />
            <div className="card-body">
              <h5 className="card-title text-center">Dalmatian</h5>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="card" style={{ width: '10rem' }}>
            <img src={dobermanImg} className="card-img-top" alt="Doberman" />
            <div className="card-body">
              <h5 className="card-title text-center">Doberman</h5>
            </div>
          </div>
        </li>
      </ul>
    );
  }

  renderForm() {
    return (
      <form className="form" action="#">
        <div className="file-field">
          <button type="button" className="btn btn-primary btn-lg">
            <FontAwesomeIcon icon={faUpload} />
            {' '}
            Upload your dog&lsquo;s pic
          </button>
          <input
            type="file"
            className="btn btn-preview"
            onChange={this.onFileChange}
          />
        </div>
      </form>
    );
  }

  render() {
    const { imageUrl, imageName, prediction } = this.state;
    return (
      <div>
        <h2>Dog Breed Detector</h2>
        <p>
          This is an app created by following
          {' '}
          <a href="https://github.com/fastai/fastbook/blob/master/02_production.ipynb">This FastAI tutorial</a>
        </p>
        <div>
          <div className="alert alert-primary">
            {
              !imageUrl && (
                <>
                  <h3>Let the model tell you the breed of your dog!</h3>
                  {this.renderForm()}
                </>
              )
            }

            {
              imageUrl && (
                <div className="row">
                  <div className="col-6">
                    <h4>
                      <span className="text-muted">File Name:</span>
                      {imageName}
                      {' '}
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={this.onClearImage}
                      >
                        clear
                        {' '}
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </h4>
                    <img alt={imageName} src={imageUrl} width="45%" />
                  </div>
                  {
                    prediction && (
                      <div className="col-6">
                        <div className="p-5 bg-success text-white h-100">
                          <b>
                            Predicted Value!
                          </b>
                          <h2>Beagle</h2>
                        </div>
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>

        <h3>Known dog types</h3>
        {this.renderKnownDogTypes()}
      </div>
    );
  }
}
