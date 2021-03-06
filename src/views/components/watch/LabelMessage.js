/** 
     * @author xuesong
     * @param LabelMessage 组件  label+message
     */
    import React, { Component } from 'react';
    import {dealNumber} from '../../../utils/helpers'
    class LabelMessage extends Component {
        state={
            inputValue:this.props.inputValue
        }
        handleChange(e) {
            this.setState({
                inputValue: e.target.value,
            })
          }
        render(){
            const {message,labelValue} =this.props;
            return (
                <div className="label_message">
                    <label>{labelValue}</label>

                   <span>{message?dealNumber(message):"0.00"}</span>
                    {/* <span className="text_field_remind"></span> */}
              </div>
            )
        }
    }
    export default LabelMessage;
    