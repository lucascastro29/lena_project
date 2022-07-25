import Head from "next/head";
const Heads = () => {
     const icon = require("../images/icon/icon.ico");

  return (
    <Head>
      <title>Leñeria Malvin</title>
      <meta name="description" content="" />
      <link rel="icon" href={icon} />
    </Head>
  );
};

export default Heads;
