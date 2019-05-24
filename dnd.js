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
        range: 'touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '-',
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
        range: 'touch',
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
        range: 'touch',
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
        range: 'touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Construct'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Item'
        ],
        savingThrow: '-',
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
        range: 'touch',
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
        range: 'touch',
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
        range: 'touch',
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
        name: 'Repair Light Damage',
        variations: [
            {
                name: '',
                effect: 'Cures 1d8+lvl(5) dmg to construct'
            }
        ],
        castTime: '1sa',
        duration: 'Instant',
        range: 'touch',
        target: [
            'Construct'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Item'
        ],
        savingThrow: '-',
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
        range: 'touch',
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
        range: 'touch',
        target: [
            'Item'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Item'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Weapon'
        ],
        savingThrow: '-',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    },
    {
        name: 'Ablative Armor',
        variations: [
            {
                name: '',
                effect: '+4+lvl one-time damage reduction'
            }
        ],
        castTime: '1min',
        duration: '10min/lvl',
        range: 'touch',
        target: [
            'Armor',
            'Shield'
        ],
        savingThrow: '-',
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
        range: 'touch',
        target: [
            'Item'
        ],
        savingThrow: '-',
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
        range: 'touch',
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
        range: 'touch',
        target: [
            'Potion'
        ],
        savingThrow: '-',
        spellRes: 'No',
        level: 1,
        component: ['S', 'M']
    }
];

let lvl = 4;

let columns = [
    'Name', 'Variations', 'Effect', 'Casting Time', 'Duration', 'Range', 'Target', 'Saving Throw', 'Spell Resistance'
]

let targetIcons={
    'Armor':'far fa-helmet-battle',
    'Shield':'far fa-shield',
    'Sword':'far fa-sword',
    'Potion':'far fa-potion',
    'Creature':'far fa-male',
    'Scroll':'far fa-scroll',
    'Item':'far fa-cube'
}

spellList.sort(function(a,b){
    return a.level>b.level?1:b.level>a.level?-1:a.name<b.name?-1:1;
})
fillTable();

function fillTable() {
    let $table = $('#spells');
    let str=''
    str+='<tr>';
    for (let c of columns) {
        str+='<td>' + c + '</td>'
    }
    str+='</tr>';
    for (let s of spellList) {
        for (let [i, v] of s.variations.entries()) {
            str+='<tr'+(i==0?' class="first"':'')+'>'
            str+='<td>' + (i == 0 ? s.name : '') + '</td>'
            str+='<td>' + v.name + '</td>'
            let e=parseLvl(v.effect)
            str+='<td>' + e + '</td>'
            str+='<td>' + s.castTime + '</td>'
            let d=parseLvl(s.duration)
            str+='<td>' + d + '</td>'
            str+='<td>' + s.range + '</td>'
            let targets='';
            for(let t of s.target){
                targets+='<i class="'+targetIcons[t]+'"></i>';
            }
            str+='<td>' + targets + '</td>'
            str+='<td>' + s.savingThrow + '</td>'
            str+='<td>' + s.spellRes + '</td>'
            str+='</tr>'
            
        }
    }
    $table.append(str)
}

function parseLvl(string){
    n=string.search('lvl')
    console.log(string)
    while(n>-1){
        let before=string.slice(0,n)
        let after=string.slice(n+3,string.length)
        let pre=before.charAt(before.length-1)
        if(pre=='+' || pre==' '){
            string=before+lvl+after;
        }else if(pre=='/'){
            // skip letters (unit)
            let a=true;
            let s=0;
            console.log(before)
            while(a && s<before.length-1){
                console.log(before.charAt(before.length-s-2))
                if(isNaN(before.charAt(before.length-s-2))){
                    s++
                }else{
                    a=false
                }
            }

            // get number
            let unit=before.slice(before.length-s-1,before.length-1)
            console.log(unit)
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




            let l=Math.floor(parseFloat(num)*lvl);
            string=before.slice(0,before.length-s-1)+l+unit+after;
        }
        n=-1
    }
    return string
}

function getTableDisplay(key, value) {

}