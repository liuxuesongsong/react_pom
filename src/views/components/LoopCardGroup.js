/** 
     * @author xuesong
     * @param LoopCardGroup 组件  label+message
     */
    import React, { Component } from 'react';

    class LoopCardGroup extends Component {
        render(){
            const {message} =this.props;
            console.log(message)
            return (
              
                message.map((message,index) => {
							return (<div>
                                <div className="label_message">
                                        <label> 会议室{index+1}
                                        </label>
                                        <span>{message.total_price}</span>
                            </div>
                           
                            </div>)})
            )
        }
    }
    export default LoopCardGroup;
    