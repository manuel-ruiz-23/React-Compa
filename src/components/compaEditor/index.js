import React from 'react';


import getGeneratedPageURL from './generatePageURL';
// import Editors from './UserInterface/Editors';
import UserInterface from './UserInterface';

import styles from './compa.module.css';

class CompaEditor extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            url: '',
            html: this.props.html || '',
            css: this.props.css || '',
            js: this.props.js || '',
        }

        this.onChangeHTML = this.onChangeHTML.bind(this)
        this.onChangeCSS = this.onChangeCSS.bind(this)
        this.onChangeJS = this.onChangeJS.bind(this)
        this.generateWebPage = this.generateWebPage.bind(this)
    }

    generateWebPage(){
        const { html, css, js } = this.state;

        const url = getGeneratedPageURL({
            html,
            css,
            js
        });

        this.setState({
            url
        })
    }

    onChangeHTML(newValue){
        this.setState({
            html: newValue
        });
    }
    onChangeCSS(newValue){
        this.setState({
            css: newValue
        });
    }
    onChangeJS(newValue){
        this.setState({
            js: newValue
        });
    }

    render(){
        const {html, css, js} = this.state;
        return(
            <div className={styles.compa}>
                
                
                <UserInterface
                    html={html}
                    css={css}
                    js={js}
                    onChangeHTML={this.onChangeHTML}
                    onChangeCSS={this.onChangeCSS}
                    onChangeJS={this.onChangeJS}
                    generateWebPage={this.generateWebPage}
                />
                
                <iframe 
                    id="canvas" 
                    name="canvas" 
                    title="canvas"
                    src={this.state.url}
                    className={styles.canvas}>

                </iframe>
            </div>
            
        );
    }
}

export default CompaEditor;