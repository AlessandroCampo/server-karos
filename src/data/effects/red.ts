import { drawCard, dealDirectDamage, boostStats, rebornRandom, dealDamage, playCardToBoard, inflictDamageAoe, CardEffectMap, cardCanAttackAgain } from "../cardEffects";
import { Effect } from "../../../shared/Effect";
import { EffectType } from "../../../shared/Effect";
import { controlsAnotherMinion, controlsMinionWithNameFragment, isBt, isCardTapped } from "../../../shared/conditions";
import { CardType, Keyword } from "../../../shared/interfaces";
import { Card } from "../../../shared/Card";
import { handleUnitDeath, targetWithHighestStat } from "../../game/gameUtils";
import { assert } from "console";

const SlaveGoblinEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent]) => {

        dealDirectDamage(opponent, player, 1);
    }
});
const SlaveGoblinBtEffect = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent]) => {

        dealDirectDamage(opponent, player, 1);
    }
});

//DEAL 1 to a random enemy unit
const fireBallEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent]) => {

        dealDirectDamage(opponent, player, 2);
    }
});

const GreedyGoblinEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent]) => {

        drawCard(player, 1);
    }
});
const GreedyGoblinEffectBt = new Effect({

    type: EffectType.ON_PLAY,
    condition: (playerStates, card) => {

        return playerStates ? isBt(playerStates) : false;

    },
    resolver: ([player, opponent], card) => {
        if (!card) return;
        card.keywords = [...card.keywords, Keyword.RUSH];
        return boostStats(card, { attack: 1, defense: 0 })

    }
});

const DrunkardGoblinEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card) => {
        drawCard(player);
    },
    condition: (playerStates, card) => {
        return playerStates ? isBt(playerStates) : false;
    },
});
const DrunkardGoblinEffect = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card) => {
        dealDirectDamage(opponent, player, 1);
    },
    condition: (playerStates, card) => {
        if (!card?.defense || card?.defense >= 0) return true;
        return false;
    },
});

const ExploringGoblinEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card) => {
        if (card) {
            boostStats(card, { attack: 1, defense: 1 });
        }
    },
    condition: (playerStates, card) => {
        if (!playerStates || !card) return false;
        const [player] = playerStates;

        return controlsMinionWithNameFragment(player.board, 'Goblin', card);
    }

});
const ExploringGoblinEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card) => {
        if (!player || !card) return;
        const selector = (unit: Card) => {
            return unit.cost == 1 && unit.name.includes('Goblin') && unit.instanceId !== card.instanceId;
        };

        rebornRandom(selector, [player, opponent], card);
    },
    condition: (playerStates, card) => {
        return playerStates ? isBt(playerStates) : false;
    },

});
const ForgeInitiateEffect = new Effect({

    type: EffectType.ON_TAP,
    targets: true,
    validTargets: ([player, opponent], card) => {
        return player.board.filter(unit => unit.type == CardType.MINION && unit.instanceId !== card?.instanceId);
    },
    resolver: ([player, opponent], card, target) => {

        if (target) {
            boostStats(target, { attack: 2, defense: 1 });
        }
    },
    condition: (playerStates, card) => {

        if (!playerStates || !card) return false;
        const [player] = playerStates;
        if (!isCardTapped(card)) return false;
        return controlsAnotherMinion(player.board, card);
    }

});
const GoblinRiderEffect = new Effect({

    type: EffectType.ON_ATTACK,

    resolver: ([player, opponent], card, target) => {

        if (card) {
            boostStats(card, { attack: 1, defense: 1 });
        }
    },

});
const GoblinRiderEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    condition: (playerStates, card) => {
        return playerStates ? isBt(playerStates) : false;
    },
    resolver: ([player, opponent], card, target) => {

        if (opponent) {
            dealDirectDamage(opponent, player, 2);
        }
    },

});

const RipperGoblinEffectBt = new Effect({

    type: EffectType.ON_KILL,
    resolver: ([player, opponent], card) => {
        if (!card) return;
        boostStats(card, { attack: 2, defense: 2 });
    },
    condition: (playerStates, card) => {
        return playerStates ? isBt(playerStates) : false;
    },

});
const BlightflameCultistEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card) => {
        if (!player || !opponent) return;
        dealDirectDamage(opponent, player, 1);
        dealDirectDamage(player, opponent, 1);
    },

});

const MindlessFirebelcherEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        return opponent.board.filter(unit => unit.type == CardType.MINION);
    },
    resolver: ([player, opponent], card, target) => {

        if (target) {
            dealDamage(target, [player, opponent], 2);
        }
    },
});

const RecruiterGoblinEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        return player.hand.filter(c => {
            return c.cost <= 3 && c.name.toLocaleLowerCase().includes("goblin");
        });
    },
    resolver: ([player, opponent], card, target) => {

        if (target) {
            playCardToBoard(target, player, opponent);
        }

    },
});


const SoulCollectorEffect = new Effect({

    type: EffectType.ON_ALLY_DEATH,
    resolver: ([player, opponent], card) => {
        if (!card) return;
        boostStats(card, { attack: 1, defense: 1 });
    },

});

const RecruiterGoblinEffectBt = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card) => {
        drawCard(player);
    },

});

const ScorchlingWhelpEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        return opponent.board.filter(c => {
            return c.defense && c.type == CardType.MINION && c.defense <= 2;
        });
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return;
        }
        handleUnitDeath(target, player, opponent, [target.instanceId], false);
    },

});

const SupremeSpearGoblinEffect = new Effect({

    type: EffectType.ON_KILL,
    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }
        boostStats(card, { attack: 2, defense: 1 });
    },

});

const SupremeSpearGoblinEffectBt = new Effect({

    type: EffectType.ON_BATTLE_DEATH,

    resolver: ([player, opponent], card) => {

        const target = targetWithHighestStat(opponent.board, 'defense');
        if (target) {
            handleUnitDeath(target, player, opponent, [target.instanceId], false);
        }

    },

});

const GoblinKingOfTheHordeEffect = new Effect({

    type: EffectType.ON_PLAY,

    resolver: ([player, opponent], card) => {

        if (!card) {
            return;
        }

        for (let i = 0; i < 2; i++) {
            const selector = (unit: Card) => {
                return unit.cost <= 3 && unit.name.includes('Goblin') && unit.instanceId !== card.instanceId;
            };

            rebornRandom(selector, [player, opponent], card);
        }

    },
});

const GoblinKingOfTheHordeEffectBt = new Effect({

    type: EffectType.ON_KILL,

    resolver: ([player, opponent], card) => {

        if (!card) {
            return;
        }

        cardCanAttackAgain(card);


    },
});

const AvatarOfScarletRuinEffect = new Effect({

    type: EffectType.ON_PLAY,

    resolver: ([player, opponent], card) => {

        if (!player) {
            return;
        }

        player.lifePoints -= 1;

    },
});

const AvatarOfScarletRuinEffectBt = new Effect({

    type: EffectType.ON_KILL,

    resolver: ([player, opponent], card) => {

        if (!card) {
            return;
        }

        cardCanAttackAgain(card);


    },
});

const AvatarOfScarletRuinEffectSecond = new Effect({

    type: EffectType.ON_ATTACK,

    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }
        inflictDamageAoe([player, opponent], card, 2, false, true);

    },
});
const CatapultEffect = new Effect({

    type: EffectType.ON_PLAY,

    targets: true,
    validTargets: ([player, opponent], card) => {
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense);
    },
    resolver: ([player, opponent], card, target) => {

        if (target) {
            dealDamage(target, [player, opponent], 2);
        }
    },
});

const GoblinMassGraveEffect = new Effect({

    type: EffectType.ON_ALLY_DEATH,
    condition: (playerStates, card, target) => {

        if (!target) {
            return false;
        }

        return target.cost == 1 && target.type == CardType.MINION;
    },

    resolver: ([player, opponent], card) => {

        drawCard(player);

    },
});


export default { fireBallEffect, GreedyGoblinEffect, DrunkardGoblinEffect, ExploringGoblinEffect, ForgeInitiateEffect, SlaveGoblinEffect, GoblinRiderEffect, SlaveGoblinBtEffect, GreedyGoblinEffectBt, DrunkardGoblinEffectBt, ExploringGoblinEffectBt, RipperGoblinEffectBt, GoblinRiderEffectBt, BlightflameCultistEffect, MindlessFirebelcherEffect, SoulCollectorEffect, RecruiterGoblinEffect, RecruiterGoblinEffectBt, SupremeSpearGoblinEffect, ScorchlingWhelpEffect, SupremeSpearGoblinEffectBt, GoblinKingOfTheHordeEffectBt, GoblinKingOfTheHordeEffect, AvatarOfScarletRuinEffect, AvatarOfScarletRuinEffectSecond, CatapultEffect, GoblinMassGraveEffect }

export const redEffects: Record<string, CardEffectMap> = {
    'Goblin Slave': {
        default: [SlaveGoblinEffect],
        bt: [SlaveGoblinBtEffect]
    },
    'Fireball': {
        default: [fireBallEffect],
    },
    'Goblin Rider': {
        default: [GoblinRiderEffect],
        bt: [GoblinRiderEffectBt]
    },
    'Greedy Goblin': {
        default: [GreedyGoblinEffect],
        bt: [GreedyGoblinEffectBt],
    },
    'DrunkenGoblin': {
        default: [DrunkardGoblinEffect],
        bt: [DrunkardGoblinEffectBt]
    },
    'Goblin Scout': {
        default: [ExploringGoblinEffect],
        bt: [ExploringGoblinEffectBt]
    },
    'Forge Initiate': {
        default: [ForgeInitiateEffect],
    },
    'Blightflame Cultist': {
        default: [BlightflameCultistEffect],
    },
    'Mindless Firebelcher': {
        default: [MindlessFirebelcherEffect],
    },
    'Soul Collector': {
        default: [SoulCollectorEffect],
    },
    'Recruiter Goblin': {
        default: [RecruiterGoblinEffect],
        bt: [RecruiterGoblinEffectBt]
    },
    'Scorchling Whelp': {
        default: [ScorchlingWhelpEffect],
    },
    'Supreme Spear-Goblin': {
        default: [SupremeSpearGoblinEffect],
        bt: [SupremeSpearGoblinEffectBt]
    },
    'Goblin King of the Horde': {
        default: [GoblinKingOfTheHordeEffect],
        bt: [GoblinKingOfTheHordeEffectBt]
    },
    'Avatar of Scarlet Ruin': {
        default: [AvatarOfScarletRuinEffect, AvatarOfScarletRuinEffectSecond],
        bt: [AvatarOfScarletRuinEffectBt]
    },
    'Goblin Mass Grave': {
        default: [GoblinMassGraveEffect],
    },
    'Catapult': {
        default: [CatapultEffect],
    },
};
