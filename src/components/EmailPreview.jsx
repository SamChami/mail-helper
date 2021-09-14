import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { ReactLiquid } from 'react-liquid';

const Iframe = ({ content, enableLiquid, data, ...rest }) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode = contentRef?.contentWindow?.document?.body

  let iframe_ref = null;
  const writeHTML = (frame) => {
    if (!frame) {
      return;
    }
    iframe_ref = frame;
    let doc = frame.contentDocument;
    doc.open();

    let contentToLoad = content;
    doc.write(contentToLoad);
    doc.close();
    frame.style.width = '100%';
    frame.style.height =  `${frame.contentWindow.document.body.scrollHeight}px`;
    frame.style.minHeight = 'calc(100vh - 70px)';
  };

  if (enableLiquid) {
    return (
      <ReactLiquid
        template={content}
        data={data}
        render={(renderedTemplate) => {
            let x;
            try {
              x = <span dangerouslySetInnerHTML={renderedTemplate} />
            } catch {
              x = <div>Invalid Liquid</div>
            }
            return x;
        }}
      />
    );
  }

  return (
    <iframe
      src="about:blank"
      title="email preview"
      scrolling="no"
      frameBorder="0"
      ref={writeHTML}
    />
  );
};
export default Iframe;
