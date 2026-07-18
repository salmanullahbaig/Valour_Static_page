(function(){
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- sticky header ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll(){ header.classList.toggle("scrolled", window.scrollY > 24); }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  function setMenu(open){
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", !open);
    document.body.style.overflow = open ? "hidden" : "";
  }
  toggle.addEventListener("click", function(){
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });
  menu.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){ setMenu(false); });
  });
  document.addEventListener("keydown", function(e){
    if(e.key === "Escape" && menu.classList.contains("open")) setMenu(false);
  });

  /* ---------- reveal on scroll ---------- */
  var revealed = document.querySelectorAll(".rv:not(.in)");
  if("IntersectionObserver" in window && !reduceMotion){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, {threshold:.14, rootMargin:"0px 0px -6% 0px"});
    revealed.forEach(function(el){ io.observe(el); });
  } else {
    revealed.forEach(function(el){ el.classList.add("in"); });
  }

  /* ---------- animated counters (run once) ---------- */
  var counters = document.querySelectorAll(".count");
  function animateCount(el){
    var target = parseInt(el.dataset.target, 10);
    var comma = el.dataset.comma === "1";
    if(reduceMotion){ el.textContent = format(target); return; }
    var dur = 1400, start = null;
    function format(n){ return comma ? n.toLocaleString("en-US") : String(n); }
    function tick(ts){
      if(!start) start = ts;
      var p = Math.min((ts - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(Math.round(target * eased));
      if(p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if("IntersectionObserver" in window){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ animateCount(en.target); cio.unobserve(en.target); }
      });
    }, {threshold:.5});
    counters.forEach(function(c){ cio.observe(c); });
  } else {
    counters.forEach(animateCount);
  }

  /* ---------- active nav state (single-page anchor navs only) ---------- */
  var sections = ["services","industries","projects","about","contact"];
  var navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  function setActive(id){
    navLinks.forEach(function(a){
      a.classList.toggle("active", a.getAttribute("href") === "#" + id);
    });
  }
  if(navLinks.length && "IntersectionObserver" in window){
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting) setActive(en.target.id);
      });
    }, {rootMargin:"-40% 0px -55% 0px"});
    sections.forEach(function(id){
      var el = document.getElementById(id);
      if(el) nio.observe(el);
    });
    window.addEventListener("scroll", function(){
      if(window.scrollY < 300) setActive("top");
    }, {passive:true});
  }

  /* ---------- subtle hero parallax ---------- */
  var heroVisual = document.querySelector(".hero-visual .sys-frame");
  if(heroVisual && !reduceMotion && window.matchMedia("(min-width: 1080px)").matches){
    var hero = document.querySelector(".hero");
    hero.addEventListener("mousemove", function(e){
      var r = hero.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - .5;
      var y = (e.clientY - r.top) / r.height - .5;
      heroVisual.style.transform = "perspective(1100px) rotateY(" + (x * 3) + "deg) rotateX(" + (y * -3) + "deg)";
    });
    hero.addEventListener("mouseleave", function(){
      heroVisual.style.transform = "";
    });
    heroVisual.style.transition = "transform .4s cubic-bezier(.22,.61,.28,.98)";
  }

  /* ---------- contact form validation + success ---------- */
  var form = document.getElementById("projectForm");
  var success = document.getElementById("formSuccess");
  if(form){
  function validateField(field){
    var input = field.querySelector("input,select,textarea");
    if(!input || !input.required) return true;
    var ok = input.value.trim() !== "";
    if(ok && input.type === "email"){
      ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim());
    }
    field.classList.toggle("invalid", !ok);
    return ok;
  }
  form.querySelectorAll(".field").forEach(function(field){
    var input = field.querySelector("input,select,textarea");
    if(input){
      input.addEventListener("input", function(){
        if(field.classList.contains("invalid")) validateField(field);
      });
      input.addEventListener("blur", function(){
        if(input.required && input.value.trim() !== "") validateField(field);
      });
    }
  });
  form.addEventListener("submit", function(e){
    e.preventDefault();
    var fields = form.querySelectorAll(".field");
    var allValid = true, firstInvalid = null;
    fields.forEach(function(f){
      if(!validateField(f)){
        allValid = false;
        if(!firstInvalid) firstInvalid = f.querySelector("input,select,textarea");
      }
    });
    if(!allValid){
      if(firstInvalid) firstInvalid.focus();
      return;
    }
    form.style.display = "none";
    success.classList.add("show");
    success.focus && success.focus();
  });
  }
})();

/* ============================================================
   3D INTERACTION LAYER
   ============================================================ */
(function(){
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer  = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- 1. Tilt engine with glare ---------- */
  var TILT_SELECTOR = ".svc-card,.proj-card,.why-card,.founder-card,.metric";
  var tiltMax = 7; // degrees

  if(finePointer && !reduceMotion){
    document.querySelectorAll(TILT_SELECTOR).forEach(function(card){
      card.classList.add("tilt");
      var glare = document.createElement("span");
      glare.className = "tilt-glare";
      card.appendChild(glare);

      var raf = null, rect = null;

      function move(e){
        if(!rect) rect = card.getBoundingClientRect();
        var px = (e.clientX - rect.left) / rect.width;
        var py = (e.clientY - rect.top) / rect.height;
        if(raf) cancelAnimationFrame(raf);
        raf = requestAnimationFrame(function(){
          var rx = (py - .5) * -2 * tiltMax;
          var ry = (px - .5) *  2 * tiltMax;
          card.style.transform =
            "perspective(1000px) rotateX(" + rx.toFixed(2) + "deg) rotateY(" + ry.toFixed(2) + "deg) translateY(-6px)";
          card.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
          card.style.setProperty("--my", (py * 100).toFixed(1) + "%");
        });
      }
      card.addEventListener("pointerenter", function(){
        rect = card.getBoundingClientRect();
        card.classList.add("tilting");
      });
      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", function(){
        if(raf) cancelAnimationFrame(raf);
        rect = null;
        card.classList.remove("tilting");
        card.style.transform = "";
      });
    });
  }

  /* ---------- 2. Magnetic buttons ---------- */
  if(finePointer && !reduceMotion){
    document.querySelectorAll(".btn-green").forEach(function(btn){
      btn.classList.add("btn-mag");
      var strength = 0.28, rect = null;
      btn.addEventListener("pointerenter", function(){
        rect = btn.getBoundingClientRect();
        btn.classList.add("magnet-active");
      });
      btn.addEventListener("pointermove", function(e){
        if(!rect) rect = btn.getBoundingClientRect();
        var dx = e.clientX - (rect.left + rect.width / 2);
        var dy = e.clientY - (rect.top + rect.height / 2);
        btn.style.transform = "translate(" + (dx * strength).toFixed(1) + "px," + (dy * strength).toFixed(1) + "px)";
      });
      btn.addEventListener("pointerleave", function(){
        rect = null;
        btn.classList.remove("magnet-active");
        btn.style.transform = "";
      });
    });
  }

  /* ---------- 3. Hero 3D particle network ---------- */
  var canvas = document.getElementById("netCanvas");
  if(canvas && !reduceMotion){
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, running = false, rafId = null;
    var FOV = 420, DEPTH = 520;
    var points = [];
    var COUNT = window.innerWidth < 700 ? 34 : 64;
    var angle = 0;

    function resize(){
      var r = canvas.getBoundingClientRect();
      W = r.width; H = r.height;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed(){
      points = [];
      for(var i = 0; i < COUNT; i++){
        points.push({
          x: (Math.random() - .5) * W * 1.15,
          y: (Math.random() - .5) * H * 1.15,
          z: (Math.random() - .5) * DEPTH,
          vy: .06 + Math.random() * .14,
          green: Math.random() < .55
        });
      }
    }

    function project(p, sin, cos){
      // rotate slowly around Y axis for depth motion
      var rx = p.x * cos - p.z * sin;
      var rz = p.x * sin + p.z * cos;
      var scale = FOV / (FOV + rz + DEPTH / 2);
      return {
        sx: W / 2 + rx * scale,
        sy: H / 2 + p.y * scale,
        s: scale
      };
    }

    function frame(){
      if(!running) return;
      ctx.clearRect(0, 0, W, H);
      angle += 0.0011;
      var sin = Math.sin(angle), cos = Math.cos(angle);
      var proj = [];

      for(var i = 0; i < points.length; i++){
        var p = points[i];
        p.y -= p.vy;
        if(p.y < -H * .62) p.y = H * .62;
        proj.push(project(p, sin, cos));
      }

      // connections
      var MAXD = Math.min(W, 900) * .14;
      for(var a = 0; a < proj.length; a++){
        for(var b = a + 1; b < proj.length; b++){
          var dx = proj[a].sx - proj[b].sx;
          var dy = proj[a].sy - proj[b].sy;
          var d = Math.sqrt(dx * dx + dy * dy);
          if(d < MAXD){
            var alpha = (1 - d / MAXD) * .22 * Math.min(proj[a].s, proj[b].s);
            ctx.strokeStyle = points[a].green
              ? "rgba(47,201,77," + alpha.toFixed(3) + ")"
              : "rgba(76,201,240," + (alpha * .8).toFixed(3) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(proj[a].sx, proj[a].sy);
            ctx.lineTo(proj[b].sx, proj[b].sy);
            ctx.stroke();
          }
        }
      }

      // nodes
      for(var k = 0; k < proj.length; k++){
        var q = proj[k];
        var r = 1.1 * q.s + .4;
        ctx.fillStyle = points[k].green
          ? "rgba(91,232,115," + (0.5 * q.s).toFixed(3) + ")"
          : "rgba(76,201,240,"  + (0.45 * q.s).toFixed(3) + ")";
        ctx.beginPath();
        ctx.arc(q.sx, q.sy, r, 0, Math.PI * 2);
        ctx.fill();
      }
      rafId = requestAnimationFrame(frame);
    }

    function start(){ if(!running){ running = true; rafId = requestAnimationFrame(frame); } }
    function stop(){ running = false; if(rafId) cancelAnimationFrame(rafId); }

    resize(); seed();
    window.addEventListener("resize", function(){ resize(); seed(); }, {passive:true});

    // only animate while the hero is on screen
    if("IntersectionObserver" in window){
      new IntersectionObserver(function(entries){
        entries[0].isIntersecting ? start() : stop();
      }, {threshold:.05}).observe(canvas);
    } else { start(); }

    document.addEventListener("visibilitychange", function(){
      document.hidden ? stop() : start();
    });
  }

  /* ---------- 4. Upgrade big blocks to 3D flip reveal ---------- */
  if(!reduceMotion && "IntersectionObserver" in window){
    var big = document.querySelectorAll(".proj-feature,.contact-form,.industries-right,.founder-card");
    var io3 = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){ en.target.classList.add("in"); io3.unobserve(en.target); }
      });
    }, {threshold:.12});
    big.forEach(function(el){
      if(!el.classList.contains("in")){
        el.classList.remove("rv");
        el.classList.add("rv3");
        io3.observe(el);
      }
    });
  }
})();
