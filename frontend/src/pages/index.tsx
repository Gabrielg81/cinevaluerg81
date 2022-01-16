import type { NextPage } from 'next';
import Head from 'next/head';
import Pagination from '../components/Pagination';
import * as C from './style.Index'

const Home: NextPage = () => {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <C.Listing>
            <Head>
                <title>Filmes e séries G81</title>
                <meta
                    name="description"
                    content="Avalie as séries indicadas."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Pagination />
        </C.Listing>
  )
}

export default Home;
