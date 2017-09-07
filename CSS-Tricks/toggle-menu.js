

			(function() {
				/* target the body */
				var bodyEl = $('body'),
					navToggleBtn = bodyEl.find('.nav-toggle-btn');

				navToggleBtn.on('click', function(e) {
					bodyEl.toggleClass('active-nav');
					/* Stops page from returning to the top, its default state, after clicking the menu toggle */
					e.preventDefault();
				});
			})();