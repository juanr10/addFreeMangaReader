import React from 'react';
import NavBar from './NavBar';
import Head from 'next/head';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Add Free Manga Reader</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavBar />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
