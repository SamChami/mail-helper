import React, { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Defaults from '../helpers/defaults';

const LiquidPopup = ({ getData, close, data, ...rest }) => {
  const [code, changeCode] = useState(data || `
    {
      "key": "Value"
    }
    `);

  const sendDataToMain = () => {
    if (getData) {
      getData(JSON.parse(code));
      close();
    }
  };

 return (
    <div className="liquid-popup">
      <h1 className="text-center">Liquid Variables</h1>
      <button onClick={() => close()} className="liquid-popup__exit">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div className="liquid-popup__editor">
      <Editor
        value={code}
        onValueChange={(c) => changeCode(c)}
        highlight={(c) => highlight(c, languages.js)}
        padding={10}
        autoFocus={true}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          minHeight: "200px",
        }}
      />
      </div>
      <button onClick={() => changeCode(Defaults.shopify)}className="btn-shopify margin">Load Shopify Email Variables</button>
      <button onClick={sendDataToMain} className="btn-cta">Sync</button>
    </div>
 );
};
export default LiquidPopup;
