import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from './components/layout';
import utilStyles from './styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
    </Layout>
  );
}