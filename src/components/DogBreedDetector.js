import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import beagleImg from '../../images/beagle.jpg';
import dalmatianImg from '../../images/dalmatian.jpg';
import dobermanImg from '../../images/doberman.jpg';

export default function DogBreedDetector() {
  return (
    <div>
      <h2>Dog Breed Detector</h2>
      <p>
        This is an app created by following
        {' '}
        <a href="https://github.com/fastai/fastbook/blob/master/02_production.ipynb">This FastAI tutorial</a>
      </p>

      <p className="alert alert-primary">
        <form className="form" action="#">
          <div className="file-field">
            <button type="button" className="btn btn-primary btn-lg">
              <FontAwesomeIcon icon={faUpload} />
              {' '}
              Upload your dog&apos;s pic
            </button>
            <input
              type="file"
              className="btn btn-preview"
            // onChange={(e) => {
            //   const filePath = e.target.value;
            //   console.log(e.target.value, typeof e.target.value);
            //   if (!filePath) {
            //     return;
            //   }
            //   const fileName = filePath.split('\\')[filePath.split('\\').length - 1];
            //   console.log(fileName);
            // }}
            />
          </div>
        </form>
        {/* <button type="button" className="btn btn-lg btn-primary">
          <FontAwesomeIcon icon={faUpload} />
          {' '}
          Upload your dog's pic
        </button> */}
        {' '}
        and let the model tell you the breed of the dog
      </p>
      <h3>Known dog types</h3>
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
    </div>
  );
}
