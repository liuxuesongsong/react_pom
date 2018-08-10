/** 
    * @author xuesong
    * @param ListTextSearchLink 组件名 预算中编辑项目主页面
    */

import React, { Component } from 'react';
import TextField from './TextField';
import { dealNumber } from '../../utils/helpers'
//import TextField from './TextField'
// import ListText from '../components/ListText'

// import ListTextSearch from '../components/ListTextSearch'
import ComponentsList from './ComponentsList'
import AddCard from './AddCard';
//import Select from './Select'
class ListTextSearchLink extends Component {

    state = {
        search_state: false,
        add_customer: false,
        add_lists: false,
        search_name: "",
        add_customer_input: "",
        search_info_list: [],
        changeResult: "",
        add_lists_length: 0,
        //讲师安排获取数据list
        teacher_data_group: [
            //{ teacher_name: "", teacher_income_tax: "", teacher_lecture_fee: "", teacher_lecture_days: "", teacher_duty: "" }
        ],
        //讲师安排card
        teacher_card_list: {
            teacher_card: [{
                "id_name": "teacher_name",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "讲师姓名1",
                "tip": "",
                "add_button": {
                    "data": {
                        "form-temp-name": "讲师姓名",
                        "form-list": [{
                            "id_name": "add_a_teacher_name",
                            "type_name": "MutiText", //input
                            "key": "",
                            "title": "讲师姓名",
                            "tip": "",
                            "add_button": {
                            },
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        }, {
                            "id_name": "teacher_always_money",
                            "type_name": "MutiText", //input
                            "key": "",
                            "title": "常用单价",
                            "tip": "",
                            "add_button": {
                            },
                            "descript": "",
                            "before_api_uri": "",
                            "after_api_uri": ""
                        },]
                    }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "讲师1",
                }, {
                    id: 2,
                    name: "讲师2",
                }, {
                    id: 3,
                    name: "讲师3",
                }],
                "after_api_uri": ""
            },
            {
                "id_name": "teacher_income_tax",
                "type_name": "MutiText", //input
                "key": "",
                "title": "所得税",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "teacher_lecture_fee",
                "type_name": "MutiText", //input
                "key": "3000",
                "title": "讲课费",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "teacher_lecture_days",
                "type_name": "MutiText", //input
                "key": "5",
                "title": "课程天数",
                "tip": "",
                "add_button": {},
                "descript": "",
                "before_api_uri": "",
                "after_api_uri": ""
            },
            {
                "id_name": "teacher_duty",
                "type_name": "ListTextSearch", //下拉搜索
                "key": "",
                "title": "职责",
                "tip": "",
                "add_button": {
                    "data": {
                        "form-list": []
                    }
                },
                "descript": "",
                "before_api_uri": [{
                    id: 1,
                    name: "主讲",
                }, {
                    id: 2,
                    name: "专家",
                }, {
                    id: 3,
                    name: "评审",
                }],
                "after_api_uri": ""
            }],
        },
        //讲师安排表
        teacher_form_list: {
            "data": [
                {
                    teacher_card: [{
                        "id_name": "teacher_name",
                        "type_name": "ListTextSearch", //下拉搜索
                        "key": "",
                        "title": "讲师姓名",
                        "tip": "",
                        "add_button": {
                            "data": {
                                "form-temp-name": "讲师姓名",
                                "form-list": [{
                                    "id_name": "add_a_teacher_name",
                                    "type_name": "MutiText", //input
                                    "key": "",
                                    "title": "讲师姓名",
                                    "tip": "",
                                    "add_button": {
                                    },
                                    "descript": "",
                                    "before_api_uri": "",
                                    "after_api_uri": ""
                                }, {
                                    "id_name": "teacher_always_money",
                                    "type_name": "MutiText", //input
                                    "key": "",
                                    "title": "常用单价",
                                    "tip": "",
                                    "add_button": {
                                    },
                                    "descript": "",
                                    "before_api_uri": "",
                                    "after_api_uri": ""
                                },]
                            }
                        },
                        "descript": "",
                        "before_api_uri": [{
                            id: 1,
                            name: "讲师1",
                        }, {
                            id: 2,
                            name: "讲师2",
                        }, {
                            id: 3,
                            name: "讲师3",
                        }],
                        "after_api_uri": ""
                    },
                    {
                        "id_name": "teacher_income_tax",
                        "type_name": "MutiText", //input
                        "key": "",
                        "title": "所得税",
                        "tip": "",
                        "add_button": {},
                        "descript": "",
                        "before_api_uri": "",
                        "after_api_uri": ""
                    },
                    {
                        "id_name": "teacher_lecture_fee",
                        "type_name": "MutiText", //input
                        "key": "3000",
                        "title": "讲课费",
                        "tip": "",
                        "add_button": {},
                        "descript": "",
                        "before_api_uri": "",
                        "after_api_uri": ""
                    },
                    {
                        "id_name": "teacher_lecture_days",
                        "type_name": "MutiText", //input
                        "key": "5",
                        "title": "课程天数",
                        "tip": "",
                        "add_button": {},
                        "descript": "",
                        "before_api_uri": "",
                        "after_api_uri": ""
                    },
                    {
                        "id_name": "teacher_duty",
                        "type_name": "ListTextSearch", //下拉搜索
                        "key": "",
                        "title": "职责",
                        "tip": "",
                        "add_button": {
                            "data": {
                                "form-list": []
                            }
                        },
                        "descript": "",
                        "before_api_uri": [{
                            id: 1,
                            name: "主讲",
                        }, {
                            id: 2,
                            name: "专家",
                        }, {
                            id: 3,
                            name: "评审",
                        }],
                        "after_api_uri": ""
                    }],
                },
            ]
        },
        addCondition: [],
        add_button: this.props.add_button,
        search_info_lists: this.props.search_info_lists,
        info_lists: this.props.search_info_lists
    }
    componentWillMount() {
        this.state.addCondition.push(
            <AddCard
                key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                removeDefault={this.removeEvent.bind(this)}
                index={this.state.addCondition.length}
                card_list={this.state.teacher_card_list.teacher_card}
                //getAddCondition={ this.getAddConditionEvent.bind(this)}
                conditionAction={this.state.conditionAction}
            >
            </AddCard>
        )
        this.setState({
            addCondition: this.state.addCondition,
        })
    }
    /** 
     * @author xuesong
     * @param searchShow 函数名 切换显示隐藏
     */
    searchShow() {
        this.setState({
            search_state: !this.state.search_state
        })
    }
    /** 
    * @author xuesong
    * @param removeFunEvent 函数名 删除动态添加组件
    */
    removeFunEvent() {
        //默认的组件
        this.props.removeDefault && this.props.removeDefault(this.props.index);
        //添加的组价
        this.props.remove && this.props.remove(this.props.index);
    }

    /** 
     * @author xuesong
     * @param add_lists_components 函数名 动态添加教师组件
     */
    add_lists_components = () => {
        var components = [];
        var teacher_list = this.state.teacher_form_list.data;
        for (var i = 0; i < teacher_list.length; i++) {
            components.push(
                <li
                    key={i}
                    id={"teacher_li" + i}
                    style={{ border: "1px solid #000" }}
                >
                    <button
                        onClick={this.removeFunEvent.bind(this)}
                    >删除</button>
                    {this.add_teacher_card_components(i)}
                </li>
            )
        }
        return components
    }
    /** 
 * @author xuesong
 * @param removeFunEvent 函数名 删除添加组件
 */
    removeEvent(value) {
        var addConditionValue = this.state.addCondition;
        addConditionValue[value] = '';
        this.setState({
            addCondition: this.state.addCondition
        })
    }
    // getAddConditionEvent (value) {
    //     console.log(value)
    //     this.state.getAddCondtionData.push(value);
    // }
    render() {
        const { selected_info, id, labelValue } = this.props;
        return (
            <div>
                <div onClick={() => {
                    this.searchShow()
                }} className={this.state.search_state ? "add_list_close" : ""}></div>
                <label>{labelValue}</label>
                <div
                    onClick={() => {
                        this.searchShow()
                    }}
                    className="selected_info"
                    id={id}>{selected_info === "" ? "-选择-" : selected_info}</div>
                <div
                    id="search_info_list_div"
                    className={this.state.search_state ? "search_info_list open" : "search_info_list"}
                >
                    <ul className="search_info_list_ul">
                        <li>
                            <input onChange={(e) => {
                                this.setState({
                                    search_name: e.target.value
                                })
                            }} /><button
                                onClick={() => {
                                    this.setState({
                                        search_info_list: [],
                                    })
                                    for (var i = 0; i < this.state.info_lists.length; i++) {
                                        if (this.state.info_lists[i].name.indexOf(this.state.search_name) >= 0) {
                                            this.state.search_info_list.push(this.state.info_lists[i])
                                        }
                                    }
                                    this.setState({
                                        search_info_lists: this.state.search_info_list
                                    })
                                }}
                            >搜索1</button>
                        </li>
                        {this.state.search_info_lists.map((info_lists) => {
                            return (
                                <li onClick={(e) => {
                                    for (var i = 0; i < this.props.search_info_lists.length; i++) {
                                        if (info_lists.name === this.props.search_info_lists[i].name) {
                                            this.setState({
                                                changeResult: this.props.search_info_lists[i].cost
                                            })
                                        }
                                    }
                                    document.getElementById(id).innerHTML = info_lists.name;
                                    this.searchShow()
                                }} key={info_lists.id}>{info_lists.name}</li>
                            )
                        })}
                    </ul>
                    <div onClick={(e) => {
                        this.setState({
                            add_customer: true
                        })
                    }}
                    >新增</div>
                </div>
                <div>预计成本:{dealNumber(this.state.changeResult)}</div>
                <div className={this.state.add_customer ? "add_info_list open" : "add_info_list"}>
                    <i onClick={() => {
                        this.setState({
                            add_customer: false
                        })
                    }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                    {/* 添加客户1 */}
                    <ComponentsList componentslist={this.state.add_button.data["form-list"]}></ComponentsList>
                     {/* 讲师安排 */}
                     <div>
                        <span>讲师安排</span>
                        <button
                            onClick={() => {
                                this.setState({
                                    add_lists: true
                                })

                            }}
                        >修改讲师安排</button>
                        <div className={this.state.add_lists ? "add_info_list open" : "add_info_list"}>
                            <i onClick={() => {
                                this.setState({
                                    add_lists: false
                                })
                            }} style={{ fontSize: "20px" }} className="glyphicon glyphicon-arrow-left"></i>
                            修改讲师安排
                            <TextField inputValue={""} labelValue={"合同编号"} />
                            <TextField inputValue={""} labelValue={"课程名称"} />
                            <p>讲师安排</p>

                            <ul>
                                {
                                    this.state.addCondition.map((item, index) => {
                                        return item;
                                    })
                                }
                                {/* {this.state.teacher_form_list.data.map((data,index)=>{
                                    console.log(index)
                                    return <AddCard 
                                                remove={this.removeEvent.bind(this)}
                                                index={this.state.addCondition.length}
                                                getAddCondition={ this.getAddConditionEvent.bind(this)}
                                                conditionAction = { this.state.conditionAction }>
                                           </AddCard>
                                })} */}
                                {/* {this.add_lists_components()} */}
                            </ul>
                            <button
                                onClick={() => {
                                    this.state.addCondition.push(
                                        <AddCard
                                            key={`executeHandle${this.state.addCondition.length}.lenght+1`}
                                            remove={this.removeEvent.bind(this)}
                                            index={this.state.addCondition.length}
                                            card_list={this.state.teacher_card_list.teacher_card}
                                            // getAddCondition={ this.getAddConditionEvent.bind(this)}
                                            conditionAction={this.state.conditionAction}
                                        >
                                        </AddCard>
                                    )
                                    this.setState({
                                        addCondition: this.state.addCondition,
                                    })
                                    console.log(this.state.addCondition)

                                }}
                            >新增讲师</button>
                            <button
                                onClick={() => {
                                    console.log(this.state.addCondition)
                                    var addCondition = this.state.addCondition;
                                    var teacher_data_group = [];
                                    this.setState({
                                        teacher_data_group: []
                                    })
                                    //lenght是有效的组件列
                                    var lenghts = 0;
                                    for (var i = 0; i < addCondition.length; i++) {
                                        if (addCondition[i] !== "") {
                                            console.log(lenghts)
                                            teacher_data_group.push({ teacher_name: "", teacher_income_tax: "", teacher_lecture_fee: "", teacher_lecture_days: "", teacher_duty: "" })
                                            teacher_data_group[lenghts].teacher_name = document.getElementById("teacher_name" + i).innerText === "-选择-" ? "" : document.getElementById("teacher_name" + i).innerText;
                                            //console.log(teacher_data_group[0])
                                            // for(var key in teacher_data_group[0]){
                                            //     var this_data  =teacher_data_group[lenghts];
                                            //     console.log(this_data.key)
                                            //     teacher_data_group[lenghts].key = document.getElementById(key+i).innerText === "-选择-" ? "" : document.getElementById(key + i).innerText; 
                                            // }
                                            // teacher_data_group[lenghts].teacher_name = document.getElementsByClassName("teacher_name").innerText === "-选择-" ? "" : document.getElementById("teacher_name" + i).innerText; 
                                            lenghts++;
                                        }
                                    }
                                    for (var m = 0; m < teacher_data_group.length; m++) {
                                        this.state.teacher_data_group.push(teacher_data_group[m])
                                    }


                                    console.log(this.state.teacher_data_group)

                                }}

                            >保存</button>
                        </div>
                    </div>




                    <button onClick={() => {
                        for (var i = 0; i < this.state.add_button.data["form-list"].length; i++) {

                            console.log(document.getElementById(this.state.add_button.data["form-list"][i].id_name).innerHTML || document.getElementById(this.state.add_button.data["form-list"][i].id_name).value)

                        }
                    }}>保存1</button>
                </div>
            </div>
        )
    }
}

export default ListTextSearchLink;