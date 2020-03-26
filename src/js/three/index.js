//обычные классы это работа с threejs
export default class THREEAPP {
  constructor(props) {
    //init
  }
  start = (callback = () => { }) => { //execute callback as app started pls
    setTimeout(callback, 3000);
  }
}