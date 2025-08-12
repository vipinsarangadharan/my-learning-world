import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'React.js',
    src: '/img/react.png',
    description: (
      <>
        Learn React.js — the powerful JavaScript library for building modern,
        interactive UIs. Master components, hooks, and state management with
        hands-on examples.
      </>
    ),
  },
  {
    title: 'Next.js',
    src: '/img/next-js.png',
    description: (
      <>
        Next.js — the full-stack React framework for building fast, SEO-friendly
        web apps. Learn routing, server components, and API integration with
        real-world projects.
      </>
    ),
  },
  {
    title: 'Architecture',
    src: '/img/architecture.png',
    description: (
      <>
        Frontend Architecture is the blueprint for building scalable,
        maintainable, and high-performance web applications. Learn design
        patterns, modular structures, and best practices for modern UI
        development.
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div
        className="text--center"
        style={{ width: '50%', height: '50%', margin: 'auto' }}
      >
        <img src={src} role="img" />
      </div>
      <div
        className="text--center padding-horiz--md"
        style={{ marginTop: '40px' }}
      >
        <Heading as="h3">{title}</Heading>
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
