$(function() {
	"use strict";
	$("#menuToggle, .btn-close").on("click", function(a) {
		a.preventDefault()
	}), $(".dropdown-menu a").click(function(a) {
		a.stopPropagation()
	}), $.backstretch(["assets/img/darkfaded.gif", "http://s3-ec.buzzfed.com/static/enhanced/terminal05/2012/2/24/15/anigif_enhanced-buzz-16739-1330115935-92.gif", "assets/img/background/3.jpg"], {
		duration: 3800,
		fade: 1500
	}), new WOW({
		mobile: !1
	}).init(), $(".dial").knob({
		draw: function() {
			if ("tron" == this.$.data("skin")) {
				var d, a = this.angle(this.cv),
					b = this.startAngle,
					c = this.startAngle,
					e = c + a,
					f = !0;
				return this.g.lineWidth = this.lineWidth, this.o.cursor && (c = e - .3) && (e += .3), this.o.displayPrevious && (d = this.startAngle + this.angle(this.value), this.o.cursor && (b = d - .3) && (d += .3), this.g.beginPath(), this.g.strokeStyle = this.previousColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, b, d, !1), this.g.stroke()), this.g.beginPath(), this.g.strokeStyle = f ? this.o.fgColor : this.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, c, e, !1), this.g.stroke(), this.g.lineWidth = 2, this.g.beginPath(), this.g.strokeStyle = this.o.fgColor, this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + 2 * this.lineWidth / 3, 0, 2 * Math.PI, !1), this.g.stroke(), !1
			}
		}
	}), $(".rotate").textrotator({
		animation: "dissolve",
		separator: ",",
		speed: 2e3
	}), $("#scroll").click(function() {
		if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
			var a = $(this.hash);
			if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
				scrollTop: a.offset().top
			}, 1200), !1
		}
	}), $("[data-toggle='collapse']").on("click", function(a) {
		a.preventDefault();
		var b = $('.v-icon[data-target="' + $(this).attr("data-target") + '"]'),
			c = $(b).children("i");
		/fa-minus/i.test($(c).attr("class")) ? $(c).removeClass("fa-minus").addClass("fa-plus") : $(c).removeClass("fa-plus").addClass("fa-minus")
	}), twitterFetcher.fetch({
		id: "581326764082884609",
		domId: "",
		maxTweets: 3,
		enableLinks: !0,
		showInteraction: !1,
		showUser: !1,
		customCallback: function(a) {
			for (var b = a.length, c = 0, d = '<ul class="twitterFeed">'; b > c;) d += "<li>" + a[c] + "</li>", c++;
			d += "</ul>", $("#twitterFeed").html(d), $(".twitterFeed").bxSlider({
				nextText: "",
				prevText: ""
			})
		}
	}), $("#nav").affix({
		offset: {
			top: $("#home").height() - 80
		}
	}), $(".navbar-nav").find("a").on("click", function(a) {
		if ($(this).attr('href').includes('#') ){
			a.preventDefault();
			"#" != $(this).attr("href") && $.scrollTo($(this).attr("href"), 1e3, {
				offset: {
					left: 0,
					top: -80
				}
			})
		}
	});
	var b = $("#portfolio-container");
	b.imagesLoaded(function() {
		b.shuffle({
			itemSelector: ".portfolio-item",
			speed: 450
		}), $("#filter a").click(function(a) {
			a.preventDefault(), $("#filter a").removeClass("active"), $(this).addClass("active");
			var c = $(this).attr("data-group");
			b.shuffle("shuffle", c)
		})
	}), $(".GITheWall").GITheWall({
		nextButtonClass: "fa fa-chevron-right",
		prevButtonClass: "fa fa-chevron-left",
		closeButtonClass: "fa fa-times",
		dynamicHeight: !1,
		onShow: function() {
			$("#portfolio-container").slideDown(300).fadeOut(300), $(".filter-tags").slideDown(300).fadeOut(300), $("#portfolio-more").slideDown(300).fadeOut(300)
		},
		onHide: function() {
			$("#portfolio-container").slideUp(300).fadeIn(300), $(".filter-tags").slideUp(300).fadeIn(300), $("#portfolio-more").slideUp(300).fadeIn(300)
		}
	}), $(".counter").counterUp({
		delay: 100,
		time: 2e3
	}), $("#signupForm").bootstrapValidator({
		message: "This value is not valid",
		feedbackIcons: {
			valid: "fa fa-check",
			invalid: "fa fa-times",
			validating: "fa fa-refresh"
		},
		submitHandler: function(a, b, c) {
			var d = Ladda.create(c[0]),
				e = c.children(".ladda-label");
			d.start(), e.html("Signing up..."), $.get(b.attr("action"), b.serialize(), function(a) {
				e.html(a.message)
			}, "json").always(function() {
				d.stop(), a.disableSubmitButtons(!0)
			})
		},
		fields: {
			email: {
				validators: {
					notEmpty: {
						message: "Email cannot be empty"
					},
					emailAddress: {
						message: "The input is not a valid email address"
					}
				}
			}
		}
	}),
	$.fn.serializeObject = function()
	{
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name] !== undefined) {
	            if (!o[this.name].push) {
	                o[this.name] = [o[this.name]];
	            }
	            o[this.name].push(this.value || '');
	        } else {
	            o[this.name] = this.value || '';
	        }
	    });
	    return o;
	},
	$("#contactForm").bootstrapValidator({
		fields: {
			name: {
				validators: {
					notEmpty: {
						message: "Name cannot be empty"
					},
					stringLength: {
						min: 6,
						max: 30,
						message: "Name must be more than 6 and less than 30 characters long"
					},
					regexp: {
						regexp: /^[a-zA-Z\s]+$/,
						message: "Name can only consist alphabetical characters"
					}
				}
			},
			contactEmail: {
				validators: {
					notEmpty: {
						message: "Email cannot be empty"
					},
					emailAddress: {
						message: "The input is not a valid email address"
					}
				}
			},
			message: {
				validators: {
					notEmpty: {
						message: "Message cannot be empty"
					}
				}
			}
		},
		feedbackIcons: {
			valid: "fa fa-check",
			invalid: "fa fa-times",
			validating: "fa fa-refresh"
		},
		submitHandler: function(a, b, c) {
			var d = Ladda.create(c[0]),
				e = c.children(".ladda-label");
			d.start();
			e.html("Sending...");

			$.post('/contact?'+b.serialize(), function(c) {
				console.log(c);
				e.html("Sent!");
				setTimeout(function() {
					e.html("Submit"), $(b[0])[0].reset(), a.resetForm()
				}, 500)
			}, function(c){
				console.log('failed', c);
				e.html("Error!")
			});
		}
	})
});