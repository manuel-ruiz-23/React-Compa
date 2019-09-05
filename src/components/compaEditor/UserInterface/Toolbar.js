import React from 'react';
import PropTypes from 'prop-types';

import styles from './Toolbar.module.css';

let Toolbar = ({setEditor, generateWebPage, buttonText}) => (
    <div className={styles.edittorToggler}>
        <button className={styles.tab} onClick={() => setEditor('html')}>HTML</button>
        <button className={styles.tab} onClick={() => setEditor('css')}>Css</button>
        <button className={styles.tab} onClick={() => setEditor('js')}>javascript</button>
        <button className={styles.generateButton} onClick={generateWebPage}>
            {buttonText ? buttonText : 'generar'} 
        </button>
    </div> 
);

Toolbar.propTypes = {
    swichEditor: PropTypes.func.isRequired,
    generateWebPage: PropTypes.func.isRequired,
    buttonText: PropTypes.string,  
};

export default Toolbar;