import React from 'react';
import Layout from '../lib/hoagie-ui/Layout';
import Footer from '../components/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import { Pane } from 'evergreen-ui';
import "../lib/hoagie-ui/theme.css"
import "./mail.css"
import './quill.snow.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <Pane>
        <Head>
        <title>App by Hoagie</title>
      </Head>
      <Theme>
      <Layout name="menus">
      <Pane
          display="flex"
          width="100%"
          justifyContent="center"
        >
        </Pane>
      <Component {...pageProps} />
      </Layout>
      </Theme>
    </Pane>
  );
}