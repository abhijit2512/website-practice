/* DigitTech — 3D hero scene (Three.js)
   Usage: <canvas class="scene3d" data-variant="home|page"></canvas> */
(function () {
  "use strict";
  var canvas = document.querySelector("canvas.scene3d");
  if (!canvas || !window.THREE) return;
  var THREE = window.THREE;

  var renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) {
    canvas.style.display = "none";
    return;
  }

  var variant = canvas.getAttribute("data-variant") || "home";
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var speed = reduced ? 0.15 : 1;

  var C = { teal: 0x2ec4c4, red: 0xe53935, blue: 0x2f7bff, navy: 0x0b1d3f, white: 0xffffff };

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  if (THREE.sRGBEncoding) renderer.outputEncoding = THREE.sRGBEncoding;

  var scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x050b1a, 0.028);
  var camera = new THREE.PerspectiveCamera(48, 1, 0.1, 200);
  camera.position.set(0, 0, 13);

  /* ---------- Lights ---------- */
  scene.add(new THREE.AmbientLight(0x6a85ff, 0.55));
  var key = new THREE.DirectionalLight(0xffffff, 0.9);
  key.position.set(4, 6, 8);
  scene.add(key);
  var lTeal = new THREE.PointLight(C.teal, 2.2, 40);
  lTeal.position.set(6, 4, 6);
  scene.add(lTeal);
  var lRed = new THREE.PointLight(C.red, 2.2, 40);
  lRed.position.set(-6, -4, 5);
  scene.add(lRed);
  var lBlue = new THREE.PointLight(C.blue, 1.6, 40);
  lBlue.position.set(0, 6, -6);
  scene.add(lBlue);

  /* ---------- Core: faceted gem + wire shell + rings ---------- */
  var core = new THREE.Group();
  scene.add(core);

  var gem = new THREE.Mesh(
    new THREE.IcosahedronGeometry(2.1, 1),
    new THREE.MeshStandardMaterial({ color: C.navy, metalness: 0.85, roughness: 0.22, flatShading: true, emissive: 0x06203f, emissiveIntensity: 0.6 })
  );
  core.add(gem);

  var inner = new THREE.Mesh(
    new THREE.IcosahedronGeometry(1.05, 0),
    new THREE.MeshBasicMaterial({ color: C.teal, wireframe: true, transparent: true, opacity: 0.0 })
  );
  core.add(inner);

  var shell = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(2.75, 1)),
    new THREE.LineBasicMaterial({ color: C.teal, transparent: true, opacity: 0.45 })
  );
  core.add(shell);

  // vertex dots on the shell
  var shellGeo = new THREE.IcosahedronGeometry(2.75, 1);
  var dots = new THREE.Points(shellGeo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.9 }));
  core.add(dots);

  function ring(radius, tube, color, opacity) {
    var m = new THREE.Mesh(
      new THREE.TorusGeometry(radius, tube, 16, 160),
      new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: opacity })
    );
    return m;
  }
  var ringA = ring(3.7, 0.025, C.teal, 0.85);
  ringA.rotation.set(1.25, 0.2, 0);
  var ringB = ring(4.3, 0.018, C.red, 0.75);
  ringB.rotation.set(1.9, -0.5, 0.3);
  var ringC = ring(4.9, 0.012, C.blue, 0.6);
  ringC.rotation.set(0.6, 0.9, 0);
  core.add(ringA, ringB, ringC);

  // satellites on rings
  function satellite(color, r) {
    var s = new THREE.Mesh(new THREE.SphereGeometry(r, 24, 24), new THREE.MeshStandardMaterial({ color: color, emissive: color, emissiveIntensity: 0.9, roughness: 0.3 }));
    return s;
  }
  var satA = satellite(C.teal, 0.16), satB = satellite(C.red, 0.13), satC = satellite(C.blue, 0.11);
  ringA.add(satA); ringB.add(satB); ringC.add(satC);

  /* ---------- Floating shapes ---------- */
  var floaters = [];
  var geos = [
    new THREE.OctahedronGeometry(0.42, 0),
    new THREE.BoxGeometry(0.55, 0.55, 0.55),
    new THREE.TetrahedronGeometry(0.5, 0),
    new THREE.TorusGeometry(0.34, 0.12, 12, 32),
    new THREE.IcosahedronGeometry(0.4, 0)
  ];
  var cols = [C.teal, C.red, C.blue, C.teal, C.red];
  var count = variant === "home" ? 16 : 10;
  for (var i = 0; i < count; i++) {
    var mesh = new THREE.Mesh(
      geos[i % geos.length],
      new THREE.MeshStandardMaterial({ color: cols[i % cols.length], metalness: 0.5, roughness: 0.3, flatShading: true, emissive: cols[i % cols.length], emissiveIntensity: 0.18 })
    );
    var a = (i / count) * Math.PI * 2 + Math.random() * 0.4;
    var rad = 6 + Math.random() * 4.5;
    var fx = Math.cos(a) * rad, fz = Math.sin(a) * rad * 0.6 - 2;
    // keep shapes out of the text column (left side) — push them far back instead
    if (fx < 1.5 && fx > -11) { fx = fx < -4 ? fx - 6 : 9 + Math.random() * 4; }
    mesh.position.set(fx, (Math.random() - 0.5) * 8, fz);
    var sc = 0.6 + Math.random() * 0.8;
    mesh.scale.setScalar(sc);
    mesh.userData = { base: mesh.position.clone(), rs: new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(0.012), ph: Math.random() * 6.28, amp: 0.25 + Math.random() * 0.45 };
    scene.add(mesh);
    floaters.push(mesh);
  }

  /* ---------- Particles ---------- */
  var pCount = variant === "home" ? 1600 : 1000;
  var pGeo = new THREE.BufferGeometry();
  var pos = new Float32Array(pCount * 3), col = new Float32Array(pCount * 3);
  var palette = [new THREE.Color(C.teal), new THREE.Color(C.blue), new THREE.Color(C.red), new THREE.Color(0xffffff)];
  for (var j = 0; j < pCount; j++) {
    var r = 9 + Math.random() * 30, th = Math.random() * Math.PI * 2, ph = Math.acos(2 * Math.random() - 1);
    pos[j * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[j * 3 + 1] = r * Math.sin(ph) * Math.sin(th) * 0.7;
    pos[j * 3 + 2] = r * Math.cos(ph) - 8;
    var c = palette[(Math.random() * palette.length) | 0];
    col[j * 3] = c.r; col[j * 3 + 1] = c.g; col[j * 3 + 2] = c.b;
  }
  pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  var particles = new THREE.Points(pGeo, new THREE.PointsMaterial({ size: 0.075, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false }));
  scene.add(particles);

  /* ---------- Tech grid floor ---------- */
  var grid = new THREE.GridHelper(80, 60, C.blue, C.blue);
  grid.material.transparent = true;
  grid.material.opacity = 0.16;
  grid.position.y = -5.2;
  scene.add(grid);

  /* ---------- Layout ---------- */
  var layout = { x: 0, y: 0, s: 1 };
  function resize() {
    var w = canvas.clientWidth || canvas.parentNode.clientWidth;
    var h = canvas.clientHeight || canvas.parentNode.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    var wide = w > 920;
    for (var q = 0; q < floaters.length; q++) floaters[q].visible = wide || q % 3 === 0;
    if (variant === "home") {
      layout = wide ? { x: 4.1, y: 0.1, s: 1 } : { x: 0, y: 2.6, s: 0.72 };
    } else {
      layout = wide ? { x: 5.2, y: 0, s: 0.78 } : { x: 2.4, y: 1.8, s: 0.5 };
    }
    if (w < 600 && variant === "home") layout = { x: 0, y: 3.1, s: 0.62 };
    core.position.set(layout.x, layout.y, 0);
    core.scale.setScalar(layout.s);
  }
  window.addEventListener("resize", resize);
  resize();

  /* ---------- Interaction ---------- */
  var mouse = { x: 0, y: 0 }, target = { x: 0, y: 0 };
  window.addEventListener("pointermove", function (e) {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = (e.clientY / window.innerHeight) * 2 - 1;
  }, { passive: true });

  var scrollY = 0;
  window.addEventListener("scroll", function () { scrollY = window.scrollY; }, { passive: true });

  var visible = true;
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; if (visible) loop(); }).observe(canvas);
  }
  document.addEventListener("visibilitychange", function () { if (!document.hidden) loop(); });

  /* ---------- Animate ---------- */
  var clock = new THREE.Clock();
  var t = 0, running = false;
  function frame() {
    running = false;
    if (!visible || document.hidden) return;
    var dt = Math.min(clock.getDelta(), 0.05) * speed;
    t += dt;

    mouse.x += (target.x - mouse.x) * 0.05;
    mouse.y += (target.y - mouse.y) * 0.05;

    gem.rotation.x += dt * 0.25;
    gem.rotation.y += dt * 0.35;
    shell.rotation.y -= dt * 0.12;
    shell.rotation.x += dt * 0.05;
    dots.rotation.copy(shell.rotation);
    ringA.rotation.z += dt * 0.5;
    ringB.rotation.z -= dt * 0.35;
    ringC.rotation.z += dt * 0.22;

    satA.position.set(3.7, 0, 0);
    satB.position.set(-4.3, 0, 0);
    satC.position.set(0, 4.9, 0);

    var pulse = 1 + Math.sin(t * 2) * 0.03;
    gem.scale.setScalar(pulse);

    core.rotation.y = mouse.x * 0.45 + scrollY * 0.0015;
    core.rotation.x = mouse.y * 0.3;
    core.position.y = layout.y + Math.sin(t * 0.8) * 0.18 - scrollY * 0.003;

    for (var k = 0; k < floaters.length; k++) {
      var f = floaters[k], u = f.userData;
      f.rotation.x += u.rs.x * 60 * dt;
      f.rotation.y += u.rs.y * 60 * dt;
      f.position.y = u.base.y + Math.sin(t + u.ph) * u.amp;
    }

    particles.rotation.y = t * 0.02 + mouse.x * 0.08;
    particles.rotation.x = mouse.y * 0.05;
    grid.position.z = (t * 0.8) % (80 / 60);

    camera.position.x += (mouse.x * 0.8 - camera.position.x) * 0.04;
    camera.position.y += (-mouse.y * 0.5 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);

    lTeal.position.x = 6 * Math.cos(t * 0.6);
    lTeal.position.z = 6 * Math.sin(t * 0.6);

    renderer.render(scene, camera);
    loop();
  }
  function loop() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }
  loop();
})();
