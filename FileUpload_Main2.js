(function() {
    
	var dataset = [{"Data_OS": "123OS"},{"Data_OS": "456OS"}];
	
	let CustData = "123"
	
	
	let tmpl = document.createElement('template');
    	tmpl.innerHTML = `
    
		<p>Excel File Upload Version 2.1</p>
		
		<form enctype="multipart/form-data">
       		  <input id="upload" type=file name="files[]">
    		</form>

    	`;

    customElements.define('com-sac-customwidget-fileupload2', class FileUplMaEr2 extends HTMLElement {


        constructor() {
			// Always call super first in constructor
            super();
			// write element functionality in here
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
            this._values1 = [];
	    this._values2 = [{"Data": "123"},{"Data": "456"}];
	    this._firstConnection = false;
        }

        //Fired when the widget is added to the html DOM of the page 
        connectedCallback() {
            this._firstConnection = true;
			console.log("added");
        }

        //Fired when the widget is removed from the html DOM of the page (e.g. by hide)
        disconnectedCallback() {
			console.log("deleted");
        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function first
        onCustomWidgetBeforeUpdate(oChangedProperties) {

        }

        //When the custom widget is updated, the Custom Widget SDK framework executes this function after the update
        onCustomWidgetAfterUpdate(oChangedProperties) {

        }

        //When the custom widget is removed from the canvas or the analytic application is closed
        onCustomWidgetDestroy() {
			console.log("removed");
		}

	//Getter & Setter
	get getMData() {
		console.log("getMData");
		return this._values2;
		var Mdata = this._values2
        }
	get getTestData() {
		return [{group: "abc", value: 123},{group: "def", value: 456}];
        }
	get getCustomData() {
		return CustData
        }   
	set setCustomData(value) {
		console.log("setCustData");
		CustData = value;
        }
	    
	    

    });
})();
