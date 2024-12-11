---
title: From Fugacity to Raoult's Law
published: 2024-11-29
description: Chemical Engineering Thermodynamics Notes.
image: '../../assets/images/2024-12-05.png'
tags: [ChemE, Physics]
category: Notes
draft: false 
---

:::tip
- 建議先看這個[寶藏漫畫](http://survivingtheworld.net/ScienceComic5.html)
- `Fugacity (逸壓)`：簡單想就是**修正過的壓力** (非理想狀態，考慮分子間作用)
:::


## Why it matters? 

1. 觀念適用於任何相：

    $$Fugacity = concentration \times coefficient \times pressure/ideal fugacity$$

    Where the `coefficient` describes the **ideality** of the species.
2. 分析VLE時，若達平衡狀態：
    - 只要知道其中一相的濃度，就可以直接推出另一相的濃度
    - 計算各相含多少特定成分物質
3. 常見應用 (=常考)：分餾 (distilation)
    - 了解物質的混和、分離情形 
    - 計算出料濃度 -> 反應器效率


## Fugacity of Gases

[課本](https://www.amazon.com/Chemical-Biochemical-Engineering-Thermodynamics-Stanley/dp/047050479X)在CH7、9分別介紹了純物種和溶液中的fugacity，但總覺得不甚直覺 (可能是個人問題)，所以想了一個我比較能理解的推導方式：

1. 回想一下，我們是這樣定義[化學位能 (chemical potential)](https://chem.libretexts.org/Courses/Millersville_University/CHEM_341-_Physical_Chemistry_I/07%3A_Mixtures_and_Solutions/7.03%3A_Chemical_Potential)
    
    - 純物種

        $$\mu(T,P) = \mu^\circ(T) + RT \ln(P)$$

    - 溶液 (物種 $i$ 的 $\mu_i$)

        $$\mu_i(T,P) = \mu_i^\circ(T) + RT \ln(P)$$
    
    其中 $\mu^\circ(T)$、 $\mu_i^\circ(T)$ 是標準狀態 (standard state, often P = 1 bar) 下的化學位能。

2. 接著，在理想狀態下
    
    - 純物種
        
        $$\bar{G}_i^{IG}(T,P) = \mu_i^{IG}(T,P) = \mu_i^\circ(T) + RT \ln(P)$$
    
    - 溶液 (要考慮分壓：$P_i^{IGM} = x_i P$)
        
        $$\bar{G}_i^{IGM}(T,P,x) = \mu_i^{IGM}(T,P,x) = \mu_i^\circ(T) + RT \ln(x_i P)$$

3. 然而，現實世界中非理想的狀態下
    
    - 純物種
        
        $$\bar{G}_i(T,P) \neq \bar{G}_i^{IG}(T,P)$$
    
    - 溶液
        
        $$\bar{G}_i(T,P,x) \neq \bar{G}_i^{IGM}(T,P,x)$$

4. 於是定義 fugacity $\bar{f}_i$，作為**修正過的壓力**，取代原先假設理想狀態的壓力
    
    - 純物種
        
        $$\bar{G}_i^{IG}(T,P) = \mu_i^\circ(T) + RT \ln(P)$$
        
        $$\bar{G}_i(T,P) = \mu_i^\circ(T) + RT \ln(\bar{f}_i)$$
    
    - 溶液
        
        $$\bar{G}_i^{IGM}(T,P,x) = \mu_i^\circ(T) + RT \ln(x_i P)$$
        
        $$\bar{G}_i(T,P,x) = \mu_i^\circ(T) + RT \ln(\bar{f}_i)$$

5. 將修正前後的式子相減
    
    - 純物種
        
        $$\bar{G}_i - \bar{G}_i^{IG} = RT \left[ \ln(\bar{f}_i) - \ln(P) \right]$$
        
        $$\bar{G}_i - \bar{G}_i^{IG} = RT \ln\left(\frac{\bar{f}_i}{P}\right)$$
        
        $$\exp\left(\frac{\bar{G}_i - \bar{G}_i^{IG}}{RT}\right) = \frac{\bar{f}_i}{P}$$
        
        $$\bar{f}_i = P \exp\left(\frac{\bar{G}_i - \bar{G}_i^{IG}}{RT}\right)$$
    
    - 溶液
        
        $$\bar{G}_i - \bar{G}_i^{IGM} = RT \left[ \ln(\bar{f}_i) - \ln(x_i P) \right]$$
        
        $$\bar{G}_i - \bar{G}_i^{IGM} = RT \ln\left(\frac{\bar{f}_i}{x_i P}\right)$$
        
        $$\exp\left(\frac{\bar{G}_i - \bar{G}_i^{IGM}}{RT}\right) = \frac{\bar{f}_i}{x_i P}$$
        
        $$\bar{f}_i = x_i P \exp\left(\frac{\bar{G}_i - \bar{G}_i^{IGM}}{RT}\right)$$

6. 為了方便計算，試著只用 $V, T, P$ 表示 (假設 const. $T$, $V$: molar volume)
    
    $$dG = -S\,dT + V\,dP$$
    
    $$\left( \frac{\partial G}{\partial P} \right)_T = V $$
    
    - 純物種
        
        $$G(T,P_2) - G(T,P_1) = \int_{P_1}^{P_2} V \, dP$$
        
        $$G^{IG}(T,P_2) - G^{IG}(T,P_1) = \int_{P_1}^{P_2} \frac{RT}{P} \, dP = RT \ln\frac{P_2}{P_1}$$
        
        $$[G(T,P_2) - G(T,P_1)] - [G^{IG}(T,P_2) - G^{IG}(T,P_1)] = \int_{P_1}^{P_2} \left( V - \frac{RT}{P} \right) dP$$
    
    - 溶液

        $$G_i(T,P_2, x) - G_i(T,P_1, x) = \int_{P_1}^{P_2} V_i \, dP$$
        
        $$G^{IG}_i(T,P_2, x) - G^{IG}_i(T,P_1, x) = \int_{P_1}^{P_2} V^{IG}_i \, dP$$
        
        $$[G_i(T,P_2, x) - G_i(T,P_1, x)] - [G^{IG}_i(T,P_2, x) - G^{IG}_i(T,P_1, x)] = \int_{P_1}^{P_2} (V_i - V^{IG}_i) dP$$

7. 假設 P = 0，此時任何流體都是理想狀態，因此 $G(T,0) = G^{IG}(T,0)$
    
    - 純物種

        $$G(T,P) - G^{IG}(T,P) = \int_0^{P} \left( V - \frac{RT}{P} \right) dP$$

    - 溶液

        $$G_i(T,P, x) - G^{IG}_i(T,P, x) = \int_{P_1}^{P_2} (V_i - V^{IG}_i) dP$$


8. 由以上推導可得結論 (我們通常只會被告知結論)，對**任何氣體**：

    - 純物種 (One Component)

        $$f = P \exp\!\left(\frac{G - G^{IG}}{RT}\right) = P \exp\!\left(\frac{1}{RT} \int_0^{P} \bigl(V - \frac{RT}{P}\bigr)\, dP \right)$$

        $$\phi = \frac{f}{P} = \exp\!\left(\frac{G - G^{IG}}{RT}\right) = \exp\!\left(\frac{1}{RT} \int_0^{P} \bigl(V - \frac{RT}{P}\bigr)\, dP \right)$$


    - 溶液 (Mixtures)

        $$\bar{f}_i = x_i P \exp\!\left(\frac{\bar{G}_i - \bar{G}_i^{IGM}}{RT}\right) = x_i P \exp\!\left(\frac{1}{RT}\int_0^P \bigl(\bar{V}_i - \bar{V}_i^{IG}\bigr)\, dP\right)$$

        $$\bar{\phi}_i = \frac{\bar{f}_i}{x_i P} = x_i P \exp\!\left(\frac{\bar{G}_i - \bar{G}_i^{IGM}}{RT}\right) = x_i P \exp\!\left(\frac{1}{RT}\int_0^P \bigl(\bar{V}_i - \bar{V}_i^{IG}\bigr)\, dP\right)$$


    Where $\phi$, $\bar{\phi}_i$ are the **fugacity coefficients**.

:::important
為了區別，通常會以 $y_i$ 表示氣體的莫耳分率，液體則用 $x_i$
:::


## Deriving Raoult's Law
- 系統：容器中，**液態溶液**與其汽相達平衡 (皆假設**理想狀態**)
- 主要應用：計算蒸氣壓

### Fugacity of Liquids

在前一段我們得到了 gas mixture 的 fugacity：

$$\bar{f}_i^V = y_i \bar{\phi}_i^v P$$

與氣體不同的是，液體、固體沒有所謂的分壓 [^1]，也就是說壓力與fugacity不能直接寫成簡單的關係式。因此，以液體為例，我們必須多假設其在理想狀態下有一 fugacity $f_i^l$，並[套用同樣的觀念](#why-it-matters)表示：

$$\bar{f}_i^l = x_i r_i f_i^l$$

Where $r_i$ is the `activity coefficient`, describing the ideality of fluids.

:::note
液體也可以用同樣的方式推導：

$$\bar{G}_i = \mu_i^\circ(T) + RT \ln(\bar{f}_i)$$

若為理想溶液：

$$\bar{G}_i^{id} = \mu_i^\circ(T) + RT \ln(x_i f_i)$$

$$\bar{G}_i - \bar{G}_i^{id} = RT \ln(\frac{\bar{f}_i}{x_i f_i})$$

我們於是定義：

$$r_i = \frac{\bar{f}_i}{x_i f_i}$$

$\bar{G}_i^E = RT\ln{r_i}$ (Excess Gibbs Energy)
:::

[^1]: Partial molar properties (待補)



### VLE (Vapor-Liquid Equilibrium)

1. 在溫度 $T$ 和蒸氣壓 $P^{sat}$ 時，$G_i^v - G_i^l = 0$ (飽和液體 -> 飽和蒸汽)

    $$f_i^v = f_i^l = f_i^{sat}$$

2. 而在一飽和溶液中

    - 飽和蒸汽：$\bar{f}_i^V = y_i \bar{\phi}_i^v P$
    
    - 飽和液體：$\bar{f}_i^l = x_i r_i^l f_i^l$

3. 於是我們可以列出

    $$y_i \bar{\phi}_i^v P = x_i r_i^l f_i^l$$

    而在**中低壓**下 $f_i^l = f_i^{sat} = \phi_i^{sat} P_i^{sat}$ [^2]，因此：

    $$y_i \bar{\phi}_i^v P = x_i r_i^l {\phi}_i^{sat} P_i^{sat}$$

4. 假設汽相為理想氣體 $\bar{\phi}_i^v = 1$、${\phi}_i^{sat} = 1$；液體為理想溶液 $r_i^l = 1$，則：

    $$y_i P = x_i P_i^{sat}$$

    此即著名的 [`拉午耳定律 (Raoult's Law)`](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Physical_Properties_of_Matter/Solutions_and_Mixtures/Ideal_Solutions/Changes_In_Vapor_Pressure%2C_Raoult%27s_Law)。


[^2]: Why? (待補)