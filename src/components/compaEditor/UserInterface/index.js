import React, {useState} from 'react';

import Toolbar from './Toolbar';
import Editors from './Editors';



let UserInterface = ({html, css, js, onChangeHTML, onChangeCSS, onChangeJS,  generateWebPage}) => {

    const [editor, setEditor] = useState('html');

    return(
        <div>
            
            <Toolbar setEditor={setEditor} generateWebPage={generateWebPage} />
            
            <Editors 
                html={html}
                css={css}
                js={js}
                onChangeHTML={onChangeHTML}
                onChangeCSS={onChangeCSS}
                onChangeJS={onChangeJS}
                generateWebPage={generateWebPage}
                editor={editor}
            />

        </div>
    );
};

export default UserInterface;