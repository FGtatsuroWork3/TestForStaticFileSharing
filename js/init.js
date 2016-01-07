/* 初期化処理 */
$(document).ready(function() {
    // 他のKii SDKが実行される前に、
    // AppID, AppKey, SiteID
    // で初期化します。
    Kii.initializeWithSite("3cee7f37", "3970e87e29d5f1187344761e365dd20c", KiiSite.JP);
    console.log("Kii.initializeWithSite");

    // アクセストークンの有効期限の設定（単位：秒）
    Kii.setAccessTokenExpiration(3600);
});