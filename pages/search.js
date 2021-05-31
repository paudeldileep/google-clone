import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import response from "../response";
import {useRouter} from "next/router";
import SearchResults from "../components/SearchResults";

function Search({results}){

    console.log(results);

    const router = useRouter();

    return <div>
        <Head>
            <title>{router.query.term}-G-Clone Search</title>
        </Head>
        <Header/>
        <SearchResults results={results}/>
    </div>;
}

export default Search;


//server side rendering
export async function getServerSideProps(context){

    //to prevent from exhausting query quoata( only 100 daily free quota)
    const useDummyData=false;

    const data=useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());

    //after server side render(ssr) pass data to ui

    return{
        props:{
            results:data
        }
    }
}