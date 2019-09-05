const getGeneratedPageURL = ({
  html,
  css,
  js
}) => {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], {
      type
    });
    return URL.createObjectURL(blob);
  };

  const cssURL = getBlobURL(css, 'text/css');
  const jsURL = getBlobURL(js, 'text/javascript');
  const source = `
        <html>
        <head>
            ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
            ${js && `<script src="${jsURL}"><\/script>`}
        </head>
        <body>
            ${html || ''}
        </body>
        </html>
    `;
  return getBlobURL(source, 'text/html');
};

export default getGeneratedPageURL;