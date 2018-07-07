import React, { Component } from 'react';
import './App.css';

//  Subcomponentes
import Report from './Report/Report'
import Navigation from './Navigation/Navigation'
import ReportForm from './ReportForm/ReportForm'

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

      <Navigation title="Gas Station Report / Colima    " />

      <div className="reportHeader">

        <ReportForm />

      </div>

      <div className="reportBody" >
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
        光 Hikari's Army
      </div>

    </div>

    );
  }
}
export default App;