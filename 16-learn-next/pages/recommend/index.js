import { useRouter } from "next/router";
import React, { memo } from "react";

export default memo(function Recommend() {
  const router = useRouter();
  console.log(router);

  return (
    <div>
      <h2>Recommend: {router.query.id}</h2>
    </div>
  );
});
