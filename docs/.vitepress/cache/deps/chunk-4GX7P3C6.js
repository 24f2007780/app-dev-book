import {
  $f,
  N,
  g
} from "./chunk-ZCAEFEVO.js";

// node_modules/vitepress-mermaid-preview/dist/chunk-SKB7J2MH-2ySbPcfn.js
var d = g((e, t, i, r) => {
  e.attr("class", i);
  const { width: o, height: h, x: n, y: c } = u(e, t);
  $f(e, h, o, r);
  const s = l(n, c, o, h, t);
  e.attr("viewBox", s), N.debug(`viewBox configured: ${s} with padding: ${t}`);
}, "setupViewPortForSVG");
var u = g((e, t) => {
  var _a;
  const i = ((_a = e.node()) == null ? void 0 : _a.getBBox()) || { width: 0, height: 0, x: 0, y: 0 };
  return {
    width: i.width + t * 2,
    height: i.height + t * 2,
    x: i.x,
    y: i.y
  };
}, "calculateDimensionsWithPadding");
var l = g((e, t, i, r, o) => `${e - o} ${t - o} ${i} ${r}`, "createViewBox");

export {
  d
};
//# sourceMappingURL=chunk-4GX7P3C6.js.map
