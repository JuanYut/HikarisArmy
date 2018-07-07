import React, {Component} from 'react'
import './Report.css'

class Report extends Component{
    constructor(props){
        super(props)
        this.reportName = props.reportName
        this.reportScore = props.reportScore
        this.reportText = props.reportText
        this.reportEmail = props.reportEmail
    }

    render(){
        return(
            <div className="Report">
                <p>{ this.reportName }</p>
                <p>{ this.reportScore }</p>
                <p>{ this.reportText }</p>
                <p>{ this.reportEmail }</p>
            </div>
        )
    }
}
export default Report