import React, { Component } from 'react';
import PublicHeader from '@/components/header/header';
import { is, fromJS } from 'immutable';
import './test.less';

export default class HelpCenter extends Component {

  shouldComponentUpdate(nextProps, nextState){
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  render(){
    return (
        <test>
          <PublicHeader title="test" record/>
        </test>
    )
  }
}