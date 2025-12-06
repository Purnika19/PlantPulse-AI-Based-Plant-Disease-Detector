document.addEventListener("DOMContentLoaded", () => {
  const chatContainer = document.getElementById("chatContainer");

  // 🌿 Common message functions
  function appendBotMessage(text) {
    const msg = document.createElement("div");
    msg.className = "bot-message";
    msg.textContent = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function appendUserMessage(text) {
    const msg = document.createElement("div");
    msg.className = "user-message";
    msg.textContent = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  // 🌦️ SEASONAL RECOMMENDATION MODE (asks user first)
  function askSeason() {
    appendUserMessage("🌤️ I want best crops for this season");
    document.querySelectorAll(".options").forEach(opt => opt.remove());
    appendBotMessage("Sure! Please tell me which season it is currently 👇");

    const seasonOptions = document.createElement("div");
    seasonOptions.className = "options";
    const seasons = [
      { name: "Winter", emoji: "❄️" },
      { name: "Spring", emoji: "🌸" },
      { name: "Summer", emoji: "☀️" },
      { name: "Monsoon", emoji: "🌧️" }
    ];

    seasons.forEach(season => {
      const btn = document.createElement("button");
      btn.className = "chat-btn";
      btn.textContent = `${season.emoji} ${season.name}`;
      btn.onclick = () => showSeasonalCrops(season.name, season.emoji);
      seasonOptions.appendChild(btn);
    });
    chatContainer.appendChild(seasonOptions);
  }

  // 🌾 SHOW SEASONAL CROPS (based on user selection)
  function showSeasonalCrops(season, emoji) {
    appendUserMessage(`${emoji} ${season}`);
    let crops = [];
    if (season === "Winter") crops = ["Spinach 🥬", "Peas 🌿", "Carrot 🥕", "Cabbage 🥦"];
    else if (season === "Spring") crops = ["Tomato 🍅", "Cucumber 🥒", "Beans 🫘", "Chili 🌶️"];
    else if (season === "Summer") crops = ["Corn 🌽", "Pumpkin 🎃", "Okra 🥗", "Sunflower 🌻"];
    else if (season === "Monsoon") crops = ["Rice 🍚", "Soybean 🫘", "Sugarcane 🌾", "Groundnut 🥜"];

    appendBotMessage(`Here are some great crops to grow during ${emoji} ${season}:`);
    const ul = document.createElement("ul");
    crops.forEach(crop => {
      const li = document.createElement("li");
      li.textContent = "🌱 " + crop;
      ul.appendChild(li);
    });
    chatContainer.appendChild(ul);

    const backDiv = document.createElement("div");
    backDiv.className = "options";
    const backBtn = document.createElement("button");
    backBtn.className = "chat-btn";
    backBtn.textContent = "🔙 Back to main menu";
    backBtn.onclick = () => {
      chatContainer.innerHTML = "";
      startChat();
    };
    backDiv.appendChild(backBtn);
    chatContainer.appendChild(backDiv);
  }

  // 🌾 ASK ABOUT CROP — description + tips + fertilizer
  function askCrop() {
    document.querySelectorAll(".options").forEach(opt => opt.remove());
    appendBotMessage("Sure! Please choose a crop below 👇");

    const crops = [
      { name: "Tomato", emoji: "🍅" },
      { name: "Potato", emoji: "🥔" },
      { name: "Corn", emoji: "🌽" },
      { name: "Apple", emoji: "🍎" },
      { name: "Pepper", emoji: "🌶️" },
      { name: "Wheat", emoji: "🌾" },
      { name: "Rice", emoji: "🍚" },
      { name: "Grape", emoji: "🍇" },
      { name: "Strawberry", emoji: "🍓" },
      { name: "Soybean", emoji: "🫘" }
    ];

    const cropOptions = document.createElement("div");
    cropOptions.className = "options";
    crops.forEach(crop => {
      const btn = document.createElement("button");
      btn.className = "chat-btn";
      btn.textContent = `${crop.emoji} ${crop.name}`;
      btn.onclick = () => showCropInfo(crop.name, crop.emoji, true);
      cropOptions.appendChild(btn);
    });
    chatContainer.appendChild(cropOptions);
  }

  // 🌱 SHOW CROP INFO
  function showCropInfo(crop, emoji, showFertilizer) {
    appendUserMessage(`${emoji} ${crop}`);

    const cropInfo = {
      Tomato: "🍅 Prefers 20–28°C, well-drained loamy soil, and 6–8 hours of sunlight daily.",
      Potato: "🥔 Thrives in cool climates (15–20°C) with loose, fertile soil rich in organic matter.",
      Corn: "🌽 Grows best in warm climates (20–32°C) with deep, nutrient-rich soil.",
      Apple: "🍎 Likes 21–24°C in temperate zones; prefers loamy, well-drained soil.",
      Pepper: "🌶️ Needs warm 18–30°C weather and sandy loam soil with steady moisture.",
      Wheat: "🌾 Grows well in 10–25°C cool climates and well-drained loam or clay loam soil.",
      Rice: "🍚 Needs warm, humid climate (20–35°C) and water-retentive clayey soil.",
      Grape: "🍇 Prefers 15–30°C with dry weather and sandy, well-drained soil.",
      Strawberry: "🍓 Loves 15–25°C cool weather and slightly acidic sandy loam soil.",
      Soybean: "🫘 Thrives in 20–30°C with fertile loamy soil and moderate rainfall."
    };

    appendBotMessage(cropInfo[crop]);
    setTimeout(() => showCropTips(crop, emoji, showFertilizer), 700);
  }

  // 🌾 FERTILIZER INFO DATABASE (ALL 10 CROPS)
  const fertilizerData = {
    Tomato: { fertilizer: "NPK 10-10-10 or composted manure.", soilPH: "6.0–6.8", organic: "Bone meal or banana peel fertilizer." },
    Potato: { fertilizer: "NPK 5-10-10 during planting.", soilPH: "5.0–6.5", organic: "Compost, cow manure, and wood ash." },
    Corn: { fertilizer: "High nitrogen (NPK 20-10-10).", soilPH: "5.8–7.0", organic: "Compost tea or blood meal." },
    Apple: { fertilizer: "Balanced NPK 10-10-10 yearly.", soilPH: "6.0–7.0", organic: "Compost + bone meal mix." },
    Pepper: { fertilizer: "NPK 5-10-10 or potassium-rich.", soilPH: "6.0–6.5", organic: "Compost + fish emulsion." },
    Wheat: { fertilizer: "NPK 20-20-0 or urea mix.", soilPH: "6.0–7.5", organic: "Vermicompost or green manure." },
    Rice: { fertilizer: "NPK 16-20-0 or urea + phosphates.", soilPH: "5.5–7.0", organic: "Rice husk compost or cow dung." },
    Grape: { fertilizer: "NPK 12-10-18 (potassium rich).", soilPH: "6.0–7.5", organic: "Bone meal and compost mulch." },
    Strawberry: { fertilizer: "NPK 10-10-10 or 12-12-12.", soilPH: "5.5–6.5", organic: "Fish emulsion or coffee grounds." },
    Soybean: { fertilizer: "NPK 7-14-21 or phosphorus-rich.", soilPH: "6.0–7.0", organic: "Farmyard manure and compost." }
  };

  // 🌿 CARE TIPS FOR ALL 10 CROPS
  const tips = {
    Tomato: [
      "Water regularly but avoid wetting leaves.",
      "Use mulch to retain soil moisture.",
      "Rotate crops each season.",
      "Prune lower leaves weekly.",
      "Avoid overhead watering.",
      "Apply fungicide if early blight appears.",
      "Support plants with stakes.",
      "Harvest when fully red for best taste."
    ],
    Potato: [
      "Plant in loose, well-drained soil.",
      "Use certified disease-free seed potatoes.",
      "Avoid overwatering to prevent rot.",
      "Remove yellowing leaves early.",
      "Check for late blight after rains.",
      "Harvest when vines dry naturally.",
      "Store in a cool, dark place.",
      "Avoid replanting in the same soil next year."
    ],
    Corn: [
      "Plant in full sunlight.",
      "Water deeply twice a week.",
      "Watch for corn borers and armyworms.",
      "Use compost or nitrogen fertilizer.",
      "Keep rows weed-free.",
      "Harvest when silk turns brown.",
      "Plant in blocks for better pollination.",
      "Rotate crops every season."
    ],
    Apple: [
      "Prune trees annually during late winter.",
      "Use disease-resistant apple varieties.",
      "Spray for scab early in the season.",
      "Avoid waterlogging around roots.",
      "Keep the base of the tree weed-free.",
      "Thin fruits for better yield.",
      "Harvest when firm and fully colored.",
      "Store in a cool, ventilated place."
    ],
    Pepper: [
      "Provide full sun exposure (6–8 hours).",
      "Avoid overwatering to prevent root rot.",
      "Fertilize with potassium-rich soil mix.",
      "Stake tall plants to support weight.",
      "Inspect leaves for bacterial spots.",
      "Remove infected plants immediately.",
      "Mulch to keep soil temperature stable.",
      "Harvest when fruits turn bright and firm."
    ],
    Wheat: [
      "Sow in well-drained, fertile soil.",
      "Avoid excessive nitrogen fertilizer.",
      "Use rust-resistant wheat varieties.",
      "Weed regularly to improve yield.",
      "Irrigate at the booting stage.",
      "Monitor for aphid infestations.",
      "Harvest when grains are golden.",
      "Dry and store grains properly."
    ],
    Rice: [
      "Ensure proper water management.",
      "Maintain 2–3 cm water depth during growth.",
      "Use certified seeds to prevent pests.",
      "Apply balanced fertilizers (NPK).",
      "Keep fields weed-free.",
      "Control brown planthopper early.",
      "Drain water before harvesting.",
      "Dry grains under sunlight after harvest."
    ],
    Grape: [
      "Plant in full sunlight with good drainage.",
      "Prune yearly to encourage new growth.",
      "Avoid overhead irrigation.",
      "Use sulfur spray to prevent mildew.",
      "Train vines on trellises.",
      "Harvest when grapes are plump and sweet.",
      "Remove fallen leaves regularly.",
      "Fertilize lightly during flowering."
    ],
    Strawberry: [
      "Plant in slightly acidic soil.",
      "Avoid wetting the fruit while watering.",
      "Mulch with straw to retain moisture.",
      "Remove runners to boost fruit yield.",
      "Apply organic compost monthly.",
      "Check for powdery mildew often.",
      "Harvest when berries are bright red.",
      "Rotate every 2 years to prevent soil disease."
    ],
    Soybean: [
      "Use inoculated seeds for nitrogen fixing.",
      "Plant in warm, moist soil.",
      "Avoid overwatering young seedlings.",
      "Weed fields during early growth stages.",
      "Protect from pod borers and aphids.",
      "Harvest when pods turn yellow-brown.",
      "Avoid replanting on same land each year.",
      "Rotate with maize or wheat for better yield."
    ]
  };

  // 🌱 SHOW CROP TIPS
  function showCropTips(crop, emoji, showFertilizer) {
    appendBotMessage(`Here are 8 care and disease-prevention tips for ${emoji} ${crop}:`);
    const ul = document.createElement("ul");
    (tips[crop] || ["Provide full sunlight.", "Water moderately."]).forEach(tip => {
      const li = document.createElement("li");
      li.textContent = "🌿 " + tip;
      ul.appendChild(li);
    });
    chatContainer.appendChild(ul);

    if (showFertilizer) {
      const fertDiv = document.createElement("div");
      fertDiv.className = "options";
      const fertBtn = document.createElement("button");
      fertBtn.className = "chat-btn";
      fertBtn.textContent = "💧 Show Fertilizer & Soil Info";
      fertBtn.onclick = () => showFertilizerInfo(crop, emoji, fertDiv);
      fertDiv.appendChild(fertBtn);
      chatContainer.appendChild(fertDiv);
    }
  }

  //  SHOW FERTILIZER INFO
  function showFertilizerInfo(crop, emoji, fertDiv) {
    appendUserMessage("💧 Yes, show fertilizer info.");
    fertDiv.remove();

    const info = fertilizerData[crop];
    appendBotMessage(`Here’s the recommended fertilizer and soil info for ${emoji} ${crop}:`);
    const box = document.createElement("div");
    box.className = "fertilizer-card";
    box.innerHTML = `
      <p><strong>🌾 Fertilizer:</strong> ${info.fertilizer}</p>
      <p><strong>🌱 Soil pH:</strong> ${info.soilPH}</p>
      <p><strong>🍃 Organic Option:</strong> ${info.organic}</p>
    `;
    chatContainer.appendChild(box);

    const backDiv = document.createElement("div");
    backDiv.className = "options";
    const backBtn = document.createElement("button");
    backBtn.className = "chat-btn";
    backBtn.textContent = "🔙 Ask about another crop";
    backBtn.onclick = () => {
      appendUserMessage("🔙 I want to ask about another crop.");
      askCrop();
      backDiv.remove();
    };
    backDiv.appendChild(backBtn);
    chatContainer.appendChild(backDiv);
  }

  // 🌿 CARE TIPS MODE
  function showTipsIntro() {
    appendUserMessage("🌿 I want care tips.");
    document.querySelectorAll(".options").forEach(opt => opt.remove());
    appendBotMessage("Sure! Pick a crop to get 8 care tips 🌱");

    const crops = [
      { name: "Tomato", emoji: "🍅" },
      { name: "Potato", emoji: "🥔" },
      { name: "Corn", emoji: "🌽" },
      { name: "Apple", emoji: "🍎" },
      { name: "Pepper", emoji: "🌶️" },
      { name: "Wheat", emoji: "🌾" },
      { name: "Rice", emoji: "🍚" },
      { name: "Grape", emoji: "🍇" },
      { name: "Strawberry", emoji: "🍓" },
      { name: "Soybean", emoji: "🫘" }
    ];

    const tipOptions = document.createElement("div");
    tipOptions.className = "options";
    crops.forEach(crop => {
      const btn = document.createElement("button");
      btn.className = "chat-btn";
      btn.textContent = `${crop.emoji} ${crop.name}`;
      btn.onclick = () => showCropTips(crop.name, crop.emoji, false);
      tipOptions.appendChild(btn);
    });
    chatContainer.appendChild(tipOptions);
  }

  //  Home Menu
  function startChat() {
    chatContainer.innerHTML = `
      <div class="bot-message">👋 Hi there! I’m your Plant Assistant.</div>
      <div class="bot-message">What would you like to do today?</div>
      <div class="options" id="mainOptions">
        <button id="askCropBtn" class="chat-btn">🌾 Ask about a crop</button>
        <button id="tipsBtn" class="chat-btn">🌿 Get care tips</button>
        <button id="seasonBtn" class="chat-btn">🌤️ Best crops this season</button>
      </div>
    `;
    document.getElementById("askCropBtn").onclick = askCrop;
    document.getElementById("tipsBtn").onclick = showTipsIntro;
    document.getElementById("seasonBtn").onclick = askSeason;
  }

  startChat();
});






