import React, { Component } from 'react';
import {connect} from 'e-react-redux'
// import {connect} from './e-react-redux/index'
// import {connect} from './../src/e-react-redux/dist/e-react-redux';
import One from './Module/one'
class A extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this,'one')
        return <div>
            <h1>Module1</h1>
            <div onClick={() => {
                this.props.MainActons()
            }}>
                i am  Module_one click
            </div>
        </div >
    }
}
const { MainActons } = One.actions;
const mapStateToProps = (state, props) => {
        const { oneCLick } = state.One;
        return {
            oneCLick
        }
    }
const mapDispatchToProps = {
    MainActons
}
export default connect(mapStateToProps, mapDispatchToProps)(A);
