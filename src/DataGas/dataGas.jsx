import React, { Component } from 'react';


import firebase from 'firebase'
import {DB_CONFIG} from '../config/config'
import 'firebase/database'

//  Subcomponentes
import Report from '../Report/Report'
import ReportForm from '../ReportForm/ReportForm'


class DataGas extends Component {

  constructor(){
    super()
    this.state = {
      reports: [] 
    
    }


  }


  render() {
    return (
      <div className="reportContainer">

      {/* <ReportForm addReport={this.addReport} /> */}
        
      <div className="reportBody" >
        
        <h3 className="label">Gas Station Score</h3>
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
export default DataGas;