//项目管理
// import Customer from './views/projectManagement/Customer'
// import Contact from './views/projectManagement/Contact'
// import TrainingProgram from './views/projectManagement/TrainingProgram'
// import BiddingPlan from './views/projectManagement/BiddingPlan'
// import Contract from './views/projectManagement/Contract'
// import Costing from './views/projectManagement/Costing'
// //预决算管理
// import Budget from './views/budgetAndFinalAccountsManagementcond/budget/Budget'
// import FinalAccounts from './views/budgetAndFinalAccountsManagementcond/FinalAccounts'
// import BudgetAccounting from './views/budgetAndFinalAccountsManagementcond/BudgetAccounting'
// import BudgetExaminationAndApproval from './views/budgetAndFinalAccountsManagementcond/BudgetExaminationAndApproval'
// //借款支出管理
// import Loan from './views/loanExpenditureManagement/Loan'
// import Expenditure from './views/loanExpenditureManagement/Expenditure'
// import LoanAccounting from './views/loanExpenditureManagement/LoanAccounting'
// import LoanExaminationAndApproval from './views/loanExpenditureManagement/LoanExaminationAndApproval'
// //收款管理
// import Receivables from './views/receivablesManagement/Receivables'
// import CashReceipts from './views/receivablesManagement/CashReceipts'
// import ReceivablesAccounting from './views/receivablesManagement/ReceivablesAccounting'
// import ReceivablesExaminationAndApproval from './views/receivablesManagement/ReceivablesExaminationAndApproval'
// //讲师管理
// import Lecturer from './views/lecturerManagement/Lecturer'
// import ClassRemuneration from './views/lecturerManagement/ClassRemuneration'
// import TeachingArrangement from './views/lecturerManagement/TeachingArrangement'
// //实施管理
// import RafficTravel from './views/implementationManagement/RafficTravel'
// import SegmenHotel from './views/implementationManagement/SegmenHotel'
// import ServiceConsumables from './views/implementationManagement/ServiceConsumables'
// //视图管理
// import View from './views/viewManagement/View'
const Language = {
    // 项目管理
    projectManagement:{
        name:"项目管理",
        data:[
            {
             path:"/customer",
             title:"客户",
             component:"Customer"},
            {
             path:"/contact",
             title:"联系人",
             component:"Contact"},
            {
             path:"/trainingProgram",
             title:"培训项目",
             component:"TrainingProgram"},
            {
            path:"/biddingPlan",
            title:"所属项目集",
            component:"BiddingPlan"},
            {
            path:"/contract",
            title:"合同管理",
            component:"Contract"},
            {
            path:"/costing",
            title:"成本管理",
            component:"Costing"}]
    },
    //预决算管理
    budgetAndFinalAccountsManagementcond:{
        name:"预决算管理",
        data:[
            {
            path:"/budget",
            title:"预算",
            component:"Budget"},
            {
            path:"/finalAccounts",
            title:"决算",
            component:"FinalAccounts"},
            {
            path:"/budgetAccounting",
            title:"核算",
            component:"BudgetAccounting"},
            {
            path:"/budgetExaminationAndApproval",
            title:"审批",
            component:"BudgetExaminationAndApproval"}]
    },
    //借款支出管理
    loanExpenditureManagement:{
        name:"借款支出管理",
        data:[
            {
            path:"/loan",
            title:"借款",
            component:"Loan"},
            {
            path:"/expenditure",
            title:"支出",
            component:"Expenditure"},
            {
            path:"/loanAccounting",
            title:"核算",
            component:"LoanAccounting"},
            {
            path:"/loanExaminationAndApproval",
            title:"审批",
            component:"LoanExaminationAndApproval"},]
    },
    //收款管理
    receivablesManagement:{
        name:"收款管理",
        data:[
            {
            path:"/receivables",
            title:"应收款",
            component:"Receivables"},
            {
            path:"/cashReceipts",
            title:"实收款",
            component:"CashReceipts"},
            {
            path:"/receivablesAccounting",
            title:"核算",
            component:"ReceivablesAccounting"},
            {
            path:"/receivablesExaminationAndApproval",
            title:"审批",
            component:"ReceivablesExaminationAndApproval"},]
    },
    //讲师管理
    lecturerManagement:{
        name:"讲师管理",
        data:[
            {
            path:"/lecturer",
            title:"讲师",
            component:"Lecturer"},
            {
            path:"/classRemuneration",
            title:"课酬",
            component:"ClassRemuneration"},
            {
            path:"/teachingArrangement",
            title:"授课安排",
            component:"TeachingArrangement"},]
    },
    //实施管理
    implementationManagement:{
        name:"实施管理",
        data:[
            {
            path:"/rafficTravel",
            title:"交通差旅",
            component:"RafficTravel"},
            {
            path:"/segmenHotel",
            title:"会议酒店",
            component:"SegmenHotel"},
            {
            path:"/serviceConsumables",
            title:"服务耗材",
            component:"ServiceConsumables"},]
    },
    //视图管理
    viewManagement:{
        name:"视图管理",
        data:[
            {
             path:"/view",
             title:"视图管理",
             component:"View"}
            
        ]
    }
    }
    // const Language = {
    //     // 项目管理
    //     projectManagement:{
    //         name:"项目管理",
    //         data:[
    //             {id:"1",
    //              path:"/customer",
    //              title:"客户",
    //              component:"Customer"},
    //             {id:"2",
    //              path:"/contact",
    //              title:"联系人",
    //              component:"Contact"},
    //             {id:"3",
    //              path:"/trainingProgram",
    //              title:"培训项目",
    //              component:"TrainingProgram"},
    //             {id:"4",
    //             path:"/biddingPlan",
    //             title:"所属项目集",
    //             component:"BiddingPlan"},
    //             {id:"5",
    //             path:"/contract",
    //             title:"合同管理",
    //             component:"Contract"},
    //             {id:"6",
    //             path:"/costing",
    //             title:"成本管理",
    //             component:"Costing"}]
    //     },
    //     //预决算管理
    //     budgetAndFinalAccountsManagementcond:{
    //         name:"预决算管理",
    //         data:[
    //             {id:"1",
    //             path:"/budget",
    //             title:"预算",
    //             component:"Budget"},
    //             {id:"2",
    //             path:"/finalAccounts",
    //             title:"决算",
    //             component:"FinalAccounts"},
    //             {id:"3",
    //             path:"/budgetAccounting",
    //             title:"核算",
    //             component:"BudgetAccounting"},
    //             {id:"4",
    //             path:"/budgetExaminationAndApproval",
    //             title:"审批",
    //             component:"BudgetExaminationAndApproval"}]
    //     },
    //     //借款支出管理
    //     loanExpenditureManagement:{
    //         name:"借款支出管理",
    //         data:[
    //             {id:"1",
    //             path:"/loan",
    //             title:"借款",
    //             component:"Loan"},
    //             {id:"2",
    //             path:"/expenditure",
    //             title:"支出",
    //             component:"Expenditure"},
    //             {id:"3",
    //             path:"/loanAccounting",
    //             title:"核算",
    //             component:"LoanAccounting"},
    //             {id:"4",
    //             path:"/loanExaminationAndApproval",
    //             title:"审批",
    //             component:"LoanExaminationAndApproval"},]
    //     },
    //     //收款管理
    //     receivablesManagement:{
    //         name:"收款管理",
    //         data:[
    //             {id:"1",
    //             path:"/receivables",
    //             title:"应收款",
    //             component:"Receivables"},
    //             {id:"2",
    //             path:"/cashReceipts",
    //             title:"实收款",
    //             component:"CashReceipts"},
    //             {id:"3",
    //             path:"/receivablesAccounting",
    //             title:"核算",
    //             component:"ReceivablesAccounting"},
    //             {id:"4",
    //             path:"/receivablesExaminationAndApproval",
    //             title:"审批",
    //             component:"ReceivablesExaminationAndApproval"},]
    //     },
    //     //讲师管理
    //     lecturerManagement:{
    //         name:"讲师管理",
    //         data:[
    //             {id:"1",
    //             path:"/lecturer",
    //             title:"讲师",
    //             component:"Lecturer"},
    //             {id:"2",
    //             path:"/classRemuneration",
    //             title:"课酬",
    //             component:"ClassRemuneration"},
    //             {id:"3",
    //             path:"/teachingArrangement",
    //             title:"授课安排",
    //             component:"TeachingArrangement"},]
    //     },
    //     //实施管理
    //     implementationManagement:{
    //         name:"实施管理",
    //         data:[
    //             {id:"1",
    //             path:"/rafficTravel",
    //             title:"交通差旅",
    //             component:"RafficTravel"},
    //             {id:"2",
    //             path:"/segmenHotel",
    //             title:"会议酒店",
    //             component:"SegmenHotel"},
    //             {id:"3",
    //             path:"/serviceConsumables",
    //             title:"服务耗材",
    //             component:"ServiceConsumables"},]
    //     },
    //     //视图管理
    //     viewManagement:{
    //         name:"视图管理",
    //         data:[
    //             {id:"1",
    //              path:"/view",
    //              title:"视图管理",
    //              component:"View"}
                
    //         ]
    //     }
    //     }
    console.log("Language")
    // sessionStorage.Language=JSON.stringify(Language); 
    export default Language;