

import Link from "next/link";
import { useRouter } from "next/router";
import Head from 'next/head';
const Dynamic = () => {
    const router = useRouter();
    const query = router.query.dynamic;
    return (
        <div>
            <Head>
                <title>{query}</title>
            </Head>
            Hi dear I am dynmaic route: {query}
        </div>
    );
};

export default Dynamic;