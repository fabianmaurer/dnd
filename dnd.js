let spellList = [
    {
        name: 'Armor Enhancement, Lesser',
        variations: [
            {
                name: 'Glamered',
                effect: 'Appears like normal clothing'
            },
            {
                name: 'Light Fortification',
                effect: '25% Crit Avoidance'
            },
            {
                name: 'Slick',
                effect: '+5 Escape Artist'
            },
            {
                name: 'Shadow',
                effect: '+5 Hide'
            },
            {
                name: 'Silent Moves',
                effect: '+5 Move Silently'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Energy Alteration',
        variations: [
            {
                name: '',
                effect: 'Item uses different energy type'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Enhancement Alteration',
        variations: [
            {
                name: 'Weapon',
                effect: 'Convert some Enhancement Bonus to AC'
            },
            {
                name: 'Shield',
                effect: 'Convert some Enhancement Bonus to Shield Bash'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Weapon',
            'Shield'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['S']
    },
    {
        name: 'Identify',
        variations: [
            {
                name: '',
                effect: 'Determine Properties of a Magic Item'
            }
        ],
        castTime: '1h',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['V', 'S', 'M']
    },
    {
        name: 'Inflict Light Damage',
        variations: [
            {
                name: '',
                effect: 'Deals 1d8+lvl(5) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S']
    },
    {
        name: 'Light',
        variations: [
            {
                name: '',
                effect: 'Shines like a Torch'
            }
        ],
        castTime: '1sa',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['V', 'M']
    },
    {
        name: 'Magic Stone',
        variations: [
            {
                name: '',
                effect: '3 Stones gain +1 Attack, 1d6+1 dmg'
            }
        ],
        castTime: '1sa',
        duration: '30min',
        range: 'Touch',
        target: [
            'Pebbles'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S', 'DF']
    },
    {
        name: 'Magic Vestment',
        variations: [
            {
                name: '',
                effect: '+0.25/lvl(20) Enhancement Bonus'
            }
        ],
        castTime: '1sa',
        duration: '1h/lvl',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S', 'DF']
    },
    {
        name: 'Magic Weapon',
        variations: [
            {
                name: '',
                effect: '+1 Enhancement Bonus'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Weapon'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S', 'DF']
    },
    {
        name: 'Repair Light Damage',
        variations: [
            {
                name: '',
                effect: 'Cures 1d8+lvl(5) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['V', 'S']
    },
    {
        name: 'Resistance Item',
        variations: [
            {
                name: '',
                effect: '+1 Saving Throws'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Shield of Faith',
        variations: [
            {
                name: '',
                effect: '+2+0.167/lvl(18) deflection'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S', 'M']
    },
    {
        name: 'Skill Enhancement',
        variations: [
            {
                name: '',
                effect: '+2+0.5/lvl on specific Skill'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Spell Storing Item',
        variations: [
            {
                name: '',
                effect: 'Stores Spell of level 0.5/lvl(8) in an item'
            }
        ],
        castTime: '1min',
        duration: '1h/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'XP']
    },
    {
        name: 'Weapon Augmentation, Personal',
        variations: [
            {
                name: 'Bane',
                effect: '+2 Enhancement Bonus, +2d6 dmg against designated foe'
            },
            {
                name: 'Defending',
                effect: 'Convert some Enhancement Bonus to AC'
            },
            {
                name: 'Flaming',
                effect: '+1d6 Fire dmg'
            },
            {
                name: 'Frost',
                effect: '+1d6 Cold dmg'
            },
            {
                name: 'Shock',
                effect: '+1d6 Electricity dmg'
            },
            {
                name: 'Ghost Shock',
                effect: 'Normal Damage against Incorporeal Creatures'
            },
            {
                name: 'Keen',
                effect: 'Doubles Crit Range (only Piercing and Slashing)'
            },
            {
                name: 'Ki Focus',
                effect: 'Allows Use of Ki Attacks through Weapon'
            },
            {
                name: 'Merciful',
                effect: '+1d6 dmg and nonlethal'
            },
            {
                name: 'Mighty Cleaving',
                effect: 'Allows +1 Cleave Attempt'
            },
            {
                name: 'Spell Storing',
                effect: 'Store Spell of max level 3'
            },
            {
                name: 'Throwing',
                effect: '+10 Range and can be thrown'
            },
            {
                name: 'Thundering',
                effect: '+1d8/(critdmg-1) sonic damage on crit. Can deafen permanently (DC14 Fortitude)'
            },
            {
                name: 'Vicious',
                effect: '+2d6 dmg to enemy +1d6 dmg to wielder'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Weapon'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Ablative Armor',
        variations: [
            {
                name: '',
                effect: '+4+lvl(10) one-time damage reduction'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Indisputable Possession',
        variations: [
            {
                name: '',
                effect: 'Call back item up to lvl minutes after it left your possession. Creature can make will save to retain grasp.'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['V', 'S']
    },
    {
        name: 'Metamagic Scroll',
        variations: [
            {
                name: '',
                effect: 'Apply metamagic feat (max +2) to scroll or minor schema'
            }
        ],
        castTime: '1rd',
        duration: '1rd/lvl',
        range: 'Touch',
        target: [
            'Scroll'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 1,
        component: ['V', 'S']
    },
    {
        name: 'Pending Potion',
        variations: [
            {
                name: '',
                effect: 'Potion or Oil can be triggered with swift action'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Potion'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Align Weapon',
        variations: [
            {
                name: '',
                effect: 'Becomes good/evil/lawful/chaotic'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Weapon'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Armor Enhancement',
        variations: [
            {
                name: 'Acid / Cold / Electricity / Fire / Sonic Resistance',
                effect: '+10 damage reduction of that type'
            },
            {
                name: 'Ghost Touch',
                effect: 'Armor works against incorporeal creatures'
            },
            {
                name: 'Invulnerability',
                effect: '+5/magic damage reduction'
            },
            {
                name: 'Fortification, moderate',
                effect: '75% Crit Avoidance'
            },
            {
                name: 'Spell Resistance (15)',
                effect: 'Grants Spell Resistance 15'
            },
            {
                name: 'Wild',
                effect: 'Armor bonuses preserved while in wild shape'
            },
            {
                name: 'Slick, greater',
                effect: '+15 Escape Artist'
            },
            {
                name: 'Shadow, greater',
                effect: '+15 Hide'
            },
            {
                name: 'Silent Moves, greater',
                effect: '+15 Move Silently'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 2,
        component: ['S', 'M']
    },
    {
        name: 'Bear\'s Endurance',
        variations: [
            {
                name: '',
                effect: '+4 Constitution'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Bull\'s Strength',
        variations: [
            {
                name: '',
                effect: '+4 Strength'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Cat\'s Grace',
        variations: [
            {
                name: '',
                effect: '+4 Dexterity'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Chill Metal',
        variations: [
            {
                name: '',
                effect: 'Target that wears or holds metal takes gradual cold damage'
            }
        ],
        castTime: '1sa',
        duration: '7rd',
        range: '25ft+2.5ft/lvl',
        target: [
            'Armor',
            'Item'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Eagle\'s Splendor',
        variations: [
            {
                name: '',
                effect: '+4 Charisma'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Fox\'s Cunning',
        variations: [
            {
                name: '',
                effect: '+4 Intelligence'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Owl\'s Wisdom',
        variations: [
            {
                name: '',
                effect: '+4 Wisdom'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Creature'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Heat Metal',
        variations: [
            {
                name: '',
                effect: 'Target that wears or holds metal takes gradual fire damage'
            }
        ],
        castTime: '1sa',
        duration: '7rd',
        range: '25ft+2.5ft/lvl',
        target: [
            'Armor',
            'Item'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S', 'DF']
    },
    {
        name: 'Inflict Moderate Damage',
        variations: [
            {
                name: '',
                effect: 'Deals 2d8+lvl(10) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S']
    },
    {
        name: 'Repair Moderate Damage',
        variations: [
            {
                name: '',
                effect: 'Cures 2d8+lvl(10) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 2,
        component: ['V', 'S']
    },
    {
        name: 'Toughen Construct',
        variations: [
            {
                name: '',
                effect: 'Grants +1+0.34/lvl(12) AC to construct'
            }
        ],
        castTime: '1sa',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'Yes',
        level: 2,
        component: ['V','S']
    },
    {
        name: 'Weapon Augmentation',
        variations: [
            {
                name: 'Bane',
                effect: '+2 Enhancement Bonus, +2d6 dmg against designated foe'
            },
            {
                name: 'Defending',
                effect: 'Convert some Enhancement Bonus to AC'
            },
            {
                name: 'Flaming',
                effect: '+1d6 Fire dmg'
            },
            {
                name: 'Frost',
                effect: '+1d6 Cold dmg'
            },
            {
                name: 'Shock',
                effect: '+1d6 Electricity dmg'
            },
            {
                name: 'Ghost Shock',
                effect: 'Normal Damage against Incorporeal Creatures'
            },
            {
                name: 'Keen',
                effect: 'Doubles Crit Range (only Piercing and Slashing)'
            },
            {
                name: 'Ki Focus',
                effect: 'Allows Use of Ki Attacks through Weapon'
            },
            {
                name: 'Merciful',
                effect: '+1d6 dmg and nonlethal'
            },
            {
                name: 'Mighty Cleaving',
                effect: 'Allows +1 Cleave Attempt'
            },
            {
                name: 'Spell Storing',
                effect: 'Store Spell of max level 3'
            },
            {
                name: 'Throwing',
                effect: '+10 Range and can be thrown'
            },
            {
                name: 'Thundering',
                effect: '+1d8/(critmult-1) sonic damage on crit. Can deafen permanently (DC14 Fortitude)'
            },
            {
                name: 'Vicious',
                effect: '+2d6 dmg to enemy +1d6 dmg to wielder'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Weapon'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 2,
        component: ['S', 'M']
    },
    {
        name: 'Armor Enhancement, Greater',
        variations: [
            {
                name: 'Etherealness',
                effect: 'Allows wearer to become ethereal'
            },
            {
                name: 'Undead Controlling',
                effect: 'Control up to 26 HD of undead per day (control undead spell)'
            },
            {
                name: 'Fortification, heavy',
                effect: '100% Crit Avoidance'
            },
            {
                name:'Spell Resistance (19)',
                effect:'Grants Spell Resistance 19'
            },
            {
                name: 'Acid / Cold / Electricity / Fire / Sonic Resistance, Greater',
                effect: '+30 damage reduction of that type'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 3,
        component: ['S', 'M']
    },
    {
        name: 'Construct Energy Ward',
        variations: [
            {
                name: '',
                effect: 'Construct gain resistance 10 to an energy type'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 3,
        component: ['S']
    },
    {
        name: 'Inflict Serious Damage',
        variations: [
            {
                name: '',
                effect: 'Deals 3d8+lvl(15) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'instant',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: '',
        spellRes: 'Yes',
        level: 3,
        component: ['V','S']
    },
    {
        name: 'Magic Weapon, Greater',
        variations: [
            {
                name: '',
                effect: '+0.25/lvl(20) Enhancement Bonus'
            }
        ],
        castTime: '1sa',
        duration: '1h/lvl',
        range: '25ft+2.5ft/lvl',
        target: [
            'Weapon'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 3,
        component: ['V', 'S', 'DF']
    },
    {
        name: 'Metamagic Item',
        variations: [
            {
                name: '',
                effect: 'Apply metamagic feat to a spell trigger item'
            }
        ],
        castTime: '1rd',
        duration: '1rd/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 3,
        component: ['V', 'S']
    },
    {
        name: 'Power Surge',
        variations: [
            {
                name: '',
                effect: 'Imbue wand with +0.2/lvl temporary charges'
            }
        ],
        castTime: '1sa',
        duration: '1min/lvl',
        range: 'Touch',
        target: [
            'Wand'
        ],
        savingThrow: '',
        spellRes: 'No',
        level: 3,
        component: ['S','XP']
    },
    {
        name: 'Stone Construct',
        variations: [
            {
                name: '',
                effect: 'Grants damage reduction 10/adamantine to blows, cuts, stabs, slashes. Prevents up to +10/lvl(150) dmg.'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Construct'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 3,
        component: ['S','M']
    },
    {
        name: 'Suppress Requirement',
        variations: [
            {
                name: '',
                effect: 'Remove requirement from item after successful Use Magic Device check.'
            }
        ],
        castTime: '1rd',
        duration: '10min/lvl',
        range: 'Touch',
        target: [
            'Item'
        ],
        savingThrow: 'Will',
        spellRes: 'Yes',
        level: 3,
        component: ['S','M']
    }
];

let lvl =parseInt($('#lvl')[0].value) ;

let columns = [
    'Level','Name', 'Variations', 'Effect', 'Casting Time', 'Duration', 'Range', 'Target', 'Saving Throw', 'Spell Resistance', 'Components'
]

let centered=['Level', 'Target', 'Casting Time', 'Duration','Saving Throw', 'Spell Resistance', 'Components']

let resistanceIcons={
    'Yes':'far fa-check',
    'No':'far fa-times'
}

let targetIcons={
    'Armor':'far fa-helmet-battle',
    'Shield':'far fa-shield',
    'Weapon':'far fa-sword',
    'Potion':'far fa-flask-potion',
    'Creature':'far fa-male',
    'Scroll':'far fa-scroll',
    'Item':'far fa-cube',
    'Construct':'far fa-robot',
    'Pebbles':'far fa-ball-pile',
    'Wand':'far fa-wand-magic'
}

let componentIcons={
    'V':'far fa-lips',
    'S':'far fa-hand-paper',
    'M':'far fa-gem',
    'DF':'far fa-cross',
    'XP':'far fa-head-side-brain'
}

let unitMap={
    'instant':'instant',
    'rd':'short',
    'min':'medium',
    'h':'long'
}

let castMap={
    'rd':'medium',
    'sa':'fast',
    'h':'slow',
    'min':'slow'
}

let castMap2={
    'rd':'far fa-frog',
    'sa':'far fa-rabbit-fast',
    'h':'far fa-turtle',
    'min':'far fa-turtle'
}

let levelMap={
    0:'0',
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII'
}



$('#lvl').keyup(function(){
    console.log('ch')
    if(!isNaN($('#lvl')[0].value) && ($('#lvl')[0].value!='')){
        lvl=parseInt($('#lvl')[0].value);
        fillTable();
    }
})

$('#lvl').change(function(){
    console.log('ch')
    if(!isNaN($('#lvl')[0].value) && ($('#lvl')[0].value!='')){
        lvl=parseInt($('#lvl')[0].value);
        fillTable();
    }
})

spellList.sort(function(a,b){
    return a.level>b.level?1:b.level>a.level?-1:a.name<b.name?-1:1;
})
fillTable();

function fillTable() {
    let $table = $('#spells');
    $table.empty();
    let str=''
    str+='<tr>';
    for (let c of columns) {
        str+='<td'+(centered.indexOf(c)>-1?' class="centered"':'')+'>' + c + '</td>'
    }
    str+='</tr>';
    let levels=[];
    for (let s of spellList) {
        for (let [i, v] of s.variations.entries()) {
            str+='<tr'+(i==0?' class="first"':'')+'>'
            console.log(s.level)
            if(levels[s.level]==null){
                str+='<td class="centered"><span class="level l' + s.level + '">'+levelMap[s.level]+'</span></td>'
                levels[s.level]=true;
            }else{
                str+='<td class="centered noborder"></td>'
            }
            
            str+='<td>' + (i == 0 ? s.name : '') + '</td>'
            str+='<td style="max-width:200px">' + v.name + '</td>'
            let e=parseLvl(v.effect)
            str+='<td style="max-width:200px">' + e + '</td>'
            let c=getCastDiv(s.castTime)
            str+='<td class="centered" style="min-width:90px">' + c + '</td>'
            let d=parseLvl(s.duration)
            d=getDurationDiv(d);
            str+='<td class="centered">' + d + '</td>'
            let r=parseLvl(s.range)
            str+='<td>' + r + '</td>'
            let targets='';
            for(let t of s.target){
                targets+='<i class="target '+targetIcons[t]+'"></i>';
            }
            str+='<td class="centered">' + targets + '</td>'
            str+='<td class="centered">' + s.savingThrow + '</td>'
            str+='<td class="centered"><i class="resist ' + resistanceIcons[s.spellRes] + '"></i></td>'
            let comp='';
            for(let c of s.component){
                comp+='<i class="component '+componentIcons[c]+'"></i>';
            }
            str+='<td class="centered">' + comp + '</td>'
            str+='</tr>'
            
        }
    }
    $table.append(str)
}

function getCastDiv(string){
    let types=['rd','min','h','sa']
    for(let type of types){
        if(string.search(type)!=-1){
            return '<div class="cast '+castMap[type]+'"><i class="'+castMap2[type]+'"></i>'+string+'</div>';
        }
    }
    return string;
}

function getDurationDiv(string){
    let types=['instant','rd','min','h']
    for(let type of types){
        if(string.search(type)!=-1){
            return '<div class="dur '+unitMap[type]+'">'+string+'</div>';
        }
    }
    return string;
}

function parseLvl(string){
    n=string.search('lvl')
    while(n>-1){
        let before=string.slice(0,n)
        let after=string.slice(n+3,string.length)
        let pre=before.charAt(before.length-1)
        if(pre=='+' || pre==' '){
            let max=Number.MAX_SAFE_INTEGER;
            if(after.charAt(0)=="("){
                a=true
                let num2='';
                let m=0;
                for(let i=1;i<after.length;i++){
                    if(isNaN(after.charAt(i))){
                        m=i;
                        break;
                    }else{
                        num2+=after.charAt(i);
                    }
                }

                after=after.slice(m+1,after.length)
                
                max=parseInt(num2)
            }
            string=before+Math.min(max,lvl)+after;
        }else if(pre=='/'){
            // skip letters (unit)
            let a=true;
            let s=0;
            while(a && s<before.length-1){
                if(isNaN(before.charAt(before.length-s-2))){
                    s++
                }else{
                    a=false
                }
            }

            // get number
            let unit=before.slice(before.length-s-1,before.length-1)
            a=true
            num='';
            while(a && s<before.length-1){
                if(isNaN(before.charAt(before.length-s-2)) && !(before.charAt(before.length-s-2)=='.')){
                    a=false
                }else{
                   num=before.charAt(before.length-s-2)+num 
                   s++;
                }
            }

            // check for max lvl

            let max=Number.MAX_SAFE_INTEGER;
            if(after.charAt(0)=="("){
                a=true
                let num2='';
                let m=0;
                for(let i=1;i<after.length;i++){
                    if(isNaN(after.charAt(i))){
                        m=i;
                        break;
                    }else{
                        num2+=after.charAt(i);
                    }
                }

                after=after.slice(m+1,after.length)
                
                max=parseInt(num2)
            }
            let l=Math.floor(parseFloat(num)*Math.min(max,lvl));
            
            string=before.slice(0,before.length-s-1)+l+unit+after;
            
        }
        n=-1
    }
    return string
}

function getTableDisplay(key, value) {

}