export const gamesDescription = {
  all5: {
    Group30: {
      name: "All 5 Group 30",
      rowName: ["One Pair", "One Number"],
      rules:
        "How to play: Select 2 One Pair & 1 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 2, 8, One No.: 0, Winning No.: 2, 8, 0, 8, 2, as win.",
      columns: 10,
    },

    Group60: {
      name: "All 5 Group 60",
      rowName: ["One Pair", "One Number"],
      rules:
        "How to play: Select 1 One Pair & 3 One No. form 1bet. Winning No. include One No., One Pair occur 2x, as win. Win Sample：Bet plan: One Pair: 1, One No.: 2, 3, 4, Winning No.: 1, 2, 3, 4, 1, as win.",
      columns: 10,
    },

    Group120: {
      name: "All 5 Group 120",
      rowName: [""],
      rules:
        "How to play: Pick 5 numbers to form 1 bet, the picked numbers match the winning number (in any order) to win. Win Sample：Bet plan: 0, 2, 3, 8, 9, Winning No.: 9, 8, 0, 2, 3, as win.",
      columns: 10,
    },

    StraightJoint: {
      name: "All 5 Straight(Joint)",
      rowName: ["1st", "2nd", "3rd", "4th", "5th"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd, 4th, 5th form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1, 2, 3, 4, 5, Winning No.: 1, 2, 3, 4, 5, as win.",
      columns: 10,
    },

    StraightCombo: {
      name: "All 5 Straight(Combo)",
      rowName: ["1st", "2nd", "3rd", "4th", "5th"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd, 4th, 5th form all 1~5 combo. Total 5bets. Selected 5th and winning No. same, as win 5th Fixed Place, Selected 4th, 5th and winning No. same, as win 5th Fixed Place, Last2 Straight & so on. Maximum 5 prizes at one time. Win Sample：Bet plan: 1, 2, 3, 4, 5, Winning No.: 1, 2, 3, 4, 5, as win -, -, -, -, 5/-, -, -, 4, 5/-, -, 3, 4, 5/-, 2, 3, 4, 5/1, 2, 3, 4, 5, Each 1 bet.",
      columns: 10,
    },

    Group20: {
      name: "All 5 Group 20",
      rowName: ["Three of a Kind", "One No."],
      rules:
        "How to play: Select 1 Three of a Kind & 2 One No. form 1bet. Selected numbers occur 3x in winning No., as win. Win Sample：Bet plan: Three of a Kind: 8, One No.: 0, 2, Winning No.: 0, 8, 2, 8, 8, as win.",
      columns: 10,
    },
  },
  first3: {
    StraightJoint: {
      name: "First 3 Straight(Joint)",
      rowName: ["1st", "2nd", "3rd"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form 1bet. Selected and 1st, 2nd, 3rd, 5th winning No. same & in order, as win. Win Sample：Bet plan: 3,4,5;Winning No.: 3,4,5,*,* as win.",
      columns: 10,
    },
    StraightCombo: {
      name: "First Straight(Combo)",
      rowName: ["1st", "2nd", "3rd"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form all 1~3 combo. Total 3bets. Selected 3rd and winning No. same, as win 3rd Fixed Place; Selected 2nd, 3rd winning No. same, as win 3rd Fixed Place, 2nd/3rd Straight & so on. Maximum 3 prizes at one time. Win Sample：Bet plan: 1, 2, 3; Winning No.: 1, 2, 3, *, *, as win -, -, 3, *, */-, 2, 3, *, */1, 2, 3, *, *; Each 1 bet.",
      columns: 10,
    },
    SumOfFirst3: {
      name: "Sum of first 3",
      rowName: [""],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form all 1~3 combo. Total 3bets. Selected 3rd and winning No. same, as win 3rd Fixed Place; Selected 2nd, 3rd winning No. same, as win 3rd Fixed Place, 2nd/3rd Straight & so on. Maximum 3 prizes at one time. Win Sample：Bet plan: 1, 2, 3; Winning No.: 1, 2, 3, *, *, as win -, -, 3, *, */-, 2, 3, *, */1, 2, 3, *, *; Each 1 bet. ",
      columns: 28,
    },
    SpanOfFirst3: {
      name: "Span of first 3",
      rowName: [""],
      rules:
        "How to play: Select 1 value and max & min difference of 1st, 2nd, 3rd winning No. same, as win. Win Sample：Bet plan: 3;Winning No.: 1,2,4,*,* as win.",
      columns: 10,
    },
    First3Group3: {
      name: "First 3 Group 3",
      rowName: [""],
      rules:
        "How to play: Pick 2 numbers to form 2 bets, any number appears 2 times on the 1st , 2nd and 3rd of the winning number, and the other number appears 1 time (in any order) to win.Win Sample：Bet plan: 1,2;Winning No.: 1,2,2,*,* as win.",
      columns: 10,
    },
    First3Group6: {
      name: "First 3 Group 6",
      rowName: [""],
      rules:
        "How to play: Pick 2 numbers to form 2 bets, any number appears 2 times on the 1st , 2nd and 3rd of the winning number, and the other number appears 1 time (in any order) to win.Win Sample：Bet plan: 1,2;Winning No.: 1,2,2,*,* as win.",
      columns: 10,
    },
    First3SumOfGroup: {
      name: "First 3 sum of Group",
      rowName: [""],
      rules:
        "How to play: Select 1 value. Selected value equal to sum of 1st, 2nd, 3rd winning No. (Exclude TOAK); 1st, 2nd, 3rd have Pair, as win First3 Group3 Sum. Or else One No., as win First3 Group3 Sum. Win Sample：Bet plan: 6; Winning No. A: 3, 3, 0, *, *, as win First3 Sum of Group3. Winning No. B: 1, 2, 3, *, *, as win First3 Sum of Group6.",
      columns: 27,
    },
    First3FixedDigit: {
      name: "First 3 Fixed 3",
      rowName: [""],
      rules:
        "How to play: Select 1 value. Selected value equal to sum of 1st, 2nd, 3rd winning No. (Exclude TOAK); 1st, 2nd, 3rd have Pair, as win First3 Group3 Sum. Or else One No., as win First3 Group3 Sum. Win Sample：Bet plan: 6; Winning No. A: 3, 3, 0, *, *, as win First3 Sum of Group3. Winning No. B: 1, 2, 3, *, *, as win First3 Sum of Group6.",
      columns: 10,
    },
    First3sumOfTails: {
      name: "First 3 Sum of Tails",
      rowName: [""],
      rules:
        "How to play: Select 1 value and sum of 1st, 2nd, 3rd tails same, as win. Win Sample：Bet plan: 3;Winning No.: 0,2,1,*,* as win.",
      columns: 10,
    },
  },
  mid3: {
    StraightJoint: {
      name: "First 3 Straight(Joint)",
      rowName: ["2nd", "3rd", "4th"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form 1bet. Selected and 1st, 2nd, 3rd, 5th winning No. same & in order, as win. Win Sample：Bet plan: 3,4,5;Winning No.: 3,4,5,*,* as win",
      columns: 10,
    },
    StraightCombo: {
      name: "Mid 3 Straight(Combo)",
      rowName: ["2nd", "3rd", "4th"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form all 1~3 combo. Total 3bets. Selected 3rd and winning No. same, as win 3rd Fixed Place; Selected 2nd, 3rd winning No. same, as win 3rd Fixed Place, 2nd/3rd Straight & so on. Maximum 3 prizes at one time. Win Sample：Bet plan: 1, 2, 3; Winning No.: 1, 2, 3, *, *, as win -, -, 3, *, */-, 2, 3, *, */1, 2, 3, *, *; Each 1 bet.",
      columns: 10,
    },
    SumOfMid3: {
      name: "Sum of Mid 3",
      rowName: [""],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form all 1~3 combo. Total 3bets. Selected 3rd and winning No. same, as win 3rd Fixed Place; Selected 2nd, 3rd winning No. same, as win 3rd Fixed Place, 2nd/3rd Straight & so on. Maximum 3 prizes at one time. Win Sample：Bet plan: 1, 2, 3; Winning No.: 1, 2, 3, *, *, as win -, -, 3, *, */-, 2, 3, *, */1, 2, 3, *, *; Each 1 bet. ",
      columns: 28,
    },
    SpanOfMid3: {
      name: "Span of Mid 3",
      rowName: [""],
      rules:
        "How to play: Select 1 value and max & min difference of 1st, 2nd, 3rd winning No. same, as win. Win Sample：Bet plan: 3;Winning No.: 1,2,4,*,* as win.",
      columns: 10,
    },
    Mid3Group3: {
      name: "Mid 3 Group 3",
      rowName: [""],
      rules:
        "How to play: Pick 2 numbers to form 2 bets, any number appears twice on the 2nd, 3rd , and 4th of the winning numbers, and 1 other number appears once (in any order) to win. Win Sample：Bet plan: 1,2;Winning No.: *,1,2,2,* as win.",
      columns: 10,
    },
    Mid3Group6: {
      name: "Mid 3 Group 6",
      rowName: [""],
      rules:
        " How to play: Pick 3 numbers to form 1 bet. The picked number match the 2nd, 3rd , and 4th of the winning numbers, and 1 other number appears once (in any order) to win. Win Sample：Bet plan: 1,2,3;Winning No.: *,1,3,2,* as win.",
      columns: 10,
    },
    Mid3SumOfGroup: {
      name: "Mid 3 sum of Group",
      rowName: [""],
      rules:
        "How to play: Select 1 value. Selected value equal to sum of 2nd, 3rd, 4th winning No. (Exclude TOAK); 2nd, 3rd, 4th have Pair, as win Mid3 Group3 Sum. Or else One No., as win Mid3 Group6 Sum. Win Sample：Bet plan: 6; Winning No. A: *, 3, 3, 0, *, as win Mid3 Sum of Group3. Winning No. B: 1, 2, 3, *, *, as win Mid3 Sum of Group6.",
      columns: 27,
    },
    FixedDigit: {
      name: "Mid 3 Fixed 3",
      rowName: [""],
      rules:
        "How to play: Select 1 No. Selected and any of 2nd, 3rd, 4th winning No. same (Exclude TOAK); 2nd, 3rd, 4th have Pair, as win Mid3 Fixed Digit Group3. Or else One No., as win Mid3 Fixed Digit Group6. Win Sample：Bet plan: 3; Winning No. A: *, 1, 3, 3, *, as win Mid3 Fixed Digit Group3. Winning No. B: *, 1, 2, 3, *, as win Mid3 Fixed Digit Group6.",
      columns: 10,
    },
    SumOfTails: {
      name: "Mid 3 Sum of Tails",
      rowName: [""],
      rules:
        "How to play: Select 1 value & sum of 2nd, 3rd, 4th tails same, as win. Win Sample：Bet plan: 3;Winning No.: *,0,2,1,* as win.",
      columns: 10,
    },
  },
  pick2: {
    Joint: {
      name: "Pick 2(Joint)",
      rowName: ["1st", "2nd", "3rd", "4th", "5th"],
      rules:
        "How to play: Select 1 No. from 1st, 2nd, 3rd form 1bet. Selected and 1st, 2nd, 3rd, 5th winning No. same & in order, as win. Win Sample：Bet plan: 3,4,5;Winning No.: 3,4,5,*,* as win.",
      columns: 10,
    },
    SumOf2: {
      name: "Sum of 2",
      rowName: [""],
      rules:
        " How to play: Select 2 places from 1st, 2nd, 3rd, 4th, 5th & select 1 No. form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1,2,-,-,-;Winning No.: 1,2,*,*,* as win.",
      columns: 19,
    },
    GroupJoint: {
      name: "Group(Joint)",
      rowName: [""],
      rules:
        "How to play: Select 2 places from 1st, 2nd, 3rd, 4th, 5th & select 1 No. form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1,2,-,-,-;Winning No.: 1,2,*,*,* as win.",
      columns: 10,
    },
    TwoGroupSum: {
      name: "2 Group Sum",
      rowName: [""],
      rules:
        "How to play: Select 2 places from 1st, 2nd, 3rd, 4th, 5th & select 1 No. form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1,2,-,-,-;Winning No.: 1,2,*,*,* as win.",
      columns: 10,
    },
    FixedDigit: {
      name: "Pick 2 Fixed Digit",
      rowName: [""],
      rules:
        "How to play: Select 2 places from 1st, 2nd, 3rd, 4th, 5th & select 1 No. form 1bet. Selected and winning No. same & in order, as win. Win Sample：Bet plan: 1,2,-,-,-;Winning No.: 1,2,*,*,* as win.",
      columns: 10,
    },
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

export const first3GamesData = [
  { id: 1, label: "First 3 Straight(Joint)" },
  {
    id: 2,
    label: "First 3 Straight(Combo)",
  },
  {
    id: 3,
    label: "Sum of first 3",
  },
  {
    id: 4,
    label: "Span of first 3",
  },
  {
    id: 5,
    label: "First 3 Group 3",
  },
  {
    id: 6,
    label: "First 3 Group 6",
  },
  {
    id: 7,
    label: "First 3 sum of Group",
  },
  {
    id: 8,
    label: "First 3 Fixed Digit",
  },
  {
    id: 9,
    label: "First 3 Sum of Tails",
  },
];

export const mid3GamesData = [
  { id: 1, label: "mid 3 straight (joint)" },
  {
    id: 2,
    label: "Mid 3 Straight(Combo)",
  },
  {
    id: 3,
    label: "Sum of mid 3",
  },
  {
    id: 4,
    label: "Span of mid 3",
  },
  {
    id: 5,
    label: "Mid 3 Group 3",
  },
  {
    id: 6,
    label: "Mid 3 Group 6",
  },
  {
    id: 7,
    label: "Mid 3 sum of Group",
  },
  {
    id: 8,
    label: "Mid 3 Fixed Digit",
  },
  {
    id: 9,
    label: "Mid 3 Sum of Tails",
  },
];

export const pick2Data = [
  { id: 1, label: "Pick 2(Joint)" },
  { id: 2, label: "Sum of 2" },
  { id: 3, label: "Pick 2 Group(Joint)" },
  { id: 4, label: "2 Group Sum" },
  { id: 5, label: "Pick 2 Fixed Digit" },
];

//exporting buttons label globally
export const buttons = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27,
];

export const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export const long_labels = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27,
];

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
  { id: 2, group: "First 3" },
  { id: 3, group: "Mid 3" },
  { id: 4, group: "Pick 2" },
];
