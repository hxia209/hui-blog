import React from 'react';
import Layout from '@theme/Layout';

function me() {
  return (
    <Layout title="Hello">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Edit <code>pages/me.js</code> and save to reload.
        </p>
      </div>
    </Layout>
  );
}

export default me;