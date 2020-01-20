// We need to copy a valid certificate into node_modules/webpack-dev-server/ssl/server.pem
// So that Create React App's dev server has a valid certificate to use.

// create-react-app@3.3.0 has a bug where the websocket used is the wrong protocol when running on https.
// we need to replace line 62 in node_modules/react-dev-utils/webpackHotDevClient.js with
// protocol: window.location.protocol === 'https:' ? 'wss' : 'ws',
import { echo, cd, cp, pwd, exec, cat, sed, config } from 'shelljs';
config.silent = true;
config.fatal = true;


import path from 'path';

try {
    cat('../devops/local-utils/proxy/certs/iswwccertchain.crt', '../devops/local-utils/proxy/certs/iswwckey.key')
        .to('./node_modules/webpack-dev-server/ssl/server.pem');
    echo('cra-https-fix.ts: Successfully imported ISW ssl certificate from devops');
} catch (e) {
    echo(`
*****
cra-https-fix.ts: Unable to import certificate from devops. Have you checked out devops to ${path.resolve('../devops')} ?
cra-https-fix.ts: ${e}
*****
`);
process.exit(1);
}






const npmls = exec(`npm list react-scripts`).stdout;
const [_, version] = /react-scripts@(\d+\.\d+\.\d+)/g.exec(npmls);
if(version !== '3.3.0') {
    echo('cra-https-fix.ts: react-scripts version 3.3.0 is not installed! This code is probably no longer necessary!')
} else {
    try {
        sed('-i', 'protocol: \'ws\',', 'protocol: window.location.protocol === \'https:\' ? \'wss\' : \'ws\',', 'node_modules/react-dev-utils/webpackHotDevClient.js');
        echo('cra-https-fix.ts: Successfully modified node_modules/react-dev-utils/webpackHotDevClient.js')
    } catch (e) {
        echo(`
*****
cra-https-fix.ts: Unable to fix node_modules/react-dev-utils/webpackHotDevClient.js!
*****
    `);
    }
}


