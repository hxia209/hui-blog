import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Blog Posts',
    Svg: require('@site/static/img/blog.svg').default,
    description: (
      <>
        Small and quick blog posts focusing in specific issues that I&apos;ve personally have encountered and worked on.
      </>
    ),
  },
  {
    title: 'Tech Guides',
    Svg: require('@site/static/img/article.svg').default,
    description: (
      <>
        Full on guides with step by step instructions and code snippets.
      </>
    ),
  },
  {
    title: 'Personal Touch',
    Svg: require('@site/static/img/personal.svg').default,
    description: (
      <>
        Some personal feedback regarding Movies, TV shows, books, travels and food that I've recently experienced.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
