const phrases = [
  ["Classroom","May I come in, Ms Shirley?","Ms Shirley，我可以进来吗？","迟到或进课室前使用。"],
  ["Classroom","May I go to the toilet, please?","请问我可以去厕所吗？","课堂上礼貌地请求。"],
  ["Classroom","Can you repeat that, please?","请您再重复一次好吗？","听不清楚时很好用。"],
  ["Classroom","I don't understand this part.","我不明白这个部分。","比只说 I don't know 更清楚。"],
  ["Classroom","How do I say this word?","这个字要怎么说？","问发音时使用。"],
  ["Classroom","What does this sentence mean?","这个句子是什么意思？","读英文文章时常用。"],
  ["Classroom","Can I borrow your eraser?","我可以借你的橡皮擦吗？","向同学借文具。"],
  ["Classroom","I left my book at home.","我把书留在家里了。","解释忘带书。"],
  ["Classroom","I have finished my work.","我完成作业了。","完成课堂任务时说。"],
  ["Classroom","Can we discuss this in a group?","我们可以小组讨论吗？","小组活动常用。"],

  ["Canteen","What are you eating today?","你今天吃什么？","下课在食堂聊天。"],
  ["Canteen","I want fried noodles, please.","我要炒面，谢谢。","点食堂食物。"],
  ["Canteen","Can I have less chilli?","可以少辣吗？","马来西亚学生很常用。"],
  ["Canteen","How much is this meal?","这份餐多少钱？","付款前询问价格。"],
  ["Canteen","The queue is too long.","队伍太长了。","食堂排队时说。"],
  ["Canteen","Let's share this table.","我们一起坐这张桌子吧。","找位子时使用。"],
  ["Canteen","I forgot to bring money.","我忘了带钱。","尴尬但实用。"],
  ["Canteen","This drink is too sweet.","这杯饮料太甜了。","评价饮料。"],
  ["Canteen","Can you help me buy a drink?","你可以帮我买一杯饮料吗？","请朋友帮忙。"],
  ["Canteen","Let's go back to class now.","我们现在回课室吧。","下课快结束时说。"],

  ["Restaurant","A table for four, please.","请给我们四个人的桌位。","到餐厅门口时使用。"],
  ["Restaurant","Can we see the menu, please?","请问可以看菜单吗？","入座后常用。"],
  ["Restaurant","What do you recommend?","你推荐什么？","不知道吃什么时问。"],
  ["Restaurant","I would like chicken chop, please.","我要鸡扒，谢谢。","点主餐。"],
  ["Restaurant","Can I have this without onions?","这个可以不要洋葱吗？","客制化点餐。"],
  ["Restaurant","Is this spicy?","这个辣吗？","点餐前确认。"],
  ["Restaurant","Can we have some water, please?","请给我们一些水好吗？","向服务员请求。"],
  ["Restaurant","The food is delicious.","食物很好吃。","称赞食物。"],
  ["Restaurant","Can we have the bill, please?","请问可以买单吗？","结账时使用。"],
  ["Restaurant","Can we pay separately?","我们可以分开付款吗？","朋友聚餐很实用。"],

  ["Milk Tea","Can I have one milk tea, please?","我要一杯奶茶，谢谢。","最基本点单句。"],
  ["Milk Tea","I would like less sugar.","我要少糖。","点奶茶必备。"],
  ["Milk Tea","Can I have no ice?","可以不要冰吗？","怕冷或要带走时使用。"],
  ["Milk Tea","Can I add pearls?","可以加珍珠吗？","加料常用。"],
  ["Milk Tea","What toppings do you have?","你们有什么配料？","不知道可加什么时问。"],
  ["Milk Tea","What is your best seller?","你们的招牌是什么？","第一次买时好用。"],
  ["Milk Tea","Can I have it in a large size?","可以要大杯吗？","选择杯型。"],
  ["Milk Tea","Is this drink very sweet?","这杯饮料很甜吗？","点之前确认甜度。"],
  ["Milk Tea","Can I pay by e-wallet?","我可以用电子钱包付款吗？","付款常用。"],
  ["Milk Tea","Can I have a straw, please?","请给我吸管好吗？","拿饮料时使用。"],

  ["Daily Items","Where can I find shampoo?","洗发水在哪里？","买日用品时问店员。"],
  ["Daily Items","Do you sell toothpaste?","你们有卖牙膏吗？","找商品时使用。"],
  ["Daily Items","I need a pack of tissues.","我需要一包纸巾。","便利店常用。"],
  ["Daily Items","Can I have a plastic bag?","可以给我一个塑料袋吗？","结账时使用。"],
  ["Daily Items","How much is this notebook?","这本笔记本多少钱？","买文具常用。"],
  ["Daily Items","Is there a cheaper one?","有便宜一点的吗？","预算有限时使用。"],
  ["Daily Items","Do you have this in another colour?","这个有其他颜色吗？","买用品时常用。"],
  ["Daily Items","I only need one bottle.","我只需要一瓶。","说明数量。"],
  ["Daily Items","Can I get a receipt?","可以给我收据吗？","付款后使用。"],
  ["Daily Items","I would like to return this item.","我想退这个商品。","退货时使用。"],

  ["Convenience Store","Where is the bread section?","面包区在哪里？","便利店找东西。"],
  ["Convenience Store","Do you have cold drinks?","你们有冷饮吗？","买饮料时问。"],
  ["Convenience Store","Can you heat this up for me?","可以帮我加热这个吗？","买便当或饭团。"],
  ["Convenience Store","I need to top up my phone.","我需要充值手机。","电话预付卡场景。"],
  ["Convenience Store","Can I pay at the counter?","我可以在柜台付款吗？","询问付款方式。"],
  ["Convenience Store","This price is different from the shelf price.","这个价格和货架上的不一样。","结账时发现差价。"],
  ["Convenience Store","Do you have small change?","你有零钱吗？","现金付款。"],
  ["Convenience Store","Can I use Touch 'n Go?","我可以用 Touch 'n Go 吗？","马来西亚常用付款。"],
  ["Convenience Store","Please scan this item again.","请再扫描这个商品。","收银时使用。"],
  ["Convenience Store","That's all, thank you.","就这些，谢谢。","结束购物。"],

  ["Friends","Are you free after school?","你放学后有空吗？","约朋友。"],
  ["Friends","Let's go for milk tea later.","我们等下去买奶茶吧。","学生日常邀约。"],
  ["Friends","Can you wait for me?","你可以等我一下吗？","请朋友等。"],
  ["Friends","I will be there in five minutes.","我五分钟后到。","迟到时通知。"],
  ["Friends","Sorry, I can't make it today.","不好意思，我今天去不了。","拒绝邀约。"],
  ["Friends","Maybe next time.","下次吧。","轻松回应。"],
  ["Friends","Can you send me the homework?","你可以发功课给我吗？","学生聊天常用。"],
  ["Friends","Don't worry, I can help you.","别担心，我可以帮你。","鼓励朋友。"],
  ["Friends","That sounds fun.","听起来很好玩。","回应活动。"],
  ["Friends","Let's take a photo together.","我们一起拍张照吧。","朋友聚会常用。"],

  ["Transport","Can you pick me up later?","你等下可以来接我吗？","请家人接送。"],
  ["Transport","I am waiting at the school gate.","我在校门口等。","告诉别人位置。"],
  ["Transport","The bus is late today.","今天巴士迟到了。","交通延误。"],
  ["Transport","Which way should we go?","我们应该走哪一条路？","问路线。"],
  ["Transport","Can you drop me at the mall?","你可以载我到商场下车吗？","请人顺路载。"],
  ["Transport","The traffic is very bad.","交通很塞。","马来西亚日常。"],
  ["Transport","I think we missed the stop.","我觉得我们错过站了。","搭车时使用。"],
  ["Transport","How long will it take?","需要多久？","询问时间。"],
  ["Transport","I am almost there.","我快到了。","通知对方。"],
  ["Transport","Please drive safely.","请小心驾驶。","关心家人朋友。"],

  ["Home","I'm home.","我回来了。","回家时说。"],
  ["Home","What's for dinner?","晚餐吃什么？","家庭日常。"],
  ["Home","Can I rest for a while?","我可以休息一下吗？","放学后使用。"],
  ["Home","I have tuition tonight.","我今晚有补习。","告诉家人行程。"],
  ["Home","I need to finish my homework first.","我需要先完成作业。","安排时间。"],
  ["Home","Can I use the laptop?","我可以用电脑吗？","请求使用物品。"],
  ["Home","Please wake me up at six.","请六点叫醒我。","准备上学。"],
  ["Home","I packed my schoolbag already.","我已经收拾好书包了。","告诉父母。"],
  ["Home","Can you sign this form?","你可以签这张表格吗？","学校文件。"],
  ["Home","Thank you for dinner.","谢谢你的晚餐。","礼貌家庭用语。"],

  ["Polite","Excuse me.","不好意思。","打扰别人前使用。"],
  ["Polite","Sorry, my mistake.","不好意思，是我的错。","承认错误。"],
  ["Polite","It's okay. No problem.","没关系，没问题。","回应道歉。"],
  ["Polite","Thank you for helping me.","谢谢你帮我。","感谢别人。"],
  ["Polite","You're welcome.","不客气。","回应感谢。"],
  ["Polite","Could you speak more slowly?","你可以说慢一点吗？","听不懂时礼貌请求。"],
  ["Polite","Can you help me, please?","请问你可以帮我吗？","请求帮助。"],
  ["Polite","Let me help you.","让我帮你。","主动帮忙。"],
  ["Polite","Have a nice day.","祝你有美好的一天。","礼貌道别。"],
  ["Polite","Take care.","保重。","温暖的道别。"]
];

const categoryNames = {
  All: "全部",
  Classroom: "课室里",
  Canteen: "食堂",
  Restaurant: "餐厅",
  "Milk Tea": "买奶茶",
  "Daily Items": "买日用品",
  "Convenience Store": "便利店",
  Friends: "朋友聊天",
  Transport: "交通",
  Home: "家里",
  Polite: "礼貌用语"
};

const gamePrompts = [
  { prompt: "在餐厅要看菜单，你会说哪一句？", answer: "Can we see the menu, please?", category: "Restaurant" },
  { prompt: "买奶茶要少糖，你会说哪一句？", answer: "I would like less sugar.", category: "Milk Tea" },
  { prompt: "课室里听不清楚，你会说哪一句？", answer: "Can you repeat that, please?", category: "Classroom" },
  { prompt: "买洗发水找不到，你会说哪一句？", answer: "Where can I find shampoo?", category: "Daily Items" },
  { prompt: "想请朋友等你一下，你会说哪一句？", answer: "Can you wait for me?", category: "Friends" },
  { prompt: "在便利店请店员加热食物，你会说哪一句？", answer: "Can you heat this up for me?", category: "Convenience Store" }
];

const categories = ["All", ...new Set(phrases.map(item => item[0]))];
const savedReviewed = JSON.parse(localStorage.getItem("reviewedPhrases") || "[]").filter(index => index >= 0 && index < phrases.length);
const savedPhrases = JSON.parse(localStorage.getItem("savedPhrases") || "[]").filter(index => index >= 0 && index < phrases.length);
const state = {
  category: "All",
  mode: "browse",
  query: "",
  reviewed: new Set(savedReviewed),
  saved: new Set(savedPhrases),
  flashIndex: 0,
  flashFlipped: false,
  quizAnswer: null,
  sceneGameIndex: 0,
  sceneScore: 0
};

const categoryList = document.querySelector("#categoryList");
const cardsGrid = document.querySelector("#cardsGrid");
const resultCount = document.querySelector("#resultCount");
const categoryKicker = document.querySelector("#categoryKicker");
const sectionTitle = document.querySelector("#sectionTitle");
const searchInput = document.querySelector("#searchInput");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const flashStage = document.querySelector("#flashStage");
const gamesStage = document.querySelector("#gamesStage");

function persist() {
  localStorage.setItem("reviewedPhrases", JSON.stringify([...state.reviewed]));
  localStorage.setItem("savedPhrases", JSON.stringify([...state.saved]));
}

function labelFor(category) {
  return categoryNames[category] || category;
}

function filteredPhrases() {
  const q = state.query.trim().toLowerCase();
  return phrases
    .map((phrase, index) => ({ phrase, index }))
    .filter(({ phrase, index }) => {
      const inCategory = state.category === "All" || phrase[0] === state.category;
      const inFavorites = state.mode !== "favorites" || state.saved.has(index);
      const text = phrase.join(" ").toLowerCase();
      return inCategory && inFavorites && (!q || text.includes(q));
    });
}

function renderCategories() {
  categoryList.innerHTML = categories.map(category => {
    const count = category === "All" ? phrases.length : phrases.filter(item => item[0] === category).length;
    return `<button class="category-btn ${state.category === category ? "active" : ""}" data-category="${category}">
      <span>${labelFor(category)}</span><span>${count}</span>
    </button>`;
  }).join("");
}

function markReviewed(index) {
  state.reviewed.add(index);
  persist();
  updateProgress();
}

function speak(text, index) {
  if (typeof index === "number") markReviewed(index);
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-MY";
  utterance.rate = .86;
  speechSynthesis.speak(utterance);
}

function updateProgress() {
  progressText.textContent = `${state.reviewed.size} / ${phrases.length}`;
  progressBar.style.width = `${Math.round((state.reviewed.size / phrases.length) * 100)}%`;
}

function renderCards() {
  const items = filteredPhrases();
  resultCount.textContent = state.mode === "games" ? "2" : items.length;
  categoryKicker.textContent = state.mode === "favorites" ? "收藏句子" : (state.category === "All" ? "全部场景" : labelFor(state.category));
  sectionTitle.textContent = state.mode === "flash" ? "翻卡练习" : state.mode === "games" ? "Ms Shirley 小游戏" : "100句常用日常英文";
  cardsGrid.classList.toggle("hidden", state.mode === "flash" || state.mode === "games");
  flashStage.classList.toggle("hidden", state.mode !== "flash");
  gamesStage.classList.toggle("hidden", state.mode !== "games");

  if (state.mode === "flash") {
    renderFlash();
    return;
  }

  if (state.mode === "games") {
    renderSceneGame();
    updateBuiltSentence();
    return;
  }

  if (!items.length) {
    cardsGrid.innerHTML = `<article class="phrase-card"><p class="english">No phrases found.</p><p class="chinese">换一个关键词或场景试试看。</p></article>`;
    return;
  }

  cardsGrid.innerHTML = items.map(({ phrase, index }) => `
    <article class="phrase-card">
      <div class="phrase-top">
        <span class="tag">${labelFor(phrase[0])}</span>
        <div class="card-actions">
          <button class="tiny-btn" title="听发音" aria-label="听发音" data-speak="${index}">▶</button>
          <button class="tiny-btn ${state.saved.has(index) ? "saved" : ""}" title="收藏" aria-label="收藏" data-save="${index}">★</button>
        </div>
      </div>
      <div>
        <p class="english">${phrase[1]}</p>
        <p class="chinese">${phrase[2]}</p>
      </div>
      <p class="context">${phrase[3]}</p>
    </article>
  `).join("");
}

function renderFlash() {
  const items = filteredPhrases();
  if (!items.length) {
    document.querySelector("#flashTag").textContent = "Empty";
    document.querySelector("#flashEnglish").textContent = "No saved phrases yet.";
    document.querySelector("#flashChinese").textContent = "先收藏几句再回来练习。";
    document.querySelector("#flashExample").textContent = "";
    return;
  }
  if (state.flashIndex >= items.length) state.flashIndex = 0;
  const { phrase, index } = items[state.flashIndex];
  markReviewed(index);
  document.querySelector("#flashTag").textContent = `${labelFor(phrase[0])} · ${state.flashIndex + 1}/${items.length}`;
  document.querySelector("#flashEnglish").textContent = phrase[1];
  document.querySelector("#flashChinese").textContent = state.flashFlipped ? phrase[2] : "••••••";
  document.querySelector("#flashExample").textContent = phrase[3];
}

function setMode(mode) {
  state.mode = mode;
  document.querySelectorAll(".mode-btn").forEach(btn => btn.classList.toggle("active", btn.dataset.mode === mode));
  renderCards();
}

function makeQuiz() {
  const pool = filteredPhrases();
  const source = pool.length >= 4 ? pool : phrases.map((phrase, index) => ({ phrase, index }));
  const answer = source[Math.floor(Math.random() * source.length)];
  const wrong = phrases
    .map((phrase, index) => ({ phrase, index }))
    .filter(item => item.index !== answer.index)
    .sort(() => Math.random() - .5)
    .slice(0, 3);
  const options = [answer, ...wrong].sort(() => Math.random() - .5);
  state.quizAnswer = answer.index;
  document.querySelector("#quizQuestion").textContent = answer.phrase[2];
  document.querySelector("#quizFeedback").textContent = "";
  document.querySelector("#quizOptions").innerHTML = options.map(item => `
    <button type="button" class="quiz-option" data-quiz="${item.index}">${item.phrase[1]}</button>
  `).join("");
}

function renderSceneGame() {
  const round = gamePrompts[state.sceneGameIndex % gamePrompts.length];
  const correct = phrases.find(item => item[1] === round.answer);
  const wrong = phrases
    .filter(item => item[0] !== round.category)
    .sort(() => Math.random() - .5)
    .slice(0, 3);
  const options = [correct, ...wrong].sort(() => Math.random() - .5);
  document.querySelector("#scenePrompt").textContent = round.prompt;
  document.querySelector("#sceneScore").textContent = state.sceneScore;
  document.querySelector("#sceneFeedback").textContent = "";
  document.querySelector("#sceneOptions").innerHTML = options.map(item => `
    <button type="button" class="game-option" data-scene-answer="${item[1] === round.answer ? "yes" : "no"}">${item[1]}</button>
  `).join("");
}

function updateBuiltSentence() {
  const drink = document.querySelector("#drinkSelect").value;
  const sugar = document.querySelector("#sugarSelect").value;
  const ice = document.querySelector("#iceSelect").value;
  document.querySelector("#builtSentence").textContent = `Can I have one ${drink} with ${sugar} and ${ice}, please?`;
}

categoryList.addEventListener("click", event => {
  const btn = event.target.closest("[data-category]");
  if (!btn) return;
  state.category = btn.dataset.category;
  state.flashIndex = 0;
  renderCategories();
  renderCards();
});

cardsGrid.addEventListener("click", event => {
  const speakBtn = event.target.closest("[data-speak]");
  const saveBtn = event.target.closest("[data-save]");
  if (speakBtn) {
    const index = Number(speakBtn.dataset.speak);
    speak(phrases[index][1], index);
  }
  if (saveBtn) {
    const index = Number(saveBtn.dataset.save);
    state.saved.has(index) ? state.saved.delete(index) : state.saved.add(index);
    persist();
    renderCards();
  }
});

searchInput.addEventListener("input", event => {
  state.query = event.target.value;
  state.flashIndex = 0;
  renderCards();
});

document.querySelectorAll(".mode-btn").forEach(btn => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

document.querySelector("#shuffleBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  state.category = phrases[randomIndex][0];
  state.flashIndex = 0;
  renderCategories();
  setMode("flash");
  speak(phrases[randomIndex][1], randomIndex);
});

document.querySelector("#prevFlash").addEventListener("click", () => {
  const len = filteredPhrases().length || 1;
  state.flashIndex = (state.flashIndex - 1 + len) % len;
  state.flashFlipped = false;
  renderFlash();
});

document.querySelector("#nextFlash").addEventListener("click", () => {
  const len = filteredPhrases().length || 1;
  state.flashIndex = (state.flashIndex + 1) % len;
  state.flashFlipped = false;
  renderFlash();
});

document.querySelector("#flipFlash").addEventListener("click", () => {
  state.flashFlipped = !state.flashFlipped;
  renderFlash();
});

document.querySelector("#flashCard").addEventListener("click", () => {
  const item = filteredPhrases()[state.flashIndex];
  if (item) speak(item.phrase[1], item.index);
});

document.querySelector("#quizBtn").addEventListener("click", () => {
  makeQuiz();
  document.querySelector("#quizDialog").showModal();
});

document.querySelector("#quizOptions").addEventListener("click", event => {
  const option = event.target.closest("[data-quiz]");
  if (!option) return;
  const chosen = Number(option.dataset.quiz);
  document.querySelectorAll(".quiz-option").forEach(btn => {
    const value = Number(btn.dataset.quiz);
    btn.classList.toggle("correct", value === state.quizAnswer);
    btn.classList.toggle("wrong", value === chosen && chosen !== state.quizAnswer);
  });
  markReviewed(state.quizAnswer);
  document.querySelector("#quizFeedback").textContent = chosen === state.quizAnswer ? "答对了。" : `正确答案：${phrases[state.quizAnswer][1]}`;
});

document.querySelector("#nextQuiz").addEventListener("click", makeQuiz);

document.querySelector("#sceneOptions").addEventListener("click", event => {
  const option = event.target.closest("[data-scene-answer]");
  if (!option) return;
  const correct = option.dataset.sceneAnswer === "yes";
  option.classList.add(correct ? "correct" : "wrong");
  if (correct) state.sceneScore += 1;
  document.querySelector("#sceneScore").textContent = state.sceneScore;
  document.querySelector("#sceneFeedback").textContent = correct ? "答对了，开口念一次！" : "差一点，再看情境关键词。";
});

document.querySelector("#nextSceneGame").addEventListener("click", () => {
  state.sceneGameIndex += 1;
  renderSceneGame();
});

document.querySelectorAll("#drinkSelect, #sugarSelect, #iceSelect").forEach(select => {
  select.addEventListener("change", updateBuiltSentence);
});

document.querySelector("#speakOrder").addEventListener("click", () => {
  speak(document.querySelector("#builtSentence").textContent);
});

renderCategories();
updateProgress();
renderCards();
