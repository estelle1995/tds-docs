---
title: DLC 开发指南
sidebar_label: 开发指南
sidebar_position: 2
---

import MultiLang from '/src/docComponents/MultiLang';
import CodeBlock from '@theme/CodeBlock';
import sdkVersions from '/src/docComponents/sdkVersions';
import {Gray,Blue, Red, Black} from '/src/docComponents/doc';
import {Conditional} from '/src/docComponents/conditional';

## DLC 查询和购买


可以在 [下载页](/tap-download) 获得 SDK，添加以下依赖：

<MultiLang>

<>

SDK 可以**通过 Unity Package Manger 导入或手动导入**，二者任选其一。

1. 下载 SDK 后即可手动导入。
2. 如果选择 UPM 导入，可以在项目的 `Packages/manifest.json` 文件中添加：

<CodeBlock className="json">
{`"dependencies":{
    // 公共库
    "com.taptap.tds.common":"https://github.com/TapTap/TapCommon-Unity.git#${sdkVersions.taptap.unity}",
    // 付费购买
    "com.taptap.tds.dlc": "https://github.com/TapTap/TapLicense-Unity.git#${sdkVersions.taptap.unity}",
}`}
</CodeBlock>

</>

<>

将 SDK 包导入到项目 `project/app/libs` 目录下。打开项目的 `project/app/build.gradle` 文件，添加：

<CodeBlock className="groovy">
{`repositories{
    flatDir {  
        dirs 'libs'  
    }  
}  
dependencies {
    implementation name:'TapCommon_${sdkVersions.taptap.android}', ext:'aar'
    implementation name:'TapLicense_${sdkVersions.taptap.android}', ext:'aar'
}`}
</CodeBlock>

</>

<>

```objc
// 暂不支持
```

</>

</MultiLang>

### DLC 回调设置

<MultiLang>

```cs
public class MyTapDLCCallback:ITapDlcCallback
{
    public void OnQueryCallBack(TapLicenseQueryCode code, Dictionary<string, object> queryList)
    {
        
    }

    public void OnOrderCallBack(string sku, TapLicensePurchasedCode status)
    {
        
    }
}

TapLicense.SetDLCCallback(new MyTapDLCCallback());
```

```java
TapLicenseHelper.setDLCCallback(new DLCManager.InventoryCallback() {
    @Override
    public boolean onQueryCallBack(int i, HashMap<String, Integer> hashMap) {
        return false;
    }

    @Override
    public void onOrderCallBack(String s, int i) {

    }
});
```
    
```objc
// 暂不支持
```
    
</MultiLang>


### DLC 查询

<MultiLang>

```cs
TapLicense.QueryDLC(string[] skuIds);
```

```java
TapLicenseHelper.queryDLC(Activity activity, String[] skuIds);
```
    
```objc
// 暂不支持
```

</MultiLang>

### DLC 购买

<MultiLang>

```cs
TapLicense.PurchaseDLC(string skuId);
```

```java
TapLicenseHelper.purchaseDLC(Activity activity, String skuIds);
```
    
```objc
// 暂不支持
```
</MultiLang>

### 参数说明
#### TapLicenseQueryCode
回调          | 回调值 | 说明       |
----------- | --- | -------- |
QUERY_RESULT_OK       | 0   | 查询成功     |
QUERY_RESULT_NOT_INSTALL_TAPTAP       | 1   | 检查测试机未安装 TapTap 客户端     |
QUERY_RESULT_ERR       | 2   | 查询失败     |
ERROR_CODE_UNDEFINED       | 80000   | 未知错误     |


#### skuId:

<Conditional region='cn'>

内购商品 id，需要提交工单联系 TapTap 运营同学进行配置；

</Conditional>

<Conditional region='global'>

内购商品 id，需要发邮件到 [international_operation@taptap.com](mailto:international_operation@taptap.com) 联系 TapTap 运营同学进行配置；

</Conditional>

## 测试

为了保证上线后，游戏对于用户是否购买的判断能够正常生效，**请务必按照以下说明完成自测。**

### 上传 APK

上传需要测试的 APK 至开发者中心，并通过审核。

### 添加测试用户

前往开发者中心   >>   点击<Blue>游戏服务</Blue>   >>   点击<Blue>生态服务</Blue>   >>   点击<Blue>正版验证</Blue>   >>   填写测试用户的 TapTap ID 。

### 开始测试

在 TapTap 客户端使用已填写的测试用户账号登录。

## 正式开始售卖

### 完善应用信息

前往开发者中心，按照[物料要求](/store/store-material/)填写应用信息，并审核通过。

### 设置售卖价格

前往开发者中心 >> <Blue>售卖设置</Blue> ，开启售卖开关，设置游戏售卖金额，提交审核，并同步对接的 TapTap 运营相关信息。

### 正式上线

所有流程都确保顺利后，游戏可<Conditional region='cn'>[正式上线](/store/store-release/)</Conditional><Conditional region='global'>[正式上线](/store/store-publish-game/)</Conditional>。