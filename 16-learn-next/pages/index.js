// import Head from "next/head";
import Link from "next/link";
// 模块样式css
import styles from "../styles/Home.module.css";

import AppLayout from "../components/app-layout";
import Router from "next/router";

import axios from "axios";
import { useEffect } from "react";

const Home = function (props) {
  const { name, banners, recommends } = props;

  const recommentItemClick = (item) => {
    Router.push({
      pathname: "/recommend",
      query: {
        id: item,
      },
    });
  };

  // useEffect(() => {
  //   axios({
  //     url: "http://123.207.32.32:8000/home/mutilidata",
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // }, []);

  return (
    // <AppLayout>
    <div>
      {/* 服务端渲染
      <a href="/about">关于</a>
      前端渲染
      <Link href="/about">
        <a>关于</a>
      </Link> */}

      <h1 className={styles.title}>Home页面</h1>
      <h2>Banner</h2>
      <h2>推荐数据</h2>
      <ul>
        {[1, 2, 3].map((item, index) => {
          return (
            {
              /* <Link key={item} href={`/recommend?id=${item}`}>
              <li>推荐数据：id{item}</li>
            </Link> */
            },
            (
              <li key={item} onClick={(e) => recommentItemClick(item)}>
                推荐数据：id{item}
              </li>
            )
          );
        })}
      </ul>
      <h2>name： {name}</h2>
      <h2>轮播图数据：</h2>
      <ul>
        {banners.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
      <h2>推荐数据:</h2>
      <ul>
        {recommends.map((item, index) => {
          return <li key={item.acm}>{item.title}</li>;
        })}
      </ul>
    </div>
    // </AppLayout>
  );
};

Home.getInitialProps = async (props) => {
  const res = await axios({ url: "http://123.207.32.32:8000/home/multidata" });

  return {
    name: "why",
    banners: res.data.data.banner.list,
    recommends: res.data.data.recommend.list,
  };
};

export default Home;
