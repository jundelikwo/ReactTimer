import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import Timer from 'Timer'

describe('Timer',()=>{
	it('should exist',()=>{
		expect(Timer).toExist()
    })

    describe('handleStatusChange',(done)=>{
        it('should set state to started and start timer',(done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(0);

            setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				done();
			},1001)
        })

        it('should reset timer to zero and set state to stopped when stopped',(done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleStatusChange('started');

            setTimeout(()=>{
				expect(timer.state.count).toBe(1);
				done();
            },1001)
            
            setTimeout(()=>{
                timer.handleStatusChange('stopped');
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
				done();
			},2001)
        })

        it('should paused timer on paused status and resume timer on started',(done)=>{
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.setState({count: 10})
            timer.handleStatusChange('started');
            timer.handleStatusChange('paused');

            setTimeout(()=>{
                expect(timer.state.count).toBe(10);
                timer.handleStatusChange('started');
				done();
            },1001)

            setTimeout(()=>{
                expect(timer.state.count).toBe(12);
				done();
			},2001)
        })
    })
    
})