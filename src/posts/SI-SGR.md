---
title: "Analysis of future and spot prices of silver related to silver-gold ratio"
excerpt: "There is no strong relation."
author: "Michael Haroon"
date: "2025-10-16"
category: "trading"
tags: ""
image: "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2199670255.jpg?c=original"
---
Today I learned a lot. One is that India consumes an insane amount of silver for noonindustrial uses and ran London dry for it. Another thing is the relationship between silver futures (SI) and silver-to-gold ratio (SGR).

&nbsp;

I started with testing a hypothesis on the relationship beteween SI and total assets of the federal reserve after Powell suggested ending the fed tightening program. The correlation was weak to start with so I skipped on it, but I will likely go back because I don't fully understand it. Then I read an article by some fund manager about how a discrepency between SI and SGR indicates that SI is expected to go up. I wanted to test this quantitatively. Let $r$ be the correlation between SGR and SI.

$$
\begin{aligned}
H_0:\ r \gg 0 \\
H_1:\ r \not\gg 0
\end{aligned}
$$


&nbsp;

The model is as follows.

![Screenshot of the model](/SI-SGR/futures.png)

&nbsp;

---

What about SGR and silver spot prices? That model is as follows.

![Screenshot of the model](/SI-SGR/spot.png)

&nbsp;

Here is my source code with more details of the analysis: [https://github.com/michael-haroon/trading/blob/main/silver-SGR.ipynb](https://investorplace.com/smartmoney/2025/10/the-great-silver-shortage-why-prices-are-poised-to-break-out-again/)

&nbsp;

Here is the article of the claim: [https://investorplace.com/smartmoney/2025/10/the-great-silver-shortage-why-prices-are-poised-to-break-out-again/](https://investorplace.com/smartmoney/2025/10/the-great-silver-shortage-why-prices-are-poised-to-break-out-again/)