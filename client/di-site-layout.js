import { LitElement, html } from 'lit';

import '@material/web/tabs/tabs.js'
import '@material/web/tabs/primary-tab.js';
import '@material/web/tabs/secondary-tab.js';
export class DISiteLayout extends LitElement {
    render() {
        return html`
            <md-tabs aria-label="Content to view">
                <md-primary-tab id="photos-tab" aria-controls="photos-panel">
                    法语
                </md-primary-tab>
                <md-primary-tab id="videos-tab" aria-controls="videos-panel">
                    链接
                </md-primary-tab>
                <md-primary-tab id="music-tab" aria-controls="music-panel">
                    资源
                </md-primary-tab>
            </md-tabs>

            <div id="photos-panel" role="tabpanel" aria-labelledby="photos-tab">
                ...的
            </div>
            <div id="videos-panel" role="tabpanel" aria-labelledby="videos-tab" hidden>
                ... 感
            </div>
            <div id="music-panel" role="tabpanel" aria-labelledby="music-tab" hidden>
                ...分割
            </div>
    
           
        `;
    }
}

customElements.define('di-site-layout', DISiteLayout);
