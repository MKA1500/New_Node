$(document).ready(function () {
    // LOGS SCREEN
    (function (message) {
        var log = document.querySelector('#log');

        ['log', 'warn', 'error'].forEach(function (verb) {
            console[verb] = (function (method, verb, log) {
                return function (text) {
                    method(text);
                    var msg = document.createElement('code');
                    msg.classList.add(verb);
                    msg.textContent = verb + ': ' + text;
                    log.appendChild(msg);
                };
            })(console[verb].bind(console), verb, log);
        });
    })();
});