  // models/counter.js
  exports.definition = {
  	config: {
  		columns: {
  		    "count": "integer"
  		},
  		adapter: {
  			type: "properties",
  			collection_name: "counter"
  		}
  	},
  	extendModel: function(Model) {
  		_.extend(Model.prototype, {
  			// extended functions and properties go here
  		});

  		return Model;
  	},
  	extendCollection: function(Collection) {
  		_.extend(Collection.prototype, {
  			// extended functions and properties go here
  		});

  		return Collection;
  	}
  };



