import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I'm a software engineer who loves the ocean.</p>
        <p>Find me on <a href="https://www.linkedin.com/in/tinaflower/">LinkedIn</a>.
				</p>
				<p>
          Check out my <a href="https://github.com/tmflower">Github</a>.
        </p>
      </section>
    </Layout>
  );
}
