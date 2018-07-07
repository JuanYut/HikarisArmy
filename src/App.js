import React, { Component } from 'react';
import logo from './doge.png';
import './App.css';

//  Subcomponentes
import Report from './Report/Report'


class App extends Component {

  constructor(){
    super()
    this.state = {
      reports: [
        {reportName: 'Villa de Alvarez', reportScore: 5, reportText: 'Tiene un mal servicio1', reportEmail: 'fulano1@gmail.com'},
        {reportName: 'Colima Centro', reportScore: 4, reportText: 'Tiene un mal servicio2', reportEmail: 'fulano2@gmail.com'},
        {reportName: 'Walmart Tecnologico', reportScore: 3, reportText: 'Gasolina de menos', reportEmail: 'yolanda@gmail.com'}
      ]
   
    }
  }

  render() {
    return (

      <div className="reportContainer">

      <div className="reportHeader">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Gas Station Report / Colima</h1>
      </div>

      <div className="reportBody">

        <div className="reportForm">
          <h1>ReportForm</h1>
        </div>

        <ul>
          {
            this.state.reports.map( report => {
              return(
                <Report 
                  reportName={report.reportName}
                  reportScore={report.reportScore}
                  reportText={report.reportText}
                  reportEmail={report.reportEmail}
                  key={report.reportName}
                />
              )
            })
          }
        </ul>

      </div>

      <div className="reportFooter">

      </div>

    </div>



    );
  }
}

export default App;
