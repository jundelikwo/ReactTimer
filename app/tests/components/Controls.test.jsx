import React from 'react'
import ReactDOM from 'react-dom'
import expect from 'expect'
import $ from 'jQuery'
import TestUtils from 'react-dom/test-utils'

import Controls from 'Controls'

describe('Controls',()=>{
    it('should exist',()=>{
        expect(Controls).toExist();
    })

    describe('render',()=>{
        it('should render pause when started',()=>{
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pausedButton = $el.find('button:contains(Pause)')

            expect($pausedButton.length).toBe(1);
        })

        it('should render start when paused',()=>{
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startButton = $el.find('button:contains(Start)')

            expect($startButton.length).toBe(1);
        })
    })
})