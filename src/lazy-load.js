function loadCss(src) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = src
    document.getElementsByTagName('head')[0].appendChild(link);
    return new Promise(resolve => link.onload = resolve);

}
function loadScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.getElementsByTagName('head')[0].appendChild(script);
    return new Promise(resolve => script.onload = resolve);
}
export default function loadResouce({ type, src }) {
    if (type == 'stylesheet') return loadCss(src);
    if (type == 'script') return loadScript(src);
}