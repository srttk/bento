import React from 'react';
import { GetServerSideProps } from 'next';
import Layout from '@/components/Layout';
import { rawRequest } from '@/lib/gql-client';

const HELLO_QUERY = `
    {
        hello
    }
`;

const SsrDemo = ({ data }) => {
  return (
    <Layout title="Server Side Render">
      <p className="text-intro">{data.hello}</p>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const data = await rawRequest(HELLO_QUERY);
  return {
    props: { data }
  };
};

export default SsrDemo;
