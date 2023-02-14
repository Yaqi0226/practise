let data={
    input:{
        type:'全部',
        title:''
    },
    menu:[
        {'type':'主廚的話','title':'餐點簡介與相關說明','link':'javascript:;'},
        {'type':'餐具擺盤','title':'萬用白瓷 VS Code 與套裝工具組','link':'javascript:;'},
        {'type':'開胃餐點','title':'中式資料綁定佐無毒 jQuery 畫面處理','link':'javascript:;'},
        {'type':'開胃餐點','title':'古早味事件燉畫面綁定','link':'javascript:;'},
        {'type':'開胃餐點','title':'清爽表單處理佐雙向資料','link':'javascript:;'},
        {'type':'風味沙拉','title':'天然 CSS 過場佐 jQuery 動畫','link':'javascript:;'},
        {'type':'風味沙拉','title':'異國風情資料觀測與設定','link':'javascript:;'},
        {'type':'總匯拼盤','title':'家鄉通訊錄佐手作 API','link':'javascript:;'},
        {'type':'主廚推薦','title':'科學單檔模組化料理','link':'javascript:;'},
        {'type':'主廚推薦','title':'清燉嫩煮百頁路由','link':'javascript:;'},
    ]
}

let vm= new Vue({
    el:'#app',
    data:data,
    computed:{
        typeMenu(){
            if(this.input.type !== '全部'){
                return this.menu.filter(item=>{
                    return item.type === this.input.type
                })
                
            }else{
                return this.menu
            }
        },
        titleMenu(){
            if(this.input.title){
                return this.typeMenu.filter(item =>{
                    let content =item.title.toLowerCase()
                    let keyword =this.input.title.toLowerCase()
                    return content.indexOf(keyword) !== -1
                })
            }else{
                return this.typeMenu
            }
        }

    }
})