export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
export function deepEquals(_1, _2) {
    var _3 = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        _3[_i - 2] = arguments[_i];
    }
    var i;
    var l;
    var leftChain;
    var rightChain;
    function compare2Objects(x, y) {
        var p;
        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }
        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }
        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }
        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }
        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }
        if (x.constructor !== y.constructor) {
            return false;
        }
        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }
        // Quick checking of one object being a subset of another.
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            }
            else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }
        // tslint:disable:forin
        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            }
            switch (typeof (x[p])) {
                case 'object':
                case 'function':
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }
                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    if (arguments.length <= 1) {
        throw new Error('Need two or more arguments to compare');
    }
    for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = [];
        rightChain = [];
        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUksRUFBSyxFQUFFLEVBQUs7SUFBRSxZQUFVO1NBQVYsVUFBVSxFQUFWLHFCQUFVLEVBQVYsSUFBVTtRQUFWLDJCQUFVOztJQUNwRCxJQUFJLENBQU0sQ0FBQztJQUNYLElBQUksQ0FBTSxDQUFDO0lBQ1gsSUFBSSxTQUFjLENBQUM7SUFDbkIsSUFBSSxVQUFlLENBQUM7SUFFcEIsU0FBUyxlQUFlLENBQUMsQ0FBTSxFQUFFLENBQU07UUFDckMsSUFBSSxDQUFDLENBQUM7UUFFTiwwQ0FBMEM7UUFDMUMsb0NBQW9DO1FBQ3BDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxFQUFFO1lBQzFFLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxvQ0FBb0M7UUFDcEMsbURBQW1EO1FBQ25ELDREQUE0RDtRQUM1RCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsMkRBQTJEO1FBQzNELDJEQUEyRDtRQUMzRCxxREFBcUQ7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFVBQVUsSUFBSSxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7WUFDdEQsQ0FBQyxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUM7WUFDeEMsQ0FBQyxDQUFDLFlBQVksTUFBTSxJQUFJLENBQUMsWUFBWSxNQUFNLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFlBQVksTUFBTSxJQUFJLENBQUMsWUFBWSxNQUFNLENBQUM7WUFDNUMsQ0FBQyxDQUFDLFlBQVksTUFBTSxJQUFJLENBQUMsWUFBWSxNQUFNLENBQUMsRUFBRTtZQUM5QyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEM7UUFFRCxnREFBZ0Q7UUFDaEQsSUFBSSxDQUFDLENBQUMsQ0FBQyxZQUFZLE1BQU0sSUFBSSxDQUFDLFlBQVksTUFBTSxDQUFDLEVBQUU7WUFDakQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUVELElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCxJQUFJLENBQUMsQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNkO1FBRUQscUNBQXFDO1FBQ3JDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQzNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFFRCwwREFBMEQ7UUFDMUQsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQy9DLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7aUJBQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdEMsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBRUQsdUJBQXVCO1FBQ3ZCLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMvQyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBRUQsUUFBUSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JCLEtBQUssUUFBUSxDQUFDO2dCQUNkLEtBQUssVUFBVTtvQkFFYixTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUVuQixJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3QkFDaEMsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7b0JBRUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNoQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7b0JBQ2pCLE1BQU07Z0JBRVI7b0JBQ0UsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNqQixPQUFPLEtBQUssQ0FBQztxQkFDZDtvQkFDRCxNQUFNO2FBQ1Q7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7UUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0tBQzFEO0lBRUQsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDNUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFaEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEQsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBRUQsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkob2JqOiBvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubGVuZ3RoID09PSAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVlcEVxdWFsczxUPihfMTogVCwgXzI6IFQsIC4uLl8zOiBUW10pIHtcbiAgbGV0IGk6IGFueTtcbiAgbGV0IGw6IGFueTtcbiAgbGV0IGxlZnRDaGFpbjogYW55O1xuICBsZXQgcmlnaHRDaGFpbjogYW55O1xuXG4gIGZ1bmN0aW9uIGNvbXBhcmUyT2JqZWN0cyh4OiBhbnksIHk6IGFueSkge1xuICAgIGxldCBwO1xuXG4gICAgLy8gcmVtZW1iZXIgdGhhdCBOYU4gPT09IE5hTiByZXR1cm5zIGZhbHNlXG4gICAgLy8gYW5kIGlzTmFOKHVuZGVmaW5lZCkgcmV0dXJucyB0cnVlXG4gICAgaWYgKGlzTmFOKHgpICYmIGlzTmFOKHkpICYmIHR5cGVvZiB4ID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIENvbXBhcmUgcHJpbWl0aXZlcyBhbmQgZnVuY3Rpb25zLlxuICAgIC8vIENoZWNrIGlmIGJvdGggYXJndW1lbnRzIGxpbmsgdG8gdGhlIHNhbWUgb2JqZWN0LlxuICAgIC8vIEVzcGVjaWFsbHkgdXNlZnVsIG9uIHRoZSBzdGVwIHdoZXJlIHdlIGNvbXBhcmUgcHJvdG90eXBlc1xuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBXb3JrcyBpbiBjYXNlIHdoZW4gZnVuY3Rpb25zIGFyZSBjcmVhdGVkIGluIGNvbnN0cnVjdG9yLlxuICAgIC8vIENvbXBhcmluZyBkYXRlcyBpcyBhIGNvbW1vbiBzY2VuYXJpby4gQW5vdGhlciBidWlsdC1pbnM/XG4gICAgLy8gV2UgY2FuIGV2ZW4gaGFuZGxlIGZ1bmN0aW9ucyBwYXNzZWQgYWNyb3NzIGlmcmFtZXNcbiAgICBpZiAoKHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiB5ID09PSAnZnVuY3Rpb24nKSB8fFxuICAgICAgKHggaW5zdGFuY2VvZiBEYXRlICYmIHkgaW5zdGFuY2VvZiBEYXRlKSB8fFxuICAgICAgKHggaW5zdGFuY2VvZiBSZWdFeHAgJiYgeSBpbnN0YW5jZW9mIFJlZ0V4cCkgfHxcbiAgICAgICh4IGluc3RhbmNlb2YgU3RyaW5nICYmIHkgaW5zdGFuY2VvZiBTdHJpbmcpIHx8XG4gICAgICAoeCBpbnN0YW5jZW9mIE51bWJlciAmJiB5IGluc3RhbmNlb2YgTnVtYmVyKSkge1xuICAgICAgcmV0dXJuIHgudG9TdHJpbmcoKSA9PT0geS50b1N0cmluZygpO1xuICAgIH1cblxuICAgIC8vIEF0IGxhc3QgY2hlY2tpbmcgcHJvdG90eXBlcyBhcyBnb29kIGFzIHdlIGNhblxuICAgIGlmICghKHggaW5zdGFuY2VvZiBPYmplY3QgJiYgeSBpbnN0YW5jZW9mIE9iamVjdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoeC5pc1Byb3RvdHlwZU9mKHkpIHx8IHkuaXNQcm90b3R5cGVPZih4KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh4LmNvbnN0cnVjdG9yICE9PSB5LmNvbnN0cnVjdG9yKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgZm9yIGluZmluaXRpdmUgbGlua2luZyBsb29wc1xuICAgIGlmIChsZWZ0Q2hhaW4uaW5kZXhPZih4KSA+IC0xIHx8IHJpZ2h0Q2hhaW4uaW5kZXhPZih5KSA+IC0xKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gUXVpY2sgY2hlY2tpbmcgb2Ygb25lIG9iamVjdCBiZWluZyBhIHN1YnNldCBvZiBhbm90aGVyLlxuICAgIGZvciAocCBpbiB5KSB7XG4gICAgICBpZiAoeS5oYXNPd25Qcm9wZXJ0eShwKSAhPT0geC5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB5W3BdICE9PSB0eXBlb2YgeFtwXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gdHNsaW50OmRpc2FibGU6Zm9yaW5cbiAgICBmb3IgKHAgaW4geCkge1xuICAgICAgaWYgKHkuaGFzT3duUHJvcGVydHkocCkgIT09IHguaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKHR5cGVvZiAoeFtwXSkpIHtcbiAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuXG4gICAgICAgICAgbGVmdENoYWluLnB1c2goeCk7XG4gICAgICAgICAgcmlnaHRDaGFpbi5wdXNoKHkpO1xuXG4gICAgICAgICAgaWYgKCFjb21wYXJlMk9iamVjdHMoeFtwXSwgeVtwXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBsZWZ0Q2hhaW4ucG9wKCk7XG4gICAgICAgICAgcmlnaHRDaGFpbi5wb3AoKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmICh4W3BdICE9PSB5W3BdKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignTmVlZCB0d28gb3IgbW9yZSBhcmd1bWVudHMgdG8gY29tcGFyZScpO1xuICB9XG5cbiAgZm9yIChpID0gMSwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBsZWZ0Q2hhaW4gPSBbXTtcbiAgICByaWdodENoYWluID0gW107XG5cbiAgICBpZiAoIWNvbXBhcmUyT2JqZWN0cyhhcmd1bWVudHNbMF0sIGFyZ3VtZW50c1tpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbiJdfQ==