export default function orderByProps(obj, order) {
    const result = [];
    const props = [];

    for (const key of order) {
        if (obj.hasOwnProperty(key)) {
            result.push({ key, value: obj[key] });
        }
    }

    for (const key in obj) {
        if (obj.hasOwnProperty(key) && !order.includes(key)) {
            props.push(key);
        }
    }

    props.sort();

    for (const key of props) {
        result.push({ key, value: obj[key] });
    }

    return result;
}

// Пример использования
const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
const order = ["name", "level"];

console.log(orderByProps(obj, order));


