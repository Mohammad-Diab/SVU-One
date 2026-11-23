/* Edit this file when a platform becomes available. null = Coming soon.
   Use full HTTPS URLs. For architecture-specific downloads, link to a page
   that lets the student choose, or use a universal installer/APK. */
window.SVU_CONFIG = {
  repository: "https://github.com/Mohammad-Diab/SVU-One",
  releaseApi: "https://api.github.com/repos/Mohammad-Diab/SVU-One/releases/latest",
  // Last known version; download URLs always resolve to the latest release.
  fallbackVersion: "1.2.1",
  windows: {
    store: "https://apps.microsoft.com/detail/9P0MXPKXVJ01",
    x64: "https://github.com/Mohammad-Diab/SVU-One/releases/latest/download/SvuOne-Setup.exe",
    x86: "https://github.com/Mohammad-Diab/SVU-One/releases/latest/download/SvuOne-Setup-x86.exe",
    arm64: null // Coming soon; enable when the installer is published.
  },
  android: { apk: "https://github.com/Mohammad-Diab/SVU-One/releases/latest/download/SvuOne-Android.apk", store: null }, // TODO: Google Play
  // This site's own version, shown small in the footer so a report can say which page the student saw. Bump it with every change to the site
  // (date, then .2, .3 … for more changes the same day).
  siteVersion: "2026-11-23",
  // The second download place: the pinned Telegram post with this release's files (GitHub's file server and the Microsoft Store do not work from Syria).
  // Point it at the new post with every release.
  telegramFiles: "https://t.me/SVUOne/19",
  // Google Play closed test: while android.store is null, the Android tab offers a "help us reach Google Play" dialog with these two steps.
  playTesting: {
    group: "https://groups.google.com/g/svu-one-testers",
    optIn: "https://play.google.com/apps/testing/com.kodbymohammad.svuone",
    // The 14-day closed test began when the 12th tester joined; the badge's Play mark fills with colour as these days pass (never full until android.store is set).
    started: "2026-11-22",
    days: 14
  },
  macos: { download: null },          // TODO: macOS download / release page
  linux: { download: null },          // TODO: Linux download / release page
  ios: { store: null }                // TODO: App Store
};
