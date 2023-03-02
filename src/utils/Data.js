export const gamesDescription = {
  all5Group30: {
    name: "All 5 Group 30",
    rowName: ["One Pair", "One Number"],
    rules:
      "How to play: Select 2 One Pair & 1 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 2, 8, One No.: 0, Winning No.: 2, 8, 0, 8, 2, as win.",
  },

  all5Group60: {
    name: "All 5 Group 60",
    rowName: ["One Pair", "One Number"],
    rules:
      "How to play: Select 1 One Pair & 3 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 1, One No.: 2, 3, 4, Winning No.: 1, 2, 3, 4, 1, as win.",
  },

  all5Group120: {
    name: "All 5 Group 120",
    rowName: [""],
    rules:
      "How to play: Pick 5 numbers to form 1 bet, the picked numbers match the winning number (in any order) to win. Win Sample：Bet plan: 0, 2, 3, 8, 9, Winning No.: 9, 8, 0, 2, 3, as win.",
  },

  all5StraightJoint: {
    name: "All 5 Straight(Joint)",
    rowName: ["1st", "2nd", "3rd", "4th", "5th"],
    rules:
      "How to play: Select 1 No. from 1st, 2nd, 3rd, 4th, 5th form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1, 2, 3, 4, 5, Winning No.: 1, 2, 3, 4, 5, as win.",
  },

  all5StraightCombo: {
    name: "All 5 Straight(Combo)",
    rowName: ["1st", "2nd", "3rd", "4th", "5th"],
    rules:
      "How to play: Select 1 No. from 1st, 2nd, 3rd, 4th, 5th form all 1~5 combo. Total 5bets. Selected 5th and winning No. same, as win 5th Fixed Place, Selected 4th, 5th and winning No. same, as win 5th Fixed Place, Last2 Straight & so on. Maximum 5 prizes at one time. Win Sample：Bet plan: 1, 2, 3, 4, 5, Winning No.: 1, 2, 3, 4, 5, as win -, -, -, -, 5/-, -, -, 4, 5/-, -, 3, 4, 5/-, 2, 3, 4, 5/1, 2, 3, 4, 5, Each 1 bet.",
  },

  all5Group20: {
    name: "All 5 Group 20",
    rowName: ["Three of a Kind", "One No."],
    rules:
      "How to play: Select 1 Three of a Kind & 2 One No. form 1bet. Selected numbers occur 3x in winning No., as win. Win Sample：Bet plan: Three of a Kind: 8, One No.: 0, 2, Winning No.: 0, 8, 2, 8, 8, as win.",
  },
};

export const rows = [1, 2, 3, 4, 5];

export const all5GamesData = [
  { id: 1, label: "All 5 Straight(Joint)" },
  {
    id: 2,
    label: "All 5 Straight(Combo)",
  },
  {
    id: 3,
    label: "All 5 Group 120",
  },
  {
    id: 4,
    label: "All 5 Group 60",
  },
  {
    id: 5,
    label: "All 5 Group 20",
  },
];

//exporting buttons label globally
export const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const button_selectors = [
  { id: 1, label: "big" },
  { id: 2, label: "small" },
  { id: 3, label: "odd" },
  { id: 4, label: "even" },
  { id: 5, label: "all" },
  { id: 6, label: "clear" },
];

export const prices = [2, 1, 0.2, 0.1, 0.02, 0.01, 0.002, 0.001];

export const gamesGroup = [
  { id: 1, group: "All 5" },
  { id: 2, group: "Span" },
];
