/** 
     * @author xuesong
     * @param ScreeningMessage 组件  
     * 调用方法
     * <ScreeningMessage 
			message={this.state.view_table_lists} 要筛选的数据列表
			keywordSearch={["title","name"]}   在input中筛选的关键字在数据列表中的名称
			keywordTitle={[                   下拉菜单选择搜索的条件
				"中文名称+英文名称",
				"所属模块",
				"类型"]}
			selectListMessage={["view_mode","view_type"]} 下拉菜单接口名称
			selectNameMessage={["mode","type"]}  在select中筛选数据列表中的名称
			screeningMessage={this.screening_information}   回调函数message为筛选后数据列表state代替原数据列表
					/>
     */
    import React, { Component } from 'react';
    import KeywordSearch from './KeywordSearch';
    import SelectMessage from './SelectMessage'
    import SelectSearchType from './SelectSearchType'
    class ScreeningMessage extends Component {
        constructor(props) {
            super(props);
            this.state={
                inputValue:"",
                inputState:false,
                filterBoxState:true,
                searchArr:[],//筛选条件的数组
                keywordTitle:[],//筛选条件的名称
                titleIndex:0
            }
          }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param screening_information 函数 筛选搜索
         */
          screening_information=()=>{
            //selectNameMessage 数据表中需要select筛选的字段名称
            var key=this.props.selectNameMessage?this.props.selectNameMessage:[];
            //value 用来存储select的option
            var value=[];
            //keyword_list 用来存储需要模糊关键字筛选的字段名称
            var keyword_list=[];
            //keywordSearch为input的value.就是模糊查询的关键字
            var keywordSearch = document.getElementById("keywordSearch").value;
           
            if(this.props.selectNameMessage){
            
                for(var i = 0; i<this.props.selectNameMessage.length;i++){
                    console.log("select_message"+this.props.selectNameMessage[i]+"_name")
                    value.push(document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML==="-选择-"?"":document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML)
                }
            }
            console.log(value)
            // key.push(this.props.keywordSearch);
            // value.push(document.getElementById("keywordSearch").value)
            var obj = {};
            for (var j = 0; j < key.length; j++) {
                obj[key[j]] = value[j]
            }
            //obj的key为数据表中的字段，value对应字段中筛选的数据
            //所有筛选条件的数组
            var searchArr=[];
            for(var key in obj){ 
                console.log("select_message"+key+"_name")
                if(obj[key]!==""){
                    searchArr.push({name:obj[key],id:"select_message"+key+"_name"})  
                }
                } 

                if(keywordSearch!==""){
                    searchArr.push({name:keywordSearch,id:"keywordSearch"})   
                }
                this.setState({
                    searchArr:searchArr
                })
            let filter=(condition,data)=>{
                console.log(condition)
                return data.filter( item => {
                    return Object.keys( condition ).every( key => {
                    return String( item[ key ] ).toLowerCase().includes( 
                            String( condition[ key ] ).trim().toLowerCase() )
                        } )
                } )
                }
              
                if(keywordSearch!==""){
                    if(this.props.keywordSearch){
                        for(var m = 0; m<this.props.keywordSearch.length;m++){
                            for(var k = 0; k<filter(obj,this.props.message).length;k++){
                                
                                     if(filter(obj,this.props.message)[k][this.props.keywordSearch[m]]!==null){
                                        if(filter(obj,this.props.message)[k][this.props.keywordSearch[m]].indexOf(keywordSearch)>=0){
                                            keyword_list.push(filter(obj,this.props.message)[k])
                                        }
                                     }
                                   
                                }
                            
                            }
                    }
                }else{
                    for(var n = 0;n<filter(obj,this.props.message).length;n++){
                        keyword_list.push(filter(obj,this.props.message)[n])
                    }
                }
    //  console.log(filter(obj,this.props.message))
    this.props.screeningMessage(keyword_list)
            // this.setState({
            //     view_table_list:screening_list
            // })
    
        }
         /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_search 函数 清空所有筛选条件
         */
        clear_search=()=>{
            if(this.props.selectNameMessage){
            for(var i = 0; i<this.props.selectNameMessage.length;i++){
                console.log()
                document.getElementById("select_message"+this.props.selectNameMessage[i]+"_name").innerHTML="-选择-"
            }
        }
            document.getElementById("keywordSearch").value="";
            this.setState({
                searchArr:[]
            })
            // console.log(this.props.message)
            this.props.screeningMessage(this.props.message)
        }
        /** 
         * @time 2018-12-19
         * @author xuesong
         * @param clear_this_search 函数 清空某一项筛选条件
         */
        clear_this_search=(id)=>{
            console.log(id)
            document.getElementById(id).innerHTML? document.getElementById(id).innerHTML="-选择-": document.getElementById(id).value=""
            this.screening_information()
        }
        keyword_title=()=>{
            if(this.props.keywordTitle){
                var keywordTitle=[];
                for(var i = 0;this.props.keywordTitle.length;i++){
                    keywordTitle.push({id:i,name:this.props.keywordTitle[i]})
                }
                this.setState({
                    keywordTitle:keywordTitle
                })
            }
        }
         /** 
         * @time 2018-12-27
         * @author xuesong
         * @param select_title_index 函数 index
         */
        select_title_index=(index)=>{
            this.setState({
                titleIndex:index
            })
        }
        // console.log(this.props.keywordTitle)
        render(){
            const {id,message} =this.props;
            return (
                <div className="filter_max_div">
                    {/* <button
                        className="filterBoxState"
                        onClick={()=>{
                            this.setState({
                               filterBoxState:!this.state.filterBoxState 
                            })
                        }}
                    >
                        {this.state.filterBoxState?"关闭筛选框":"打开筛选框"}
                    </button> */}
                    <div className="select_filter_box" style={this.state.filterBoxState?{display:"block"}:{display:"none"}}>
                        <SelectSearchType
                             id={"select_title"}
                             selectedInfo={this.props.keywordTitle[0]}
                             keywordTitle={this.props.keywordTitle} 
                             selectTitleIndex={this.select_title_index}    
                            />

                        <KeywordSearch 
                            displayNone={this.state.titleIndex===0?1:0}
                            style={this.state.titleIndex===0?{}:{display:"none"}}
                            id={"keywordSearch"}
                        />
                         {this.props.selectListMessage?this.props.selectListMessage.map((selectListMessage,index)=>{
                            return(
                                <SelectMessage
                                key={index}
                                displayNone={index+1===this.state.titleIndex?1:0}
                                id={"select_message"+this.props.selectNameMessage[index]}
                                searchInfoLists={selectListMessage}     
                            />
                            )
                        }):""}
                        <button className="select_right_btn"
                            onClick={()=>{
                                this.screening_information()
                            }}
                        >
                            搜索
                        </button>
                        <div className="select_clean_box">
                            {/* <span>
                                {this.state.searchArr.length>0?"关键字:":""}
                            </span> */}
                            {this.state.searchArr.map((searchArr,index)=>{
                                console.log(searchArr)
                                if(searchArr.name!==""){
                                return(
                                    <div className="select_clean_bar" key={index}>
                                        <span>{searchArr.name}
                                        </span>
                                        <span  className="del_btn"
                                            onClick={()=>{
                                                this.clear_this_search(searchArr.id) 
                                            }}
                                        ></span>
                                    </div>
                                )
                            
                            }})}
                            {this.state.searchArr.length>0?<button
                                className="del_btn_all"
                                onClick={()=>{
                                this.clear_search() 
                                }}
                            >
                                清空
                            </button>:""}
                        </div>
                    </div>
              </div>
            )
        }
    }
    export default ScreeningMessage;
    