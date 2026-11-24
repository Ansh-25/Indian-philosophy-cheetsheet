# भारतीय दर्शन मानचित्र · Bharatiya Darshana

A Hindi, mobile-first guide to Indian philosophy. The published site can be installed as a standalone web app. Its map, schools, thinkers, concepts, and quiz are cached after the first online visit. External reading links require internet access, and the app may use system fonts when offline.

## Publish on GitHub Pages

1. Unzip the package. Create a repository named `bharatiya-darshana` on GitHub. A public repository works with GitHub Free.
2. In the repository, choose **Add file → Upload files**. Upload the extracted files directly to the repository root, so `index.html` appears at the top level. Commit to `main`. The hidden `.nojekyll` file is included to skip Jekyll. You can show hidden files on a Mac with **Command–Shift–.**
3. In the repository, go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select **main** and **/(root)**, then click **Save**.
4. Once GitHub shows the site as published, open the HTTPS address listed under **Settings → Pages**. For a project repository it usually looks like `https://YOUR-USERNAME.github.io/bharatiya-darshana/`.

[GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Install on your phone

Open the published HTTPS address while online.

- **iPhone** · Open in Safari. Tap **Share → Add to Home Screen**, turn on **Open as Web App** if available, and tap **Add**. [Apple instructions](https://support.apple.com/en-az/guide/iphone/iphea86e5236/26/ios/26)
- **Android** · Open in Chrome. Tap **⋮ → Install and create shortcut → Install**. Some versions show **Install app** or **Add to Home screen**. [Chrome instructions](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en)

Open the app from its mandala icon while still online so it can finish preparing for offline use.

## Update the site

Commit replacement files to the same publishing branch. When changing the page, manifest, icons, or styles, change the cache version near the top of `sw.js` and update its asset list if any filenames changed. After publishing, close existing tabs and installed app windows so the updated offline files can take over.
