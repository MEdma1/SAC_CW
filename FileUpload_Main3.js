(function() {
    
	
	let tmpl = document.createElement('template');
    	tmpl.innerHTML = `
    	
	<head>	
		<p>Excel File Upload Version 3.1</p>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/jszip.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.8.0/xlsx.js"></script>
	</head> 
	
	<body>
		<script>
			var ExcelToJSON = function() {

				this.parseExcel = function(file) {
					var reader = new FileReader();
					console.log(["T1", reader]);

					reader.onload = function(e) {
						var data = e.target.result;
						console.log(["T2", data]);
						var workbook = XLSX.read(data, {
							type: 'binary'
						});
						console.log(["T3", workbook]);

						workbook.SheetNames.forEach(function(sheetName) {
							// Here is your object
							var XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
							console.log(["T4", XL_row_object]);
							var json_object = JSON.stringify(XL_row_object);
							console.log(["T5", json_object]);

							console.log(JSON.parse(json_object));
							jQuery('#xlx_json').val(json_object);
						})
					};

					reader.onerror = function(ex) {
						console.log(ex);
					};

					reader.readAsBinaryString(file);
				};
			};

			function handleFileSelect(evt) {

				var files = evt.target.files; // FileList object
				console.log(["T6", files]);
				var xl2json = new ExcelToJSON();
				console.log(["T7", xl2json]);
				xl2json.parseExcel(files[0]);
			}
		</script>

		<form enctype="multipart/form-data">
			<input id="upload" type=file name="files[]">
		</form>

		<textarea class="form-control" rows=35 cols=120 id="xlx_json"></textarea>

		<script>
			jQuery('#xlx_json').val("hallo");
			document.getElementById('upload').addEventListener('change', handleFileSelect, false);
		</script>
    </body>

    	`;

    customElements.define('com-sac-customwidget-fileupload3', class FileUplMaEr3 extends HTMLElement {


        constructor() {
		// Always call super first in constructor
		super();
		// write element functionality in here
		this._shadowRoot = this.attachShadow({mode: "open"});
		this._shadowRoot.appendChild(tmpl.content.cloneNode(true));
		this._values1 = [];
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
	get getTestData() {
		return this._values1;
        } 
		
	set setTestData(value) {
		this._values1 = value;
        }
	    
	    

    });
})();
