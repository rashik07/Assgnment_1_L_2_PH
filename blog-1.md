
## 1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

Answer: `any` is called a `type safety hole` because it completely disables Typescript type checking for that value while still allowing us to write code as if the compiler had verified everything. Once a value is typed as `any`, we can call any method onit, access any property, pass it to functions expecting any type. This bypasses TypeScript's safety and can allow runtime errors to slip into your application unnoticed.

`unknown` was introduced for exactly those situations where we truly do not know the type of a value such as data parsed from Json , user input, errors caught in a `catch` block. but without sacrificing type safety. The key difference is `unknown` is a top type. We can assign any value to it, but we can not directly perform operations on a value of type `unknown` until you marrow it to MORE SPECIFIC TYPE

## Example

```typescript
function isUser(value: unknown): value is { name: string } {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof (value as any).name === "string"
  );
}
 
let data: unknown = fetchExternalData();
 
if (isUser(data)) {
  console.log(data.name.toUpperCase()); // এখানে data সেফলি 'name' সহ একটি অবজেক্ট
}
```
 