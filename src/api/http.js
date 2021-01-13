// 封装axios
import axios from "axios";
import store from "@/store/index";
// 对于axios响应结果的处理的封装（响应拦截器）
// 例如：之前在学习axios的时候，说axios的网络请求返回结果是在返回对象ret的data属性中。而每次获取数据的时候都需要ret.data比较麻烦，此处可以进行封装的，如果返回结果中有ret.data我们就可以在这里直接返回ret.data。
axios.interceptors.response.use((ret) => {
    // console.log(ret.data)
    if (ret.data._token) {
        store.commit("user/setJwt", ret.data._token);
    }
    return ret.data || ret;
});

// 对于axios请求的处理的封装（请求拦截器）
// 例如：之前在node处学习了jwt,需要将其丢到请求中。由于其后续每次请求都需要在头中携带jwt，因此可以在此进行封装，让其每次都自动加入header头中。
axios.interceptors.request.use((req) => {
    req.headers['authorization'] = store.state.user._token
    return req
});

// 导出axios
export default axios;
