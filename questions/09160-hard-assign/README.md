Describe your question and give some examples. Markdown is supported here. 

(Inspired by Object.assign API, I found it's hard to get correct type from the return from function.)

You have a target object, and a sources array which element is object. You need copy property from source to target,  if it has same property between target and source, you should always keep source property, drop target property.

### example

```ts
type Target = {
  a: 'a'
}

type Origin1 = {
 b: 'b'
}

// type Result = Assign<Target, [Origin1]>
type Result = {
 a: 'a'
 b: 'b'
}
```


```ts
type Target = {
  a: 'a'
  d: { 
     hi: 'hi'
 }
}

type Origin1 = {
 a: 'a1',
 b: 'b'
}


type Origin2 = {
 b: 'b2',
 c: 'c'
}

type Answer = {
   a: 'a1',
   b: 'b2',
   c: 'c'
   d: { 
      hi: 'hi'
  }
}
```
