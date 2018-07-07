import React, {Component} from 'react'
import './ReportForm.css'

class ReportForm extends Component{

    constructor(props){
        super(props)
        this.addReport = this.addReport.bind(this)
    }

    addReport(event){
        event.preventDefault()
        //console.log(this.selectGas.value)
        this.props.addReport({
            selectGas: this.selectGas.value,
            inputScore: this.inputScore.value,
            textAreaReport: this.textAreaReport.value,
            inputEmail: this.inputEmail.value
        })
    }

    render(){
        return(
            <div className="reportForm">
                <form action="">
                    <h3>Write a report</h3>
                    <div id="1">
                        <select ref={select => {this.selectGas = select}} id="selectGas" name="country">
                            <option value="Villa de Alvarez"> Villa de Alvarez </option>
                            <option value="Colima Centro"> Colima Centro </option>
                            <option value="Walmart Tecnologico"> Walmart Tecnologico </option>
                        </select>
                        <input ref={input => {this.inputScore = input}} type="text" id="inputScore" name="score" placeholder="Score" />
                    </div>

                    <div id="2">
                        <textarea ref={textarea => {this.textAreaReport = textarea}} type="text" id="textAreaReport" name="report" placeholder="Write your experience" />
                        <input ref={input => {this.inputEmail = input}} type="text" id="inputEmail" name="email" placeholder="Email ex: juan@gmail.com" />
                    </div>

                    <input type="submit" id="inputSubmit" value="Send Report" onClick={this.addReport} />
                </form>
            </div>                

        );
    }
}

export default ReportForm 