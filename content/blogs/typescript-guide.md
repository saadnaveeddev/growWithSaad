---
title: TypeScript for JavaScript Developers
date: Nov 28, 2024
category: Tech Tutorials
pinned: true
---

TypeScript has become essential for modern JavaScript development. If you're coming from JavaScript, this guide will help you understand why TypeScript matters and how to get started.

## Why TypeScript?

### Type Safety
Catch errors at compile time instead of runtime. This leads to fewer bugs and more confident refactoring.

### Better Developer Experience
- Excellent IDE support with autocomplete
- Inline documentation through types
- Easier code navigation and refactoring

### Gradual Adoption
You can adopt TypeScript incrementally in existing JavaScript projects.

## Basic Types

### Primitive Types
```typescript
let name: string = "John"
let age: number = 30
let isActive: boolean = true
```

### Arrays and Objects
```typescript
let numbers: number[] = [1, 2, 3]
let user: { name: string; age: number } = {
  name: "John",
  age: 30
}
```

## Interfaces and Types

### Defining Interfaces
```typescript
interface User {
  id: number
  name: string
  email: string
  isActive?: boolean // Optional property
}
```

### Type Aliases
```typescript
type Status = "pending" | "approved" | "rejected"
type UserWithStatus = User & { status: Status }
```

## Functions

### Function Types
```typescript
function greet(name: string): string {
  return `Hello, ${name}!`
}

const add = (a: number, b: number): number => a + b
```

## Generics

### Basic Generics
```typescript
function identity<T>(arg: T): T {
  return arg
}

interface ApiResponse<T> {
  data: T
  status: number
  message: string
}
```

## Getting Started

1. Install TypeScript: `npm install -g typescript`
2. Create tsconfig.json: `tsc --init`
3. Start with .ts files in your project
4. Gradually add types to existing code

TypeScript improves code quality and developer productivity. Start small and gradually adopt more advanced features as you become comfortable.