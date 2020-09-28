/* eslint-disable class-methods-use-this */
import { faTimes, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import clsx from 'clsx';
import ustring from 'ustring';
import beagleImg from '../../images/beagle.jpg';
import dalmatianImg from '../../images/dalmatian.jpg';
import dobermanImg from '../../images/doberman.jpg';
import preloaderImg from '../../images/pre-loader.gif';

export default class DogBreedDetector extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderForm = this.renderForm.bind(this);
    this.onFileChange = this.onFileChange.bind(this);
    this.onClearImage = this.onClearImage.bind(this);
    this.state = {
      imageUrl: '',
      imageName: '',
      prediction: null,
      predicting: false,
    };
  }

  onPredict(imageBlob, imageName) {
    const formData = new FormData();

    // TODO: Make the paths readable from .env
    const apiUrl = 'https://sravan-abhyasa.herokuapp.com/dog-breed-detector';
    // const apiUrl = 'http://localhost:8085/dog-breed-detector';

    formData.append('File', imageBlob, imageName);
    this.setState({
      predicting: true,
    });
    fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      body: formData,
    })
      .then((r) => r.json())
      .then((res) => {
        this.setState({
          prediction: res,
          predicting: false,
        });
      }).catch((res) => {
        // Notification to be shown
        // eslint-disable-next-line no-console
        console.log('Failure', res);
      });
  }

  onClearImage() {
    this.setState({
      imageUrl: '',
      imageName: '',
      prediction: null,
      predicting: false,
    });
  }

  onFileChange(e) {
    const filePath = e.target.value;
    // console.log(e.target.value, typeof e.target.value);
    if (!filePath) {
      return;
    }

    const imageName = filePath.split('\\')[filePath.split('\\').length - 1];
    const imageBlob = e.target.files[0];

    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0]),
      imageName,
      // imageBlob,
    });

    this.onPredict(imageBlob, imageName);
  }

  renderKnownDogTypes() {
    return (
      <ul className="list-inline">
        <li className="list-inline-item">
          <div className="card" style={{ width: '150px' }}>
            <img src={beagleImg} className="card-img-top" alt="Beagle" />
            <div className="card-body">
              <h5 className="card-title text-center">Beagle</h5>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="card" style={{ width: '150px' }}>
            <img src={dalmatianImg} className="card-img-top" alt="Dalmatian" />
            <div className="card-body">
              <h5 className="card-title text-center">Dalmatian</h5>
            </div>
          </div>
        </li>
        <li className="list-inline-item">
          <div className="card" style={{ width: '150px' }}>
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

  renderPredictionResult() {
    const { prediction } = this.state;
    return (
      <div className={
        clsx('p-5 text-white h-100', {
          'bg-success': prediction.success,
          'bg-danger': !prediction.success,
        })
      }
      >
        <div>
          <b>
            {prediction.success ? 'Predicted Value!' : 'Error!'}
          </b>
          <h2>
            {
              prediction.success
                ? ustring.humanize(prediction.breed)
                : ustring.humanize(prediction.message)
            }

          </h2>
        </div>
      </div>
    );
  }

  render() {
    const {
      imageUrl, imageName, prediction, predicting,
    } = this.state;
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
                    predicting && (
                      <div className="col-6 text-center">
                        <span>Predicting...</span>
                        <br />
                        <img alt="Predicting..." src={preloaderImg} width="150" height="150" />
                      </div>
                    )
                  }
                  {
                    prediction && (
                      <div className="col-6">
                        {this.renderPredictionResult()}
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
