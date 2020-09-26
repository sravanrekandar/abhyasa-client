import React from 'react';
import { Link } from 'react-router-dom';

const appListData = [
  {
    id: 'dog-app',
    type: 'ML, FastAI, Vision',
    title: 'Dog Breed Detector App',
    description: 'This App contains a trained Learner(a.k.a model) that can detect the dog type by accepting a dog image',
  },
];
export default function AppList() {
  return (
    <ul className="list-unstyled">
      {
        appListData.map((a) => (
          <li key={a.id}>
            <div className="card">
              <h5 className="card-header">{a.type}</h5>
              <div className="card-body">
                <h5 className="card-title">{a.title}</h5>
                <p className="card-text">{a.description}</p>
                <Link to="/dog-breed-detector">View</Link>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  );
}
