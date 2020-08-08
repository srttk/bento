import React from 'react';
import Banner from '@/components/Banner'
import { useQuery } from '@/lib/gql-client'

const HELLO_QUERY = `
    {
        hello
    }
`

const Index: React.FC = () => {
    const { data, error, loading } = useQuery(HELLO_QUERY)
    return (
        <div className="app">
            { error && <p>Error</p>}
            { loading && <p>Loading</p> }
            {data && <Banner title={`${data.hello} Bento`}/>}
        </div>
    );
}

export default Index;
