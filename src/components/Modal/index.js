import React, { Component } from 'react';
import CreatePortal from '../CreatePortal'
import { Icon } from 'antd-mobile'

class Modal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    handleClose = ()=>{
        const { onClose } = this.props
        onClose && onClose()
    }
    render() { 
        const { show } = this.props
        return (
            <>
                {show ? <CreatePortal>
                    <div>
                        {this.props.children}
                        <Icon type="cross" size="lg" onClick={this.handleClose} />
                    </div>
                </CreatePortal> : null}
            </>
        )
    }
}
 
export default Modal;