import { useState } from 'react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

import Defaults from './helpers/defaults';
import checkCompatibility from './helpers/checkCompatibility';
import EmailPreview from './components/EmailPreview';
import LiquidPopup from './components/LiquidPopup';
import TemplateSelect from './components/TemplateSelect';

function App() {
  const [code, changeCode] = useState(localStorage.getItem('draft') || Defaults.simple);
  const [expanded, toggleExpanded] = useState(true);
  const [mobilePreview, toggleMobilePreview] = useState(false);
  const [enableLiquid, toggleLiquid] = useState(false);
  const [liquidOptions, openLiquidOptions] = useState(false);
  const [liquidData, setLiquidData] = useState();

  return (
    <main data-expanded={expanded} data-preview-mobile={mobilePreview}>
      <header className="header">
        <div>
          <TemplateSelect
            current={code}
            onSelect={(template) => changeCode(template)}
          />
          <button
            onClick={() => checkCompatibility(code)}
            className="btn"
          >
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-alert-octagon"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
              <div className="btn-text">Check Browser Compatibility</div>
          </button>
        </div>
        <div>
          Email Generator
        </div>
        <div>
          <button
            onClick={() => toggleMobilePreview(!mobilePreview)}
            className="btn"
            disabled={!expanded}
          >
            {mobilePreview
              ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
            }
            <div className="btn-text">{mobilePreview ? 'Desktop View' : 'Mobile View' }</div>
          </button>
          <button
            onClick={() => openLiquidOptions(!liquidOptions)}
            className="btn btn-shopify"
            data-toggled={enableLiquid}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={enableLiquid ? '#fff' : 'none'} stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-droplet"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>
            <div className="btn-text">Enable Liquid Templating</div>
        </button>
        </div>
        <div>
          <button
            onClick={() => {
              toggleMobilePreview(false);
              toggleExpanded(!expanded);
            }}
            className="btn btn-main"
          >
            {expanded
              ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
              : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
             }
             <div className="btn-text">{expanded ? 'Preview' : 'Code'}</div>
          </button>
          <button
            onClick={() => localStorage.setItem('draft', code)}
            className="btn btn-send"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
            &nbsp;Save
            <div className="btn-text">Saves to localStorage</div>
          </button>
        </div>
      </header>
      <div className="content-section">
        <div className="code-section">
          <Editor
            value={code}
            onValueChange={(c) => changeCode(c)}
            highlight={(c) => highlight(c, languages.js)}
            padding={10}
            autoFocus={true}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
              minHeight: "calc(100vh - 70px)"
            }}
          />
        </div>
        <div className="email-previews">
          <div className="email-section email-preview">
            <EmailPreview
              content={code}
              enableLiquid={enableLiquid}
              data={liquidData}
            />
          </div>
          {!expanded && (
            <div className="email-section email-mobile-preview">
              <EmailPreview
                content={code}
                enableLiquid={enableLiquid}
                data={liquidData}
              />
            </div>
          )}
        </div>
      </div>
      {liquidOptions && (
        <LiquidPopup
          data={liquidData ? JSON.stringify(liquidData) : ''}
          getData={(d) => {
            setLiquidData(d);
            toggleLiquid(true);
          }}
          close={() => openLiquidOptions(false)}
        />
      )}
    </main>
  );
}

export default App;
