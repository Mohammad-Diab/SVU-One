(() => {
  "use strict";
  const config = window.SVU_CONFIG;
  const $ = (selector) => document.querySelector(selector);
  const isDownloadPage = Boolean($("#downloads"));
  const translations = {
    "ar": {
      "videoEyebrow": "بالفيديو",
      "videoTitle": "تعرّف على SVU One",
      "videoDescription": "شاهد ما يقدمه التطبيق.",
      "watchYouTube": "شاهد على YouTube",
      "playVideo": "تشغيل فيديو SVU One",
      "playVideoLabel": "تشغيل الفيديو",
      "skip": "انتقل إلى التنزيل",
      "pageSettings": "إعدادات الصفحة",
      "news": "أخبار التطبيق",
      "releaseNotes": "ما الجديد؟",
      "releaseLabel": "الإصدار",
      "lastKnown": "آخر إصدار معروف؛ تعذّر التحقق من إصدار أحدث.",
      "verified": "أحدث إصدار مستقر.",
      "heroFirst": "جامعتك",
      "heroSecond": "في مكان واحد",
      "intro": "مقرراتك ومحاضراتك ومواعيدك، معاً في تطبيق واحد لطلاب الجامعة الافتراضية السورية.",
      "independentShort": "تطبيق مستقل، غير تابع للجامعة الافتراضية السورية.",
      "free": "مجاني للاستخدام الشخصي",
      "oneLogin": "دخول واحد لمواقع الجامعة",
      "downloadTitle": "تنزيل التطبيق",
      "platforms": "أنظمة التشغيل",
      "dailyTitle": "دراستك، أكثر تنظيماً",
      "coursesTitle": "المقررات والوظائف",
      "coursesText": "ملفات مقرراتك ووظائفك في متناول يدك.",
      "lecturesTitle": "المحاضرات",
      "lecturesText": "احضر المحاضرات المباشرة وشاهد التسجيلات.",
      "dayTitle": "المواعيد والبريد",
      "dayText": "تابع مواعيدك وامتحاناتك وبريدك.",
      "beforeDownload": "المساعدة",
      "questionsTitle": "أسئلة شائعة",
      "questionsIntro": "إجابات تساعدك على البدء.",
      "qArchitecture": "كيف أختار نسخة Windows؟",
      "aArchitectureStore": "من متجر Microsoft، تحصل على النسخة المناسبة لجهازك تلقائياً.",
      "aArchitectureSystemIntro": "لمعرفة النسخة المناسبة لجهازك عند التنزيل المباشر:",
      "systemStepSettings": "الإعدادات",
      "systemStepSystem": "النظام",
      "systemStepAbout": "حول",
      "systemStepType": "نوع النظام",
      "aArchitecture64": "لنظام 64 بت، اختر Windows x64.",
      "aArchitecture32": "لنظام 32 بت، اختر Windows x86.",
      "aArchitectureAI": "ميزات الذكاء الاصطناعي متاحة في نسخة Windows x64 فقط.",
      "qStore": "ما الفرق بين المتجر والتنزيل المباشر؟",
      "aStoreInstall": "التطبيق نفسه في الحالتين: يمكنك تثبيته من متجر Microsoft أو تنزيل ملف التثبيت مباشرة.",
      "aStoreUpdates": "تصلك التحديثات تلقائياً، سواء ثبّت التطبيق من المتجر أو بالتنزيل المباشر.",
      "qOther": "هل يتوفر التطبيق للهواتف والأنظمة الأخرى؟",
      "aOther": "ستتوفر نسخ Android وmacOS وLinux وiOS لاحقاً.",
      "qSync": "لماذا يطلب التطبيق حساب Google؟",
      "aSync": "المزامنة ميزة اختيارية تستخدم حسابك في Google ومجلداً خاصاً بالتطبيق في Google Drive لمزامنة مواعيدك والوظائف التي علّمتها مُسلَّمة وتعديلات الجدول والإشعارات المقروءة بين أجهزتك.",
      "syncPrivacy": "تفاصيل المزامنة في سياسة الخصوصية",
      "independent": "تطبيق مستقل، غير تابع للجامعة الافتراضية السورية ولا يمثّلها.",
      "github": "GitHub",
      "privacy": "الخصوصية",
      "telegram": "تيليغرام",
      "support": "الإبلاغ عن مشكلة",
      "privacyTitle": "سياسة الخصوصية | SVU One",
      "privacyDescription": "سياسة خصوصية SVU One: البيانات المحفوظة، والمزامنة مع Google Drive، والصلاحيات، وحذف البيانات والتواصل.",
      "skipPrivacy": "انتقل إلى سياسة الخصوصية",
      "available": "متاح الآن",
      "store": "التنزيل من Microsoft Store",
      "direct": "أو التنزيل المباشر",
      "installer": "تنزيل",
      "requires": "Windows 10 أو أحدث",
      "armHint": "لأجهزة ARM، يرجى التحقق من التوافق في متجر Microsoft.",
      "soon": "قريباً",
      "soonOther": "نسخة {platform} ستتوفر لاحقاً.",
      "follow": "تابع أخبار التطبيق على تيليغرام",
      "googlePlay": "التنزيل من Google Play",
      "apk": "تنزيل APK",
      "apkSoon": "تنزيل APK (قريباً)",
      "playSoon": "Google Play (قريباً)",
      "appStore": "التنزيل من App Store",
      "downloadPlatform": "تنزيل نسخة {platform}",
      "missingAsset": "التنزيل المباشر غير متاح حالياً. يمكنك استخدام متجر Microsoft.",
      "releases": "صفحة الإصدارات",
      "themeDark": "تفعيل المظهر الداكن",
      "themeLight": "تفعيل المظهر الفاتح",
      "title": "SVU One | تطبيق طلاب الجامعة الافتراضية السورية",
      "description": "SVU One: جامعتك في مكان واحد. نزّل التطبيق المناسب لجهازك.",
      "languageLabel": "اللغة",
      "chooseVersion": "أي نسخة أختار؟",
      "downloadWindows": "تنزيل Windows",
      "otherVersions": "نسخ Windows الأخرى",
      "notAvailable": "غير متاح حالياً"
    },
    "en": {
      "videoEyebrow": "See it in action",
      "videoTitle": "Meet SVU One",
      "videoDescription": "See what the app offers.",
      "watchYouTube": "Watch on YouTube",
      "playVideo": "Play the SVU One video",
      "playVideoLabel": "Play video",
      "skip": "Skip to downloads",
      "pageSettings": "Page settings",
      "news": "App news",
      "releaseNotes": "What's new?",
      "releaseLabel": "Version",
      "lastKnown": "Last known release; could not check for a newer version.",
      "verified": "Latest stable release.",
      "heroFirst": "Your university",
      "heroSecond": "in one place",
      "intro": "Your courses, lectures and schedule, together in one app for Syrian Virtual University students.",
      "independentShort": "An independent app, not affiliated with the Syrian Virtual University.",
      "free": "Free for personal use",
      "oneLogin": "One university sign-in",
      "downloadTitle": "Download SVU One",
      "platforms": "Operating systems",
      "dailyTitle": "A more organised university day",
      "coursesTitle": "Courses and assignments",
      "coursesText": "Your course files and assignments, close at hand.",
      "lecturesTitle": "Lectures",
      "lecturesText": "Join live lectures and watch recordings.",
      "dayTitle": "Schedule and mail",
      "dayText": "Keep up with your schedule, exams and mail.",
      "beforeDownload": "Help",
      "questionsTitle": "Frequently asked questions",
      "questionsIntro": "Help getting started.",
      "qArchitecture": "Which Windows version should I choose?",
      "aArchitectureStore": "Microsoft Store automatically chooses the right version for your device.",
      "aArchitectureSystemIntro": "To find the right version for your device when downloading directly:",
      "systemStepSettings": "Settings",
      "systemStepSystem": "System",
      "systemStepAbout": "About",
      "systemStepType": "System type",
      "aArchitecture64": "For a 64-bit system, choose Windows x64.",
      "aArchitecture32": "For a 32-bit system, choose Windows x86.",
      "aArchitectureAI": "AI features are available only in the Windows x64 version.",
      "qStore": "What's the difference between the Store and direct download?",
      "aStoreInstall": "Both install the same app: use Microsoft Store or download the installer directly.",
      "aStoreUpdates": "Updates arrive automatically, whichever installation method you choose.",
      "qOther": "Is the app available on phones and other operating systems?",
      "aOther": "Versions for Android, macOS, Linux and iOS are planned for later.",
      "qSync": "Why does the app ask for a Google account?",
      "aSync": "Sync is an optional feature that uses your Google account and a private folder for the app in Google Drive to sync your events, assignments marked as handed in, timetable changes and read notices between your devices.",
      "syncPrivacy": "Sync details in the privacy policy",
      "independent": "An independent app, not affiliated with or endorsed by the Syrian Virtual University.",
      "github": "GitHub",
      "privacy": "Privacy",
      "telegram": "Telegram",
      "support": "Report an issue",
      "privacyTitle": "Privacy Policy | SVU One",
      "privacyDescription": "SVU One's privacy policy: stored data, Google Drive sync, permissions, deleting data and contact details.",
      "skipPrivacy": "Skip to the privacy policy",
      "available": "Available now",
      "store": "Get it from Microsoft Store",
      "direct": "Or download directly",
      "installer": "Download",
      "requires": "Windows 10 or later",
      "armHint": "For ARM devices, check compatibility in Microsoft Store.",
      "soon": "Coming soon",
      "soonOther": "The {platform} version is planned for later.",
      "follow": "Follow app news on Telegram",
      "googlePlay": "Get it on Google Play",
      "apk": "Download APK",
      "apkSoon": "APK download (coming soon)",
      "playSoon": "Google Play (coming soon)",
      "appStore": "Download on the App Store",
      "downloadPlatform": "Download for {platform}",
      "missingAsset": "Direct download is currently unavailable. You can use Microsoft Store.",
      "releases": "View releases",
      "themeDark": "Use dark theme",
      "themeLight": "Use light theme",
      "title": "SVU One | The app for Syrian Virtual University students",
      "description": "Download SVU One. Your Syrian Virtual University day, together in one app. Find the right version for your device.",
      "languageLabel": "Language",
      "chooseVersion": "Which version should I choose?",
      "downloadWindows": "Download for Windows",
      "otherVersions": "Other Windows versions",
      "notAvailable": "Currently unavailable"
    }
  };
  const names = { windows: "Windows", android: "Android", macos: "macOS", linux: "Linux", ios: "iOS" };
  const symbols = { windows: "windows", android: "android", macos: "apple", linux: "linux", ios: "phone" };
  const readSetting = (key) => { try { return localStorage.getItem(key); } catch { return null; } };
  const saveSetting = (key, value) => { try { localStorage.setItem(key, value); } catch { /* Optional preference storage. */ } };
  let language = readSetting("svu-language");
  if (!translations[language]) language = /^ar\b/i.test(navigator.language || "") ? "ar" : "en";
  let device = detectDevice(navigator);
  let platform = device.platform || "windows";
  let version = config.fallbackVersion;
  let releaseVerified = false;
  let releaseURL = config.repository + "/releases/latest";
  let installers = { x64: config.windows.x64, x86: config.windows.x86, arm64: config.windows.arm64 };
  const systemTheme = matchMedia("(prefers-color-scheme: dark)");
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const runningAnimations = new WeakMap();
  let pageTransition = null;

  function animate(node, frames, options = {}) {
    runningAnimations.get(node)?.cancel();
    if (reducedMotion.matches || !node.animate) return null;
    const animation = node.animate(frames, { duration: 300, easing: "cubic-bezier(.22,1,.36,1)", ...options });
    runningAnimations.set(node, animation);
    return animation;
  }
  // Insiyab's demo/assets/site.js: frost the old page, open the new one like a book.
  function transitionLanguage() {
    const root = document.documentElement;
    pageTransition?.skipTransition();
    pageTransition = null;
    const clean = () => {
      root.classList.remove("site-dir-flip");
      root.style.removeProperty("--site-flip-edge");
      root.style.removeProperty("--site-flip-turn");
    };
    clean();
    if (!document.startViewTransition || reducedMotion.matches || root.dataset.insFx === "off") return render();
    const direction = language === "ar" ? "rtl" : "ltr";
    root.style.setProperty("--site-flip-edge", direction === "ltr" ? "left" : "right");
    root.style.setProperty("--site-flip-turn", direction === "ltr" ? "28deg" : "-28deg");
    root.classList.add("site-dir-flip");
    try {
      const transition = document.startViewTransition(render);
      pageTransition = transition;
      transition.ready.catch(() => {}); // A rapid second choice can skip the first capture.
      const finish = () => {
        // A superseded transition must not clear a newer page turn.
        if (pageTransition !== transition) return;
        clean();
        pageTransition = null;
      };
      transition.finished.then(finish, finish);
    } catch {
      clean();
      render();
    }
  }
  function positionPlatformIndicator() {
    if (!isDownloadPage) return;
    const selected = $("[data-platform][aria-selected='true']");
    const group = $(".platforms");
    group.style.setProperty("--tab-x", selected.offsetLeft + "px");
    group.style.setProperty("--tab-y", selected.offsetTop + "px");
    group.style.setProperty("--tab-width", selected.offsetWidth + "px");
    group.style.setProperty("--tab-height", selected.offsetHeight + "px");
    group.dataset.indicator = "ready";
    // Keep the selected platform visible when the strip needs to scroll.
    const left = selected.offsetLeft;
    const right = left + selected.offsetWidth;
    if (left < group.scrollLeft) group.scrollLeft = Math.max(0, left - 6);
    else if (right > group.scrollLeft + group.clientWidth) group.scrollLeft = right - group.clientWidth + 6;
  }
  function updateHeaderOffset() {
    const header = $(".site-topbar");
    const nav = header.querySelector("nav");
    const stages = ["site-news-icon", "site-brand-icon", "site-news-hidden", "site-language-compact", "site-theme-hidden"];
    header.classList.remove(...stages);
    const fits = () => {
      const items = [...nav.children].filter(node => getComputedStyle(node).display !== "none");
      const width = items.reduce((sum, node) => sum + node.getBoundingClientRect().width, 0);
      const gap = parseFloat(getComputedStyle(nav).columnGap) || 0;
      return width + gap * (items.length - 1) <= nav.getBoundingClientRect().width;
    };
    for (const stage of stages) {
      if (fits()) break;
      header.classList.add(stage);
    }
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--site-header-height", height + "px");
  }

  function t(key, values = {}) {
    return translations[language][key].replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
  }
  function icon(name) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add("icon");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("focusable", "false");
    const use = document.createElementNS(svg.namespaceURI, "use");
    use.setAttribute("href", "#" + name);
    svg.append(use);
    return svg;
  }
  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }
  function safeURL(value) {
    try { const url = new URL(value); return url.protocol === "https:" && !url.username && !url.password ? url.href : null; }
    catch { return null; }
  }
  // Pages the student stays on for a while (the stores, the channel) open in a new tab, so this page is still there afterwards; a direct installer stays in this tab.
  const elsewhereHosts = ["t.me", "apps.microsoft.com", "play.google.com", "apps.apple.com"];
  function opensElsewhere(url) {
    try { return elsewhereHosts.includes(new URL(url).hostname); } catch { return false; }
  }
  function link(label, url, className, symbol) {
    const node = el("a", className);
    if (node.classList.contains("button")) node.classList.add("ins-btn", node.classList.contains("primary") ? "ins-btn--primary" : "ins-btn--secondary");
    node.href = safeURL(url);
    if (symbol) node.append(icon(symbol));
    if (opensElsewhere(node.href)) {
      node.target = "_blank";
      node.rel = "noopener noreferrer";
    }
    node.append(el("span", "", label));
    return node;
  }
  function microsoftStoreBadge() {
    const badge = el("a", "store-badge");
    badge.href = safeURL(config.windows.store);
    badge.target = "_blank";
    badge.rel = "noopener noreferrer";
    const artwork = el("img");
    // Original localized artwork from get.microsoft.com, without redrawing the badge.
    artwork.src = `assets/microsoft-store-${language}.svg`;
    artwork.alt = t("store");
    artwork.width = 214;
    artwork.height = 58;
    badge.append(artwork);
    return badge;
  }
  function detectDevice(nav) {
    const ua = nav.userAgent || "";
    const os = nav.userAgentData?.platform || nav.platform || "";
    // iPadOS desktop mode identifies as macOS; check touch before macOS.
    if (/iPad|iPhone|iPod/i.test(ua) || (/Mac/i.test(os) && nav.maxTouchPoints > 1)) return { platform: "ios", arch: null };
    if (/Android/i.test(ua) || /Android/i.test(os)) return { platform: "android", arch: null };
    if (/Windows|Win/i.test(os + " " + ua)) {
      // Win32 and an ordinary Windows NT UA do NOT establish OS bitness.
      const arch = /ARM64|aarch64|Windows.*ARM/i.test(ua) ? "arm" : /Win64|WOW64|x86_64|amd64/i.test(ua) ? "x64" : null;
      return { platform: "windows", arch };
    }
    if (/Mac/i.test(os + " " + ua)) return { platform: "macos", arch: null };
    if (/Linux/i.test(os + " " + ua) && !/CrOS/i.test(ua)) return { platform: "linux", arch: null };
    return { platform: null, arch: null };
  }
  function renderTheme() {
    const dark = (window.Insiyab ? Insiyab.theme() : document.documentElement.dataset.insTheme || (systemTheme.matches ? "dark" : "light")) === "dark";
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    $("#theme").setAttribute("aria-label", t(dark ? "themeLight" : "themeDark"));
    $("meta[name='theme-color']").content = dark ? "#0f1115" : "#4c1d95";
  }
  function renderRelease() {
    if (!isDownloadPage) return;
    $("#release-label").textContent = t("releaseLabel");
    $("#release-version").textContent = "v" + version;
    $("#release-link").href = releaseURL;
    $("#release-link").title = t(releaseVerified ? "verified" : "lastKnown");
  }
  function render() {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.title = t(isDownloadPage ? "title" : "privacyTitle");
    $("meta[name='description']").content = t(isDownloadPage ? "description" : "privacyDescription");
    $("meta[property='og:title']").content = document.title;
    $("meta[property='og:description']").content = $("meta[name='description']").content;
    $("meta[property='og:locale']").content = language === "ar" ? "ar_SY" : "en_US";
    $("meta[property='og:locale:alternate']").content = language === "ar" ? "en_US" : "ar_SY";
    document.querySelectorAll("[data-i18n]").forEach(node => { node.textContent = t(node.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach(node => { node.setAttribute("aria-label", t(node.dataset.i18nAria)); });
    document.querySelectorAll("[data-language]").forEach(button => {
      button.classList.toggle("is-active", button.dataset.language === language);
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.querySelectorAll("[data-policy-language]").forEach(article => {
      article.hidden = article.dataset.policyLanguage !== language;
    });
    renderTheme();
    renderRelease();
    renderPlatform();
    updateHeaderOffset();
    const player = $("#video-frame iframe");
    if (player) player.title = t("playVideo");
  }
  function renderPlatform(withMotion = false) {
    if (!isDownloadPage) return;
    const content = $("#platform-content");
    runningAnimations.get(content)?.cancel();
    content.classList.remove("is-transitioning");
    renderPlatformContent();
    positionPlatformIndicator();
    if (!withMotion) return;
    const transition = animate(content, [
      { opacity: .35, transform: "translateY(7px)" },
      { opacity: 1, transform: "translateY(0)" }
    ], { duration: 330 });
    if (transition) {
      content.classList.add("is-transitioning");
      const finish = () => {
        if (runningAnimations.get(content) === transition) content.classList.remove("is-transitioning");
      };
      transition.onfinish = finish;
      transition.oncancel = finish;
    }
    const selectedIcon = $("[data-platform][aria-selected='true'] .icon");
    animate(selectedIcon, [{ transform: "translateY(0) scale(1)" }, { transform: "translateY(-3px) scale(1.1)", offset: .45 }, { transform: "translateY(0) scale(1)" }], { duration: 360 });
  }
  function renderPlatformContent() {
    document.querySelectorAll("[data-platform]").forEach(node => {
      const selected = node.dataset.platform === platform;
      node.setAttribute("aria-selected", String(selected));
      node.tabIndex = selected ? 0 : -1;
    });
    const content = $("#platform-content");
    content.setAttribute("aria-labelledby", "platform-" + platform);
    content.replaceChildren();
    // Overlapping grid panes share the tallest natural height at this viewport.
    // Inactive panes reserve space but are absent from interaction and accessibility.
    for (const id of Object.keys(names)) {
      const pane = el("div", "platform-pane");
      const active = id === platform;
      pane.dataset.platformPane = id;
      pane.classList.toggle("is-active", active);
      pane.inert = !active;
      pane.setAttribute("aria-hidden", String(!active));
      renderPlatformPane(pane, id);
      content.append(pane);
    }
  }
  function renderPlatformPane(content, platform) {
    const entry = config[platform];
    if (platform === "windows") return renderWindows(content);
    if (!Object.values(entry).some(value => safeURL(value))) return renderSoon(content, platform);
    const heading = el("div", "platform-intro");
    heading.append(el("strong", "", names[platform]), el("span", "status ins-pill ins-pill--ok", t("available")));
    content.append(heading);
    const stack = el("div", "download-stack");
    if (platform === "android") {
      if (safeURL(entry.store)) stack.append(link(t("googlePlay"), entry.store, "button primary", "store"));
      else stack.append(el("p", "unavailable-note", t("playSoon")));
      if (safeURL(entry.apk)) stack.append(link(t("apk"), entry.apk, "button " + (safeURL(entry.store) ? "secondary" : "primary"), "download"));
      else stack.append(el("p", "unavailable-note", t("apkSoon")));
    } else {
      stack.append(link(t(platform === "ios" ? "appStore" : "downloadPlatform", { platform: names[platform] }), entry.store || entry.download, "button primary", platform === "ios" ? "store" : "download"));
    }
    content.append(stack);
    content.append(link(t("follow"), "https://t.me/SVUOne", "store-hint"));
  }
  function renderWindows(content) {
    const heading = el("div", "platform-intro");
    const name = el("strong", "", "Windows");
    name.dir = "ltr";
    heading.append(name, el("span", "requirements", t("requires")));
    content.append(heading, microsoftStoreBadge(), el("div", "separator", t("direct")));
    const architectures = ["x64", "x86", "arm64"];
    const available = architectures.filter(arch => safeURL(installers[arch]));
    if (!available.length) {
      content.append(el("p", "unavailable-note", t("missingAsset")), link(t("releases"), releaseURL, "button secondary"));
    } else {
      const detected = device.platform === "windows" ? device.arch === "arm" ? "arm64" : device.arch : null;
      const preferred = architectures.includes(detected) ? detected : available[0];
      const group = el("div", "ins-btn-group download-split");
      group.setAttribute("role", "group");
      group.setAttribute("aria-label", t("downloadWindows"));
      const url = safeURL(installers[preferred]);
      const primary = el(url ? "a" : "button", "ins-btn ins-btn--secondary download-main");
      primary.dataset.arch = preferred;
      if (url) primary.href = url;
      else { primary.type = "button"; primary.disabled = true; }
      const label = el("span", "download-main-label");
      label.append(el("span", "download-action", t(url ? "installer" : preferred === "arm64" ? "soon" : "notAvailable")), el("bdi", "", "Windows " + (preferred === "arm64" ? "ARM64" : preferred)));
      primary.setAttribute("aria-label", t("downloadWindows") + " " + preferred);
      primary.append(icon("download"), label);
      const menu = el("details", "ins-pop ins-pop--end download-menu");
      const trigger = el("summary", "ins-btn ins-btn--secondary ins-btn--icon download-toggle");
      trigger.setAttribute("aria-label", t("otherVersions"));
      trigger.setAttribute("aria-expanded", "false");
      trigger.append(icon("chevron-down"));
      const list = el("ul", "ins-pop-body download-menu-body");
      list.setAttribute("aria-label", t("otherVersions"));
      for (const arch of architectures.filter(arch => arch !== preferred)) {
        const href = safeURL(installers[arch]);
        const row = el("li");
        const item = el(href ? "a" : "button", "download-menu-item");
        item.dataset.arch = arch;
        if (href) {
          item.href = href;
          item.addEventListener("click", () => { menu.open = false; });
        }
        else { item.type = "button"; item.disabled = true; item.setAttribute("aria-disabled", "true"); }
        const name = el("span", "download-menu-name");
        name.append(el("bdi", "", "Windows " + (arch === "arm64" ? "ARM64" : arch)));
        item.append(name, href ? icon("download") : el("span", "download-menu-status", t(arch === "arm64" ? "soon" : "notAvailable")));
        row.append(item);
        list.append(row);
      }
      menu.append(trigger, list);
      menu.addEventListener("toggle", () => trigger.setAttribute("aria-expanded", String(menu.open)));
      group.append(primary, menu);
      content.append(group);
    }
    if (device.platform === "windows" && device.arch === "arm") content.append(el("p", "compatibility-note", t("armHint")));
    const help = el("a", "arch-help", t("chooseVersion"));
    help.href = "#choose-version";
    help.addEventListener("click", () => {
      const details = $("#choose-version");
      runningAnimations.get(details)?.cancel();
      delete details.dataset.expanded;
      details.open = true;
    });
    content.append(help);
  }
  function renderSoon(content, platform) {
    const soon = el("div", "soon-content");
    const symbol = el("span", "soon-symbol");
    symbol.append(icon(symbols[platform]));
    soon.append(symbol, el("h3", "", t("soon")), el("p", "", t("soonOther", { platform: names[platform] })));
    content.append(soon);
  }
  document.querySelectorAll("[data-language]").forEach(button => button.addEventListener("click", () => {
    if (language === button.dataset.language) return;
    language = button.dataset.language;
    saveSetting("svu-language", language);
    transitionLanguage();
  }));
  document.addEventListener("ins:theme", renderTheme);
  if (!window.Insiyab) $("#theme").addEventListener("click", () => {
    document.documentElement.dataset.insTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    renderTheme();
  });
  systemTheme.addEventListener("change", renderTheme);
  document.querySelectorAll("[data-platform]").forEach(button => button.addEventListener("click", () => {
    if (platform === button.dataset.platform) return;
    platform = button.dataset.platform;
    renderPlatform(true);
  }));
  $(".platforms")?.addEventListener("keydown", event => {
    const buttons = [...document.querySelectorAll("[data-platform]")];
    const index = buttons.indexOf(document.activeElement);
    if (index < 0) return;
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = buttons.length - 1;
    else return;
    event.preventDefault();
    buttons[next].focus();
    buttons[next].click();
  });
  document.querySelectorAll(".question-list details").forEach(details => {
    const summary = details.querySelector("summary");
    summary.addEventListener("click", event => {
      if (reducedMotion.matches || !details.animate) return;
      event.preventDefault();
      const oldHeight = details.getBoundingClientRect().height;
      const expanding = details.dataset.expanded ? details.dataset.expanded !== "true" : !details.open;
      runningAnimations.get(details)?.cancel();
      details.dataset.expanded = String(expanding);
      details.open = true;
      const newHeight = expanding ? details.getBoundingClientRect().height : summary.getBoundingClientRect().height + 1;
      const animation = animate(details, [{ height: oldHeight + "px" }, { height: newHeight + "px" }], { duration: 300 });
      animation.onfinish = () => { details.open = expanding; delete details.dataset.expanded; };
    });
  });
  $("#video-play")?.addEventListener("click", event => {
    if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    // Local HTML has no HTTP Referer. Keep the ordinary YouTube link in that context.
    if (!/^https?:$/.test(location.protocol)) return;
    event.preventDefault();
    const player = el("iframe");
    player.title = t("playVideo");
    const source = new URL("https://www.youtube-nocookie.com/embed/eeR0fvbclIA");
    source.searchParams.set("autoplay", "1");
    source.searchParams.set("rel", "0");
    source.searchParams.set("origin", location.origin);
    player.src = source.href;
    player.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    player.allowFullscreen = true;
    player.referrerPolicy = "strict-origin-when-cross-origin";
    $("#video-frame").replaceChildren(player);
    player.focus({ preventScroll: true });
    animate(player, [{ opacity: 0 }, { opacity: 1 }]);
  });
  $(".video-thumbnail")?.addEventListener("error", event => { event.currentTarget.hidden = true; });
  render();
  updateHeaderOffset();
  if (window.ResizeObserver) new ResizeObserver(updateHeaderOffset).observe($(".site-topbar"));
  else window.addEventListener("resize", updateHeaderOffset);
  if (window.ResizeObserver && isDownloadPage) new ResizeObserver(positionPlatformIndicator).observe($(".platforms"));
  else window.addEventListener("resize", positionPlatformIndicator);
  document.fonts?.ready.then(positionPlatformIndicator);
  document.fonts?.ready.then(updateHeaderOffset);
  document.fonts?.addEventListener("loadingdone", updateHeaderOffset);
  if (window.IntersectionObserver && !reducedMotion.matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-revealed");
      observer.unobserve(entry.target);
    }), { threshold: .1 });
    document.querySelectorAll(".feature, .video-section, .questions").forEach((node, index) => {
      node.classList.add("will-reveal");
      node.style.setProperty("--reveal-delay", index < 3 ? index * 65 + "ms" : "0ms");
      observer.observe(node);
    });
  }
  reducedMotion.addEventListener("change", () => {
    if (!reducedMotion.matches) return;
    pageTransition?.skipTransition();
    document.querySelectorAll(".question-list details[data-expanded]").forEach(details => {
      details.open = details.dataset.expanded === "true";
      delete details.dataset.expanded;
    });
    document.getAnimations().forEach(animation => animation.cancel());
  });

  // Chromium exposes OS architecture on HTTPS. No UA guesses based on Win32.
  if (isDownloadPage && device.platform === "windows" && navigator.userAgentData?.getHighEntropyValues) {
    Promise.race([
      navigator.userAgentData.getHighEntropyValues(["architecture", "bitness", "wow64"]),
      new Promise(resolve => setTimeout(() => resolve(null), 2000))
    ]).then(hints => {
      if (!hints) return;
      if (/arm/i.test(hints.architecture || "")) device.arch = "arm";
      else if (/x86/i.test(hints.architecture || "")) {
        if (hints.bitness === "64" || hints.wow64 === true) device.arch = "x64";
        else if (hints.bitness === "32") device.arch = "x86";
      }
      renderPlatform();
    }).catch(() => { /* Keep a conservative UA result. */ });
  }
  function applyRelease(release) {
    if (!release || release.draft || release.prerelease || !Array.isArray(release.assets)) return false;
    const match = /^v?(\d+\.\d+\.\d+)$/.exec(release.tag_name || "");
    if (!match) return false;
    const prefix = config.repository + "/releases/download/" + release.tag_name + "/";
    const url = safeURL(release.html_url);
    if (url !== config.repository + "/releases/tag/" + release.tag_name) return false;
    const findInstaller = name => {
      const asset = release.assets.find(item => item?.name === name && item.state === "uploaded" && item.size > 0);
      const assetURL = safeURL(asset?.browser_download_url);
      return assetURL === prefix + name ? assetURL : null;
    };
    // Network responses and cached releases pass the same asset validation.
    installers = { x64: findInstaller("SvuOne-Setup.exe"), x86: findInstaller("SvuOne-Setup-x86.exe"), arm64: findInstaller("SvuOne-Setup-arm64.exe") };
    version = match[1];
    releaseURL = url;
    releaseVerified = true;
    renderRelease();
    if (platform === "windows") renderPlatform();
    return true;
  }
  async function refreshRelease() {
    const cacheKey = "svu-latest-release-v1";
    const lifetime = 60 * 60 * 1000;
    try {
      const cache = JSON.parse(localStorage.getItem(cacheKey));
      const age = Date.now() - cache?.savedAt;
      if (age >= 0 && age < lifetime && applyRelease(cache.release)) return;
    } catch { /* Storage is optional, including in private browsing. */ }
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      const response = await fetch(config.releaseApi, { headers: { Accept: "application/vnd.github+json" }, signal: controller.signal, credentials: "omit", referrerPolicy: "no-referrer" });
      if (!response.ok) return;
      const release = await response.json();
      if (!applyRelease(release)) return;
      const cachedRelease = {
        tag_name: release.tag_name, html_url: release.html_url, draft: false, prerelease: false,
        assets: release.assets.filter(item => /^(SvuOne-Setup|SvuOne-Setup-x86|SvuOne-Setup-arm64)\.exe$/.test(item?.name)).map(({ name, state, size, browser_download_url }) => ({ name, state, size, browser_download_url }))
      };
      try { localStorage.setItem(cacheKey, JSON.stringify({ savedAt: Date.now(), release: cachedRelease })); }
      catch { /* Downloads still work when the cache cannot be saved. */ }
    } catch { /* Latest-release fallback URLs remain available without the API. */ }
    finally { clearTimeout(timeout); }
  }
  if (isDownloadPage) refreshRelease();
})();
