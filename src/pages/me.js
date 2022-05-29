import React from 'react';
import Layout from '@theme/Layout';

function me() {
  return (
    <Layout title="About me">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/img/profile.jpg" alt="Profile Picture"/>
          </figure>
        </div>
        <div class="content">
        <p>Hello! My name is Hui and welcome to my blog.</p> 
        <p>I'm an tech entusiast, open-source adopter, DevOps engineer, Java developer and newbie blogger.</p>
        </div>
      </div>
    </Layout>
  );
}

export default me;