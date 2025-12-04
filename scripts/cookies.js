(function(){
const COOKIE_NAME = 'cookie_consent';
const COOKIE_EXPIRE_DAYS = 365;
function setCookie(name, value, days){
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;expires=${d.toUTCString()};SameSite=Lax`;
}
function getCookie(name){
    const v = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return v ? decodeURIComponent(v.pop()) : null;
}
function createBanner(){
    if (getCookie(COOKIE_NAME)) return;
    const css = `
    .cc-wrap{position:fixed;left:0;right:0;bottom:18px;z-index:9999;display:flex;justify-content:center}
    .cc{max-width:980px;background:#fff;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,.12);padding:16px 18px;display:flex;gap:12px;align-items:center;font-family:Inter,system-ui,Arial;color:#111}
    .cc__text{font-size:14px;line-height:1.4}
    .cc__actions{display:flex;gap:8px;margin-left:12px}
    .cc button{padding:8px 14px;border-radius:10px;border:1px solid transparent;background:#0b84ff;color:#fff;cursor:pointer;font-weight:600}
    .cc button.ghost{background:transparent;color:#0b84ff;border-color:rgba(11,132,255,.12)}
    .cc a{color:#0b84ff;text-decoration:underline;margin-left:6px}
    @media (max-width:600px){.cc{flex-direction:column;align-items:flex-start}.cc__actions{width:100%;justify-content:stretch}.cc button{width:100%}}
    `;
    const style = document.createElement('style'); style.innerText = css; document.head.appendChild(style);

    const wrap = document.createElement('div'); wrap.className = 'cc-wrap';
    const box = document.createElement('div'); box.className = 'cc';
    const text = document.createElement('div'); text.className = 'cc__text';
    text.innerHTML = 'Мы используем cookies для работы сервиса и улучшения сервиса. <a href="/privacy.html" target="_blank">Политика конфиденциальности</a>.';
    const actions = document.createElement('div'); actions.className = 'cc__actions';
    const acceptBtn = document.createElement('button'); acceptBtn.innerText = 'Принять всё';
    const rejectBtn = document.createElement('button'); rejectBtn.innerText = 'Отклонить несущественные'; rejectBtn.className = 'ghost';
    actions.appendChild(acceptBtn); actions.appendChild(rejectBtn);
    box.appendChild(text); box.appendChild(actions); wrap.appendChild(box); document.body.appendChild(wrap);

    acceptBtn.addEventListener('click', function(){
        setCookie(COOKIE_NAME, JSON.stringify({consent: 'all'}), COOKIE_EXPIRE_DAYS);
        document.body.removeChild(wrap);
        initAnalytics();
    });
    rejectBtn.addEventListener('click', function(){
        setCookie(COOKIE_NAME, JSON.stringify({consent: 'essential'}), COOKIE_EXPIRE_DAYS);
        document.body.removeChild(wrap);
    });
}

function initAnalytics(){
    if (window._cookieAnalyticsInited) return;
    window._cookieAnalyticsInited = true;
    // Пример: динамически подгрузить скрипт аналитики
    // Заменяй src на свой трекер (GA, Я.Метрика и т.д.)
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX';
    document.head.appendChild(s);
    s.onload = function(){
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-XXXXXXXXXX', {anonymize_ip: true});
    };
}

function applyExistingConsent(){
    const raw = getCookie(COOKIE_NAME);
    if (!raw) return;
    try{
        const v = JSON.parse(raw);
        if (v && v.consent === 'all') initAnalytics();
    }catch(e){}
}

document.addEventListener('DOMContentLoaded', function(){
    applyExistingConsent();
    createBanner();
});
})();
