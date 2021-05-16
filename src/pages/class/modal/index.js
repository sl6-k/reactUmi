import React, { Component } from 'react';
// import CreatePortal from '@/components/CreatePortal'
import Modal from '@/components/Modal'
import { Button } from 'antd-mobile'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    handleClose = ()=>{
        this.setState({
            show: false
        })
    }
    handleClick = ()=>{
        this.setState({
            show: true
        })
    }
    render() { 
        return (
            <div>
                {/* <CreatePortal>
                    modal
                </CreatePortal> */}
                <Button type="primary" onClick={this.handleClick}>modal</Button>
                <Modal show={this.state.show} onClose={this.handleClose}>modal</Modal>
            </div>
        );
    }
}
 
export default Index;