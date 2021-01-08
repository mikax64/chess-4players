const listPieces = [
  "rook_1",
  "bishop_1",
  "king_1",
  "rook_2",
  "knight_1",
  "pawn_1",
  "pawn_2",
  "knight_2",
];
const playersNumber = ["one", "two", "three", "four"];

export const pieceName = [];

playersNumber.map((nb) => {
  listPieces.map((piece) => {
    pieceName.push(`${piece}_${nb}`);
  });
});

export const squarePieceInit = [
  "d1",
  "e1",
  "f1",
  "g1",
  "d2",
  "e2",
  "f2",
  "g2",

  "a7",
  "a6",
  "a5",
  "a4",
  "b7",
  "b6",
  "b5",
  "b4",

  "g10",
  "f10",
  "e10",
  "d10",
  "g9",
  "f9",
  "e9",
  "d9",

  "j4",
  "j5",
  "j6",
  "j7",
  "i4",
  "i5",
  "i6",
  "i7",
];
