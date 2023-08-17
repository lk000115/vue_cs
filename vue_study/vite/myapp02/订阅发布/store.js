export default{
    datalist:[],
    // 订阅方法
    subscribe(cb){
        this.datalist.push(cb)
    },
    // 发布方法
    publish(value){
       this.datalist.forEach(cb=>cb(value)) 

    }


}