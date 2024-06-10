import orderByProps from '../code.js';

test.each([
    [
        { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
        ["name", "level"],
        [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 }
        ]
    ],
    [
        { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 },
        [],
        [
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 },
            { key: "level", value: 2 },
            { key: "name", value: "мечник" }
        ]
    ],
    [
        {},
        ["name", "level"],
        []
    ],
    [
        { name: 'мечник', level: 2 },
        ["name", "level"],
        [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 }
        ]
    ],
    [
        { name: 'мечник', level: 2, attack: 80, defence: 40, health: 80 },
        ["name", "level"],
        [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 80 }
        ]
    ],
    [
        { name: 'мечник', level: 2, attack: 80, defence: 40, health: 10 },
        ["name", "strength", "level"],
        [
            { key: "name", value: "мечник" },
            { key: "level", value: 2 },
            { key: "attack", value: 80 },
            { key: "defence", value: 40 },
            { key: "health", value: 10 }
        ]
    ],
])('orderByProps(%o, %o) should return %o', (obj, order, expected) => {
    expect(orderByProps(obj, order)).toEqual(expected);
});
