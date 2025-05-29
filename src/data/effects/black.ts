import { StatusCondition } from "../../../shared/Card";
import { Effect, EffectType } from "../../../shared/Effect";
import { ArcheType, Card } from "../../../shared/Card";
import { CardType, Keyword } from "../../../shared/interfaces";
import { handleUnitDeath, targetWithHighestStat, targetWithLowestStat } from "../../game/gameUtils";
import { boostStats, CardEffectMap, dealDamage, dealDirectDamage, dealRandomDamageToOpponentUnit, destroyRandomOppponentUnit, drawCard, inflictDamageAoe, rebornRandom } from "../cardEffects";
import { StatKey } from "../../../shared/interfaces";

const RottingGhoulEffect = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }

        boostStats(card, { attack: 1, defense: 1 });
    }
});
const RottingGhoulEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }
        inflictDamageAoe([player, opponent], card, 1);

    }
});

const ScavengerRatEffect = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card, defender) => {
        if (!card || !defender) {
            return;
        }
        handleUnitDeath(defender, player, opponent, [defender?.instanceId], false);

    }
});
const RottingGrizzlyEffect = new Effect({

    type: EffectType.ON_PASS,
    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }
        dealDamage(card, [player, opponent]);

    }
});

const RottingGrizzlyEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card) => {
        if (!player) {
            return;
        }
        player.lifePoints += 1;

    }
});
const DeliriousMummyEffect = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card) => {
        if (!card) {
            return;
        }
        boostStats(card, { attack: 1, defense: 2 });

    }
});

const PlaguebearerEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense);
    },
    resolver: ([player, opponent], card, target) => {

        if (!target) {
            return
        }

        dealDamage(target, [player, opponent]);
    },

});
const PlaguebearerEffectBt = new Effect({

    type: EffectType.ON_TAP,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense && unit.cost <= 3 && !unit.statusConditions.includes(StatusCondition.CHAINED));
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        }
        target.statusConditions.push(StatusCondition.CHAINED);
    },

});
const LibraryVampireEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card, target) => {

        drawCard(player);
    },

});

const LibraryVampireEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {

        if (!card) {
            return;
        }

        const selector = (unit: Card) => {
            return unit.cost <= 2 && unit.archetype == ArcheType.UNDEAD && unit.instanceId !== card.instanceId;
        };

        rebornRandom(selector, [player, opponent], card);
    },

});

const CryptAssassinEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense && unit.defense <= 2);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return;
        }

        handleUnitDeath(target, player, opponent, [target.instanceId], false);
    },

});

const SlowdeathSeerEffect = new Effect({

    type: EffectType.ON_ALLY_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!player) {
            return;
        }

        player.lifePoints += 1;
        console.log(player.lifePoints, 'seer');
    },

});

const CultServantEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return;
        }

        dealDamage(card, [player, opponent]);
    },

});
const CultServantEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!player) {
            return;
        }

        player.lifePoints += 1;
    },

});

const ThirstySuccubusEffectBt = new Effect({

    type: EffectType.ON_ATTACK,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return;
        }

        boostStats(card, { attack: 2, defense: 1 });
    },

});
const MandragoraEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense && !unit.statusConditions.includes(StatusCondition.CHAINED));
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return;
        }

        target.statusConditions.push(StatusCondition.CHAINED);
    },

});

const MandragoraEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return;
        }

        const selector = (unit: Card) => {
            return Boolean(unit.type == CardType.MINION && unit.defense);
        };

        dealRandomDamageToOpponentUnit(selector, [player, opponent], card, 3);
    },

});

const CursedSpiritEffect = new Effect({

    type: EffectType.ON_KILL,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return;
        }

        const killTarget = targetWithLowestStat(opponent.board, 'defense');
        if (killTarget) {
            handleUnitDeath(killTarget, player, opponent, [killTarget.instanceId], false);
        }
    },

});

const CursedSpiritEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return;
        }

        const chainTarget = targetWithHighestStat(opponent.board, 'cost');
        if (chainTarget) {
            chainTarget.statusConditions.push(StatusCondition.CHAINED);
        }
    },

});

const InfectedGhoulEffect = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return
        };
        inflictDamageAoe([player, opponent], card, 2, false, true);
    },

});

const InfectedGhoulEffectBt = new Effect({

    type: EffectType.ON_DEATH,
    resolver: ([player, opponent], card, target) => {
        if (!opponent) {
            return
        };
        dealDirectDamage(opponent, player, 1);
    },

});

const JudgeOfDamnedSoulsEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.attack && unit.attack <= 3);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        handleUnitDeath(target, player, opponent, [target.instanceId], false);
    },

});

const JudgeOfDamnedSoulsEffectBt = new Effect({

    type: EffectType.ON_ATTACK,

    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return
        };
        boostStats(card, { attack: 2, defense: 2 });
    },

});

const ExtinctionNecromancerEffect = new Effect({

    type: EffectType.ON_PLAY,

    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return
        };
        const selector = (unit: Card) => {
            return unit.cost <= 3 && unit.keywords.includes(Keyword.BONESKIN);
        };

        rebornRandom(selector, [player, opponent], card);
    },

});
const MasterOfDarkThornsEffect = new Effect({

    type: EffectType.AFTER_COMBAT,

    resolver: ([player, opponent], card, target) => {
        if (!opponent) {
            return
        };
        opponent.lifePoints -= 1;
    },

});
const MasterOfDarkThornsEffectBt = new Effect({

    type: EffectType.ON_BATTLE_DEATH,

    resolver: ([player, opponent], card, killer) => {
        if (!killer) {
            return
        };
        handleUnitDeath(killer, player, opponent, [killer.instanceId]);
    },

});

const HighRankAssassinEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.isHorizontal == true);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        handleUnitDeath(target, player, opponent, [target.instanceId]);
    },

});

const HeraldOfTormentEffectBt = new Effect({

    type: EffectType.ON_DEFEND,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return
        };
        boostStats(card, { attack: 0, defense: 2 })
    },

});

const AbyssContaminatorEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.attack);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        boostStats(target, { attack: -3, defense: 0 })
    },

});

const SkeletonDragonEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense && unit.defense <= 3);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        handleUnitDeath(target, player, opponent, [target.instanceId]);
    },

});

const BloodyNecromancerEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card, target) => {
        console.log(player.id, opponent.id, card?.name);
        if (!opponent || !card || !player) {
            return
        };

        const destroyedUnits = inflictDamageAoe([player, opponent], card, 1);
        destroyedUnits.forEach(unit => {
            player.lifePoints += 1;
        })

    },

});
const BloodyNecromancerEffectBt = new Effect({

    type: EffectType.ON_KILL,
    resolver: ([player, opponent], card, target) => {
        if (!card) {
            return
        };

        boostStats(card, { attack: 2, defense: 2 });

    },

});
const DarkPactWitchEffect = new Effect({

    type: EffectType.ON_PLAY,
    resolver: ([player, opponent], card, target) => {

        if (!card || !player || !opponent) {
            return
        };
        const conditon = (unit: Card) => Boolean(unit.type == CardType.MINION && unit.defense);

        const playerUnits = player.board.filter(c => conditon(c));

        playerUnits.filter(u => u.instanceId !== card.instanceId).forEach(unit => {
            handleUnitDeath(unit, player, opponent, [unit.instanceId])
        });


        playerUnits.forEach(unit => {
            destroyRandomOppponentUnit(conditon, [player, opponent], card);
        })

    },

});


const TheSoulReaperEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense);
    },
    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        handleUnitDeath(target, player, opponent, [target.instanceId]);
    },

});
const TheSoulReaperEffectBt = new Effect({

    type: EffectType.ON_PASS,

    resolver: ([player, opponent], card, target) => {
        if (!player) {
            return
        };
        player.lifePoints += 1;
    },

});
const ElixirOfLongLifeEffect = new Effect({

    type: EffectType.ON_PLAY,

    resolver: ([player, opponent], card, target) => {
        if (!player) {
            return
        };
        drawCard(player, 2);
    },



});
const TouchOfDeathEffect = new Effect({

    type: EffectType.ON_PLAY,
    targets: true,
    validTargets: ([player, opponent], card) => {
        if (!opponent) {
            return [];
        }
        return opponent.board.filter(unit => unit.type == CardType.MINION && unit.defense);
    },

    resolver: ([player, opponent], card, target) => {
        if (!target) {
            return
        };
        dealDamage(target, [player, opponent], 2);
    },

});


export const blackEffects: Record<string, CardEffectMap> = {
    'Rotting Ghoul': {
        default: [RottingGhoulEffect],
        bt: [RottingGhoulEffectBt]
    },
    'Scavenger Rat': {
        default: [ScavengerRatEffect]
    },
    'Rotting Grizzly': {
        default: [RottingGrizzlyEffect],
        bt: [RottingGrizzlyEffectBt]
    },
    'Delirious Mummy': {
        bt: [DeliriousMummyEffect],
    },
    'Plaguebearer': {
        default: [PlaguebearerEffect],
        bt: [PlaguebearerEffectBt]
    },
    'Library Vampire': {
        default: [LibraryVampireEffect],
        bt: [LibraryVampireEffectBt]
    },
    'Crypt Assassin': {
        default: [CryptAssassinEffect],
    },
    'Slowdeath Seer': {
        default: [SlowdeathSeerEffect],
    },
    'Cult Servant': {
        default: [CultServantEffect],
        bt: [CultServantEffectBt],
    },
    'Thirsty Succubus': {
        bt: [ThirstySuccubusEffectBt],
    },
    'Mandragora': {
        default: [MandragoraEffect],
        bt: [MandragoraEffectBt],
    },
    'Cursed Spirit': {
        default: [CursedSpiritEffect],
        bt: [CursedSpiritEffectBt],
    },
    'Infected Ghoul': {
        default: [InfectedGhoulEffect],
        bt: [InfectedGhoulEffectBt],
    },
    'Judge of Damned Souls': {
        default: [JudgeOfDamnedSoulsEffect],
        bt: [JudgeOfDamnedSoulsEffectBt],
    },
    'Extinction Necromancer': {
        default: [ExtinctionNecromancerEffect],
    },
    'Master of Dark Thorns': {
        default: [MasterOfDarkThornsEffect],
        bt: [MasterOfDarkThornsEffectBt],
    },
    'High-Rank Assassin': {
        default: [HighRankAssassinEffect],
    },
    'Herald of Torment': {
        bt: [HeraldOfTormentEffectBt],
    },
    'Abyss Contaminator': {
        default: [AbyssContaminatorEffect]
    },
    'Skeleton Dragon': {
        default: [SkeletonDragonEffect]
    },
    'Bloody Necromancer': {
        default: [BloodyNecromancerEffect],
        bt: [BloodyNecromancerEffectBt]
    },
    'Witch of the Dark Pact': {
        default: [DarkPactWitchEffect],
    },
    'The Soul Reaper': {
        default: [TheSoulReaperEffect],
        bt: [TheSoulReaperEffectBt]
    },
    'Elixir of Long Life': {
        default: [ElixirOfLongLifeEffect]
    },
    'Touch of Death': {
        default: [TouchOfDeathEffect]
    },


};
