import React from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { useQuery } from '@/lib/gql-client';

const HELLO_QUERY = `
    {
        hello
    }
`;

const Index: React.FC = () => {
  const { data, error, loading } = useQuery(HELLO_QUERY);
  return (
    <Layout title="Welcome to bento">
      <div className="app">
        {error && <p>Error</p>}
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
      </ul>
    </Layout>
  );
};

export default Index;
