import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase'
import {DB_CONFIG} from './config/config'
import 'firebase/database'

//  Subcomponentes
import Report from './Report/Report'
import Navigation from './Navigation/Navigation'
import ReportForm from './ReportForm/ReportForm'

class App extends Component {

  constructor(){
    super()
    this.state = {
      reports: []
    }

    this.app = firebase.initializeApp(DB_CONFIG)
    this.db = this.app.database().ref().child('reports')

    this.addReport = this.addReport.bind(this)

  }

  componentDidMount(){
    const {reports} = this.state;
    this.db.on('child_added', snap => {
      reports.push({
        reportId: snap.key,
        reportName: snap.val().reportName,
        reportScore: snap.val().reportScore,
        reportText: snap.val().reportText,
        reportEmail: snap.val().reportEmail
      })
      this.setState({reports})
    });

  }

  addReport(report){
    console.log(report)
    this.db.push().set(
      {reportName: report.selectGas, 
        reportScore: report.inputScore,
        reportText: report.textAreaReport,
        reportEmail: report.inputEmail
      }
    )
  }

  render() {
    return (
    <div className="reportContainer">

      <Navigation title="Gas Station Report / Colima    " />

      <div className="reportHeader">

        <ReportForm addReport={this.addReport} />

      </div>

      <div className="reportBody" >
        <ul className="reports">
          {
            this.state.reports.map( report => {
              return(
                <Report 
                  reportId={report.reportId}
                  key={report.reportId}
                  reportName={report.reportName}
                  reportScore={report.reportScore}
                  reportText={report.reportText}
                  reportEmail={report.reportEmail}
                />
              )
            })
          }
        </ul>
      </div>

    </div>
    );
  }
}
export default App;