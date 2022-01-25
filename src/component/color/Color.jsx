import React, { Component } from 'react'
import '../color/Color.scss'

export class Colors extends Component {
  render() {
    return (
      <div>
        <div className="iconColor">
                    <div className="red"></div>
                    <div className="orange"></div>
                    <div className="yellow"></div>
                    <div className="green"></div>
                    <div className="teal"></div>
                    <div className="blue"></div>
                    <div className="darkblue"></div>
                    <div className="purple"></div>
                    <div className="pink"></div>
                    <div className="brown"></div>
                    <div className="grey"></div>
        </div>
      </div>
    )
  }
}

export default Colors