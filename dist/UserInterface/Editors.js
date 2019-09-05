import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import brace from "brace";
import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';
import styles from '../compa.module.css';

const Editors = ({
  html,
  css,
  js,
  onChangeHTML,
  onChangeCSS,
  onChangeJS,
  editor
}) => {
  const renderEditor = () => {
    switch (editor) {
      case 'html':
        return React.createElement(AceEditor, {
          mode: "html",
          theme: "monokai",
          fontSize: 20,
          value: html,
          onChange: onChangeHTML,
          name: "html_compa",
          editorProps: {
            $blockScrolling: Infinity
          }
        });

      case 'css':
        return React.createElement(AceEditor, {
          mode: "css",
          theme: "monokai",
          fontSize: 20,
          value: css,
          onChange: onChangeCSS,
          name: "css_compa",
          editorProps: {
            $blockScrolling: Infinity
          }
        });

      case 'js':
        return React.createElement(AceEditor, {
          mode: "javascript",
          theme: "monokai",
          fontSize: 20,
          value: js,
          onChange: onChangeJS,
          name: "javascript_compa",
          editorProps: {
            $blockScrolling: Infinity
          }
        });

      default:
        return React.createElement("h1", null, "Error");
    }
  };

  return React.createElement("div", {
    className: styles.editors
  }, renderEditor());
};

Editors.propTypes = {
  html: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired,
  onChangeHTML: PropTypes.func,
  onChangeCSS: PropTypes.func,
  onChangeJS: PropTypes.func,
  generateWebPage: PropTypes.func
};
export default Editors;