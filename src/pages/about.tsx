import React from 'react';
import Layout from '@/components/Layout'
const About = () => {
    return (
        <Layout title="About bento">
            <p>Build with </p>
            <ul className="px-4">
                <li>Next.js</li>
                <li>Apollo GraphQL Server</li>
                <li>SWR</li>
                <li>graphql-request</li>
                <li>Prisma</li>
                <li>Tailwind.css</li>
            </ul>
        </Layout>
    );
}

export default About;
