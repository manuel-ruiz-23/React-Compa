import React from 'react';
import PropTypes from 'prop-types';
import AceEditor from 'react-ace';
import brace from "brace";

import 'brace/mode/javascript';
import 'brace/mode/html';
import 'brace/mode/css';
import 'brace/theme/monokai';

import styles from '../compa.module.css';

const Editors = ({html, css, js, onChangeHTML, onChangeCSS, onChangeJS, editor}) => {

    const renderEditor = () => {

        switch(editor){
            case 'html':
                return(
                    <AceEditor 
                        mode="html"
                        theme="monokai"
                        fontSize={20}
                        value={html}
                        onChange={onChangeHTML}
                        name="html_compa"
                        editorProps={{$blockScrolling: Infinity}}
                    />
                );
            case 'css':
                return(
                    <AceEditor 
                        mode="css"
                        theme="monokai"
                        fontSize={20}
                        value={css}
                        onChange={onChangeCSS}
                        name="css_compa"
                        editorProps={{$blockScrolling: Infinity}}
                    />
                );
            case 'js':
                return(
                    <AceEditor 
                        mode="javascript"
                        theme="monokai"
                        fontSize={20}
                        value={js}
                        onChange={onChangeJS}
                        name="javascript_compa"
                        editorProps={{$blockScrolling: Infinity}}
                    />
                )
            default:
                return(
                    <h1>Error</h1>
                )
        }
    }

    return(
        <div className={styles.editors}>
            
            {renderEditor()}

        </div>
    )
}

Editors.propTypes = {
    html: PropTypes.string.isRequired,
    css: PropTypes.string.isRequired,
    js: PropTypes.string.isRequired,
    onChangeHTML: PropTypes.func,
    onChangeCSS: PropTypes.func,
    onChangeJS: PropTypes.func,
    generateWebPage: PropTypes.func
}

export default Editors;