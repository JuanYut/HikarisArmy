import React, {Component} from 'react'
import './ReportForm.css'

class ReportForm extends Component{

    state = {
        rating: 0
    } 

    constructor(props){
        super(props)
        this.addReport = this.addReport.bind(this)
        this.wachtStart = this.wachtStart.bind(this)
        const scoreStart = ''
    }

    addReport(event){
        event.preventDefault()
        const rating = this.state.rating;
        this.props.addReport({
            selectGas: this.selectGas.value,
            inputScore: rating,
            textAreaReport: this.textAreaReport.value,
            inputEmail: this.inputEmail.value
        })

        this.textAreaReport.value = ''
        this.inputEmail.value = ''

    }

    wachtStart(ev){
        console.log(ev.target)
        const scoreStart = ev.target.value
        console.log(scoreStart)
        this.setState({rating: scoreStart})
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

                        <form>
                            <p class="clasificacion">
                                    <label htmlFor="radio1">★</label>
                                <input id="radio1" type="radio" name="estrellas" value="5" onChange={this.wachtStart} />
                                    <label htmlFor="radio2">★</label>
                                <input id="radio2" type="radio" name="estrellas" value="4" onChange={this.wachtStart} />
                                    <label htmlFor="radio3">★</label>
                                <input id="radio3" type="radio" name="estrellas" value="3" onChange={this.wachtStart} />
                                    <label htmlFor="radio4">★</label>
                                <input id="radio4" type="radio" name="estrellas" value="2" onChange={this.wachtStart} />
                                    <label htmlFor="radio5">★</label>
                                <input id="radio5" type="radio" name="estrellas" value="1" onChange={this.wachtStart} />
                            </p>
                        </form>
                        
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