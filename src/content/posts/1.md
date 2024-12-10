---
title: 牛頓第一運動定律是個冗贅？ 
published: 2024-08-17
description: 結論：Nope.
image: '../../assets/images/2024-08-17.jpg'
tags: [Physics]
category: Fun Facts
draft: false
---

## 關於「冗餘理論」

才剛開始看 [Statistical Mechanics: Theory and Molecular Simulation (Mark E. Tuckerman)](https://www.amazon.com/Statistical-Mechanics-Molecular-Simulation-Graduate/dp/0198525265)，作者在第 4 頁就給我來了個醍醐灌頂 (語氣甚至非常篤定)
> _Newton’s second law embodies Newton’s first law._

說真的我以前從來沒特別思考過這件事。這句話成立的兩大前提是：

1. 根據牛頓第二運動定律，因為 F (施力) 為 0，所以 a (加速度) 為 0。
2. 加速度為 0 就說明了速度的變化量 (加速度的定義) 也為 0。

由此可知，在不施加外力的情況下，一物體的速度必定不變，牛頓第二運動定律完美概括了第一運動定律！本書作者當然也並不是第一個提出此看法的人，該論點被稱之為第一運動定律的 `冗餘理論」(redundancy theory)`。

## 破口：慣性參考系 [^1]

然而真的如此嗎？我們回歸到牛頓最初在「自然哲學的數學原理」(Principia) 中對「力」的定義，會發現力與**加速度被觀測的參考系**是緊密連結的。

事實上，牛頓第一運動定律 (又稱 `慣性定律`，英文：law of inertia) 隱含的深意正如其名，是牛頓對於二、三定律設定的一大前提：該物體是在 `慣性參考系(Inertial frame of reference)` 被觀測到的，因為只有在此情況下當**F (施力) 為 0，a (加速度) 即為 0**。

**若非慣性參考系，就算施力為 0，加速度也並不會是 0** (EX：選擇加速移動的火車作為站立乘客的參考系)，直接否定了上述冗餘理論派支持者的第一大前提。

換句話說，**牛頓在第一運動定律中表明了自己的「絕對」空間主張**，他認為空間是獨立於物質的存在，不單只是為了反駁[亞里斯多德](https://byjus.com/physics/aristotle-fallacy)，而科學家如[萊布尼茲](https://omni.wikiwand.com/zh-tw/articles/%E6%88%88%E7%89%B9%E5%BC%97%E9%87%8C%E5%BE%B7%C2%B7%E8%8E%B1%E5%B8%83%E5%B0%BC%E8%8C%A8) (與牛頓先後獨立發明了微積分)、[馬赫](https://omni.wikiwand.com/zh-tw/articles/%E6%81%A9%E6%96%AF%E7%89%B9%C2%B7%E9%A9%AC%E8%B5%AB) (相對論先驅) 和[愛因斯坦](https://omni.wikiwand.com/zh-tw/articles/%E9%98%BF%E5%B0%94%E4%BC%AF%E7%89%B9%C2%B7%E7%88%B1%E5%9B%A0%E6%96%AF%E5%9D%A6) (提出廣義&狹義相對論) 都看出了這點！

[^1]: [Is Newton's first law redundant?](http://www.quartets.de/acad/firstlaw.html)
