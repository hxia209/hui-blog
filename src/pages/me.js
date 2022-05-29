import React from 'react';
import Layout from '@theme/Layout';
import profile from '@site/static/img/profile.jpg';

function me() {
  return (
    <Layout title="About me">
      <div class="card">
        <div class="card-image">
          <figure class="image is-512x512 ">
            <img src={profile} alt="Profile Picture"/>
          </figure>
        </div>
        <div class="card-content">
          <p>Hello! My name is Hui and welcome to my blog.</p> 
          <p>I'm an tech entusiast, open-source adopter, DevOps engineer, Java developer and newbie blogger.</p>
        </div>
      </div>
    </Layout>
  );
}

export default me;