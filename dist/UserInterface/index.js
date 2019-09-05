import React, { useState } from 'react';
import Toolbar from './Toolbar';
import Editors from './Editors';

let UserInterface = ({
  html,
  css,
  js,
  onChangeHTML,
  onChangeCSS,
  onChangeJS,
  generateWebPage
}) => {
  const [editor, setEditor] = useState('html');
  return React.createElement("div", null, React.createElement(Toolbar, {
    setEditor: setEditor,
    generateWebPage: generateWebPage
  }), React.createElement(Editors, {
    html: html,
    css: css,
    js: js,
    onChangeHTML: onChangeHTML,
    onChangeCSS: onChangeCSS,
    onChangeJS: onChangeJS,
    generateWebPage: generateWebPage,
    editor: editor
  }));
};

export default UserInterface;