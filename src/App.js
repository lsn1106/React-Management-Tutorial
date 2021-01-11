import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': `https://placeimg.com/64/64/any`,
    'name': `이선노`,
    'birthday': `961106`,
    'sex': `남자`,
    'job': `대학생`
  },
  {
    'id': 2,
    'image': `https://placeimg.com/64/64/2`,
    'name': `브라이언`,
    'birthday': `961106`,
    'sex': `여자`,
    'job': `백수`
  },
  {
    'id': 3,
    'image': `https://placeimg.com/64/64/3`,
    'name': `다이아`,
    'birthday': `961106`,
    'sex': `남자`,
    'job': `디자이너`
  }

];


class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                sex={c.sex}
                job={c.job}
              />
            )
          })
        }
      </div>
    );
  }
}

export default App;
