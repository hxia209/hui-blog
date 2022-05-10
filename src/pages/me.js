import React from 'react';
import Layout from '@theme/Layout';

function me() {
  return (
    <Layout title="About me">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>About me</p>
        <p>
          Hello! My name is Hui and welcome to my blog. I'm an tech entusiast, open-source adopter, DevOps engineer, Java developer and newbie blogger. 
        </p>
      </div>
    </Layout>
  );
}

export default me;