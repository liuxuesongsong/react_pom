import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import TabsControl from './components/Tab'
import Routers from './components/Routers'
import ViewTextField from '../src/views/components/input/ViewTextField'
import PaymentManageBtn from '../src/views/components/button/PaymentManageBtn'
import Popup from '../src/views/components/modal/Popup'
import Alert from '../src/views/components/modal/Remind'
import {
    HashRouter,
    Link,
  } from 'react-router-dom';
import './css/style.css'
//  import Lang from './language'
// import config from './config';
import local from './local' 
import {getData,getRouter } from './utils/helpers';
 const Lang = sessionStorage.Language?JSON.parse(sessionStorage.Language):"";
 const config=sessionStorage.config1?JSON.parse(sessionStorage.config1):JSON.parse(sessionStorage.config)
// window.onresize = function(){
//   console.log(document.body.clientWidth)
  
// }
//二级路由
class App extends Component {
    render() {
      return (
        <div style={{height:"100%"}}>
          {this.props.children}
        </div>
      );
    }
  }
  //列表页
  class List extends Component {
    render() {
      return (
        <div className="content" style={{height:"100%",width:"100%"}}>
          <HashRouter>
          <App>
            <Routers/>
          {/* <Route exact path="/bidding_plan" component={AppList} />*/}
          </App>
          </HashRouter>
         
          
        </div>
      );
    }
  }


  //选项卡&路由
class TabComponent extends Component{
  constructor(  ){
		super(  )
		this.state = { 
      currentIndex : 0,
      couter:false,
      show: false,
      dialog_show:false,
      logged: Boolean(sessionStorage.getItem("logged")),
      message_state:false,
      login_account:"",
      login_password:"",
      alertPasswordState:false,//财务编号
      again_password:"",
      password:""
		}
  }
  componentWillMount() {
    
    for(var i in Lang){
      this.langMangement(Lang[i].data)
    }
    // this.langMangement(Lang.projectManagement)
		// this.langMangement(Lang.budgetAndFinalAccountsManagementcond)
		// this.langMangement(Lang.loanExpenditureManagement)
		// this.langMangement(Lang.courseManagement)
		// this.langMangement(Lang.lecturerManagement)
    // this.langMangement(Lang.implementationManagement)
    // this.langMangement(Lang.viewManagement)
    sessionStorage.getItem("logged")===false;
    this.getRoutes();
    
}
componentDidMount(){
  document.addEventListener("keydown",this.handleEnterKey);
}
componentWillUmount(){
  document.removeEventListener("keydown",this.handleEenterKey);
}
handleEnterKey = (e) => {
  if(e.keyCode === 13){
    console.log("监听回车")
      //do somethings
  }
}
// getViewJsonList() {
//   var cb = (route, message, arg) => {
//     if (message.error === 0) {
//       sessionStorage.view=JSON.stringify(message.data);
//       // this.setState({
//       //   view_table_list:
//       // })

//     }
//   }
//   console.log("json_manage_list")
//   getData(getRouter("json_manage_list"), { token:sessionStorage.token }, cb, {});
// }
// getMenuJsonList() {
//   var cb = (route, message, arg) => {
//     console.log(message)
//     if (message.error === 0) {
//       console.log(message.data)
//       sessionStorage.Language=JSON.stringify(message.data);
     
//       for(var i in message.data){
//         this.langMangement(message.data[i].data)
//       }
     
//     }
//   }
//   console.log("menu_manage_list")
//   getData(getRouter("menu_manage_list"), { token:sessionStorage.token }, cb, {});
// }
langMangement(lang){
for(var x=0;x<lang.length;x++){
  if(window.location.hash.split("#")[1]===lang[x].path){
    this.setState({
      currentIndex:lang[x].path
    })
  }
}
}
  getRoutes = () => {
    var cb = (route, message, arg) => {
      var local_remote={};
      for(var localkey in local){
        local_remote[localkey]=local[localkey]
      }
      for(var key in message.data.routelist){
        if(message.data.routelist[key].version>=1.0){
          local_remote[key]=message.data.routelist[key]
        }
        
      }
      try {
        
        if (message.error === 0) {
          for(var sessionkey in local_remote){
            sessionStorage.setItem(sessionkey, JSON.stringify(local_remote[sessionkey]));
          }
        }
      } catch (e) {
      }
    }
    getData({ url: config.routers }, { type:1, version: config.version }, cb);
  }

    //路由激活状态
    check_router_index( index ){
      return index === this.state.currentIndex ? "tab_title active" : "tab_title"
    }

  router_lists(router_lists){
    var components = [];
    
       router_lists.map((router_list)=>{
        //  console.log(router_lists)
        return(
          components.push(
            <li key={router_list.title} onClick={ () => { 
              this.setState({ currentIndex :router_list.path})  
            } } className={ this.check_router_index(router_list.path)}><Link to={router_list.path}>{router_list.title}</Link></li>
         )
        )
       }
      );
       return components
  }
  footer_router_lists(router_lists){
    var components = [];
    var footer_width=100/router_lists.length+"%";
       router_lists.map((router_list)=>{
        return(
          components.push(
            <li onClick={()=>{
              this.setState({
                dialog_show:false
              })
            }} style={{float:"left",width:footer_width,textAlign:"center"}} key={router_list.title}><Link to={router_list.path}>{router_list.title}</Link></li>
         )
        )
       }
      );
       return components
  }
  changeShow() {
    this.setState({
      show: !this.state.show
    })
  }
  dialogShow() {
    this.setState({
      dialog_show: !this.state.dialog_show
    })
  }
  changeURLArg(url,arg){
    var pattern=arg;
    return url+pattern; 
    // if(url.match(pattern)){
    //     var tmp=arg;
    //     tmp=url.replace(eval(tmp),pattern);
    //     return tmp;
    // }else{ 
    //   return url+pattern; 
    // }
}
handleLogout = () => {
  if(window.location.hash.split("#")[1]!=="/"){
    window.location.href=window.location.href.split("#/")[0]

  }
 

  this.setState({ logged: sessionStorage.getItem("logged"), apptype: 0 });
}
  login = ()=>{
    var cb = (route, message, arg) => {
			if (message.error === 0) {

        sessionStorage.token=message.data.token;
        sessionStorage.logged = true;
        //获取菜单列表存入session
        var cb_menu = (route, message, arg) => {
          if (message.error === 0) {
            sessionStorage.Language=JSON.stringify(message.data);
            //获取视图列表存入session
            var cb_view = (route, message, arg) => {
              if (message.error === 0) {
                sessionStorage.view=JSON.stringify(message.data);
                sessionStorage.account=this.state.login_account;
                
                this.setState({
                  currentIndex:"/trainingProgram"
                })
                this.setState({logged:sessionStorage.getItem("logged")})
                if(window.location.hash.indexOf("#")>=0){
                  if(window.location.hash.split("#")[1]==="/"){
                    　window.location.href = this.changeURLArg(window.location.href,'trainingProgram')
                  }
                }else{
                  //window.location.href = this.changeURLArg(window.location.href,'trainingProgram')
                }
                 window.location.reload()
              }else if(message.error === 2){
                sessionStorage.logged = false;
                sessionStorage.token="";
                if(window.location.hash.split("#")[1]!=="/"){
                  window.location.href=window.location.href.split("#/")[0]
                
                  }
              }else{

                Alert.open({
                  alertTip:message.msg
                  
                });
                setTimeout(function(){
                  Alert.close();
                },3000)
            }
          }
            getData(getRouter("json_manage_list"), { token:sessionStorage.token }, cb_view, {});
          }else if(message.error === 2){
            sessionStorage.logged = false;
            sessionStorage.token="";
            if(window.location.hash.split("#")[1]!=="/"){
              window.location.href=window.location.href.split("#/")[0]
            
              }
          }else{
              Alert.open({
                alertTip:message.msg
                
              });
              setTimeout(function(){
                Alert.close();
              },3000)
            }
        }
        getData(getRouter("menu_manage_list"), { token:sessionStorage.token }, cb_menu, {});
			}else if(message.error === 2){
				console.log("未登录")
				sessionStorage.logged = false;
				sessionStorage.token="";
				if(window.location.hash.split("#")[1]!=="/"){
					window.location.href=window.location.href.split("#/")[0]
				
				  }
			}else{

				Alert.open({
					alertTip:message.msg
					
				});
				setTimeout(function(){
					Alert.close();
				 },3000)
      }
    }
    
		getData(getRouter("user_account_login"), { account:this.state.login_account,password:this.state.login_password }, cb, {});		
    
  }
  LoginTable = () => {
    return  (
      <div className="login">
        <div className="login_window">
        <div className="login_nav_title">
          <span>
            欢迎
          </span>
          <span>
            登录系统
          </span>
        </div>
          <div className="user_name">
            <input
              id="login_account"
              value={this.state.login_account}
              onChange={(e)=>{
                this.setState({
                  login_account:e.target.value
                })
              }}
            />
          </div>
          <div className="pass_word">
          <input
            id="login_password"
            type="password"
            value={this.state.login_password}
            onChange={(e)=>{
              this.setState({
                login_password:e.target.value
              })
            }}
            />
            </div>
            <button
              onClick={()=>{
                this.login()
              }}

            >登录</button>
             <div className="login_log_div">
               <span></span>
             </div>
          </div>
         
      </div>
    )
  }
// 修改密码

user_account_edit_password=()=>{

  if(this.state.again_password===this.state.password){
    var cb = (route, message, arg) => {
      if (message.error === 0) {
        this.setState({
          alertPasswordState:false,
    
        })
      }else if(message.error === 2){
        console.log("未登录")
        sessionStorage.logged = false;
        sessionStorage.token="";
        if(window.location.hash.split("#")[1]!=="/"){
          window.location.href=window.location.href.split("#/")[0]
        
          }
      }else{
        Alert.open({
          alertTip:message.msg
          
        });
        setTimeout(function(){
          Alert.close();
        },3000)
        }
    }
  
     getData(getRouter("user_account_edit_password"), { token:sessionStorage.token,new_password:this.state.password }, cb, {});
  }else if(this.state.password===""){
    this.setState({
      warning_password:"请输入密码"
    })
  }else if(this.state.again_password===""){
    this.setState({
      warning_password:"请再次输入密码"
    })
    
  }else{
    this.setState({
      warning_password:"两次密码不一致"
    })
  }
  
}
cancelCallback=()=>{
  this.setState({
    alertPasswordState:false,
  })
}
	render(  ){
   const menuView = [];
    for(var i in Lang){
     menuView.push({name:Lang[i].name,data:Lang[i].data})
    }
		return(
      sessionStorage.getItem("logged")==="true"?	
      <div>
        <div className="user_info_box">
          <span>用户名</span>
          <span>{sessionStorage.account}</span>
          <span onClick={()=>{
            this.setState({
              alertPasswordState:true,
              warning_password:"" 
            })
          }}>{"修改密码"}</span>

          {/* <PaymentManageBtn
              float={"right"}
							onHoldClick={this.alertAddState}
							defineValue="修改密码"
							state="alertPasswordState"	
						/> */}
        </div>
        <div className="windows">
     
          <div  style={this.state.show===true?{display:"none"}:{}} className="router_screen nav_lists">
              {/* <div style={{display:"none"}}>{this.state.menu_list}</div> */}
              <TabsControl>
                {menuView.map((menuView,index)=>{
                  return(
                    <div key={index} name = {menuView.name}>
                    <HashRouter>
                      <App>
                        <ul>
                          {this.router_lists(menuView.data)}
                        </ul>  
                      </App>
                    </HashRouter>
                  </div>
                  )
                })}
              </TabsControl>
          </div>
          <div style={this.state.show===true?{display:"none"}:{}}  className="router_button" onClick={this.changeShow.bind(this)}>
            <i className="glyphicon glyphicon-menu-hamburger"></i>
          </div>
          <div>
            <div  style={this.state.show===true?{}:{display:"none"}} onClick={this.changeShow.bind(this)} className="modal_backdrop">
            </div>
            <ReactCSSTransitionGroup
                component="div"
                transitionName="fade"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}
            >
              {
                this.state.show &&
                
                <div style={this.state.show===false?{display:"none"}:{}}  className="couter_control">
                  <TabsControl>
                    {menuView.map((menuView,index)=>{
                        return(
                          <div key={index} name = {menuView.name}>
                            <HashRouter>
                              <App>
                                <ul>
                                  {this.router_lists(menuView.data)}
                                </ul>  
                              </App>
                            </HashRouter>
                        </div>
                        )
                      })}
                    </TabsControl>
                </div>
            
              }
            </ReactCSSTransitionGroup>
        
          </div>
    
          <List/>
          <div className="footer_position router_button"> 
            <HashRouter >
              <App>
                <ul className="is_shortcut">
                  {/* {Lang!==""?this.footer_router_lists(Lang.budgetAndFinalAccountsManagementcond.data):""} */}
                </ul>  
              </App>
            </HashRouter>
          </div>
          <div onClick={()=>{
            this.setState({
              dialog_show:true
            })
              console.log("goutong")
            }} className="dialog_open">沟通
          </div>
          <div style={{bottom:"100px"}} onClick={()=>{
            sessionStorage.logged = false;
            sessionStorage.token="";
            this.handleLogout()
          //   sessionStorage.logged = false;
          //  this.setState({logged:sessionStorage.getItem("logged")})
            
            }} className="dialog_open">退出
          </div>
          <Popup 
          content={
            <div>
              <h2>修改密码</h2>
              <div className="popup_content">
                  <ViewTextField 
                    password={true}
                    onChange={(e)=>{
                      this.setState({
                        password:e.target.value,
                        warning_password:""
                      })
                    }}
                      // view={true}
                    value={this.state.password} 
                    labelValue={"新密码"} 
                  />
                  <ViewTextField 
                  password={true}
                    onChange={(e)=>{
                      this.setState({
                        again_password:e.target.value,
                        warning_password:""
                      })
                    }}
                      // view={true}
                    value={this.state.again_password} 
                    labelValue={"再次输入"} 
                  />
                  <div style={{color:"red"}}>{this.state.warning_password}</div>
              </div>
              
            </div>
            }	 
          sureCallback = {this.user_account_edit_password.bind(this)} 
          cancelCallback = { this.cancelCallback.bind(this) } 
          alertState={this.state.alertPasswordState}
			/>
          <div className={this.state.dialog_show?"dialog_window open":"dialog_window"}> 
            <div  onClick={()=>{
              this.setState({
                dialog_show:false
              })
              }} className="return_btn">
            </div>
            这是打开的对话窗口
            <button
              onClick={()=>{

              var config = {"routers":"http://192.168.60.175:666/user/route/client_route","notification":"test.php","language":"Chin","version":"1.100"};
              
              sessionStorage.config1=JSON.stringify(config)
              window.location.reload()
              console.log(sessionStorage.config) 
              }}
            >开发</button>
              <button
              onClick={()=>{

              var config = {"routers":"http://192.168.60.175:777/user/route/client_route","notification":"test.php","language":"Chin","version":"1.100"};
              
              sessionStorage.config1=JSON.stringify(config)
              window.location.reload()
              console.log(sessionStorage.config) 
              }}
            >测试</button>
          {/* <div style={this.state.dialog_show===true?{}:{display:"none"}} onClick={this.dialogShow.bind(this)} className="modal_backdrop"></div> */}
          {/* <div className="dialog_window"></div> */}
          </div>
        </div>
      </div>
      :this.LoginTable()
		)
	}
}
ReactDOM.render(<TabComponent />, document.getElementById('root'));

