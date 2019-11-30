import {createGlobalStyle} from 'styled-components';
import React from 'react';
import ReactDOM from 'react-dom';
import tree from './store.js';
import {useRoot, useBranch} from 'baobab-react/hooks';

const GlobalCSS = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
    }

    body {
        margin: 0;
        height: 100%;
    }

    #root {
        height: 100%;
    }
`;

function Hello() {
    const {dispatch, hello} = useBranch({hello: ['hello']});

    return (
        <div>
            Hello has value: {hello}
        </div>
    )
}

function Application({store}) {
    const Root = useRoot(store);

    return (
        <Root>
            <GlobalCSS />
            <Hello />
        </Root>
    );
}

ReactDOM.render(<Application store={tree} />, document.getElementById('root'));
