if (typeof window !== "undefined" && typeof fenster === "undefined" && typeof window.fenster === "undefined") {

	!(function(a, b) {
		const fenster = (
		    function() {
		        let isDebug = false;

		        try{
		        	const searchParams = new URL(window.location.href).searchParams;
		        	isDebug = ["1", "true"].includes(searchParams.get("debug"));
		        } catch(e) {
		        }

		        isDebug && console.log("fenster...")

		        let innerWidth = window.innerWidth;
		        let innerHeight = window.innerHeight;

		        let interval = null;
		        let fnResize = null;

		        function subscribeToOffsetUpdates(_fnResize) {
		            fnResize = _fnResize;
		        };

		        function init() {
		            isDebug && console.log("init 'fenster'...");

		            window.famobi.adapters.add("viewport", "offsetChanged", offsets => {
		            	isDebug && console.log("[offsets] onOffsetChange");
		            	update();
		            });

		            update();
		        };

		        function update() {

		        	let top = window.famobi?.getOffsets()?.top || 0;
		        	let right = window.famobi?.getOffsets()?.right || 0;
		        	let bottom = window.famobi?.getOffsets()?.bottom || 0;
		        	let left = window.famobi?.getOffsets()?.left || 0;

		            isDebug && console.log(
		                "[offsets] top: %s, right: %s, bottom: %s, left: %s",
						top,
						right,
						bottom,
						left
		            );

		            innerWidth = window.innerWidth - right;
		            innerHeight = window.innerHeight - bottom;

		            isDebug && console.log("[offsets] innerWidth: %s, innerHeight: %s",
		                innerWidth,
		                innerHeight
		            );

		            if(typeof fnResize === "function") {
		                fnResize();
		            }
		        };

		        function test(right = 0, bottom = 0) {

		        	const offsets = {
		                    top: 0,
		                    right,
		                    bottom,
		                    left: 0
		                };

		            window.famobi.getOffsets = () => {
		                return offsets;
		            }

		            window.famobi.adapters.run("viewport", "offsetChanged", offsets);
		        };

		        addEventListener("resize", (event) => {
		            update();
		        });

		        interval = setInterval(() => {
		        	isDebug && console.log("[fenster] checking for onOffsetChange")
		            if (typeof window.famobi?.adapters?.add === "function") {
		                clearInterval(interval);
		                init();
		            }
		        }, 250);

		        return {
		            get innerHeight() {
		                return innerHeight;
		            },
		            get innerWidth() {
		                return innerWidth;
		            },
		            update: update,
		            subscribeToOffsetUpdates: subscribeToOffsetUpdates,
		            test: test
		        };
		    }
		)();

		b[a] = fenster;
	})("fenster", window);
}