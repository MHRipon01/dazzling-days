<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A:{}

<i>The answer will be {}.Because the greetign is not declared & js makes it a global variable by default so this will show {}</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C:'12'

<i>When we use the + operator in JS with a number and a string, the number is converted to a string and then concatenated with the other string. So, 1 is converted to "1" and then concatenated with "2" to give "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The answer will be A.Because the info.favoriteFood is set to "🍝", but this does not change the main food array. The favoriteFood property in the info object was set to the first element of the food array (which is "🍕"), but it’s a copy of that value, not a reference to it. So favoriteFood doesn’t affect the food array.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>The sayHi function expects an argument which is name. When you call sayHi() without any arguments, name is undefined. In simple language the code is trying to say “Hi” to a person, but you didn’t tell it who to say “Hi”. So, it just says “Hi there, undefined” because it doesn’t know the person’s name.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C:3

<i>The forEach loop in the code goes through each number in the nums array. If the number is truthy ( 0 is falsy, while all other numbers are truthy), it increments the count by 1. So, for the nums array [0, 1, 2, 3], it increments the count for 1, 2, and 3, but not for 0. Therefore, the final count is 3.In simple language, the code is counting how many numbers in the list are not zero. In the list [0, 1, 2, 3], there are three numbers that are not zero: 1, 2, and 3. So, the code says the count is 3.</i>

</p>
</details>