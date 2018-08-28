import React from 'react';

export class Textbox extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'term': '',
            'day': 'Today'
        }
        // this.handleChange = this.handleChange.bind(this)
        // this.handleChange = this.handleSelect.bind(this)
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            'term': e.target.value
        });
        console.log("gfgfgfg");
    }

    handleSelect = (event) => {
        this.setState({
            'day': event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
            this.props.updateEntry(this.state.term, this.state.day)
            this.setState({
                'term': ''
            })
    }

    render () {
        return(
            <div className="container">
                <form className="container">
                    <form onSubmit={this.handleSubmit} classname="form">
                        <fieldset classname="form-group form-warning">
                            <label htmlFor="day">FOR DAY: </label>
                            <select value={this.state.day} id='day' onChange={this.handleSelect} className="form-control">
                                <option value="Today">Today</option>
                                <option value="Tomorrow">Tomorrow</option>
                                <option value="Day_After_Tomorrow">Day after Tomorrow</option>
                            </select>
                        </fieldset>
                        <fieldset className="form-group form-warning">
                            <label>YOUR GOAL : </label>
                            <input type="text" id="aim" placeholder='type your goal here and press enter' onChange={this.handleChange} className="form-control" />
                        </fieldset>
                        <button className="btn btn-warning btn-ghost"> I WILL DO THIS!</button>
                    </form>
                </form>
            </div>
        )
    }
}