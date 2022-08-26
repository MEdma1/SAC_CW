(function() {
    let tmpl = document.createElement('template');
    tmpl.innerHTML = `
    
		<input type="file" id="theCSV" name="theCSV" />
		
        <div id="results"></div>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js"></script>

        <script>
            $(function() {
                var csv;

                $("#theCSV").change(function(e) {
                    Papa.parse(e.target.files[0], {
                        download: true,
                        header: true,
                        delimiter: ',',
                        skipEmptyLines: true,
                        error: function(err, file, inputElem, reason) {
                            $('#results').append('Error: ' + err + ' : ' + reason + '<br>');
                            return false;
                        },
                        complete: function(results) {
                            $('#results').append(JSON.stringify(results.data) + '<br>');
                        }
                    });
                });
            });
        </script>
		
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