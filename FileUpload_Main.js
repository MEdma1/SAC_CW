(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    
		<p>Excel File Upload Version 1.0</p>
		
		<form enctype="multipart/form-data">
       		  <input id="upload" type=file name="files[]">
    		</form>

    		<textarea class="form-control" rows=35 cols=120 id="xlx_json"></textarea>
		
    `;

    customElements.define('com-sac-customwidget-fileupload', class FileUplMaEr extends HTMLElement {


        constructor() {
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._firstConnection = false;
        }

        //Fired when the widget is added to the html DOM of the page
        connectedCallback() {
            this._firstConnection = true;
            this.redraw();
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {
            if (this._firstConnection) {
                this.redraw();
            }
        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy() {}



        redraw() {
		}
    });
})();
