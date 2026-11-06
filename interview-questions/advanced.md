# Advanced JavaScript Internals Questions

1. **What is the difference between a task and a microtask?**  
   Both are host scheduling concepts. Promise reactions and `queueMicrotask` callbacks are microtasks. Timer callbacks are tasks. Microtasks are generally drained after the current task before the host proceeds to another task.

2. **Does `await` block the JavaScript thread?**  
   No. It suspends the current async function and schedules its continuation after the awaited value settles.

3. **Why can recursive functions cause stack overflow?**  
   Each active recursive call needs an execution frame. Unbounded recursion can exceed the engine's call-stack capacity.

4. **What is a closure?**  
   A function together with access to its surrounding lexical environment.

5. **Are all asynchronous APIs handled by Web APIs?**  
   No. Browsers provide Web APIs, while Node.js provides its own host APIs and event-loop implementation. The JavaScript language itself does not define `setTimeout` or `fetch` as core language syntax.

6. **What is the difference between `Promise.all` and `Promise.allSettled`?**  
   `Promise.all` rejects as soon as an input rejects. `Promise.allSettled` waits for all inputs to settle and returns each outcome.
