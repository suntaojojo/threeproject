// 该配置文件是用于配置网络请求需要的uri地址
// 集中管理地址，效率高

// uri的特定前缀
// let prefix = "/api";

// export default {
//     // 获取城市的信息
//     getCities: prefix + "/getCitiesInfo",
//     // 获取正在热映列表
//     getNowPlaying: prefix + "/getNowPlayingFilmList",
//     // 获取即将上映列表
//     getComingSoon: prefix + "/getComingSoonFilmList",
//     // 获取电影详情信息
//     getDetail: prefix + "/getFilmInfo",
//     // ....
// };
let prefix = '/admin'
export default {
  autoPlaypic: prefix + "/index/banner/type=4",
  firstTitle: prefix + "/module/one",
  course: prefix + "/module/all?rel_id=13&banner_type_id=4",
  allFreecourseTitle:prefix + "/module/classify?id=32",
  allFreecourse:prefix + "/module/classify/list?id=32&classify_id=0&page=1&limit=5",
  allHotcourseTitle:prefix + "/module/classify?id=45",
  allHotcourse:prefix + "/module/classify/list?id=45&classify_id=0&page=1&limit=5",
  bannerlist:prefix + "/module/all?rel_id=13&banner_type_id=4"
}