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
        <p>My name is Vien Arman C. Cabrera, My Hobbies are Playing basketball, editing, and playing video
games are some of my pastimes. I particularly like listening to rap and some r&b. My favorite food is
chicken, but I really enjoy experimenting with different kinds of food. I am a lifelong student who is open
to new ideas and information. I like volunteering and supporting my community in my spare time.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}