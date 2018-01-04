import React from 'react'
import Clock from 'Clock'
import Controls from 'Controls'

class Timer extends React.Component{
    constructor(){
        super();
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.state = {
            count: 0,
            timerStatus: 'stopped'
        }
    }
    componentWillUnmount(){
		clearInterval(this.timer);
		this.timer = null;
	}
    startTimer(){
        this.timer = setInterval(()=>{
            var newCount = this.state.count+1;
            this.setState({
                count: newCount
            })
        },1000)
    }
    handleStatusChange(newStatus){
        if(newStatus === 'stopped'){
            clearInterval(this.timer);
            this.timer = null;
            this.setState({
                count: 0,
                timerStatus: 'stopped'
            })
        }else if(newStatus === 'started'){
            this.startTimer();
            this.setState({
                timerStatus: 'started'
            })
        }else if(newStatus === 'paused'){
            clearInterval(this.timer);
            this.timer = null;
            this.setState({
                count: this.state.count,
                timerStatus: 'paused'
            })
        }
    }
    render(){
        var {count,timerStatus} = this.state;
        return(
            <div>
                <h1 className="page-title">Timer</h1>
                <Clock totalSeconds={count}/>
                <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
            </div>
        )
    }
}

module.exports = Timer;