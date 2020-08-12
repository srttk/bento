import React from 'react';
import Layout from '@/components/Layout'
const NotFound = () => {
    return (
        <Layout title="Page Not found">
            <div className="w-8/12 mx-auto mt-6 border border-red-500 p-6">
                <h2 className="text-xl text-red-500 font-light text-center">Page Not found</h2>
            </div>
        </Layout>
    );
}

export default NotFound;
