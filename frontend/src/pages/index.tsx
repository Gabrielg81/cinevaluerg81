import type { NextPage } from 'next';
import Head from 'next/head';
import MovieCard from '../components/MovieCard';
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
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>

                </div>
            </div>

        </C.Listing>
  )
}

export default Home;
