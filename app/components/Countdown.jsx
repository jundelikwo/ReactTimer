import React from 'react'
import Clock from 'Clock'
import CountdownForm from 'CountdownForm'
import Controls from 'Controls'

class Countdown extends React.Component{
	constructor(){
		super();
		this.handleSetCountdown = this.handleSetCountdown.bind(this);
		this.handleStatusChange = this.handleStatusChange.bind(this);
		this.startTimer = this.startTimer.bind(this);
		this.state={
			count: 0,
			countdownStatus: 'stopped'
		}
	}
	componentDidUpdate(prevProps, prevState){
		// called when the props or state gets updated
		if(this.state.countdownStatus != prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({count:0})
				case 'paused':
					clearInterval(this.timer)
					this.timer = null;
					break;
			}
		}
	}
	componentWillUnmount(){
		clearInterval(this.timer);
		this.timer = null;
	}
	startTimer(){
		this.timer = setInterval(()=>{
			var newCount = this.state.count -1;
			this.setState({
				count: newCount >= 0 ? newCount : 0,
				countdownStatus: newCount === 0 ? 'stopped' : this.state.countdownStatus
			})
		},1000)
	}
	handleSetCountdown(seconds){
		this.setState({
			count: seconds,
			countdownStatus: 'started'
		});
	}
	handleStatusChange(newStatus){
		this.setState({countdownStatus: newStatus})
	}
    render(){
		var {count,countdownStatus} = this.state;
		var renderControlArea = ()=>{
			if(countdownStatus !== 'stopped'){
				return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
			}else{
                return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
			}
		}

        return(
            <div>
                <Clock totalSeconds={count}/>
				{renderControlArea()}
            </div>
        )
    }
}

module.exports = Countdown;