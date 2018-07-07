import React, {Component} from 'react'
import './ReportForm.css'

class ReportForm extends Component{

    constructor(props){
        super(props)

        //thsi.state = {value: ''};
        this.reportName = props.reportName
        this.reportScore = props.reportScore
        this.reportText = props.reportText
        this.reportEmail = props.reportEmail

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('Un registro fue añadido: ' + this.state.value);
        event.preventDefault();
      }

      render(){
          return(
            <div className="reportForm">
                <form action="">
                    <h3>Write a report</h3>
                    <select id="selectGas" name="country" >
                        <option value="villa"> Villa de Alvarez </option>
                        <option value="centro"> Colima Centro </option>
                        <option value="tec"> Walmart Tecnologico </option>
                    </select>

                    <input type="text" id="inputScore" name="score" placeholder="Score" />
                    <textarea type="text" id="textAreaReport" name="report" placeholder="Write your experience" />
                    <input type="text" id="inputEmail" name="email" placeholder="Email ex: juan@gmail.com" />

                    <input type="submit" id="inputSubmit" value="Send Report" />
                    
                </form>
            </div>                

          );
      }
}

export default ReportForm 