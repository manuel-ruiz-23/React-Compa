import React from 'react';
import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';

let Toolbar = ({
  setEditor,
  generateWebPage,
  buttonText
}) => React.createElement("div", {
  className: styles.edittorToggler
}, React.createElement("button", {
  className: styles.tab,
  onClick: () => setEditor('html')
}, "HTML"), React.createElement("button", {
  className: styles.tab,
  onClick: () => setEditor('css')
}, "Css"), React.createElement("button", {
  className: styles.tab,
  onClick: () => setEditor('js')
}, "javascript"), React.createElement("button", {
  className: styles.generateButton,
  onClick: generateWebPage
}, buttonText ? buttonText : 'generar'));

Toolbar.propTypes = {
  swichEditor: PropTypes.func.isRequired,
  generateWebPage: PropTypes.func.isRequired,
  buttonText: PropTypes.string
};
export default Toolbar;