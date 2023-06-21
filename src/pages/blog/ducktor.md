# Introducing ducktor: Duck typed constructors for Rust structs with wasm-bindgen JsValue

Interacting with JavaScript objects in WebAssembly can be challenging, especially when it comes libraries providing an ergonomic API for exported functions using wasm-bindgen. One specific limitation is the inability to pass bare objects directly to functions expecting exported types. This limitation becomes frustrating, particularly when working with shared code.
This ends up requiring creating wrappers around the generated code by wasm-bindgen.

I'm excited to announce the release of [ducktor](https://github.com/hamza1311/ducktor), a new Rust crate that provides a solution to this problem. With ducktor, you can now create instances of your structs easily from `JsValue`s.

## The Challenge

Let's take a look at a common scenario where this limitation arises. Suppose you are creating a Rust library that exposes the following API:

```rust
#[wasm_bindgen]
pub struct Data {
    key_id: String,
    name: String,
}

#[wasm_bindgen]
pub fn do_work(data: Data) -> String {
    format!(r#"
        key_id: {}
        name: {}
    "#, data.key_id, data.name)
}
```

In this example, we define a `Data` struct and a function `do_work` that takes an instance of `Data` and performs some operations. 
Now, imagine you want to call this function from JavaScript, passing in an object that matches the structure of `Data`:

```javascript
do_work({
  key_id: 'key_id',
  name: 'name',
});
```

Unfortunately, this pattern is not currently possible with `wasm-bindgen` due to the restrictions it imposes. It requires the object passed to the function to be an instance of `Data` class exported by `wasm-bindgen`.
However, you can call `do_work` with a bare object if it takes a `JsValue` (or any imported type). This is where ducktor comes in: it converts the `JsValue` into your the Rust structs using duck typing.

## Introducing ducktor

ducktor is a Rust crate that enables you to create types from `wasm_bindgen::JsValue` using duck typing. With ducktor, you can define a struct that describes the fields and types you expect from a JavaScript object (represented by `JsValue`), and then use the `#[derive(FromJsValue)]` macro to implement `From<JsValue>` for your struct. This allows you to leverage Rust's type system and syntax when working with JavaScript objects in WebAssembly.

## Why ducktor?

There are a few cases where the the ways of describing types provided by wasm-bindgen is not enough, such as:

- Using`#[wasm_bindgen]` on exported types requires the input on an exported function be of the class created by `wasm-bindgen` which is not always possible
- Using imported types with `#[wasm_bindgen] extern "C" { ... }` makes it so that the type is not creatable from Rust. This becomes a problem in shared code where you want to create instance of the type from Rust as well.

I ran into these cases when creating a Rust/WASM replacement for a JS module at $day\_job and pushed me to create ducktor.

## How does ducktor work?

ducktor works by defining and importing a non-existent JavaScript type that matches the fields and types of your struct. It then coerces the `JsValue` into this type using `JsValue::unchecked_ref` and creates the struct by extracting the values of each field from the JavaScript type.

## Using ducktor: An Example

To illustrate the usage of ducktor, let's consider a simple example:

```rust
use ducktor::FromJsValue;

#[derive(FromJsValue)]
struct Data {
    a: u32,
    b: String,
}

fn roundtrip() {
    let data =

 js_sys::Object::new();
    js_sys::Reflect::set(&data, &"a".into(), &42.into()).unwrap();
    js_sys::Reflect::set(&data, &"b".into(), &"string".into()).unwrap();

    let data: Data = Data::from(&data.into());

    assert_eq!(data.a, 42);
    assert_eq!(data.b, "string");
}
```

In this example, we define a `Data` struct with an `a` field of type `u32` and a `b` field of type `String`. We then create a JavaScript object using `js_sys::Object::new()` and set the values of `a` and `b` using `js_sys::Reflect::set()`. Finally, we convert the `JsValue` representing the JavaScript object into a `Data` struct using the `from` method provided by the `#[derive(FromJsValue)]` macro. This allows us to seamlessly work with the JavaScript object in a type-safe and idiomatic Rust manner.
