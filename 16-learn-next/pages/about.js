import React, { memo } from "react";
import AppLayout from "../components/app-layout";

// styled-jsx: 一种css in js的技术(nextjs)
// styled-components;

export default memo(function About() {
  return (
    <div>
      <h2>About</h2>
      <p>公司成立于1998年，。。。。</p>

      <style>
        {`p {
          color:blue;
          text-decoration: underline;
        }`}
      </style>
      
    </div>
  );
});
