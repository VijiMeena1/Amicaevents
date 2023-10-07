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

#### Answer: A

<i>The output is an empty object `{}` because the variable `greeting` is assigned to an empty object using `greeting = {}`. When I log `greeting` to the console, it displays the contents of the variable, which is an empty object in this case.</i>

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

#### Answer: C

<i>The output is `12` because the `sum` function implicitly converts the number `1` to a string when it is concatenated with the string `2`. In JavaScript, when the `+` operator encounters a string and a number, it converts the number to a string and performs string concatenation. Therefore, the numeric addition operation is treated as string concatenation, resulting in the combined string `12`.</i>

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

<i>The `info.favoriteFood` property is initially assigned the value of the first element in the food array, which is "🍕". However, when the subsequent assignment info.favoriteFood = "🍝" is made, it only modifies the property within the info object and does not affect the original food array. Therefore, when `console.log(food)` is executed, the output will be ["🍕", "🍫", "🥑", "🍔"].</i>

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

<i>The `sayHi` function is designed to take a `name` parameter, but when called without an argument, it defaults to `undefined`. Consequently, the returned string includes "Hi there, undefined" as the output when `console.log(sayHi())` is executed.</i>

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

#### Answer: C

<i>The code initializes a `count` variable to `0` and iterates through the `nums` array using `forEach`. The condition `if (num)` checks for truthiness, incrementing `count` for each non-zero element. As there are three non-zero elements (`1`, `2`, and `3`), the final output is `3` when `console.log(count)` is executed.</i>

</p>
</details>
