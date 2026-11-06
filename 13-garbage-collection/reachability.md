# Garbage collection and reachability

JavaScript engines automatically reclaim memory that is no longer reachable.

```js
let user = { name: "Rajesh" };
user = null; // The previous object may now be eligible for collection.
```

Important ideas:
- Reachability is the key concept; an object reachable from program roots is retained.
- Modern engines commonly use tracing collectors such as mark-and-sweep variants.
- Developers cannot force portable, deterministic garbage collection.
- Avoid accidental long-lived references, unremoved event listeners, and unbounded caches.
