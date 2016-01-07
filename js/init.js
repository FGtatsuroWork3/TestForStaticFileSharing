/* 初期化処理 */
$(document).ready(function() {
    // 他のKii SDKが実行される前に、
    // AppID, AppKey, SiteID
    // で初期化します。
    Kii.initializeWithSite("d85f38e3", "8fb292f2054bb88ae0390ced57e65b81", KiiSite.JP);
    console.log("Kii.initializeWithSite");

    // アクセストークンの有効期限の設定（単位：秒）
    Kii.setAccessTokenExpiration(3600);
});
