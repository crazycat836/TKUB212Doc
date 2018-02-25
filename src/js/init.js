(function ($) {
    $(function () {
        var window_width = $(window).width();

        // convert rgb to hex value string
        function rgb2hex(rgb) {
            if (/^#[0-9A-F]{6}$/i.test(rgb)) {
                return rgb;
            }

            rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

            if (rgb === null) {
                return "N/A";
            }

            function hex(x) {
                return ("0" + parseInt(x).toString(16)).slice(-2);
            }
            return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
        }

        $(".dynamic-color .col").each(function () {
            $(this)
                .children()
                .each(function () {
                    var color = $(this).css("background-color"),
                        classes = $(this).attr("class");
                    $(this).html("<span>" + rgb2hex(color) + " " + classes + "</span>");
                    if (classes.indexOf("darken") >= 0 || $(this).hasClass("black")) {
                        $(this).css("color", "rgba(255,255,255,.9");
                    }
                });
        });

        // Floating-Fixed table of contents
        setTimeout(function () {
            var tocWrapperHeight = 260; // Max height of ads.
            var tocHeight = $(".toc-wrapper .table-of-contents").length ?
                $(".toc-wrapper .table-of-contents").height() :
                0;
            var socialHeight = 95; // Height of unloaded social media in footer.
            var footerOffset = $("body > footer").first().length ?
                $("body > footer")
                .first()
                .offset().top :
                0;
            var bottomOffset =
                footerOffset - socialHeight - tocHeight - tocWrapperHeight;

            if ($("nav").length) {
                $(".toc-wrapper").pushpin({
                    top: $("nav").height(),
                    bottom: bottomOffset
                });
            } else if ($("#index-banner").length) {
                $(".toc-wrapper").pushpin({
                    top: $("#index-banner").height(),
                    bottom: bottomOffset
                });
            } else {
                $(".toc-wrapper").pushpin({
                    top: 0,
                    bottom: bottomOffset
                });
            }
        }, 100);

        //    Toggle Containers on page
        var toggleContainersButton = $("#container-toggle-button");
        toggleContainersButton.click(function () {
            $("body .browser-window .container, .had-container").each(function () {
                $(this).toggleClass("had-container");
                $(this).toggleClass("container");
                if ($(this).hasClass("container")) {
                    toggleContainersButton.text("Turn off Containers");
                } else {
                    toggleContainersButton.text("Turn on Containers");
                }
            });
        });

        // Detect touch screen and enable scrollbar if necessary
        function is_touch_device() {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        }
        if (is_touch_device()) {
            $("#nav-mobile").css({
                overflow: "auto"
            });
        }
        // Plugin initialization
        $(".collapsible").collapsible();
        $(".collapsible.expandable").collapsible({
            accordion: false
        });
        $(".scrollspy").scrollSpy();
        $("select")
            .not(".disabled")
            .formSelect();
        $(".sidenav").sidenav();
        $('.materialboxed').materialbox();
        $("img.lazy").lazyload({
            skip_invisible: true
        });

        // Fab
        $(".fixed-action-btn").floatingActionButton();
        $(".fixed-action-btn.horizontal").floatingActionButton({
            direction: "left"
        });
        $(".fixed-action-btn.click-to-toggle").floatingActionButton({
            direction: "left",
            hoverEnabled: false
        });
        $(".fixed-action-btn.toolbar").floatingActionButton({
            toolbarEnabled: true
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space