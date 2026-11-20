# سياسة خصوصية SVU One

آخر تحديث: 21 تشرين الثاني 2026

SVU One تطبيق مستقل لنظامَي Windows وAndroid، وليس منتجاً رسمياً من الجامعة الافتراضية السورية ولا يتبع لها. يجمع ما يحتاجه الطالب من مواقع الجامعة في مكان واحد على جهازه.

## الخلاصة

- كل ما يقرؤه التطبيق يبقى على جهازك. ليس للتطبيق خادم خاص، ولا يجمع إحصاءات استخدام، ولا يعرض إعلانات، ولا يتتبّعك.
- كلمة المرور لا تُرسَل إلا إلى مواقع الجامعة عند تسجيل الدخول.
- المزامنة مع Google Drive اختيارية، ونسختها محفوظة في حسابك على Google ومحمية به.
- الذكاء الاصطناعي في التطبيق (في نسخة Windows) يعمل على جهازك بالكامل، ولا يخرج منه صوت ولا صورة.

## ما الذي يحفظه التطبيق، وأين

- **اسم المستخدم وكلمة المرور** لحسابك الجامعي، لتسجيل الدخول التلقائي.
- **بياناتك الدراسية** التي يقرؤها من مواقع الجامعة باسمك: الصفوف والجدول والعلامات والمعدّل والامتحانات والرسوم والوظائف وبريد الجامعة وصورتك الشخصية، وما تضيفه أنت من مواعيد.
- **الإعدادات** وبعض المعلومات العامة (مثل أسماء البرامج والمقررات).

**على Windows:** يُحفظ ذلك كله في مجلد التطبيق داخل حسابك على Windows‏ (`%LOCALAPPDATA%\SvuOne`). كلمة المرور والبيانات الدراسية والبريد تُحفظ مشفّرة بحماية Windows نفسها (DPAPI)، فلا تُقرأ إلا من حسابك على هذا الجهاز.

**على Android:** يُحفظ ذلك كله في مساحة التطبيق الخاصة على الهاتف، ولا تصل إليها التطبيقات الأخرى. كلمة المرور والبيانات الدراسية تُحفظ مشفّرة (AES-256) بمفتاح يُنشأ في مخزن مفاتيح Android ولا يخرج منه. النسخ الاحتياطي التلقائي لبيانات التطبيق معطّل. أما نقل البيانات إلى هاتف جديد عبر Android فقد ينقل الملفات غير المشفّرة، كالإعدادات ومرفقات البريد، ولا يمكن فتح كلمة المرور والبيانات المشفّرة على هاتف آخر، فتسجّل الدخول من جديد.

## إلى أين يتصل التطبيق

- **مواقع الجامعة** (`svuonline.org` ومواقعها الفرعية، وخوادم المحاضرات المباشرة): لتسجيل الدخول وقراءة بياناتك وبريدك، ولحضور المحاضرات. يقرأ التطبيق فقط، ولا يكتب في مواقع الجامعة شيئاً.
- **GitHub**: لقراءة قائمة مجموعات الطلاب العامة، وفي نسخة Windows للتحقق من وجود تحديث وتنزيله. هذه طلبات عادية لا تحمل أي معلومة عنك.
- **Google Drive**: فقط إن فعّلت المزامنة (انظر أدناه).
- **مواقع صور الرسائل**: لا تُجلب صور رسالة في البريد إلا حين تضغط «عرض الصور» فيها، ولتلك الرسالة وحدها، كما في تطبيقات البريد المعروفة.
- **Hugging Face**: في نسخة Windows، لتنزيل نماذج الذكاء الاصطناعي حين تختار تفعيل ميزة تحتاجها.
- **Microsoft Store وGoogle Play**: نسخة كل متجر تتحدّث عن طريقه.

## المزامنة مع Google Drive (اختيارية)

- لا تعمل إلا إذا ربطت حسابك في Google بنفسك من صفحة «المزامنة». يطلب التطبيق صلاحية واحدة فقط هي مجلد خاص بالتطبيق في Drive‏ (`drive.appdata`)، فلا يرى ملفاتك الأخرى في Drive ولا يستطيع الوصول إليها.
- يحفظ التطبيق هناك ملفاً واحداً صغيراً فيه ما تختار مزامنته من: المواعيد التي أضفتها، والوظائف التي علّمتها مُسلَّمة، وتعديلات الجدول، والإشعارات المقروءة، وحالة قراءة البريد (أي الرسائل قرأتها، دون محتواها).
- **لا يُرفع أبداً:** كلمة المرور، ولا الإعدادات، ولا الملفات والتسجيلات المنزّلة.
- الملف محمي بحسابك في Google كسائر ما تحفظه في Drive، ولا يصل إليه إلا من يدخل حسابك. لا يُرسَل إلى مطوّر التطبيق ولا إلى أي جهة أخرى، وتغيير كلمة مرورك الجامعية لا يمسّه.
- يُحفظ رمز الدخول إلى حسابك في Google مشفّراً على جهازك. يمكنك إيقاف المزامنة متى شئت من التطبيق، وإزالة صلاحيته من إعدادات حسابك في Google، وحذف بياناته من إعدادات Drive («إدارة التطبيقات»).
- استخدام SVU One للمعلومات التي يتلقّاها من واجهات Google ونقلها يلتزم [سياسة بيانات المستخدم لخدمات Google API](https://developers.google.com/terms/api-services-user-data-policy)، بما فيها متطلبات الاستخدام المحدود (Limited Use).

## الميكروفون والكاميرا

لا يستعملهما التطبيق إلا في المحاضرة المباشرة، وحين تشغّلهما أنت بعد أن يسألك. يُرسَل الصوت والصورة إلى خوادم المحاضرات في الجامعة، كما في برنامج الجامعة الرسمي، ولا يسجّلهما التطبيق. نسخة Android تستعمل الميكروفون فقط.

## الإشعارات والعمل في الخلفية

يفحص التطبيق مواقع الجامعة في أوقات متباعدة ويُظهر إشعارات من جهازك نفسه، دون أي خادم إشعارات. على Android يعرض إشعاراً ثابتاً أثناء المحاضرة المباشرة أو تحويل محاضرة إلى فيديو، حتى يستمر العمل حين تغادر التطبيق.

## ملفات المحاضرات

- يفتح التطبيق ملف المحاضرة (`.lrec`) الذي تختاره أنت فقط، ويقرؤه دون أن يرسله إلى أي مكان.
- الفيديو الذي تحوّله يُحفظ على جهازك: على Android في مجلد الأفلام («Movies/SVU One»)، فتراه تطبيقات المعرض والفيديو، ويبقى بعد إزالة التطبيق.

## سجل التطبيق والملاحظات

- يكتب التطبيق سجلاً على جهازك ليُعرف سبب أي مشكلة. لا يكتب فيه كلمة مرور ولا بيانات شخصية.
- لا يُرسَل السجل إلا إذا اخترت ذلك: على Windows يحفظه التطبيق ملفاً مضغوطاً في مجلد التنزيلات ويفتح نموذج Google في المتصفح لترفقه أنت؛ وعلى Android يسلّمه إلى التطبيق الذي تختاره أنت من قائمة المشاركة.
- نموذج الملاحظات ونموذج السجل من Google Forms، وتنطبق عليهما سياسة الخصوصية لدى Google. يملأ التطبيق فيهما رقم الإصدار والصفحة التي كنت فيها فقط.

## حذف بياناتك

- عند تسجيل الخروج اختر «احذف بياناتي» فتُحذف بيانات ذلك الحساب من الجهاز. تبقى الملفات التي نزّلتها ومرفقات البريد التي حفظتها حيث حُفظت.
- **على Windows:** إزالة التطبيق لا تحذف بياناتك، حتى لا تضيع إن أعدت تثبيته. لحذفها كلها احذف المجلد `%LOCALAPPDATA%\SvuOne`.
- **على Android:** إزالة التطبيق تحذف كل بياناته من الهاتف، وكذلك «محو البيانات» من إعدادات التطبيق في النظام. يبقى فقط ما حوّلته إلى فيديو في مجلد الأفلام.
- ما رُفع بالمزامنة يُحذف من إعدادات Drive كما سبق.

## التغييرات والتواصل

إن تغيّرت هذه السياسة نُشرت النسخة الجديدة هنا مع تاريخها. للأسئلة: نموذج الملاحظات في التطبيق، أو [صفحة المشكلات على GitHub](https://github.com/Mohammad-Diab/SVU-One/issues).

---

# SVU One Privacy Policy

Last updated: 21 November 2026

SVU One is an independent app for Windows and Android. It is not an official product of the Syrian Virtual University and is not part of it. It brings what a student needs from the university's sites into one place on their device.

## In short

- Everything the app reads stays on your device. The app has no server of its own, collects no usage statistics, shows no ads and does not track you.
- Your password is sent only to the university's sites, when signing in.
- Syncing with Google Drive is optional; its copy is kept in your Google account and protected by it.
- The app's AI (in the Windows version) runs entirely on your PC; no sound or picture leaves it.

## What the app keeps, and where

- **Your university username and password**, for automatic sign-in.
- **Your study data**, read from the university's sites in your name: classes, timetable, marks, average, exams, fees, assignments, university mail, your photo, and events you add yourself.
- **Settings** and some public information (such as program and course names).

**On Windows:** all of it is kept in the app's folder in your Windows profile (`%LOCALAPPDATA%\SvuOne`). The password, the study data and the mail are encrypted with Windows' own protection (DPAPI), so only your Windows account on this PC can read them.

**On Android:** all of it is kept in the app's private storage on the phone, which other apps cannot reach. The password and the study data are encrypted (AES-256) with a key created in the Android Keystore that never leaves it. Automatic backup of the app's data is turned off. Android's transfer to a new phone may still move the unencrypted files, such as the settings and mail attachments; the password and the encrypted data cannot be opened on another phone, so you sign in again there.

## What the app connects to

- **The university's sites** (`svuonline.org` and its subdomains, and the live-lecture servers): to sign in, read your data and mail, and attend lectures. The app only reads; it never writes anything to the university's sites.
- **GitHub**: to read the public list of students' groups, and in the Windows version to check for and download updates. These are plain requests that carry nothing about you.
- **Google Drive**: only if you turn on sync (see below).
- **The sites of a mail's images**: a message's images are fetched only when you press «عرض الصور» (Show images) in it, and for that message only, as in well-known mail apps.
- **Hugging Face**: in the Windows version, to download AI models when you choose to turn on a feature that needs one.
- **Microsoft Store and Google Play**: each store's copy is updated through it.

## Syncing with Google Drive (optional)

- It works only if you connect your Google account yourself from the «المزامنة» (Sync) page. The app asks for one permission only, a private folder for the app in Drive (`drive.appdata`), so it cannot see or reach your other files in Drive.
- The app keeps one small file there with what you choose to sync of: the events you added, the assignments you marked as handed in, timetable changes, read notices, and which emails you have read (not their content).
- **Never uploaded:** your password, your settings, or downloaded files and recordings.
- The file is protected by your Google account, like anything else you keep in Drive: only someone who signs in to your account can reach it. It is never sent to the app's developer or anyone else, and changing your university password does not touch it.
- The sign-in token for your Google account is kept encrypted on your device. You can stop syncing at any time in the app, remove the app's access in your Google account settings, and delete its data in Drive's settings («Manage apps»).
- SVU One's use and transfer of information received from Google APIs adheres to the [Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy), including the Limited Use requirements.

## Microphone and camera

The app uses them only in a live lecture, and only when you turn them on after it asks. Sound and video go to the university's lecture servers, as with the university's official client; the app does not record them. The Android version uses the microphone only.

## Notifications and background work

The app checks the university's sites at spaced-out times and shows notifications from your device itself, with no notification server. On Android it shows an ongoing notification during a live lecture or while a lecture is converted to a video, so the work goes on when you leave the app.

## Lecture files

- The app opens only the lecture file (`.lrec`) you choose, and reads it without sending it anywhere.
- A video you convert is saved on your device: on Android in the Movies folder («Movies/SVU One»), where gallery and video apps see it, and it stays after the app is removed.

## The app's log and feedback

- The app writes a log on your device so the cause of a problem can be found. It never writes a password or personal data in it.
- The log is sent only if you choose: on Windows the app saves it as a zip file in your downloads folder and opens a Google form in your browser for you to attach it; on Android it hands it to the app you pick from the share menu.
- The feedback form and the log form are Google Forms; Google's privacy policy applies to them. The app fills in only the version number and the page you were on.

## Deleting your data

- When signing out, choose «احذف بياناتي» (delete my data) to remove that account's data from the device. The files you downloaded and the mail attachments you saved stay where they were saved.
- **On Windows:** uninstalling keeps your data, so nothing is lost if you install again. To remove all of it, delete the folder `%LOCALAPPDATA%\SvuOne`.
- **On Android:** uninstalling the app removes all its data from the phone, and so does «Clear storage» in the system's app settings. Only the videos you converted stay, in the Movies folder.
- What sync uploaded is deleted from Drive's settings, as above.

## Changes and contact

If this policy changes, the new version is published here with its date. Questions: the feedback form in the app, or [the issues page on GitHub](https://github.com/Mohammad-Diab/SVU-One/issues).
