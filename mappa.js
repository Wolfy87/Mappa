/**
 * @preserve Mappa v1.0.0 (github.com/Wolfy87/Mappa)
 * Copyright 2011, Oliver Caldwell (flowdev.co.uk)
 */
(function() {
	// Initiate the Mappa object
	var Mappa = {
		addMap: function(name, mapTo) {
			// First we check if the name is in use
			if(this.hasOwnProperty(name) === false) {
				// Add the map
				this[name] = mapTo;
				
				// Return true if it has been added
				return true;
			}
			else {
				// It exists, return false
				return false;
			}
		},
		removeMap: function(name) {
			// Check if the function exists
			if(this.hasOwnProperty(name) === true) {
				// Remove the map
				delete this[name];
				
				// Return true if it has been removed
				return true;
			}
			else {
				// It does not exist, return false
				return false;
			}
		},
		mapList: []
	};
	
	// Check if the window variable exists
	if(typeof window === 'undefined') {
		// This means it is a node environment, so place it in the exports
		exports.Mappa = Mappa;
	}
	else {
		// Make sure it has not already been initialised
		if(typeof window.Mappa === 'undefined') {
			// Expose the object
			window.Mappa = Mappa;
		}
	}
}());