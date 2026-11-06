# Beginner JavaScript Internals Questions

1. **What is the call stack?**  
   A stack structure used by the JavaScript engine to track active execution contexts and function calls.

2. **What does LIFO mean?**  
   Last In, First Out. The most recently pushed stack frame is the first one removed.

3. **What is an execution context?**  
   The runtime structure that tracks the code currently being evaluated, including its bindings and execution state.

4. **Does `setTimeout(fn, 0)` run immediately?**  
   No. It schedules a timer callback for a later task when the timer is eligible and the host can run it.

5. **What is a Promise?**  
   An object representing the eventual fulfillment or rejection of an asynchronous operation.
