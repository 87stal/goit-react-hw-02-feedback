import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sections.module.css'

const Sections = ({title, children}) => (
  <section className={styles.section}>
    <h2 className="Title">{title}</h2>
    {children}
  </section>
);

Sections.propTypes = {
  title: PropTypes.string.isRequired,
  children:  PropTypes.element,
};

export default Sections;
