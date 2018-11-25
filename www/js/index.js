
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        document.getElementById("boton").addEventListener('click', showbrowser);
        function showbrowser(){
        var ref = cordova.InAppBrowser.open('https://analytics.zoho.com/open-view/1838086000000002204', '_blank', 'location=yes');
        }
        console.log('deviceready');
        var p = document.querySelector('#device p');
        p.innerHTML = device.cordova + '<br/>' + device.platform + '<br/>'+ device.model + '<br/>' + device.uuid + '<br/>' + device.version + '<br/>' + device.manufacturer + '<br/>' + device.isVirtual + '<br/>' + device.serial + '<br/>';
        function checkConnection() {
    	var networkState = navigator.connection.type;

		var states = {};
	    states[Connection.UNKNOWN]  = 'Unknown connection';
	    states[Connection.ETHERNET] = 'Ethernet connection';
	    states[Connection.WIFI]     = 'WiFi connection';
	    states[Connection.CELL_2G]  = 'Cell 2G connection';
	    states[Connection.CELL_3G]  = 'Cell 3G connection';
	    states[Connection.CELL_4G]  = 'Cell 4G connection';
	    states[Connection.CELL]     = 'Cell generic connection';
	    states[Connection.NONE]     = 'No network connection';

	    document.getElementById("red").innerHTML = states[networkState];
}

checkConnection();
   
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    window.addEventListener("batterystatus", onBatteryStatus, false);

    function onBatteryStatus(status) {
    console.log("Level: " + status.level + " isPlugged: " + status.isPlugged);
    document.getElementById("Level").innerHTML = status.level;
    document.getElementById("isPlugged").innerHTML = status.isPlugged;
}

    }
};


app.initialize();