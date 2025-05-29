// server/testDecks.ts

import { CardParams } from "../shared/interfaces";
import { blackTemplates } from "./data/cards/blackCards";
import { redTemplates } from "./data/cards/redCards";
import { cardTemplates } from "./data/testCards";
import { CardTemplateMap } from "../shared/interfaces";

const redDeck = Object.values(redTemplates).map(card => ({
    card,
    quantity: 2
}));
const blackDeck = Object.values(blackTemplates).map(card => ({
    card,
    quantity: 2
}));



export const testDecks = [
    redDeck,
    blackDeck
];
