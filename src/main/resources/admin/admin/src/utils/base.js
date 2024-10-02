const base = {
    get() {
        return {
            url : "http://localhost:8080/zhihuigongyuguanli/",
            name: "zhihuigongyuguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/zhihuigongyuguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "产业园区智慧公寓管理系统"
        } 
    }
}
export default base
