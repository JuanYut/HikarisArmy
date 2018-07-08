import React, { Component } from 'react';
import './App.css';

import firebase from 'firebase'
import {DB_CONFIG} from './config/config'
import 'firebase/database'

//  Subcomponentes
import Report from './Report/Report'
import Navigation2 from './Navigation2/Navigation2'
import ReportForm from './ReportForm/ReportForm'
import Auth from './Auth/Auth'
import DataGas from './DataGas/dataGas'

class App extends Component {

  constructor(){
    super()
    this.state = {
      reports: [],
      reportsBy: [],
      isLogged: false,
    }

    this.app = firebase.initializeApp(DB_CONFIG)
    this.db = this.app.database().ref().child('reports')

    this.addReport = this.addReport.bind(this)
    this.wachtSelect = this.wachtSelect.bind(this)

  }

  componentDidMount(){
    const {reports} = this.state;
    this.db.on('child_added', snap => {
      reports.push({
        reportId: snap.key,
        reportName: snap.val().reportName,
        reportScore: snap.val().reportScore,
        reportText: snap.val().reportText,
        reportEmail: snap.val().reportEmail,
        reportDate: snap.val().reportDate
      })
      const initialFilterBy = reports.filter(report => report.reportName == 'Villa de Alvarez')
      this.setState({reports, reportsBy: initialFilterBy})
    });
  }

  addReport(report){
    console.log(report)
    
    if(report.inputScore != '' && report.textAreaReport != '' && report.inputEmail != ''){
      alert("Report Sended. Keep doing better your community, thanks :)")
      this.db.push().set(
        {reportName: report.selectGas, 
          reportScore: report.inputScore,
          reportText: report.textAreaReport,
          reportEmail: report.inputEmail,
          reportDate: report.inputDate
        }
      )
    }
  }

  wachtSelect(ev){
    const reportN = this.state.reports.filter( report => report.reportName == ev.target.value);
    this.setState({reportsBy: reportN})
    console.log(ev.target.value)
    console.log(reportN)
  }

  render() {
    return (

      <div className="reportContainer">

      <Navigation2 title="Gas Station Report / Colima    " addReport={this.addReport} />
      
      {/* <ReportForm addReport={this.addReport} /> */}

     


      <div className="reportBody" >
        
        <h3 className="label">Select a Gas Station</h3>

        <div class="header" id="myHeader">
          <select className="selectGas" id="gasolinera" onChange={this.wachtSelect}>
            <option value="Villa de Alvarez"> Villa de Alvarez </option>
            <option value="Colima Centro"> Colima Centro </option>
            <option value="Walmart Tecnologico"> Walmart Tecnologico </option>
          </select>
        </div>

        <ul className="reports">
          {
            //this.wachtSelect
            
            this.state.reportsBy.map( report => {
              return(
                <Report 
                  reportId={report.reportId}
                  key={report.reportId}  
                  reportName={report.reportName}
                  reportScore={report.reportScore}
                  reportText={report.reportText}
                  reportEmail={report.reportEmail}
                  reportDate={report.reportDate}
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