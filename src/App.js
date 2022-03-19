import React from 'react'
//import logo from './logo.svg';
import './App.css';
import { useCSVReader } from 'react-papaparse';
import axios from 'axios';




function App() {

  const { CSVReader } = useCSVReader();


  return (
    <div className="App">
      <CSVReader onUploadAccepted={(results) => {
        console.log(results);
        
        axios.post(`http://localhost:3030/`,{
          data:results.data
        })
        .then((data)=>{
          console.log(data.data)
        })
        .catch((err)=>{
          console.log("problem in axios in CSVreader function is: ",err)
        })

      }}
      >
        {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
      }) => (
        <>
          <div >
            <button type='button' {...getRootProps()} >
              Browse file
            </button>
            <div >
              {acceptedFile && acceptedFile.name}
            </div>
            <button {...getRemoveFileProps()} >
              Remove
            </button>
          </div>
        </>
      )}
      </CSVReader>
    </div>
  );
}

export default App;
