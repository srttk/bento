import React from 'react';
import Layout from '@/components/Layout';
import Banner from '@/components/Banner';
import { useQuery } from '@/lib/gql-client';

const HELLO_QUERY = `
    {
        hello
    }
`

const Index: React.FC = () => {
    const { data, error, loading } = useQuery(HELLO_QUERY)
    return (
        <Layout title="Welcome to bento">
        <div className="app">
            { error && <p>Error</p>}
            { loading && <p>Loading</p> }
            {data && <p>{data.hello}</p>}
        </div>
        </Layout>
    );
}

export default Index;
