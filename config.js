/* Edit this file when a platform becomes available. null = Coming soon.
   Use full HTTPS URLs. For architecture-specific downloads, link to a page
   that lets the student choose, or use a universal installer/APK. */
window.SVU_CONFIG = {
  repository: "https://github.com/Mohammad-Diab/SVU-One",
  releaseApi: "https://api.github.com/repos/Mohammad-Diab/SVU-One/releases/latest",
  // Last known version; download URLs always resolve to the latest release.
  fallbackVersion: "1.1.0",
  windows: {
    store: "https://apps.microsoft.com/detail/9P0MXPKXVJ01",
    x64: "https://github.com/Mohammad-Diab/SVU-One/releases/latest/download/SvuOne-Setup.exe",
    x86: "https://github.com/Mohammad-Diab/SVU-One/releases/latest/download/SvuOne-Setup-x86.exe",
    arm64: null // Coming soon; enable when the installer is published.
  },
  android: { apk: null, store: null }, // TODO: universal APK + Google Play
  macos: { download: null },          // TODO: macOS download / release page
  linux: { download: null },          // TODO: Linux download / release page
  ios: { store: null }                // TODO: App Store
};
