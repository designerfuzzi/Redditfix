document.addEventListener("DOMContentLoaded", function(event) {
    const clear = (() => { const defined = v => v !== null && v !== undefined;
		const timeout = setInterval(() => {
			document.querySelectorAll("shreddit-player").forEach(function(elm){
				var interesting = elm.shadowRoot;
				if (defined(interesting)) {
					var target = interesting.children[0].children[0].children[0].children[1];
					if (defined(target)) {
						if (target.classList.contains("media-controls")) {
							//console.log("success:", target);
							//target.style = "display:none";
							target.remove();
						}
					}
				}
			});
		}, 600);
		return function() { clearTimeout(timeout);}
	})();
});
