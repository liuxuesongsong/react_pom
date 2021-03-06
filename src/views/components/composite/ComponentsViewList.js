/** 
    * @author xuesong
    * @param ComponentsViewList 组件名 用于所有组件循环 
    */

   import React, { Component } from 'react';
   import CardView from '../watch/CardView'
   import TextField from '../../components/input/TextField';
   import TextArea from '../../components/input/TextArea'
   import TextAreaShow from '../watch/TextAreaShow'  
   import TextMoney from '../../components/input/TextMoney'
   import TextDate from '../../components/input/TextDate'
   import TextDatetime from '../../components/input/TextDatetime'
   import ListTextSearch from '../../components/select/ListTextSearch'
   import CardTitleItem from '../watch/CardTitleItem'
//    import CardGroup from '../CardGroup'
   import GroupButtonView from '../watch/GroupButtonView'
   import Link from '../../components/button/Link'
   import CardHead from '../../components/card/CardHead'
   import CardBody from '../../components/card/CardBody'
   import CardOpen from '../../components/card/CardOpen'
   import CardFoot from '../../components/card/CardFoot'
   import LabelTitleMessage from '../../components/watch/LabelTitleMessage'
   import TitleMessage from '../../components/watch/TitleMessage'
   import LabelSelectMessage from '../watch/LabelSelectMessage'
   import HoldBtn from '../../components/button/HoldBtn'
//    import AddCardBtn from '../AddCardBtn'
   import CardItem from '../../components/watch/CardItem'
   import ShowStateMessage from '../../components/watch/ShowStateMessage'
   import CardItemTime from '../../components/watch/CardItemTime'
   import SelectList from '../../components/select/SelectList'
   import SelectListLangPack from '../../components/select/SelectListLangPack'
   import SelectListSearch from '../../components/select/SelectListSearch'
   import DisSelectList from '../../components/select/DisSelectList'
   import Invisible from '../../components/input/Invisible'
   import DisTextField from '../../components/input/DisTextField'
   import DepartmentList from '../select/DepartmentList'
   import TitleLeftCard from '../watch/TitleLeftCard'
   import TitleRightCard from '../watch/TitleRightCard'
   import TitleCardRightGroup from '../watch/TitleCardRightGroup'
   import DateCard from '../watch/DateCard'
   import ProvinceCity from '../watch/ProvinceCity'
   import CardLeftBody from '../../components/watch/CardLeftBody'
   import CardRightBody from '../watch/CardRightBody'
   import SpellingCardGroup from '../watch/SpellingCardGroup'
   import LoopCardMoneyGroup from '../watch/LoopCardMoneyGroup'
   import LoopCardGroup from '../watch/LoopCardGroup'
   import EnrollManageList from '../watch/EnrollManageList'
  import LabelChildMessage from '../watch/LabelChildMessage'
  import LabelMessage from '../../components/watch/LabelMessage'
  import LabelTotalMessage from '../../components/watch/LabelTotalMessage'
  import SpellMessage from '../../components/watch/SpellMessage'
  import ApplicationsState from '../watch/ApplicationsState'
  import SubmitApplications from '../watch/SubmitApplications'
  import IsAgreeApplications from '../watch/IsAgreeApplications'
  import LabelShowMessage from '../watch/LabelShowMessage'
  import GetDataSpellingLabel from '../watch/GetDataSpellingLabel'
  import ApplicationsFlow from '../watch/ApplicationsFlow'
  import ApplicationsDefault from '../watch/ApplicationsDefault'
  import ShowMessage from '../watch/ShowMessage'
  import ShowEditorMessage from '../watch/ShowEditorMessage'
  import SelectListLocal from '../select/SelectListLocal'
  import Print from '../button/Print'
  import ClickAlert from '../../components/button/ClickAlert'
  import Editor from '../watch/Editor'
  import SelectCheckArray from '../search/SelectCheckArray'
//   import LoanBill from '../watch/LoanBill'
   class ComponentsViewList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title_index:0
        }
    }
    select_title_index=(index)=>{
        this.setState({
            title_index:index
        })
    }
    /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param clickComponents 函数  获取视图json
     */
    clickComponents=(form_list,index)=>{
        // console.log(form_list)
        var newState = {
            form_list:form_list,
            index:index
        }
        this.props.handleViewJson(newState);//回调函数传递参数给父组件
    }

      /** 
     * @time 2018-11-09 
     * @author xuesong
     * @param descriptViewButton 函数  group展示按钮传值
     */
    descriptViewButton=(newState)=>{
        var states={
            name:newState.name,
            view:newState.view,
            title:newState.title,
            addButtonTitle:newState.addButtonTitle,
            index:newState.index,
            arrIndex:newState.arrIndex
        }
        this.props.descriptViewonClickButton(states)
    }
    /** 
     * @time 2018-11-16
     * @author xuesong
     * @param interfaceViewData 函数  group接口名称点击回调函数
     */
    interfaceViewData=(newState)=>{
        var states={
            name:newState.name,
            data:newState.data,
            // addButtonTitle:newState.addButtonTitle
        }
        this.props.interfaceViewDataButton(states) 
    }
    delViewContent=(index)=>{
        this.props.delViewIndexContent(index) 
    }
    moveUpViewContent=(index)=>{
        this.props.moveUpViewIndexContent(index) 
    }
    selectLangPackProps=(newState)=>{

    }
       render() {
           return (
               this.props.componentslist.map((form_list,index) => {
                       return (
                           <div className="view_component_div" key={index}>
                               <div style={{minHeight:"2.5em"}} onClick={()=>{
                               this.clickComponents(form_list,index)
                           }}>
                            {form_list.type_name === "Cards" ?
                                <CardView 
                                    id={form_list.id_name}
                                    index={this.props.index}
                                    cardViewClickButton={this.descriptViewButton}
                                    //sixChange = {this.handleChildChange}
                                    addButton={form_list.add_button}
                                    // card_list={this.props.componentsdata}
                                />
                                :form_list.type_name === "ListTextSearch" ?
                                   <ListTextSearch 
                                       id={form_list.id_name}
                                       addButton={form_list.add_button}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri}
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   />
                               :form_list.type_name === "TextDatetime" ? 
                                   <TextDatetime
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       //inputValue={this.props.componentsdata[form_list.id_name]} 
                                       labelValue={form_list.title} 
                                   />
                               : form_list.type_name === "TextDate" ? 
                                   <TextDate
                                       id={form_list.id_name} 
                                       //inputValue={form_list.key}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   />
                            //    :form_list.type_name === "Link"?
                            //        <Link 
                            //            button={form_list.add_button.descript} 
                            //            handleClick = {this.props.handleClick}
                            //            id={form_list.id_name}
                            //            isClick={this.props.componentsdata.id}
                            //            label={form_list.add_button.descript} 
                            //            linkpage={form_list.before_api_uri}  
                            //            key={form_list.id_name} 
                            //            messageList={form_list.add_button.before_api_uri}
                            //            title={form_list.title}
                            //        />
                               : form_list.type_name === "MutiText" ? 
                                   <TextField 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                : form_list.type_name === "TextArea" ? 
                                   <TextArea 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                : form_list.type_name === "TextAreaShow" ? 
                                   <TextAreaShow 
                                       id={form_list.id_name} 
                                        inputValue={form_list.key} 
                                   />
                                : form_list.type_name === "Invisible" ? 
                                   <Invisible 
                                       id={form_list.id_name} 
                                       inputValue={form_list.key} 
                                       labelValue={form_list.title} 
                                   />
                                :form_list.type_name === "DisTextField"?
                                   <DisTextField
                                       id={form_list.id_name} 
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   />
                               :form_list.type_name === "LabelTitleMessage"?
                                   <LabelTitleMessage
                                       id={form_list.id_name}
                                       labelValue={form_list.title} 
                                    //    message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                                :form_list.type_name === "TitleMessage"?
                                   <TitleMessage
                                       id={this.props.disabled?form_list.id_name+this.props.index:form_list.id_name} 
                                       labelValue={form_list.title} 
                                   />
                                :form_list.type_name === "LabelSelectMessage"?
                                   <LabelSelectMessage
                                       id={form_list.id_name} 
                                       labelValue={form_list.title} 
                                    //    message={this.props.card_list[form_list.id_name+"_name"]?this.props.card_list[form_list.id_name+"_name"]:""} 
                                   />
                                :form_list.type_name==="CardTitleItem"?
                                    <CardTitleItem
                                    id={form_list.id_name} 
                                    view={true}
                                    labelValue={form_list.title} 
                                    message={form_list.title} 
                                />
                               :form_list.type_name==="DepartmentList"?
                                   <DepartmentList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedInfo={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                   />
                               :form_list.type_name==="SelectList"?
                                   <SelectList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                                   :form_list.type_name==="SelectListLangPack"?
                                   <SelectListLangPack 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       langPack={form_list.key}
                                       searchInfoLists={form_list.key} 
                                       stateFun={this.selectLangPackProps}
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                                   
                                :form_list.type_name==="DisSelectList"?
                                   <DisSelectList 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                                :form_list.type_name==="SelectListSearch"?
                                   <SelectListSearch 
                                       id={form_list.id_name}
                                       labelValue={form_list.title}
                                       searchInfoLists={form_list.before_api_uri} 
                                       selectedIdInfo={"-选择-"} 
                                       selectedInfo={"-选择-"} 
                                   /> 
                               : form_list.type_name === "TextMoney" ? 
                                   <TextMoney
                                       id={form_list.id_name}
                                       inputValue={form_list.key}
                                       labelValue={form_list.title} 
                                   /> 
                               :form_list.type_name==="CardGroup"?
                                   <GroupButtonView 
                                        addButton={form_list.add_button}
                                        beforeApiUri={form_list.before_api_uri}
                                        interfaceData={this.interfaceViewData}
                                        descriptViewClickButton={this.descriptViewButton}
                                        descriptTitle={form_list.add_button.descript_title} 
                                   />
                               :form_list.type_name==="HoldBtn"?
                                   <HoldBtn 
                                       before_api_uri={form_list.before_api_uri}
                                       view={true}
                                       onHoldClick={this.handleChildClick}
                               />
                                :form_list.type_name === "Link"?
                                    <Link 
                                        button={form_list.title}
                                        buttonMessage={form_list}
                                        view={true}
                                        // dataId={this.props.card_list.id}
                                        // isClick={this.props.card_list.id}
                                        linkpage={form_list.before_api_uri}
                                        // messageList={form_list.add_button.before_api_uri}
                                        onChange = {this.handleClick}
                                    />
                                    :form_list.type_name === "ClickAlert"?
                                    <ClickAlert 
                                        button={form_list.title}
                                        buttonMessage={form_list}
                                        defaultValue={form_list.key}
                                        view={true}
                                        // dataId={this.props.card_list.id}
                                        // isClick={this.props.card_list.id}
                                        linkpage={form_list.before_api_uri}
                                        // messageList={form_list.add_button.before_api_uri}
                                        // onChange = {this.handleClick}
                                    />
                            :form_list.type_name === "CardHead"?
                                <CardHead
                                    id={form_list.id_name} 
                                    viewState={true}
                                    addButton={form_list.add_button}
                                    message={form_list.default_value} 
                                />
                            :form_list.type_name === "CardBody"?
                                <CardBody
                                    cardIndex={this.props.index}
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    message={form_list.title} 
                                />
                            :form_list.type_name === "CardOpen"?
                                <CardOpen 
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    openCtrlState={this.openCtrlState}
                                    message={this.props.card_list?this.props.card_list:""} />
                            :form_list.type_name === "CardFoot"?
                                <CardFoot
                                    id={form_list.id_name} 
                                    addButton={form_list.add_button}
                                    // threeChange = {this.handleClick}
                                    message={form_list.title} 
                                />
                            :form_list.type_name === "CardItem"?   
                                <CardItem
                                    id={form_list.id_name} 
                                    message={form_list.title}
                                />
                            :form_list.type_name === "ShowStateMessage"?   
                                <ShowStateMessage
                                    id={form_list.id_name} 
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                   // message={form_list.title}
                                />
                            :form_list.type_name === "CardItemTime"?   
                                <CardItemTime
                                    id={form_list.id_name} 
                                    defaultValue={form_list.default_value}
                                    // message={form_list.title}
                                />
                            :form_list.type_name === "TitleLeftCard"?
                                <TitleLeftCard
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleRightCard"?
                                <TitleRightCard
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                   // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "TitleCardRightGroup"?
                                <TitleCardRightGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={[]}
                                    // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "DateCard"?
                                <DateCard
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""}
                                   // message={this.props.componentsdata[form_list.id_name]?this.props.componentsdata[form_list.id_name]:""} 
                                />
                            :form_list.type_name === "ProvinceCity"?
                                <ProvinceCity
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "CardLeftBody"?
                                <CardLeftBody
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "CardRightBody"?
                                <CardRightBody
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    message={""} 
                                />
                            :form_list.type_name === "SpellingCardGroup"?
                                <SpellingCardGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelChildMessage"?
                                <LabelChildMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "SpellMessage"?
                                <SpellMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelShowMessage"?
                                <LabelShowMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                                
                            :form_list.type_name === "ApplicationsState"?
                                <ApplicationsState
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "ApplicationsDefault"?
                                <ApplicationsDefault
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "ShowMessage"?
                                <ShowMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    tip={form_list.tip}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "ShowEditorMessage"?
                                <ShowEditorMessage
                                id={form_list.id_name} 
                                labelValue={form_list.title} 
                                className={form_list.class}
                                tip={form_list.tip}
                                thisKey={form_list.key}
                                defaultValue={form_list.default_value}
                                beforeApiUri={form_list.before_api_uri}
                                message={[]} 
                                view={true}
                                />   
                            :form_list.type_name === "SubmitApplications"?
                                <SubmitApplications
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "IsAgreeApplications"?
                                <IsAgreeApplications
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LabelMessage"?
                                <LabelMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "GetDataSpellingLabel"?
                                <GetDataSpellingLabel
                                    id_name={form_list.id_name}
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "ApplicationsFlow"?
                                <ApplicationsFlow
                                    id_name={form_list.id_name}
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    className={form_list.class}
                                    thisKey={form_list.key}
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                                
                            :form_list.type_name === "LabelTotalMessage"?
                                <LabelTotalMessage
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                    beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LoopCardMoneyGroup"?
                                <LoopCardMoneyGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "LoopCardGroup"?
                                <LoopCardGroup
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name === "EnrollManageList"?
                                <EnrollManageList
                                    id={form_list.id_name} 
                                    labelValue={form_list.title} 
                                    defaultValue={form_list.default_value}
                                     beforeApiUri={form_list.before_api_uri}
                                    message={""} 
                                />
                            :form_list.type_name==="SelectListLocal"?
                                <SelectListLocal
                                    id={"select_title"}
                                    selectedInfo={"-选择-"}
                                    labelValue={form_list.title}
                                     keywordTitle={form_list.key} 
                                    selectTitleIndex={this.select_title_index}
                                />
                            :form_list.type_name==="Print"?
                                <Print
                                    button={form_list.title}
                                    isPrint={false}
                                    className={form_list.class}
                                    buttonMessage={form_list}
                                />
                            :form_list.type_name==="Editor"?
                                <Editor
                                    textarea_id={form_list.id_name} 
                                    view={true}
                                    inputValue={form_list.key}
                                />
                            :form_list.type_name==="SelectCheckArray"?
                                <SelectCheckArray
                                    id={form_list.id_name}
                                    labelValue={form_list.title}
                                    searchInfoLists={form_list.before_api_uri}
                                />    
                            // :form_list.type_name==="EditEditor"?
                            //     <EditEditor
                            //         textarea_id={form_list.id_name} 
                            //         view={true}
                            //     />
                                
                            // :form_list.type_name==="LoanBill"?
                            //     <LoanBill 
                            //         view={true}
                            //         defaultValue={form_list.key}
                            //     /> 
                            : ""}
                            
                           </div>
                          <div className="view_component_function">
                          <button className="label_delete_button" onClick={()=>{
                               this.moveUpViewContent(index)
                           }}>上移</button>
                          <button className="label_delete_button" onClick={()=>{
                               this.delViewContent(index)
                           }}>删除</button>
                          </div>
                           </div>
   )
                   }
                   )
           )
       }
   }
   
   export default ComponentsViewList;
   
   