import React, {Component} from 'react'
import './Report.css'

class Report extends Component{
    constructor(props){
        super(props)
        this.reportName = props.reportName
        this.reportScore = props.reportScore
        this.reportText = props.reportText
        this.reportEmail = props.reportEmail
        this.reportId = props.reportId
        this.reportDate = props.reportDate
    }
//Hola si funko :D
    render(){
        return(
            <div className="Report">
                <h3>{ this.reportName }</h3>

                <span className="badge badge-pill badge-danger ml-2">
                    { this.reportScore }
                </span>

                <p>{ this.reportText }</p>
                <p>{ this.reportEmail }</p>
                <p>{ this.reportDate }</p>

            </div>
        )
    }
}
export default Report