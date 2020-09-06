import React from 'react';
import Link from 'next/link';
import { useQuery } from '@/lib/gql-client';
import ErrorMessage from '@/components/ui/ErrorMessage'
import Layout from '@/components/Layout';

const HELLO_QUERY = `
    {
        hello
    }
`;

const Index: React.FC = () => {
  const { data, error, loading, refresh } = useQuery(HELLO_QUERY);
  return (
    <Layout title="Welcome to bento">
      <div className="app">
        {error && <ErrorMessage error={error} refresh={refresh}/>}
        {loading && <p>Loading</p>}
        {data && <p className="text-intro">{data.hello}</p>}
        
      </div>
      <h3 className="text-red-500 my-1 text-2xl font-sans font-thin">
        Sample Pages
      </h3>
      <ul className="list-disc list-inside px-6">
        <li>
          <Link href="/todo">
            <a className="text-red-500 underline">Todo Example</a>
          </Link>
        </li>
        <li>
          <Link href="/ssr">
            <a className="text-red-500 underline">Server Side Rendering</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
};

export default Index;
