import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={s.wrapper}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  // bla: PropTypes.string,
};

Section.defaultProps = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Section;
