import { decAction, subAction } from "../store/actionCreators";
// import { connect } from '../untils/connect.js'
import { connect, shallowEqual, useSelector } from "react-redux";

function About(props) {
  const { banners, recommends,counter } = useSelector((state) => ({
    banners: state.banners,
    recommends: state.recommends,
    counter:state.counter,
  }),shallowEqual);
  console.log("About页面重新渲染");
  return (
    <div>
      <h1>About</h1>
       <h2>当前计数：{counter}</h2>
     {/* <button onClick={e => props.decrement()}>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button> */}
      <h1>banner</h1>
      <ul>
        {banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <h1>recommend</h1>
      <ul>
        {recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default About;
