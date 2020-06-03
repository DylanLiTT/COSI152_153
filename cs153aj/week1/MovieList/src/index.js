import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './containers/CardList';
import ClassList from './containers/ClassList';

//import movieData from '../assets/data.js'
import classData from '../assets/classes.js'


const App = () => {
  return (
   <>
    <div className="jumbotron">
    <h1>Summer Course 2020 (Computer Science)</h1>
    <p>Team2</p>
    </div>

    <ClassList data={classData} title="List of Summer CS Courses" />

   /*
    <pre>
    {JSON.stringify(classData,null,4)}
    </pre>
  */

    <div className='container-fluid'>
      <nav className='navbar sticky-top navbar-light bg-dark'>
        <h1 className='navbar-brand text-light'>MovieList</h1>
      </nav>

      <CardList data={classData} /> //


    </div>
   </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
