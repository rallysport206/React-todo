import React from 'react'
import ReactDOM from 'react-dom'

import { Header } from './Components/Header';
import { Textbox } from './Components/Textbox';
import { DisplayToday, DisplayTomorrow, DisplayDayAfterTomorrow } from './Components/Display';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      'Today': [],
      'Tomorrow'; [],
      'Day_After_Tomorrow': [],
      'username': 'yo buddy!'
    }
    this.updateEntry = this.updateEntry.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }
  updateEntry(term, day){
    if (day === 'Today'){
      this.setState({
        'Today':[...this.state.Today, term],
      })
    }else if(day === 'Tomorrow'){
      this.setState({
        'Tomorrow':[...this.state.Tomorrow, term],
      })
    }else if (day === 'Day_After_Tomorrow'){
      this.setState({
        'Day_After_Tomorrow':[...this.state.Day_After_Tomorrow, term],
      })
    }
  }
}