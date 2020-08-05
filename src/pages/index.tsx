import React from 'react';
import { useQuery } from '../lib/gql-client';

const HELLO_QUERY = `
    {
        hello
    }
`

const Index: React.FC = () => {
    const { data, error, loading } = useQuery(HELLO_QUERY)
    return (
        <div>
            { error && <p>Error</p>}
            { loading && <p>Loading</p> }
            {data && <h1>{data.hello} Bento</h1>}
        </div>
    );
}

export default Index;
