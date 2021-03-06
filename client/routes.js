Router.route("/", function() {
	this.render("dashboard", {
		data: function() {
			return {
				slides: slideshow.find({}),
				history: history_log.find({}, {sort: {time:-1}}),
				tagmode: tagmode.find({})
			}
		}
	})
})

Router.route("/history", function() {
	this.render("history", {
		data: function() {
			return {
				history: history_log.find({}, {sort: {time:-1}})
			}
		}
	})
})

Router.route("/slideshow", function() {
	this.render("slideshow", {
		data: function() {
			channel = 0;
			return {
				slides: slideshow.find({})
			}
		}
	})
})

Router.route("/slideshow/:channel", function() {
	this.render("slideshow", {
		data: function() {

			channel = this.params.channel
			return {
				slides: slideshow.find({channel:this.params.channel})
			}
		}
	})
})

Router.route("/overview", function() {
	this.render("overview")
})

// Old way
Router.route("/dashboard", function() {
	Router.go("/")
})

Router.route("/login/:token", function() {
	Meteor.loginWithKth(this.params.token, function() {
		Router.go("/")
	})
})
