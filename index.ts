import './style.css';
import { from, of, map, filter } from 'rxjs';

const source = from([1, 2, 3, 4, 5]);
const sourceSubs = source.pipe(filter((num) => num % 2 == 0));
sourceSubs.subscribe((val) => console.log(`Çift sayılar ${val}`));

const obj = from([
  { name: 'Ali', age: 25 },
  { name: 'Said', age: 12 },
]);
const objSubs = source.pipe(filter((person) => person.age > 20));
objSubs.subscribe((person) =>
  console.log(`yaşı 20 den büyük olanlar ${person}`)
);
