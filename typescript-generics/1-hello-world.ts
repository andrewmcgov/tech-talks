// Here is a very basic example of a typescript generic.
// More info on the typescript docs: https://www.typescriptlang.org/docs/handbook/2/generics.html

// Here is a function that returns the value it is passed
// Without generics, it is restricted to only work with one type

function returnPassedValue(value: number): number {
  return value;
}

// We can call this function with a number,
// but what if we want to pass a string? or an array?

// ✅
const myNumber = returnPassedValue(123);

// ❌
const myString = returnPassedValue('Hello world');

// We could type our function to accept `any` as the value,
// but then our returned value will not be typed.

function returnAnyValue(value: any) {
  return value;
}

const anyValue = returnAnyValue(123);

// Instead, generics allow us to define our function in a way
// that captures the type of the argument, allowing us to use it
// in our returned type

// TypeScript generics appear inside angle brackets: <Type>, <T>, <T, A, M>
// The types in the angle brackets work a lot like funcion parameters,
// they are placeholders for types that will be specified when the code is called.
// Note: by convention, type variables inside generics are often shortened to one letter.
// For clarity we are using words below.

// the < > syntax is a *Type Variable*, which accepts types instead of values

function returnTypedValue<PassedType>(value: PassedType): PassedType {
  return value;
}

const typedStringValue = returnTypedValue<string>('my string');

// We used PassedType a few times above. Try removing the final `PassedType`,
// notice how the compiler is able to infer that the returned value is still
// of type PassedType

// When we call our function, we are explicitely passing string as a type argument,
// try removing that, and notice how typedStingValue is still of type string.
// This is called type argument inferrence.
