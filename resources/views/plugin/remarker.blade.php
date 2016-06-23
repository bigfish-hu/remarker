    (function($){
        $.feedback = function(options) {

            var settings = $.extend({
                project_id: {{ $id }},
                ajaxURL: '/api/feedbacks',
                postBrowserInfo: true,
                postHTML: false,
                postURL: true,
                proxy: undefined,
                letterRendering: false,
                initButtonText: 'SEND FEEDBACK',
                strokeStyle: 'black',
                shadowColor: 'black',
                shadowOffsetX: 1,
                shadowOffsetY: 1,
                shadowBlur: 10,
                lineJoin: 'bevel',
                lineWidth: 3,
                html2canvasURL:	"https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js",
                feedbackButton: '.feedback-btn',
                showDescriptionModal: true,
                isDraggable: true,
                onScreenshotTaken: function() {},
                tpl: {
                    description: "@include('plugin.description')",
                    highlighter: "@include('plugin.highlighter')",
                    overview: "@include('plugin.overview')",
                    submitSuccess: "@include('plugin.submit_success')",
                    submitError: "@include('plugin.submit_error')"
                },
                onClose: 				function() {},
                screenshotStroke:		true,
                highlightElement:		false,
                initialBox:				false
            }, options);
            var supportedBrowser = !!window.HTMLCanvasElement;
            var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(navigator.appVersion);
            var isFeedbackButtonNative = settings.feedbackButton == '.feedback-btn';
            var _html2canvas = false;
            if (
                    supportedBrowser &&
                    !mobile
            ) {
                if(isFeedbackButtonNative) {
                    $('body').append('<button class="feedback-btn feedback-btn-gray">' + settings.initButtonText + '</button>');
                }
                $(document).on('click', settings.feedbackButton, function(){
                    if(isFeedbackButtonNative) {
                        $(this).hide();
                    }
                    if (!_html2canvas) {
                        $.getScript(settings.html2canvasURL, function() {
                            _html2canvas = true;
                        });
                    }
                    var canDraw = false,
                            img = '',
                            h 	= $(document).height(),
                            w 	= $(document).width(),
                            tpl = '<div id="feedback-module">';

                    if (settings.initialBox) {
                        tpl += settings.tpl.description;
                    }

                    tpl += settings.tpl.highlighter + settings.tpl.overview + '<canvas id="feedback-canvas"></canvas><div id="feedback-helpers"></div><input id="feedback-note" name="feedback-note" type="hidden"><input id="feedback-title" name="feedback-title" type="hidden"><input id="feedback-name" name="feedback-name" type="hidden"><input id="feedback-email" name="feedback-email" type="hidden"></div>';

                    $('body').append(tpl);

                    moduleStyle = {
                        'position':	'absolute',
                        'left': 	'0px',
                        'top':		'0px'
                    };
                    canvasAttr = {
                        'width': w,
                        'height': h
                    };

                    $('#feedback-module').css(moduleStyle);
                    $('#feedback-canvas').attr(canvasAttr).css('z-index', '30000');

                    if (!settings.initialBox) {
                        $('#feedback-highlighter-back').remove();
                        canDraw = true;
                        $('#feedback-canvas').css('cursor', 'crosshair');
                        $('#feedback-helpers').show();
                        $('#feedback-welcome').hide();
                        $('#feedback-highlighter').show();
                    }

                    if(settings.isDraggable) {
                        $('#feedback-highlighter').on('mousedown', function(e) {
                            var $d = $(this).addClass('feedback-draggable'),
                                    drag_h 	= $d.outerHeight(),
                                    drag_w 	= $d.outerWidth(),
                                    pos_y 	= $d.offset().top + drag_h - e.pageY,
                                    pos_x 	= $d.offset().left + drag_w - e.pageX;
                            $d.css('z-index', 40000).parents().on('mousemove', function(e) {
                                _top 	= e.pageY + pos_y - drag_h;
                                _left 	= e.pageX + pos_x - drag_w;
                                _bottom = drag_h - e.pageY;
                                _right 	= drag_w - e.pageX;

                                if (_left < 0) _left = 0;
                                if (_top < 0) _top = 0;
                                if (_right > $(window).width())
                                    _left = $(window).width() - drag_w;
                                if (_left > $(window).width() - drag_w)
                                    _left = $(window).width() - drag_w;
                                if (_bottom > $(document).height())
                                    _top = $(document).height() - drag_h;
                                if (_top > $(document).height() - drag_h)
                                    _top = $(document).height() - drag_h;

                                $('.feedback-draggable').offset({
                                    top:	_top,
                                    left:	_left
                                }).on("mouseup", function() {
                                    $(this).removeClass('feedback-draggable');
                                });
                            });
                            e.preventDefault();
                        }).on('mouseup', function(){
                            $(this).removeClass('feedback-draggable');
                            $(this).parents().off('mousemove mousedown');
                        });
                    }

                    var ctx = $('#feedback-canvas')[0].getContext('2d');

                    ctx.fillStyle = 'rgba(102,102,102,0.5)';
                    ctx.fillRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());

                    rect 		= {};
                    drag 		= false;
                    highlight 	= 1,
                            post		= {};

                    post.type = "feedback";
                    post.attributes = {};


                    if (settings.postBrowserInfo) {
                        var unknown = '-';

                        // screen
                        var screenSize = '';
                        if (screen.width) {
                            width = (screen.width) ? screen.width : '';
                            height = (screen.height) ? screen.height : '';
                            screenSize += '' + width + " x " + height;
                        }

                        // browser
                        var nVer = navigator.appVersion;
                        var nAgt = navigator.userAgent;
                        var browser = navigator.appName;
                        var version = '' + parseFloat(navigator.appVersion);
                        var majorVersion = parseInt(navigator.appVersion, 10);
                        var nameOffset, verOffset, ix;

                        // Opera
                        if ((verOffset = nAgt.indexOf('Opera')) != -1) {
                            browser = 'Opera';
                            version = nAgt.substring(verOffset + 6);
                            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                                version = nAgt.substring(verOffset + 8);
                            }
                        }
                        // Opera Next
                        if ((verOffset = nAgt.indexOf('OPR')) != -1) {
                            browser = 'Opera';
                            version = nAgt.substring(verOffset + 4);
                        }
                        // MSIE
                        else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
                            browser = 'Microsoft Internet Explorer';
                            version = nAgt.substring(verOffset + 5);
                        }
                        // Chrome
                        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
                            browser = 'Chrome';
                            version = nAgt.substring(verOffset + 7);
                        }
                        // Safari
                        else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
                            browser = 'Safari';
                            version = nAgt.substring(verOffset + 7);
                            if ((verOffset = nAgt.indexOf('Version')) != -1) {
                                version = nAgt.substring(verOffset + 8);
                            }
                        }
                        // Firefox
                        else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                            browser = 'Firefox';
                            version = nAgt.substring(verOffset + 8);
                        }
                        // MSIE 11+
                        else if (nAgt.indexOf('Trident/') != -1) {
                            browser = 'Microsoft Internet Explorer';
                            version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                        }
                        // Other browsers
                        else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                            browser = nAgt.substring(nameOffset, verOffset);
                            version = nAgt.substring(verOffset + 1);
                            if (browser.toLowerCase() == browser.toUpperCase()) {
                                browser = navigator.appName;
                            }
                        }
                        // trim the version string
                        if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
                        if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
                        if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);

                        majorVersion = parseInt('' + version, 10);
                        if (isNaN(majorVersion)) {
                            version = '' + parseFloat(navigator.appVersion);
                            majorVersion = parseInt(navigator.appVersion, 10);
                        }

                        // mobile version
                        //var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);

                        // cookie
                        var cookieEnabled = (navigator.cookieEnabled) ? true : false;

                        if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
                            document.cookie = 'testcookie';
                            cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
                        }

                        // system
                        var os = unknown;
                        var clientStrings = [
                            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
                            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
                            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
                            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
                            {s:'Windows Vista', r:/Windows NT 6.0/},
                            {s:'Windows Server 2003', r:/Windows NT 5.2/},
                            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
                            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
                            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
                            {s:'Windows 98', r:/(Windows 98|Win98)/},
                            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
                            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
                            {s:'Windows CE', r:/Windows CE/},
                            {s:'Windows 3.11', r:/Win16/},
                            {s:'Android', r:/Android/},
                            {s:'Open BSD', r:/OpenBSD/},
                            {s:'Sun OS', r:/SunOS/},
                            {s:'Linux', r:/(Linux|X11)/},
                            {s:'iOS', r:/(iPhone|iPad|iPod)/},
                            {s:'Mac OS X', r:/Mac OS X/},
                            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
                            {s:'QNX', r:/QNX/},
                            {s:'UNIX', r:/UNIX/},
                            {s:'BeOS', r:/BeOS/},
                            {s:'OS/2', r:/OS\/2/},
                            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
                        ];
                        for (var id in clientStrings) {
                            var cs = clientStrings[id];
                            if (cs.r.test(nAgt)) {
                                os = cs.s;
                                break;
                            }
                        }

                        var osVersion = unknown;

                        if (/Windows/.test(os)) {
                            osVersion = /Windows (.*)/.exec(os)[1];
                            os = 'Windows';
                        }

                        switch (os) {
                            case 'Mac OS X':
                                osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
                                break;

                            case 'Android':
                                osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
                                break;

                            case 'iOS':
                                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                                break;
                        }

                        // flash (you'll need to include swfobject)
                        /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
                        var flashVersion = 'no check';
                        if (typeof swfobject != 'undefined') {
                            var fv = swfobject.getFlashPlayerVersion();
                            if (fv.major > 0) {
                                flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
                            }
                            else  {
                                flashVersion = unknown;
                            }
                        }
                        post.attributes.browser 				= {};
                        post.attributes.browser.appCodeName	= navigator.appCodeName;
                        post.attributes.browser.appName		= browser + ' ' + majorVersion + ' (' + version + ')';
                        post.attributes.browser.appVersion		= version;
                        post.attributes.browser.cookieEnabled	= navigator.cookieEnabled;
                        post.attributes.browser.onLine			= navigator.onLine;
                        post.attributes.browser.platform		= os + ' ' + osVersion;
                        post.attributes.browser.screen = screenSize;
                        post.attributes.browser.userAgent		= navigator.userAgent;

                        $('#feedback-browser-info').show();
                    }

                    if (settings.postURL) {
                        post.attributes.url = document.URL;
                        $('#feedback-page-info').show();
                    }

                    if (settings.postHTML) {
                        post.html = $('html').html();
                        $('#feedback-page-structure').show();
                    }

                    if (!settings.postBrowserInfo && !settings.postURL && !settings.postHTML)
                        $('#feedback-additional-none').show();

                    $(document).on('mousedown', '#feedback-canvas', function(e) {
                        if (canDraw) {

                            rect.startX = e.pageX - $(this).offset().left;
                            rect.startY = e.pageY - $(this).offset().top;
                            rect.w = 0;
                            rect.h = 0;
                            drag = true;
                        }
                    });

                    $(document).on('mouseup', function(){
                        if (canDraw) {
                            drag = false;

                            var dtop	= rect.startY,
                                    dleft	= rect.startX,
                                    dwidth	= rect.w,
                                    dheight	= rect.h;
                            dtype	= 'highlight';

                            if (dwidth == 0 || dheight == 0) return;

                            if (dwidth < 0) {
                                dleft 	+= dwidth;
                                dwidth 	*= -1;
                            }
                            if (dheight < 0) {
                                dtop 	+= dheight;
                                dheight *= -1;
                            }

                            if (dtop + dheight > $(document).height())
                                dheight = $(document).height() - dtop;
                            if (dleft + dwidth > $(document).width())
                                dwidth = $(document).width() - dleft;

                            if (highlight == 0)
                                dtype = 'blackout';

                            $('#feedback-helpers').append('<div class="feedback-helper" data-type="' + dtype + '" data-time="' + Date.now() + '" style="position:absolute;top:' + dtop + 'px;left:' + dleft + 'px;width:' + dwidth + 'px;height:' + dheight + 'px;z-index:30000;"></div>');

                            redraw(ctx);
                            rect.w = 0;
                        }

                    });

                    $(document).on('mousemove', function(e) {
                        if (canDraw && drag) {
                            $('#feedback-highlighter').css('cursor', 'default');

                            rect.w = (e.pageX - $('#feedback-canvas').offset().left) - rect.startX;
                            rect.h = (e.pageY - $('#feedback-canvas').offset().top) - rect.startY;

                            ctx.clearRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                            ctx.fillStyle = 'rgba(102,102,102,0.5)';
                            ctx.fillRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                            $('.feedback-helper').each(function() {
                                if ($(this).attr('data-type') == 'highlight')
                                    drawlines(ctx, parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                            });
                            if (highlight==1) {
                                drawlines(ctx, rect.startX, rect.startY, rect.w, rect.h);
                                ctx.clearRect(rect.startX, rect.startY, rect.w, rect.h);
                            }
                            $('.feedback-helper').each(function() {
                                if ($(this).attr('data-type') == 'highlight')
                                    ctx.clearRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                            });
                            $('.feedback-helper').each(function() {
                                if ($(this).attr('data-type') == 'blackout') {
                                    ctx.fillStyle = 'rgba(0,0,0,1)';
                                    ctx.fillRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height())
                                }
                            });
                            if (highlight == 0) {
                                ctx.fillStyle = 'rgba(0,0,0,0.5)';
                                ctx.fillRect(rect.startX, rect.startY, rect.w, rect.h);
                            }
                        }
                    });

                    if (settings.highlightElement) {
                        var highlighted = [],
                                tmpHighlighted = [],
                                hidx = 0;

                        $(document).on('mousemove click', '#feedback-canvas',function(e) {
                            if (canDraw) {
                                redraw(ctx);
                                tmpHighlighted = [];

                                $('#feedback-canvas').css('cursor', 'crosshair');

                                $('* :not(body,script,iframe,div,section,.feedback-btn,#feedback-module *)').each(function(){
                                    if ($(this).attr('data-highlighted') === 'true')
                                        return;

                                    if (e.pageX > $(this).offset().left && e.pageX < $(this).offset().left + $(this).width() && e.pageY > $(this).offset().top + parseInt($(this).css('padding-top'), 10) && e.pageY < $(this).offset().top + $(this).height() + parseInt($(this).css('padding-top'), 10)) {
                                        tmpHighlighted.push($(this));
                                    }
                                });

                                var $toHighlight = tmpHighlighted[tmpHighlighted.length - 1];

                                if ($toHighlight && !drag) {
                                    $('#feedback-canvas').css('cursor', 'pointer');

                                    var _x = $toHighlight.offset().left - 2,
                                            _y = $toHighlight.offset().top - 2,
                                            _w = $toHighlight.width() + parseInt($toHighlight.css('padding-left'), 10) + parseInt($toHighlight.css('padding-right'), 10) + 6,
                                            _h = $toHighlight.height() + parseInt($toHighlight.css('padding-top'), 10) + parseInt($toHighlight.css('padding-bottom'), 10) + 6;

                                    if (highlight == 1) {
                                        drawlines(ctx, _x, _y, _w, _h);
                                        ctx.clearRect(_x, _y, _w, _h);
                                        dtype = 'highlight';
                                    }

                                    $('.feedback-helper').each(function() {
                                        if ($(this).attr('data-type') == 'highlight')
                                            ctx.clearRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                                    });

                                    if (highlight == 0) {
                                        dtype = 'blackout';
                                        ctx.fillStyle = 'rgba(0,0,0,0.5)';
                                        ctx.fillRect(_x, _y, _w, _h);
                                    }

                                    $('.feedback-helper').each(function() {
                                        if ($(this).attr('data-type') == 'blackout') {
                                            ctx.fillStyle = 'rgba(0,0,0,1)';
                                            ctx.fillRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                                        }
                                    });

                                    if (e.type == 'click' && e.pageX == rect.startX && e.pageY == rect.startY) {
                                        $('#feedback-helpers').append('<div class="feedback-helper" data-highlight-id="' + hidx + '" data-type="' + dtype + '" data-time="' + Date.now() + '" style="position:absolute;top:' + _y + 'px;left:' + _x + 'px;width:' + _w + 'px;height:' + _h + 'px;z-index:30000;"></div>');
                                        highlighted.push(hidx);
                                        ++hidx;
                                        redraw(ctx);
                                    }
                                }
                            }
                        });
                    }

                    $(document).on('mouseleave', 'body,#feedback-canvas', function() {
                        redraw(ctx);
                    });

                    $(document).on('mouseenter', '.feedback-helper', function() {
                        redraw(ctx);
                    });

                    $(document).on('click', '#feedback-welcome-next', function() {
                        if ($('#feedback-note').val().length > 0) {
                            canDraw = true;
                            $('#feedback-canvas').css('cursor', 'crosshair');
                            $('#feedback-helpers').show();
                            $('#feedback-welcome').hide();
                            $('#feedback-highlighter').show();
                        }
                        else {
                            $('#feedback-welcome-error').show();
                        }
                    });

                    $(document).on('mouseenter mouseleave', '.feedback-helper', function(e) {
                        if (drag)
                            return;

                        rect.w = 0;
                        rect.h = 0;

                        if (e.type === 'mouseenter') {
                            $(this).css('z-index', '30001');
                            $(this).append('<div class="feedback-helper-inner" style="width:' + ($(this).width() - 2) + 'px;height:' + ($(this).height() - 2) + 'px;position:absolute;margin:1px;"></div>');
                            $(this).append('<div id="feedback-close"></div>');
                            $(this).find('#feedback-close').css({
                                'top' 	: -1 * ($(this).find('#feedback-close').height() / 2) + 'px',
                                'left' 	: $(this).width() - ($(this).find('#feedback-close').width() / 2) + 'px'
                            });

                            if ($(this).attr('data-type') == 'blackout') {
                                /* redraw white */
                                ctx.clearRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                                ctx.fillStyle = 'rgba(102,102,102,0.5)';
                                ctx.fillRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                                $('.feedback-helper').each(function() {
                                    if ($(this).attr('data-type') == 'highlight')
                                        drawlines(ctx, parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                                });
                                $('.feedback-helper').each(function() {
                                    if ($(this).attr('data-type') == 'highlight')
                                        ctx.clearRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                                });

                                ctx.clearRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height())
                                ctx.fillStyle = 'rgba(0,0,0,0.75)';
                                ctx.fillRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());

                                ignore = $(this).attr('data-time');

                                /* redraw black */
                                $('.feedback-helper').each(function() {
                                    if ($(this).attr('data-time') == ignore)
                                        return true;
                                    if ($(this).attr('data-type') == 'blackout') {
                                        ctx.fillStyle = 'rgba(0,0,0,1)';
                                        ctx.fillRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height())
                                    }
                                });
                            }
                        }
                        else {
                            $(this).css('z-index','30000');
                            $(this).children().remove();
                            if ($(this).attr('data-type') == 'blackout') {
                                redraw(ctx);
                            }
                        }
                    });

                    $(document).on('click', '#feedback-close', function() {
                        if (settings.highlightElement && $(this).parent().attr('data-highlight-id'))
                            var _hidx = $(this).parent().attr('data-highlight-id');

                        $(this).parent().remove();

                        if (settings.highlightElement && _hidx)
                            $('[data-highlight-id="' + _hidx + '"]').removeAttr('data-highlighted').removeAttr('data-highlight-id');

                        redraw(ctx);
                    });

                    $('#feedback-module').on('click', '.feedback-wizard-close,.feedback-close-btn', function() {
                        close();
                    });

                    $(document).on('keyup', function(e) {
                        if (e.keyCode == 27)
                            close();
                    });

                    $(document).on('selectstart dragstart', document, function(e) {
                        e.preventDefault();
                    });

                    $(document).on('click', '#feedback-highlighter-back', function() {
                        canDraw = false;
                        $('#feedback-canvas').css('cursor', 'default');
                        $('#feedback-helpers').hide();
                        $('#feedback-highlighter').hide();
                        $('#feedback-welcome-error').hide();
                        $('#feedback-welcome').show();
                    });

                    $(document).on('mousedown', '.feedback-sethighlight', function() {
                        highlight = 1;
                        $(this).addClass('feedback-active');
                        $('.feedback-setblackout').removeClass('feedback-active');
                    });

                    $(document).on('mousedown', '.feedback-setblackout', function() {
                        highlight = 0;
                        $(this).addClass('feedback-active');
                        $('.feedback-sethighlight').removeClass('feedback-active');
                    });

                    $(document).on('click', '#feedback-highlighter-next', function() {
                        canDraw = false;
                        $('#feedback-canvas').css('cursor', 'default');
                        var sy = $(document).scrollTop(),
                                dh = $(window).height();
                        $('#feedback-helpers').hide();
                        $('#feedback-highlighter').hide();
                        if (!settings.screenshotStroke) {
                            redraw(ctx, false);
                        }
                        html2canvas($('body'), {
                            onrendered: function(canvas) {
                                if (!settings.screenshotStroke) {
                                    redraw(ctx);
                                }
                                _canvas = $('<canvas id="feedback-canvas-tmp" width="'+ w +'" height="'+ dh +'"/>').hide().appendTo('body');
                                _ctx = _canvas.get(0).getContext('2d');
                                _ctx.drawImage(canvas, 0, sy, w, dh, 0, 0, w, dh);
                                img = _canvas.get(0).toDataURL();
                                $(document).scrollTop(sy);
                                post.attributes.screenshot = img;
                                settings.onScreenshotTaken(post.attributes.screenshot);
                                if(settings.showDescriptionModal) {
                                    $('#feedback-canvas-tmp').remove();
                                    $('#feedback-overview').show();
                                    $('#feedback-overview-description-text>textarea').remove();
                                    $('#feedback-overview-description-title>input').remove();
                                    $('#feedback-overview-description-name>input').remove();
                                    $('#feedback-overview-description-email>input').remove();
                                    $('#feedback-overview-screenshot>img').remove();
                                    $('<textarea id="feedback-overview-note">' + $('#feedback-note').val() + '</textarea>').insertAfter('#feedback-overview-description-text h3:eq(0)');
                                    $('<input type="text" id="feedback-overview-title" value="' + $("#feedback-title").val() + '"></input>').insertAfter('#feedback-overview-description-title h3:eq(0)');
                                    $('<input type="text" id="feedback-overview-name" value="' + $("#feedback-name").val() + '"></input>').insertAfter('#feedback-overview-description-name h3:eq(0)');
                                    $('<input type="email" id="feedback-overview-email" value="'+ $("#feedback-email").val() + '"></input>').insertAfter('#feedback-overview-description-email h3:eq(0)');
                                    $('#feedback-overview-screenshot').append('<img class="feedback-screenshot" src="' + img + '" />');
                                }
                                else {
                                    $('#feedback-module').remove();
                                    close();
                                    _canvas.remove();
                                }
                            },
                            proxy: settings.proxy,
                            letterRendering: settings.letterRendering
                        });
                    });

                    $(document).on('click', '#feedback-overview-back', function(e) {
                        canDraw = true;
                        $('#feedback-canvas').css('cursor', 'crosshair');
                        $('#feedback-overview').hide();
                        $('#feedback-helpers').show();
                        $('#feedback-highlighter').show();
                        $('#feedback-overview-error').hide();
                    });

                    $(document).on('keyup', '#feedback-note-tmp,#feedback-overview-note', function(e) {
                        var tx;
                        if (e.target.id === 'feedback-note-tmp')
                            tx = $('#feedback-note-tmp').val();
                        else {
                            tx = $('#feedback-overview-note').val();
                            $('#feedback-note-tmp').val(tx);
                        }

                        $('#feedback-note').val(tx);
                    });

                    $(document).on('keyup', '#feedback-overview-title', function(e) {
                        $('#feedback-title').val($('#feedback-overview-title').val());
                    });

                    $(document).on('keyup', '#feedback-overview-name', function(e) {
                        $('#feedback-name').val($('#feedback-overview-name').val());
                    });

                    $(document).on('keyup', '#feedback-overview-email', function(e) {
                        $('#feedback-email').val($('#feedback-overview-email').val());
                    });

                    $(document).on('click', '#feedback-submit', function() {
                        canDraw = false;

                        if ($('#feedback-note').val().length > 0) {
                            $('#feedback-submit-success,#feedback-submit-error').remove();
                            $('#feedback-overview').hide();

                            post.attributes.project_id = settings.project_id;
                            post.attributes.title = $('#feedback-title').val();
                            post.attributes.description = $('#feedback-note').val();
                            post.attributes.name = $('#feedback-name').val();
                            post.attributes.email = $('#feedback-email').val();

                            post = {"data": post};
                            //data = JSON.stringify(post);

                            $.ajax({
                                headers: {
                                'X-CSRF-Token': '{{ csrf_token() }}',
                                },
                                jsonp: false,
                                url: settings.ajaxURL,
                                dataType: 'text',
                                type: 'POST',
                                data: post,
                                success: function() {
                                    $('#feedback-module').append(settings.tpl.submitSuccess);
                                },
                                error: function(){
                                    $('#feedback-module').append(settings.tpl.submitError);
                                }
                            });
                        }
                        else {
                            $('#feedback-overview-error').show();
                        }
                    });
                });
            }

            function close() {
                canDraw = false;
                $(document).off('mouseenter mouseleave', '.feedback-helper');
                $(document).off('mouseup keyup');
                $(document).off('mousedown', '.feedback-setblackout');
                $(document).off('mousedown', '.feedback-sethighlight');
                $(document).off('mousedown click', '#feedback-close');
                $(document).off('mousedown', '#feedback-canvas');
                $(document).off('click', '#feedback-highlighter-next');
                $(document).off('click', '#feedback-highlighter-back');
                $(document).off('click', '#feedback-welcome-next');
                $(document).off('click', '#feedback-overview-back');
                $(document).off('mouseleave', 'body');
                $(document).off('mouseenter', '.feedback-helper');
                $(document).off('selectstart dragstart', document);
                $('#feedback-module').off('click', '.feedback-wizard-close,.feedback-close-btn');
                $(document).off('click', '#feedback-submit');

                if (settings.highlightElement) {
                    $(document).off('click', '#feedback-canvas');
                    $(document).off('mousemove', '#feedback-canvas');
                }
                $('[data-highlighted="true"]').removeAttr('data-highlight-id').removeAttr('data-highlighted');
                $('#feedback-module').remove();
                $('.feedback-btn').show();

                settings.onClose.call(this);
            }

            function redraw(ctx, border) {
                border = typeof border !== 'undefined' ? border : true;
                ctx.clearRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                ctx.fillStyle = 'rgba(102,102,102,0.5)';
                ctx.fillRect(0, 0, $('#feedback-canvas').width(), $('#feedback-canvas').height());
                $('.feedback-helper').each(function() {
                    if ($(this).attr('data-type') == 'highlight')
                        if (border)
                            drawlines(ctx, parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                });
                $('.feedback-helper').each(function() {
                    if ($(this).attr('data-type') == 'highlight')
                        ctx.clearRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                });
                $('.feedback-helper').each(function() {
                    if ($(this).attr('data-type') == 'blackout') {
                        ctx.fillStyle = 'rgba(0,0,0,1)';
                        ctx.fillRect(parseInt($(this).css('left'), 10), parseInt($(this).css('top'), 10), $(this).width(), $(this).height());
                    }
                });
            }

            function drawlines(ctx, x, y, w, h) {
                ctx.strokeStyle		= settings.strokeStyle;
                ctx.shadowColor		= settings.shadowColor;
                ctx.shadowOffsetX	= settings.shadowOffsetX;
                ctx.shadowOffsetY	= settings.shadowOffsetY;
                ctx.shadowBlur		= settings.shadowBlur;
                ctx.lineJoin		= settings.lineJoin;
                ctx.lineWidth		= settings.lineWidth;

                ctx.strokeRect(x,y,w,h);

                ctx.shadowOffsetX	= 0;
                ctx.shadowOffsetY	= 0;
                ctx.shadowBlur		= 0;
                ctx.lineWidth		= 1;
            }

        };

    }(jQuery));
