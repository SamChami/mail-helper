import React, { useState, useEffect } from 'react';

import Defaults from '../helpers/defaults';

const TEMPLATES = [
  {
    title: 'Main Template',
    template: Defaults.main,
  },
  {
    title: 'Simple Template',
    template: Defaults.simple,
  },

];

const TemplateSelect = ({ onSelect, current, ...rest }) => {
  const [expanded, toggleExpanded] = useState(false);

  useEffect(() => {
    if (expanded === false) {
      localStorage.setItem('draft', current);
    }
  }, [expanded, current]);

 return ([
   <button
     onClick={() => toggleExpanded(!expanded)}
     className="btn"
     key="btn"
   >
     Select Template
   </button>,
   <div className="template-box" data-expanded={expanded}>
    <button onClick={() => toggleExpanded(false)} className="template-close">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </button>
    <button className="template-option template-option__save" onClick={() => onSelect(localStorage.getItem('draft'))}>
      Last Save
    </button>
    {TEMPLATES.map((t) => (
      <button className="template-option" key={t.title} onClick={() => onSelect(t.template)}>
        {t.title}
      </button>
    ))}
   </div>
 ]);
};
export default TemplateSelect;
