document.addEventListener('DOMContentLoaded', () => {
  const levels = [
    // Define levels with their questions and answers here
    {
      questions: [
        { question: '🍭🍭 + 🍭🍭🍭 =', answer: '5' },
        { question: '🍫🍫🍫🍫 + 🍫🍫 =', answer: '6' },
        { question: '🥚🥚 + 🥚 =', answer: '3' },
        { question: '🍔🍔🍔 - 🍔🍔 =', answer: '1' },
        { question: '🍦🍦🍦🍦🍦🍦 - 🍦🍦 =', answer: '4' },
      ],
      answers: ['1', '3', '5', '4', '6', '2', '7', '9'],
    },
    {
      questions: [
        { question: '🍉🍉🍉 - 🍉 =', answer: '2' },
        { question: '🍋🍋🍋🍋 + 🍋 =', answer: '5' },
        { question: '🍅🍅 + 🍅 =', answer: '3' },
        { question: '🥑 - 🥑 =', answer: '0' },
        { question: '🍆🍆🍆 - 🍆🍆 =', answer: '1' },
      ],
      answers: ['1', '3', '5', '0', '2', '4', '7', '9'],
    },   
    {
      questions: [
        { question: '📗📘 + 📗📘📗📘 =', answer: '6' },
        { question: '✏✏✏ - ✏✏✏ =', answer: '0' },
        { question: '📏📏📏📏 / 📏📏 =', answer: '2' },
        { question: '🎒🎒🎒 * 🎒🎒 =', answer: '6' },
        { question: '📐📐 - 📐 =', answer: '1' },
      ],
      answers: ['1', '3', '5', '0', '2', '6', '6', '9'],
    },
    {
      questions: [
        { question: '🐫🐫🐫 + 🐫🐫🐫🐫 =', answer: '7' },
        { question: '🐎🐎🐎🐎🐎🐎🐎 + 🐎🐎🐎🐎 =', answer: '11' },
        { question: '🐑 + 🐑🐑🐑🐑 =', answer: '5' },
        { question: '🐘🐘🐘🐘🐘 + 🐘🐘🐘🐘🐘 =', answer: '10' },
        { question: '🐒🐒🐒 + 🐒 =', answer: '4' },
      ],
      answers: ['11', '7', '5', '0', '4', '6', '10', '19'],
    },   
    {
      questions: [
        { question: '🐟🐟🐟🐟 - 🐟🐟🐟 =', answer: '1' },
        { question: '🐬🐬 - 🐬🐬🐬🐬 =', answer: '-2' },
        { question: '🐙🐙🐙🐙🐙🐙 - 🐙🐙🐙🐙🐙 =', answer: '1' },
        { question: '🐳🐳🐳 - 🐳🐳🐳🐳🐳🐳 =', answer: '-3' },
        { question: '🐜🐜🐜🐜 + 🐜🐜 =', answer: '6' },
      ],
      answers: ['1', '7', '-3', '-2', '4', '6', '1', '10'],
    },
    {
      questions: [
        { question: '🌴🌴🌴 * 🌴🌴🌴🌴 =', answer: '12' },
        { question: '☘️☘️ * ☘️☘️ =', answer: '4' },
        { question: '🍂🍂🍂🍂 * 🍂🍂 =', answer: '8' },
        { question: '🌷🌷🌷🌷 * 🌷🌷🌷 =', answer: '12' },
        { question: '🌵🌵 / 🌵🌵 =', answer: '1' },
      ],
      answers: ['12', '7', '-3', '12', '4', '8', '1', '0'],
    },
    {
      questions: [
        { question: '🍑🍑🍑🍑 / 🍑🍑🍑🍑 =', answer: '1' },
        { question: '🍇🍇🍇🍇🍇🍇 / 🍇🍇🍇 =', answer: '2' },
        { question: '🍆🍆 / 🍆🍆 =', answer: '1' },
        { question: '🍌🍌🍌🍌 / 🍌🍌 =', answer: '2' },
        { question: '🌽🌽 * 🌽🌽🌽🌽🌽 =', answer: '10' },
      ],
      answers: ['1', '2', '1', '2', '4', '9', '10', '0'],
    },  
    {
      questions: [
        { question: '🍬🍬 + 🍬🍬🍬 + 🍬🍬 =', answer: '7' },
        { question: '🍩🍩🍩 + 🍩🍩 + 🍩 =', answer: '6' },
        { question: '🎂🎂 / 🎂🎂 =', answer: '1' },
        { question: '🍰 + 🍰🍰 + 🍰🍰🍰 =', answer: '6' },
        { question: '🍧🍧 - 🍧🍧🍧 =', answer: '-1' },
      ],
      answers: ['1', '7', '1', '2', '6', '-1', '6', '0'],
    },  
    {
      questions: [
        { question: '⚽️⚽️⚽️ + ⚽️⚽️ =', answer: '5' },
        { question: '⚾️⚾️⚾️⚾️ - ⚾️⚾️ =', answer: '2' },
        { question: '♟♟♟♟♟♟ / ♟♟ =', answer: '3' },
        { question: '🏆🏆 + 🏆🏆 + 🏆🏆🏆 =', answer: '7' },
        { question: '⛳️⛳️⛳️ * ⛳️⛳️⛳️⛳️ =', answer: '12' },
      ],
      answers: ['5', '7', '1', '2', '3', '12', '6', '0'],
    },  
    {
      questions: [
        { question: '🚀🚀 * 🚀🚀 * 🚀🚀 =', answer: '8' },
        { question: '✈️✈️ - ✈️✈️✈️✈️ =', answer: '-2' },
        { question: '🚲🚲 + 🚲🚲 * 🚲 =', answer: '4' },
        { question: '🚙🚙🚙 + 🚙 + 🚙🚙 =', answer: '6' },
        { question: '🚢 * 🚢🚢 + 🚢🚢 =', answer: '4' },
      ],
      answers: ['4', '8', '1', '-2', '2', '4', '6', '5'],
    },
    {
      questions: [
        { question: '🗼🗼 * 🗼🗼🗼 + 🚀🚀 =', answer: '8' },
        { question: '🎡🎡 + ✈️✈️✈️✈️ =', answer: '6' },
        { question: '⚓️⚓️⚓️ - ⚓️⚓️ * 🚙 =', answer: '1' },
        { question: '⛵️⛵️⛵️⛵️ + 🚙 * ⛵️⛵️ =', answer: '6' },
        { question: '💉 - 💉💉💉💉💉💉💉 =', answer: '-6' },
      ],
      answers: ['6', '8', '1', '-6', '-6', '-1', '6', '7'],
    },  
    {
      questions: [
        { question: '🚀🚀 + 🍬🍬🍬 + ⚓️⚓️ =', answer: '7' },
        { question: '🚙🚙🚙 + 🍩🍩 + ✈️ =', answer: '6' },
        { question: '🎂🎂 / 🍰🍰 =', answer: '1' },
        { question: '🚢 + ⛵️⛵️ + 🚙🚙🚙 =', answer: '6' },
        { question: '🍬🍬 - 🍧🍧🍧 =', answer: '-1' },
      ],
      answers: ['1', '7', '1', '2', '6', '-1', '6', '0'],
    },
    {
      questions: [
        { question: '🐟🐟🐟🐟 - ⚽️⚽️⚽️ =', answer: '1' },
        { question: '🍂🍂 - 🐬🐬🐬🐬 =', answer: '-2' },
        { question: '🐙🐙🐙🐙🐙🐙 - 🍑🍑🍑🍑🍑 =', answer: '1' },
        { question: '🐳🐳🐳 - 🐳🐳🐳🐳🐳🐳 =', answer: '-3' },
        { question: '🐜🐜🐜🐜 + 🐜🐜 =', answer: '6' },
      ],
      answers: ['1', '7', '-3', '-2', '4', '6', '1', '10'],
    },
    {
      questions: [
        { question: '🚀🚀 * 🏆🏆 * ⚽️⚽️ =', answer: '8' },
        { question: '✈️✈️ - ✈️✈️✈️✈️ =', answer: '-2' },
        { question: '🍌🍌 + 🚲🚲 * 🐒 =', answer: '4' },
        { question: '🚙🚙🚙 + 🚙 + 🍅🍅 =', answer: '6' },
        { question: '🚢 * 🐘🐘 + 🚢🚢 =', answer: '4' },
      ],
      answers: ['5', '8', '1', '-2', '2', '4', '6', '4'],
    },
    {
      questions: [
        { question: 'Ⅱ + Ⅲ =', answer: '5' },
        { question: 'Ⅳ + Ⅱ =', answer: '6' },
        { question: 'Ⅷ + Ⅴ =', answer: '13' },
        { question: 'Ⅸ - Ⅲ =', answer: '6' },
        { question: 'Ⅶ - Ⅱ =', answer: '5' },
      ],
      answers: ['1', '13', '5', '4', '6', '2', '6', '5'],
    },  
    {
      questions: [
        { question: 'Ⅹ - Ⅱ =', answer: '8' },
        { question: 'Ⅺ + Ⅰ =', answer: '12' },
        { question: 'Ⅲ + Ⅲ =', answer: '6' },
        { question: 'Ⅷ - Ⅷ =', answer: '0' },
        { question: 'Ⅶ - Ⅵ =', answer: '1' },
      ],
      answers: ['1', '3', '6', '0', '12', '4', '8', '9'],
    },
    {
      questions: [
        { question: '🌴🌴🌴 * Ⅳ =', answer: '12' },
        { question: 'Ⅱ * ☘️☘️ =', answer: '4' },
        { question: 'Ⅳ * 🍂🍂 =', answer: '8' },
        { question: '🌷🌷🌷🌷 * Ⅲ =', answer: '12' },
        { question: 'Ⅱ / 🌵🌵 =', answer: '1' },
      ],
      answers: ['12', '7', '-3', '12', '4', '8', '1', '0'],
    },
    {
      questions: [
        { question: 'Ⅱ + Ⅲ + Ⅱ =', answer: '7' },
        { question: 'Ⅲ + Ⅱ + Ⅰ =', answer: '6' },
        { question: 'Ⅱ / Ⅱ =', answer: '1' },
        { question: 'Ⅰ + Ⅱ + Ⅲ =', answer: '6' },
        { question: 'Ⅱ - Ⅲ =', answer: '-1' },
      ],
      answers: ['1', '7', '1', '2', '6', '-1', '6', '0'],
    },
    {
      questions: [
        { question: '🗼🗼 * Ⅲ + 🚀🚀 =', answer: '8' },
        { question: '🎡🎡 + Ⅳ =', answer: '6' },
        { question: '⚓️⚓️⚓️ - Ⅱ * 🚙 =', answer: '1' },
        { question: 'Ⅳ + 🚙 * ⛵️⛵️ =', answer: '6' },
        { question: '💉 - Ⅶ =', answer: '-6' },
      ],
      answers: ['6', '8', '1', '-6', '-6', '-1', '6', '7'],
    },
    {
      questions: [
        { question: 'Ⅱ * Ⅴ =', answer: 'Ⅹ' },
        { question: 'Ⅲ * Ⅲ =', answer: 'Ⅸ' },
        { question: 'Ⅴ * Ⅳ =', answer: 'ⅩⅩ' },
        { question: 'Ⅳ * Ⅰ =', answer: 'Ⅳ' },
        { question: 'Ⅰ * Ⅱ =', answer: 'Ⅱ' },
      ],
      answers: ['Ⅱ', 'Ⅸ', '-Ⅷ', 'Ⅹ', 'ⅩⅩ', 'Ⅳ', 'Ⅴ', '0'],
    },
    {
      questions: [
        { question: 'Ⅳ - Ⅲ =', answer: 'Ⅰ' },
        { question: 'Ⅱ - Ⅳ =', answer: '-Ⅱ' },
        { question: 'Ⅵ - Ⅴ =', answer: 'Ⅰ' },
        { question: 'Ⅲ - Ⅵ =', answer: '-Ⅲ' },
        { question: 'Ⅳ + Ⅱ =', answer: 'Ⅵ' },
      ],
      answers: ['Ⅰ', 'Ⅲ', '-Ⅲ', '-Ⅱ', 'Ⅱ', 'Ⅵ', 'Ⅰ', 'Ⅹ'],
    },
    {
      questions: [
        { question: 'Ⅳ / Ⅳ =', answer: 'Ⅰ' },
        { question: 'Ⅵ / Ⅲ =', answer: 'Ⅱ' },
        { question: 'Ⅱ / Ⅱ =', answer: 'Ⅰ' },
        { question: 'Ⅳ / Ⅱ =', answer: 'Ⅱ' },
        { question: 'Ⅱ * Ⅴ =', answer: 'Ⅹ' },
      ],
      answers: ['Ⅰ', 'Ⅱ', 'Ⅰ', 'Ⅱ', 'Ⅳ', '-Ⅱ', 'Ⅹ', 'ⅩⅩ'],
    },
    {
      questions: [
        { question: '⚽️⚽️⚽️ + Ⅱ =', answer: 'Ⅴ' },
        { question: 'Ⅳ - ⚾️⚾️ =', answer: 'Ⅱ' },
        { question: 'Ⅵ / ♟♟ =', answer: 'Ⅲ' },
        { question: '🏆🏆 + 🏆🏆 + Ⅲ =', answer: 'Ⅶ' },
        { question: 'Ⅲ * ⛳️⛳️⛳️⛳️ =', answer: 'Ⅻ' },
      ],
      answers: ['Ⅴ', 'Ⅶ', 'Ⅸ', 'Ⅱ', 'Ⅲ', 'Ⅻ', 'Ⅹ', '0'],
    },
    {
      questions: [
        { question: '② + ③ =', answer: '5' },
        { question: '④ + ② =', answer: '6' },
        { question: '⑧ + ⑤ =', answer: '13' },
        { question: '⑨ - ③ =', answer: '6' },
        { question: '⑦ - ② =', answer: '5' },
      ],
      answers: ['1', '13', '5', '4', '6', '2', '6', '9'],
    },
    {
      questions: [
        { question: '④ - ③ =', answer: '1' },
        { question: '② - ④ =', answer: '-2' },
        { question: '⑥ - ⑤ =', answer: '1' },
        { question: '③ - ⑥ =', answer: '-3' },
        { question: '④ + ② =', answer: '6' },
      ],
      answers: ['1', '7', '-3', '-2', '4', '6', '1', '10'],
    },
    {
      questions: [
        { question: '③ * ④ =', answer: '12' },
        { question: '② * ② =', answer: '4' },
        { question: '④ * ③ =', answer: '12' },
        { question: '② / ② =', answer: '1' },
        { question: '④ * ② =', answer: '8' },
      ],
      answers: ['12', '7', '-3', '12', '4', '8', '1', '0'],
    },
    {
      questions: [
        { question: '🍑🍑🍑🍑 / 🍑🍑🍑🍑 =', answer: '1' },
        { question: '🍇🍇🍇🍇🍇🍇 / 🍇🍇🍇 =', answer: '2' },
        { question: '🍆🍆 / 🍆🍆 =', answer: '1' },
        { question: '🍌🍌🍌🍌 / 🍌🍌 =', answer: '2' },
        { question: '🌽🌽 * 🌽🌽🌽🌽🌽 =', answer: '10' },
      ],
      answers: ['1', '2', '1', '2', '4', '9', '10', '0'],
    },
    {
      questions: [
        { question: '② + 🗼🗼🗼 + 🚀🚀 =', answer: '7' },
        { question: '⛵️⛵️⛵️⛵️ + ① + ⛵️ =', answer: '6' },
        { question: '🎡🎡 + ④ =', answer: '6' },
        { question: '① - 💉💉💉💉💉💉💉 =', answer: '-6' },
        { question: '⚓️⚓️⚓️ - ② * 🚙 =', answer: '1' },
      ],
      answers: ['6', '8', '1', '-6', '-6', '-1', '6', '7'],
    },
    {
      questions: [
        { question: '🚙🚙🚙 + ① + Ⅱ =', answer: '6' },
        { question: '② * Ⅱ * ⚽️⚽️ =', answer: '8' },
        { question: '🍌🍌 + 🚲🚲 * Ⅰ =', answer: '4' },
        { question: '✈️✈️ - ✈️✈️✈️✈️ =', answer: '-2' },
        { question: 'Ⅰ * 🐘🐘 + ② =', answer: '4' },
      ],
      answers: ['5', '8', '1', '-2', '2', '4', '6', '4'],
    },
    {
      questions: [
        { question: 'Ⅳ + 🎃🎃 + ③ =', answer: 'Ⅸ' },
        { question: '☠️☠️ * ⑥ * Ⅰ =', answer: 'Ⅻ' },
        { question: '👿👿👿 + ⓪ * Ⅰ =', answer: 'Ⅲ' },
        { question: 'Ⅹ - 👻👻 =', answer: 'Ⅷ' },
        { question: 'Ⅴ * 👶👶 + ② =', answer: 'Ⅻ' },
      ],
      answers: ['Ⅻ', 'Ⅷ', 'Ⅰ', 'Ⅲ', 'Ⅸ', 'Ⅻ', 'Ⅳ', 'Ⅴ'],
    },
    {
      questions: [
        { question: '😎😎 + 😜😜 + 😋😋 + 😁😁 =', answer: '8' },
        { question: '👊 * 🙌🙌 * 👶👶 * 👉 =', answer: '4' },
        { question: '👵👵👵👵 / 👴👴 =', answer: '2' },
        { question: '💃 + 💃💃 + 💃💃💃 + 💃💃💃💃 =', answer: '10' },
        { question: '🏃🏃 * 🏃🏃 * 🏃🏃  =', answer: '8' },
      ],
      answers: ['10', '8', '1', '8', '2', '4', '6', '5'],
    },
    {
      questions: [
        { question: '💼💼 + 🌂🌂🌂 + ☂️☂️ =', answer: '7' },
        { question: '💄💄💄 + 💍💍 + 👠 =', answer: '6' },
        { question: '🐧🐧 - 🐌🐌🐌 =', answer: '-1' },
        { question: '🐍 + ⛵️⛵️ + 🐍🐍🐍 =', answer: '6' },
        { question: '🐝🐝 / 🐗🐗 =', answer: '1' },
      ],
      answers: ['1', '7', '1', '2', '6', '-1', '6', '0'],
    },
    {
      questions: [
        { question: '🐫🐫 * 🎄🎄🎄🎄🎄 =', answer: '10' },
        { question: '🍄🍄🍄🍄 / 🍁🍁🍁🍁 =', answer: '1' },
        { question: '🔥🔥 / 💥💥 =', answer: '1' },
        { question: '⭐️⭐️⭐️⭐️⭐️⭐️ / 🍇🍇🍇 =', answer: '2' },
        { question: '☂️☂️☂️☂️ / 🍎🍎 =', answer: '2' },
      ],
      answers: ['1', '2', '1', '2', '4', '9', '10', '0'],
    },  
    {
      questions: [
        { question: '3 + 🍍🍍🍍 + Ⅱ + ④ =', answer: '12' },
        { question: '🍞🍞 * Ⅲ * 11 * ⓪ =', answer: '0' },
        { question: '🍓🍓🍓🍓🍓🍓🍓🍓🍓 / Ⅲ =', answer: '3' },
        { question: 'ⅴ + ⓪ + 6 + 🍔🍔 =', answer: '13' },
        { question: '🍕🍕🍕 * ⑤ * Ⅰ  =', answer: '15' },
      ],
      answers: ['12', '8', '1', '3', '13', '4', '15', '0'],
    },
    {
      questions: [
      { question: '⛵️⛵️⛵️⛵️ + 🚙 * ⛵️⛵️ =', answer: '10' },
        { question: '🗼🗼 * 🗼🗼🗼 + 🚀🚀 =', answer: '8' },
        { question: '⚓️⚓️⚓️ - ⚓️⚓️ - 🚙 =', answer: '0' },
        { question: '🎡🎡 + ✈️✈️✈️✈️ =', answer: '6' },
        { question: '💉 - 💉💉💉💉💉💉💉 =', answer: '-6' },
      ],
      answers: ['6', '10', '1', '-6', '8', '-1', '6', '0'],
    },
    {
      questions: [
        { question: '🗼🗼 * Ⅲ + 🚀🚀 =', answer: '8' },
        { question: '🎡🎡 + Ⅳ =', answer: '6' },
        { question: '⚓️⚓️⚓️ - Ⅱ * 🚙 =', answer: '1' },
        { question: 'Ⅳ + 🚙 * ⛵️⛵️ =', answer: '6' },
        { question: '💉 - Ⅶ =', answer: '-6' },
      ],
      answers: ['6', '8', '1', '-6', '-6', '-1', '6', '7'],
    },
    {
      questions: [
        { question: '🗼🗼 * 🗼🗼🗼 + 🚀🚀 =', answer: '8' },
        { question: '🎡🎡 + ✈️✈️✈️✈️ =', answer: '6' },
        { question: '⚓️⚓️⚓️ - ⚓️⚓️ * 🚙 =', answer: '1' },
        { question: '⛵️⛵️⛵️⛵️ + 🚙 * ⛵️⛵️ =', answer: '6' },
        { question: '💉 - 💉💉💉💉💉💉💉 =', answer: '-6' },
      ],
      answers: ['6', '8', '1', '-6', '-6', '-1', '6', '7'],
    },  
    {
      questions: [
        { question: '🚀🚀 + 🍬🍬🍬 + ⚓️⚓️ =', answer: '7' },
        { question: '🚙🚙🚙 + 🍩🍩 + ✈️ =', answer: '6' },
        { question: '🎂🎂 / 🍰🍰 =', answer: '1' },
        { question: '🚢 + ⛵️⛵️ + 🚙🚙🚙 =', answer: '6' },
        { question: '🍬🍬 - 🍧🍧🍧 =', answer: '-1' },
      ],
      answers: ['1', '7', '1', '2', '6', '-1', '6', '0'],
    },
    {
      questions: [
        { question: '🌴🌴🌴 * 🌴🌴🌴🌴 =', answer: '12' },
        { question: '☘️☘️ * ☘️☘️ =', answer: '4' },
        { question: '🍂🍂🍂🍂 * 🍂🍂 =', answer: '8' },
        { question: '🌷🌷🌷🌷 * 🌷🌷🌷 =', answer: '12' },
        { question: '🌵🌵 / 🌵🌵 =', answer: '1' },
      ],
      answers: ['12', '7', '-3', '12', '4', '8', '1', '0'],
    },
    {
      questions: [
        { question: '🍑🍑🍑🍑 / 🍑🍑🍑🍑 =', answer: '1' },
        { question: '🍇🍇🍇🍇🍇🍇 / 🍇🍇🍇 =', answer: '2' },
        { question: '🍆🍆 / 🍆🍆 =', answer: '1' },
        { question: '🍌🍌🍌🍌 / 🍌🍌 =', answer: '2' },
        { question: '🌽🌽 * 🌽🌽🌽🌽🌽 =', answer: '10' },
      ],
      answers: ['1', '2', '1', '2', '4', '9', '10', '0'],
    }, 
    // Add more levels here as needed
  ];

  let currentLevel = 0;
  let correctAnswersCount = 0;
  let currentQuestionIndex = 0;

  let touchStartPosition = { x: 0, y: 0 };
  let currentDraggedElement = null;

  function getTouchPosition(event) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }

  const questionContainer = document.getElementById('question-container');
  const answerContainer = document.getElementById('answer-container');
  const nextLevelButton = document.getElementById('next-level-button');
  const levelTextElement = document.getElementById('level-text');

  // Create audio elements for sound effects
  const matchSound = new Audio("SFX/match_sound.mp3");
  const nonMatchSound = new Audio("SFX/non_match_sound.mp3");

    const tryLeftElement = document.getElementById('tryleft');
  const tryAgainButton = document.getElementById('Try-Again-button');

  let triesRemaining = 3;

  // Preload the audio files
  matchSound.preload = "auto";
  nonMatchSound.preload = "auto";
  matchSound.load();
  nonMatchSound.load();

function initLevel() {
  const level = levels[currentLevel];
  const questions = level.questions;
  const answers = level.answers;

  correctAnswersCount = 0;

  questionContainer.innerHTML = '';
  answerContainer.innerHTML = '';

  questions.forEach((question, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    questionContainer.appendChild(questionDiv);

    const parts = question.question.split(/(\s+)/).filter((e) => e.trim().length > 0);

    parts.forEach((part) => {
      if (isOperator(part)) {
        const operatorSpan = document.createElement('span');
        operatorSpan.classList.add('operator');
        operatorSpan.textContent = part;
        questionDiv.appendChild(operatorSpan);
      } else {
        const operandSpan = document.createElement('span');
        operandSpan.textContent = part;
        questionDiv.appendChild(operandSpan);
      }
    });

    const dropField = document.createElement('div');
    dropField.classList.add('drop-field');
    dropField.setAttribute('data-answer', question.answer);
    dropField.textContent = '___';
    questionDiv.appendChild(dropField);
  });

  shuffleArray(answers);
  answers.forEach((answer, index) => {
    const draggableAnswer = document.createElement('div');
    draggableAnswer.textContent = answer;
    draggableAnswer.classList.add('answer');
    draggableAnswer.setAttribute('data-value', answer);
    draggableAnswer.draggable = true;

    draggableAnswer.addEventListener('dragstart', dragStart);
    answerContainer.appendChild(draggableAnswer);
  });
}

function isOperator(part) {
  return /[-+*/=]/.test(part); // Check if the part contains any of the characters +, -, *, /, or =
}



  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.dataset.value);
  }


  function moveAnswerElement(touchPosition) {
    currentDraggedElement.style.left = touchPosition.x - currentDraggedElement.offsetWidth / 2 + "px";
    currentDraggedElement.style.top = touchPosition.y - currentDraggedElement.offsetHeight / 2 + "px";
  }

  function touchStart(event) {
    event.preventDefault();
    const touchPosition = getTouchPosition(event);
    const answerElement = event.target;
    const answerValue = answerElement.getAttribute('data-value');

    answerElement.style.transform = "scale(1.02)"; // Optional: Add a visual feedback for touch
    answerElement.classList.add("dragging");

    touchStartPosition.x = touchPosition.x;
    touchStartPosition.y = touchPosition.y;
    currentDraggedElement = answerElement;

    // Attach touchmove and touchend listeners to the answer container
    answerContainer.addEventListener("touchmove", touchMove);
    answerContainer.addEventListener("touchend", touchEnd);
  }

  function touchMove(event) {
    event.preventDefault();
    if (!currentDraggedElement) return; // Ignore if no element is being dragged

    const touchPosition = getTouchPosition(event);
    const deltaX = touchPosition.x - touchStartPosition.x;
    const deltaY = touchPosition.y - touchStartPosition.y;
    moveAnswerElement(touchPosition);
    currentDraggedElement.style.transform = "translate(" + deltaX + "px, " + deltaY + "px) scale(1.2)";
  }

  function touchEnd(event) {
    if (!currentDraggedElement) return; // Ignore if no element is being dragged

    currentDraggedElement.classList.remove("dragging");
    currentDraggedElement.style.transform = '';
    const dropField = findDropFieldUnderPoint(event.changedTouches[0].clientX, event.changedTouches[0].clientY);
    handleDrop(currentDraggedElement, dropField);

    // Reset the currently dragged element after handling the drop
    currentDraggedElement = null;

        answerContainer.removeEventListener("touchmove", touchMove);
    answerContainer.removeEventListener("touchend", touchEnd);
  }

  function findDropFieldUnderPoint(x, y) {
    const elements = document.elementsFromPoint(x, y);
    for (const element of elements) {
      if (element.classList.contains('drop-field')) {
        return element;
      }
    }
    return null;
  }

  function animateBrokenHeart() {
  const tryLeftElementRect = tryLeftElement.getBoundingClientRect();
  const brokenHeart = document.createElement('span');
  brokenHeart.innerHTML = '💔';
  brokenHeart.classList.add('broken-heart');

  // Position the broken heart relative to the tryleft heart
  brokenHeart.style.left = tryLeftElementRect.left + 'px';
  brokenHeart.style.top = tryLeftElementRect.top + 'px';

  document.body.appendChild(brokenHeart);

  setTimeout(() => {
    document.body.removeChild(brokenHeart);
  }, 1000);
}


  function handleDrop(draggableAnswer, dropField) {
    if (dropField) {
      const answerValue = draggableAnswer.getAttribute('data-value');
      const dropValue = dropField.getAttribute('data-answer');
      const isCorrect = answerValue === dropValue;

      if (isCorrect) {
        playSound(matchSound);
        dropField.textContent = answerValue;
        dropField.style.background = 'palegreen';
        correctAnswersCount++;

        draggableAnswer.remove();

        if (correctAnswersCount === levels[currentLevel].questions.length) {
          setTimeout(() => {
            answerContainer.innerHTML = '';
            nextLevelButton.style.display = 'block';
          }, 200);
        }
      } else {
        playSound(nonMatchSound);
        draggableAnswer.classList.add('shake');

        setTimeout(() => {
          draggableAnswer.classList.remove('shake');
                       animateBrokenHeart();
          triesRemaining--;

          if (triesRemaining === 0) {
            // Remove all the question options from the answer container
            answerContainer.innerHTML = '';

            // Show the "Try Again" button
            tryAgainButton.style.display = 'block';

            // Hide the hearts
            tryLeftElement.textContent = '';

          } else {
            updateTries();
          }
        }, 500);
      }
    }
  }

  function tryAgain() {
    triesRemaining = 3;
    updateTries();
    tryAgainButton.style.display = 'none';
    nextLevelButton.style.display = 'none';
    currentLevel = 0;
    updateLevelText();
    initLevel();
  }

  tryAgainButton.addEventListener('click', tryAgain);
  nextLevelButton.addEventListener('click', goToNextLevel);

  function updateLevelText() {
    levelTextElement.textContent = `Level - ${currentLevel + 1}`;
  }
    // Function to update the number of tries left
  function updateTries() {
    tryLeftElement.textContent = '❤'.repeat(triesRemaining);
  }

  function goToNextLevel() {
    currentLevel++;
    if (currentLevel < levels.length) {
      // Hide the "Next Level" button
      nextLevelButton.style.display = 'none';
       updateLevelText(); // Update the level text with the current level number
      initLevel();
    } else {
      alert('You completed all levels!');
    }
  }

  nextLevelButton.addEventListener('click', goToNextLevel);
  function dragEnd(event) {
    const answerElement = event.target;
    const dropField = findDropFieldUnderPoint(event.clientX, event.clientY);
    handleDrop(answerElement, dropField);

    // Reset the currently dragged element after handling the drop
    currentDraggedElement = null;
  }

  answerContainer.addEventListener('touchmove', touchMove);
  answerContainer.addEventListener('touchstart', touchStart);
  answerContainer.addEventListener('touchend', touchEnd);

 // Add the dragend event listener to the answer container for mouse devices
  answerContainer.addEventListener('dragend', dragEnd);

  // Initialize the first level and update the level text
  updateLevelText();
  initLevel();
  updateTries();
  function playSound(audio) {
    audio.currentTime = 0; // Reset the audio to the beginning
    audio.play();
  }

});

