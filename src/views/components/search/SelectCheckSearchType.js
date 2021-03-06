/** 
     * @author xuesong
     * @param SelectMessage 组件  下拉筛选/选择
     */
    import React, { Component } from 'react';
    import { getData, getRouter } from '../../../utils/helpers'
    //import TextField from '../components/input/TextField'
    //import Select from './Select'
    class SelectCheckSearchType extends Component {
        state = {
            search_state: false,
            add_customer: false,
            search_name: "",
            add_customer_input: "",
            search_info_list: [],
            add_button: this.props.addButton,
            before_api_uri: this.props.searchInfoLists,
            searchInfoLists: [],
            info_lists: this.props.searchInfoLists,
        }
        /** 
         * @author xuesong
         * @param infos 函数名  获取下拉内容
         */
        infos() {
            var cb = (route, message, arg) => {
                if (message.error === 0) {
                    this.setState({
                        searchInfoLists: message.data
                    })
                }else if(message.error === 2){
                    console.log("未登录")
                    sessionStorage.logged = false;
                    sessionStorage.token="";
                    if(window.location.hash.split("#")[1]!=="/"){
                        window.location.href=window.location.href.split("#/")[0]
                    
                      }
                }
            }
            console.log(this.state.before_api_uri)
            getData(getRouter(this.state.before_api_uri), { token:sessionStorage.token }, cb, {});
        }
    
        searchShow() {
            this.setState({
                search_state: !this.state.search_state
            })
           
                var checklist = document.getElementsByName(this.props.id+"checkSelectList");
                var checkValue="";
                var checkedLength=0;
                for(var i = 0;i<checklist.length;i++){
                if(checklist[i].checked){
                        console.log(checklist[i].value)
                        checkValue=checkValue+checklist[i].value+",";
                        checkedLength++;
                    }
                }
                checkedLength===0?document.getElementById(this.props.id+"_name").innerHTML="-选择-":document.getElementById(this.props.id+"_name").innerHTML=checkValue.slice(0,checkValue.length-1);
                console.log(checkedLength)
            }

        render() {
            const { selectedInfo,selectedIdInfo, id, labelValue,disabled } = this.props;
            return (
                <div style={this.props.displayNone===0?{display:"none"}:{}} className="search_terms">
                    <div onClick={() => {
                     
                            this.searchShow()
                          }} 
                        className={this.state.search_state ? "add_list_close" : ""}>
                    </div>
                    {/* <label className="search_info_list_label">{labelValue}</label> */}
                    <div className="selectedInfo" id={id+"_name"}
                         onClick={() => {
                             if(disabled===true){
                                 return false;
                             }else{
                                this.searchShow()
                                this.infos();
                               console.log(document.getElementById(id+"_name").innerHTML)
                             }
                            
                         }}
                    >
                        {selectedInfo===null||selectedInfo===undefined ?"-选择-": selectedInfo}
                    </div>
                    <div id={id+"_id"}  style={{display:"none"}}>{selectedIdInfo === "" ? "-选择-" : selectedIdInfo}</div>
                    <div className="search_info_position">
                        <div
                            id="search_info_list_div"
                            className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                        >
                            <ul className="search_info_list_ul select_info_list_ul">
                                {this.state.searchInfoLists?this.state.searchInfoLists.map((info_lists,index) => {
                                    return (
                                        <li  key={index}>
                                            <input value={info_lists.name} name={id+"checkSelectList"} type="checkbox"/>
                                            <span 
                                            >
                                                {info_lists.name}   
                                            </span>
                                        </li>
                                    )
                                }):""}
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
    }
    
    export default SelectCheckSearchType;