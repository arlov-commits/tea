# Audit ledger

Every value on the charts, where it comes from, and the words it rests on. The
point of this file is to make audits converge: a later pass checks each line
here against its source instead of re-deriving the chart, and changes a value
only when a quote changes or a better-ranked source turns up.

Last full audit: 2026-09-25. Imputation pass: 2026-09-25.

## Why earlier passes kept shifting

Earlier passes, in the regular Claude chat before this repo existed, kept
finding "new stuff" because nothing recorded which source won when sources
disagreed, and much of the chart was synthesis. Each pass re-chose. The fix is
two fixed rules, applied the same way every time.

## Rule 1: which source wins

For each value, in order:

1. **The tea's own package**: `BOX` (Jesse's Teahouse 月光白 box) or `LABEL`.
2. **A source for that specific tea or style** (e.g. Curious Tea's moonlight
   white cake).
3. **A source for the tea's type** that brews closest to the vessel's
   leaf-to-water ratio. The flask is 1:100 (5 g in 500 ml), the gaiwan 1:24
   (5 g in 120 ml), the teapot 1:50 (5 g in 250 ml).

A lower-ranked source fills only what the higher one leaves blank.

## Rule 2: ratio fit

A type-level source is used only if its ratio is within 1.5× of the vessel's.
Otherwise the value is imputed by Rule 3 and shown in the imputed style. A source that
gives no ratio (Chayu on pu-erh, Harney on anything) is used only when no
source with a ratio exists, and the Basis says so.

## Rule 3: imputing a missing value

Where no source fits, impute rather than leave the cell empty, in this order:

1. **Same tea, other method**: carry a sourced value across (the box's 3 s
   wash for the other pressed whites).
2. **A sourced relation, applied to a neighbour**: e.g. the box's own step from
   gaiwan to teapot for the same piece (10 s → 15 s, ×1.5), applied to the
   Chayu black method for the teapot.
3. **Nearest sourced type**: e.g. other dark tea in gongfu as ripe pu-erh,
   another fermented dark tea; oolong's long-steep leaf as Saratoga's 5 g to
   16 oz for other types.
4. **Between two sources**: when two sources bracket the value, take the range
   between them (peony gaiwan steeps 5–10, between Chayu's 5 and the box's 10).
5. **Subjective endpoints stay subjective**: "longer each time" and "until
   the colour fades" are what sources say when they give a direction but no
   number, and they're kept as the guide rather than replaced with a number.

## Status key

- **R**: re-read in this audit; the quote is below.
- **C**: carried from the earlier chat's check (quotes or page scans); the
  source couldn't be re-read now (link down, or a scan). Flagged on the page.
- **BOX**: from the Jesse's Teahouse box; checked against the photos in
  `sources/jesses-moonlight-box-*.webp` on 2026-09-25.
- **D**: derived; the working is shown.
- **I**: Claude-imputed. No source gives the value, so it is imputed by the
  method below and shown on the page in the imputed style (a slightly grey
  serif italic with a small † after it), with the method in the Basis or
  legend.

## Sources (as re-read on 2026-09-25)

| Key | Source | Status |
|---|---|---|
| Chayu | Pan Jiujiu, six-category brewing guide, Jiemian 2017-01-05, https://www.jiemian.com/article/1041035.html | R |
| Curious-MW | Curious Tea, Yue Guang Bai white moonlight cake, https://www.curioustea.com/tea/white-tea/yue-guang-bai-white-moonlight-cake/ | R |
| Curious-BMD | Curious Tea, Bai Mu Dan white peony cake, https://www.curioustea.com/tea/white-tea/bai-mu-dan-white-peony-cake/ | R |
| Sar-white | Saratoga Tea & Honey, how to brew white tea | R |
| Sar-green | Saratoga, how to brew green tea | R |
| Sar-black | Saratoga, how to brew black tea | R |
| Sar-puerh | Saratoga, how to brew pu-erh (aged tea) | R |
| Smith | Smith Teamaker, pu-erh brew guide | R |
| YS | Yunnan Sourcing, brewing guide | R |
| Harney | Harney & Sons, Ultimate Tea Brewing Guide; How to Brew Black Tea | R |
| Thirst | A Thirst for Tea: white peony classic long preparation; jasmine tea preparation | R |
| ISO | ISO 3103, Wikipedia | R |
| Kexin | Yun Wuxin, Kexin Food and Health Information Center, 2018-09-12 | R |
| Ayakdaş | Ayakdaş & Ağagündüz, Foods 2025, PMC12248710, Table 2 | R |
| Zhang | Zhang et al., J. Food Sci. 2026, PMC13147319 | R |
| T/MCYX | T/MCYX 012-2024, aged white tea brewing guide (ttbz link 404, host blocked here) | C |
| T/CSTEA | T/CSTEA 00050-2022, Guangze black tea brewing (ttbz link 404, host blocked here) | C |
| GB/T 23776 | GB/T 23776-2018, sensory evaluation of tea (page scans on foodmate) | C |

### Key quotes

- **Box** (`sources/jesses-moonlight-box-back.webp`): "85°C/185°F"; "First Steep (Wash): 3 seconds (5g/one piece)"; "Gaiwan (120ml): 10 seconds (5g/one piece)"; "Teapot (250ml): 15 seconds (5g/one piece)"; "10 steeps in 120ml Gaiwan"; "Break off one piece of tea from the bar and steep in 85°C/185°F water for 3 seconds to allow tea leaves to expand and open. Discard this rinse. Steep the tea fo 10 seconds; if the flavor is too light, steep a bit longer or raise temperature fo 100°C/212°F to bring out deeper flavors." Also: Yunnan; 2024&2025; "12 servings per container", "Serving size 5g"; front: "Moonlight White White Tea \"Chocolate Bar\" 月光白白茶 巧克力砖", "Net Weight: 60g (30g x2)".

- **Chayu, white**: "茶水比是1:50 … 白茶用盖碗泡，通常出5泡就好了，前3泡 … 95度的水温10秒左右出汤就好；第4泡需要100度水温浸泡20秒出汤，第5泡需要100度水温浸泡30秒出汤。玻璃壶泡白茶的方法请参考红碎茶的泡法"
- **Chayu, black**: "茶水比例1:30，通常5泡，第1、2、3、4泡都是95度的水温，10秒左右出汤就好；第5泡 … 100度的水温15秒出汤。" Broken black: "一般一泡就好 … 茶水比例1:50。"
- **Chayu, raw pu-erh**: "生普一般可以泡7泡 … 建议都用盖碗" Pressed: "第1泡用100度水温10秒 … 第2-4泡 … 5秒 … 第5-7泡 … 20秒 … 第8、9泡 … 40秒 … 第10泡60秒出汤。"
- **Chayu, ripe pu-erh**: "熟普可以泡7泡，特备适合用紫砂壶泡 … 每泡通通100度，第一泡5秒，2-4泡10秒，5-7泡15秒出汤。"
- **Chayu, scented**: "都用盖碗泡最好，皆出5泡，茶水比例1:50 … 第1泡用95度的水，球型需要15秒，散茶需要10秒；第2-3泡95度10秒；第4泡100度20秒；第5泡100度30秒。"
- **Chayu, green**: "茶水比例大概在1：50 … 第一泡通常都是90度水温浸泡，一般4泡左右". Leaf shapes: semi-curled 10, 20, 30, 40 s; curled 15, 20, 30, 40 s; up to 95–100°C.
- **Chayu, oolong**: 1:30, clay pot, 100°C; unrolled 5 s, rolled 10 s, then 10 s ×3, 20 s ×3, 40 s ×2.
- **Chayu, dark**: simmer, "1:80到1:100左右", "每次煮的时间不超过3分钟".
- **Chayu, caveat**: "都是基于大众口感的 … 并非强制标准".
- **Curious-MW**: "2.5g in 250ml water at 90°C for 3-4 minutes"; gongfu "approximately 5g per 100ml at 90-95°C in a gaiwan with an initial infusion of 20 seconds, increasing the time with each subsequent steep."
- **Curious-BMD**: "2.5g in 250ml water at 90°C for 3-4 minutes"; gongfu "approx 3g per 100ml at 90-95°C … initial infusion of 20 seconds, increasing the time with each subsequent steep."
- **Sar-white**: white peony "5 grams of tea", "16 ounces of 185° F filtered water", "3 minute steep"; silver needle "5-7 minute steep"; scented white "16 ounces of 175-195° F filtered water", "3-4 minute steep".
- **Sar-green**: "5 grams to 16 ounces", "175° F water for most Chinese green teas", "Steep for 2 minutes", "Re-steep your leaves 2-3 times at increasing time intervals".
- **Sar-black**: "5 grams tea per 12-16 ounces of water", "205° F", "3-4 minutes", "Re-steep your leaves 2-4 times … for increasing intervals."
- **Sar-puerh**: "5 grams tea to 16 ounces of water"; raw "195° F", "3 minutes", resteeps "increasing time intervals of 15-30 seconds"; ripe "205°F", "3 minutes", "15 to 20 seconds more"; "Expect 6-8 infusions".
- **Smith**: ripe "1 teaspoon", "212℉", "8-10 ounces", "5 minutes"; raw "about 190℉", "3 minutes".
- **YS**: "6 grams per 100ml"; raw washed once about 20 s; ripe washed twice about 15 s each; 95–100°C.
- **Harney**: oolong "175°F water" (lighter) / "212°F water" (darker), "3 to 4 minutes"; green and white 175°F, 3 min; black 212°F, 5 min (guide) or 4–5 min (black tea page); "one teaspoon per cup", cup not defined.
- **ISO**: "2 grams of tea … per 100 ml boiling water"; "six minutes (for black tea), five minutes (for leafy green tea)"; "not meant to define the proper method for brewing tea intended for general consumption".
- **Kexin**: rejects the health claims; accepts the taste one: "用保温杯泡茶，相当于 … 大大延长了冲泡时间并且保持了高温 … 苦涩味更为突出"; fixes: adjust tea type or amount, brew first then fill the cup, or warm/cold brew.
- **Ayakdaş**, Table 2, mg per 200 ml (2 g in 200 ml): white 80°C 5.8 / 26 / 24, 100°C 16 / 22 / 31; green 80°C 11 / 23 / 28, 100°C 15 / 25 / 27; black 80°C 14 / 23 / 28, 100°C 17 / 23 / 27; oolong 80°C 4 / 11 / 19, 100°C 14 / 25 / 29; pu-erh 80°C 13 / 25 / 38, 100°C 19 / 28 / 40 (at 2 / 5 / 10 min). "Brewing temperature made a statistically significant difference only in oolong tea." "Single-infusion brewing procedures … may not ensure complete extraction of caffeine".
- **Thirst, white peony long**: "1 heaping Tbl. (2.5 to 3 grams)" per 6 fl oz, "Near boiling", "2-3 minutes", "Increase the time and temperature slightly with each subsequent infusion", "3-4" infusions.
- **Thirst, jasmine**: "1 rounded tsp. (2.5 grams)" per 6 fl oz, "160-175 degrees", "1-3 minutes", "3" infusions, "Increase the time and temperature slightly with each subsequent infusion."
- **Zhang**: "Caffeine content was significantly higher in GTI2 than in other infusions"; cites Horžić et al. 2009, "sequential 50% reductions in caffeine content with each successive infusion".

## Pressed chart

| Tea | Field | Value | Source | Status |
|---|---|---|---|---|
| Moonlight | Temp | 185°F; 212°F if thin | box | BOX |
| Moonlight | Wash | 3 s | box | BOX |
| Moonlight | Flask first | 3–4 min | Curious-MW (1:100, exact ratio) | R |
| Moonlight | Flask subsequent | Longer each time; 3–4 brews | A Thirst for Tea, white peony long steep (white type; 2.5–3 g per 6 oz is within 1.5× of the flask) | R |
| Moonlight | Gaiwan first | 10 s | box | BOX |
| Moonlight | Gaiwan subsequent | Longer each time; 10 steeps | Curious-MW (1:20); count from box | R, BOX |
| Moonlight | Teapot first | 15 s | box | BOX |
| Moonlight | Teapot subsequent | 10 s ×2, then 20 s, 30 s; 5 steeps | Chayu white at 1:50 | R |
| Moonlight | Caffeine | ~42 mg | Ayakdaş white, 85°C, 3½ min: 80°C → 15.9, 100°C → 19.0, at 85°C 16.7 mg/200 ml ×2.5 | D |
| Peony | Temp | long 194°F; gongfu 194–212°F | Curious-BMD 90°C (long), 90–95°C (gongfu); Chayu 95°C then 100°C (teapot) | R |
| Peony | Wash | 3 s | the moonlight box's wash, same type and form | I |
| Peony | Flask | 3–4 min; longer each time, 3–4 brews | Curious-BMD; A Thirst for Tea, white peony | R |
| Peony | Gaiwan | 20 s; longer each time; 5–10 steeps | Curious-BMD (1:33, within 1.5× of 1:24); count imputed between Chayu's 5 and the box's 10 | R, I |
| Peony | Teapot | 10 s; 10 s ×2, 20 s, 30 s; 5 steeps | Chayu white at 1:50 | R |
| Peony | Caffeine | ~44 mg | Ayakdaş white at 90°C, 3½ min: 17.45 ×2.5 | D |
| Jasmine white | Temp | long 175–195°F; gongfu 203°F, 212°F from the 4th | Sar-white scented; Chayu scented | R |
| Jasmine white | Wash | 3 s | the moonlight box's wash, same type and form | I |
| Jasmine white | Flask | 3–4 min; longer each time, 3 brews | Sar-white scented (1:95); A Thirst for Tea, jasmine: 3 infusions, "Increase the time and temperature slightly" | R |
| Jasmine white | Gaiwan | 20 s; longer each time, 5 steeps | Imputed: Curious white gongfu (ratio fits); count from Chayu scented. Chayu itself is 1:50, 2.1× off | I |
| Jasmine white | Teapot | 10 s; 10 s ×2, 20 s, 30 s; 5 steeps | Chayu scented at 1:50 | R |
| Jasmine white | Caffeine | ~42 mg | Ayakdaş white at 85°C, 3½ min | D |
| Lily, Rose black | Temp | long 205°F; gongfu 203°F, 212°F on the 5th | Sar-black; Chayu black | R |
| Lily, Rose black | Wash | None; skim foam off the 1st | T/CSTEA | C |
| Lily, Rose black | Flask | 3–4 min; longer each time; 3–5 brews | Sar-black (1:71–1:95); brews = 1 + 2–4 | R, D |
| Lily, Rose black | Gaiwan | 10 s; 10 s ×3, then 15 s; 5 steeps | Chayu black at 1:30 (1.25× of 1:24) | R |
| Lily, Rose black | Teapot | 15 s; 15 s ×3, then 20 s; 5 steeps | Imputed: Chayu black (1:30, 1.67× off) stretched ×1.5, the box's own gaiwan-to-teapot step | I |
| Lily, Rose black | Caffeine | ~49 mg | Ayakdaş black at 96°C (205°F), 3½ min: 18.5 and 20.0 → 19.7 ×2.5 | D |
| Ripe pu-erh (Nuomi, Bingdao ripe) | Temp | long 205°F; gongfu 212°F | Sar-puerh; Chayu | R |
| Ripe | Wash | Rinse twice, about 15 s each | YS | R |
| Ripe | Flask | 3 min; +15–20 s each; 6–8 brews | Sar-puerh (1:95). Smith's 5 min at 212°F is noted but has no gram ratio | R |
| Ripe | Gaiwan, teapot | 5 s; 10 s ×3, then 15 s ×3; 7 steeps | Chayu (no ratio given; clay pot suits) | R |
| Ripe | Caffeine | ~53 mg | Ayakdaş pu-erh at 96°C, 3 min: 17 and 22 → 21 ×2.5 | D |
| Raw pu-erh (Bingdao raw) | Temp | long 195°F; gongfu 212°F | Sar-puerh (Smith 190°F); Chayu | R |
| Raw | Wash | Rinse once, about 20 s | YS | R |
| Raw | Flask | 3 min; +15–30 s each; 6–8 brews | Sar-puerh; Smith agrees on 3 min | R |
| Raw | Gaiwan, teapot | 10 s; 5 s ×3, 20 s ×3, 40 s ×2, then 60 s; 7–10 steeps | Chayu, pressed: "usually 7", 10 listed | R |
| Raw | Caffeine | ~49 mg | Ayakdaş pu-erh at 90.5°C (195°F), 3 min: 19.6 ×2.5 | D |

The caffeine column was dropped (2026-09-25): every first flask brew works out at
40–50 mg except ripe pu-erh (~53 mg), which is noted under its name.

Removed from the Pressed chart in this audit: all earlier flask and teapot times
and brew counts (synthesis); the 7.5 g and 10 g flask settings (no source gives
long-steep times for more leaf, and ISO 3103 and GB/T 23776 steep longer at 1:50);
the tags "Always strain", "Leaves can stay in" and "Scent fades after 2 brews";
the 10 s pu-erh wash (replaced by YS); the two-flask routine section.

## Loose leaf chart

| Tea | Field | Value | Source | Status |
|---|---|---|---|---|
| Longjing | Temp | 176°F (167–185°F in Jiemian) | China Tea Museum 2020, about 80°C; Jiemian 2017, 75–85°C | R |
| Longjing | Flask | 5 g; 2 min; longer each time; 3–4 brews | Specific sources give no long steep, so Sar-green (Chinese green, 175°F) | R, D |
| Longjing | Gongfu (glass) | 3 g per 150 ml; drink to ⅓, top up; weak by the 3rd | China Tea Museum 2020 | R |
| Longjing | Caffeine | ~28 mg | Ayakdaş green at 80°C, 2 min: 11 ×2.5 | D |
| Longjing | Tin standard | GB/T 22292 is Jasmine tea | SAMR standards portal | R |
| Ginger & Turmeric | all | 212°F; 1 tsp per 8 oz; 2–5 min | LABEL; 2 tsp = 500 ÷ 236.6 | LABEL, D |
| Ginger & Turmeric | Subsequent | Longer each time; 2–3 brews | Imputed: Saratoga green re-steeps 2–3 times | I |
| English Breakfast | all | 212°F; 1 tsp per cup; 4–5 min; 40–60 mg per cup | LABEL; cup undefined (Harney) | LABEL |
| English Breakfast | Subsequent | Longer each time; 2 brews | Imputed: between Sar-black's 2–4 re-steeps and Chayu's one steep for broken black | I |
| Earl Grey | Flask | 5 g; 2–3 min; longer each time; 3–5 brews; 205°F | Wikipedia (Earl Grey, 2–3 min); temp and resteeps from Sar-black | R |
| Earl Grey | Caffeine | ~44 mg | Ayakdaş black at 96°C, 2½ min: 15.5 and 18.0 → 17.5 ×2.5 | D |
| Earl Grey | Heicha label | 黑茶 = fermented tea; English black tea = 红茶 | Wikipedia, Fermented tea; Black tea | R |
| Rooibos | all | 212°F; 1 tsp per 8 oz; 5–7 min; 10 min fine; 0 mg | LABEL; SA Rooibos Council (Francl 2025) | LABEL, R |
| Rooibos | Subsequent | Longer each time; 2–3 brews | Imputed: low tannin (Council), so a longer second steep won't turn harsh | I |
| Black goji | all | 20–80°C; about 2 g per 400 ml; rest briefly | Wang Lixia, dayi.org.cn 2025 | R |
| Black goji | Time, refills | about 3–5 min; refill until the colour fades, 2–3 brews | Imputed from popular health guides (Baidu Health; not authoritative) | I |
| Black goji | Colour | purple near neutral, bluer when alkaline | Deng et al., Molecules 2022 | R |
| Mystery tea | Start | 175°F, 5 g, 2 min | D: Sar-green's Chinese-green setting, the coolest and shortest long steep here | D |

## Guide tab

- **Principles** 1–7: each names its source in the text (Curious, box, ISO,
  Saratoga, Chayu, YS, Kexin, Ayakdaş, Zhang). Principle 4's temperature ranges
  are derived from the tables. Principle 8 is marked as a suggestion.
- **Calculator ratios**: green 1:50 (Chayu) or 5 g per 16 oz (Sar-green); white
  1:50 to 5 g per 100 ml (Chayu, Curious-MW) or 1–1.06 g per 100 ml (Curious,
  Sar-white); aged white 1:18–1:28 (T/MCYX, C); oolong 1:30 (Chayu), long N;
  black 1:30 to 1:20 (Chayu, T/CSTEA C) or 5 g per 12–16 oz (Sar-black);
  pu-erh 6 g per 100 ml (YS) or 5 g per 16 oz (Sar-puerh); scented 1:50
  (Chayu) or 5 g per 16 oz (Sar-white); dark tea 1:80–1:100 simmered (Chayu).
- **Principles by tea type**: each row's Basis cell holds its sources; the
  unsourced Notes column and "general practice" values were removed. Imputed
  (I): green, dark and scented washes "None"; aged white long steep as fresh
  white; oolong long-steep leaf (1.06 g) and resteeps (3–4 brews) from
  Saratoga's other types; dark tea gongfu as ripe pu-erh, and about 3 simmers.
  Newly sourced: white and scented long resteeps (A Thirst for Tea); oolong's
  foam skim (GB/T 23776, C).
- **Calculator**: aged white and oolong long steeps and dark-tea gongfu are
  imputed as above, and the result is shown in the imputed style.
- **National tasting method**: C, from page scans in the earlier chat;
  flagged on the page.
- Removed in this audit: the "leaf needs room" principle (its gaiwan-fill claim
  had no source), the leaf-time trade-off (no source; ISO and GB/T contradict
  it), the "How much leaf" comparison table (its litres and taste comparisons
  were synthesis), and the "Rules that hold across types" section (merged into
  the sourced principles).

## Open items

- Re-read T/MCYX 012-2024, T/CSTEA 00050-2022 and GB/T 23776-2018 from a
  network that can reach ttbz.org.cn and foodmate.net, or from copies the
  user supplies.
- Chayu (1:50 gongfu) and Curious Tea (3–5 g per 100 ml gongfu) disagree on
  white tea's first gongfu steep (10 s vs 20 s). Both are shown in the
  Principles by tea type row; the charts apply Rule 2 to choose.
