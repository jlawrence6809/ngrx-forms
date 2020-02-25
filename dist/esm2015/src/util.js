export function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}
export function deepEquals(_1, _2, ..._3) {
    let i;
    let l;
    let leftChain;
    let rightChain;
    function compare2Objects(x, y) {
        let p;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ncngtZm9ybXMvIiwic291cmNlcyI6WyJzcmMvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLFVBQVUsT0FBTyxDQUFDLEdBQVc7SUFDakMsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUksRUFBSyxFQUFFLEVBQUssRUFBRSxHQUFHLEVBQU87SUFDcEQsSUFBSSxDQUFNLENBQUM7SUFDWCxJQUFJLENBQU0sQ0FBQztJQUNYLElBQUksU0FBYyxDQUFDO0lBQ25CLElBQUksVUFBZSxDQUFDO0lBRXBCLFNBQVMsZUFBZSxDQUFDLENBQU0sRUFBRSxDQUFNO1FBQ3JDLElBQUksQ0FBQyxDQUFDO1FBRU4sMENBQTBDO1FBQzFDLG9DQUFvQztRQUNwQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRTtZQUMxRSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsb0NBQW9DO1FBQ3BDLG1EQUFtRDtRQUNuRCw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELDJEQUEyRDtRQUMzRCwyREFBMkQ7UUFDM0QscURBQXFEO1FBQ3JELElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxVQUFVLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxDQUFDO1lBQ3RELENBQUMsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDO1lBQ3hDLENBQUMsQ0FBQyxZQUFZLE1BQU0sSUFBSSxDQUFDLFlBQVksTUFBTSxDQUFDO1lBQzVDLENBQUMsQ0FBQyxZQUFZLE1BQU0s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QUFFO1lBQ2hELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KG9iajogb2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmopLmxlbmd0aCA9PT0gMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZXBFcXVhbHM8VD4oXzE6IFQsIF8yOiBULCAuLi5fMzogVFtdKSB7XG4gIGxldCBpOiBhbnk7XG4gIGxldCBsOiBhbnk7XG4gIGxldCBsZWZ0Q2hhaW46IGFueTtcbiAgbGV0IHJpZ2h0Q2hhaW46IGFueTtcblxuICBmdW5jdGlvbiBjb21wYXJlMk9iamVjdHMoeDogYW55LCB5OiBhbnkpIHtcbiAgICBsZXQgcDtcblxuICAgIC8vIHJlbWVtYmVyIHRoYXQgTmFOID09PSBOYU4gcmV0dXJucyBmYWxzZVxuICAgIC8vIGFuZCBpc05hTih1bmRlZmluZWQpIHJldHVybnMgdHJ1ZVxuICAgIGlmIChpc05hTih4KSAmJiBpc05hTih5KSAmJiB0eXBlb2YgeCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHkgPT09ICdudW1iZXInKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDb21wYXJlIHByaW1pdGl2ZXMgYW5kIGZ1bmN0aW9ucy5cbiAgICAvLyBDaGVjayBpZiBib3RoIGFyZ3VtZW50cyBsaW5rIHRvIHRoZSBzYW1lIG9iamVjdC5cbiAgICAvLyBFc3BlY2lhbGx5IHVzZWZ1bCBvbiB0aGUgc3RlcCB3aGVyZSB3ZSBjb21wYXJlIHByb3RvdHlwZXNcbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gV29ya3MgaW4gY2FzZSB3aGVuIGZ1bmN0aW9ucyBhcmUgY3JlYXRlZCBpbiBjb25zdHJ1Y3Rvci5cbiAgICAvLyBDb21wYXJpbmcgZGF0ZXMgaXMgYSBjb21tb24gc2NlbmFyaW8uIEFub3RoZXIgYnVpbHQtaW5zP1xuICAgIC8vIFdlIGNhbiBldmVuIGhhbmRsZSBmdW5jdGlvbnMgcGFzc2VkIGFjcm9zcyBpZnJhbWVzXG4gICAgaWYgKCh0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgeSA9PT0gJ2Z1bmN0aW9uJykgfHxcbiAgICAgICh4IGluc3RhbmNlb2YgRGF0ZSAmJiB5IGluc3RhbmNlb2YgRGF0ZSkgfHxcbiAgICAgICh4IGluc3RhbmNlb2YgUmVnRXhwICYmIHkgaW5zdGFuY2VvZiBSZWdFeHApIHx8XG4gICAgICAoeCBpbnN0YW5jZW9mIFN0cmluZyAmJiB5IGluc3RhbmNlb2YgU3RyaW5nKSB8fFxuICAgICAgKHggaW5zdGFuY2VvZiBOdW1iZXIgJiYgeSBpbnN0YW5jZW9mIE51bWJlcikpIHtcbiAgICAgIHJldHVybiB4LnRvU3RyaW5nKCkgPT09IHkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICAvLyBBdCBsYXN0IGNoZWNraW5nIHByb3RvdHlwZXMgYXMgZ29vZCBhcyB3ZSBjYW5cbiAgICBpZiAoISh4IGluc3RhbmNlb2YgT2JqZWN0ICYmIHkgaW5zdGFuY2VvZiBPYmplY3QpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHguaXNQcm90b3R5cGVPZih5KSB8fCB5LmlzUHJvdG90eXBlT2YoeCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoeC5jb25zdHJ1Y3RvciAhPT0geS5jb25zdHJ1Y3Rvcikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBpbmZpbml0aXZlIGxpbmtpbmcgbG9vcHNcbiAgICBpZiAobGVmdENoYWluLmluZGV4T2YoeCkgPiAtMSB8fCByaWdodENoYWluLmluZGV4T2YoeSkgPiAtMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFF1aWNrIGNoZWNraW5nIG9mIG9uZSBvYmplY3QgYmVpbmcgYSBzdWJzZXQgb2YgYW5vdGhlci5cbiAgICBmb3IgKHAgaW4geSkge1xuICAgICAgaWYgKHkuaGFzT3duUHJvcGVydHkocCkgIT09IHguaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgeVtwXSAhPT0gdHlwZW9mIHhbcF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRzbGludDpkaXNhYmxlOmZvcmluXG4gICAgZm9yIChwIGluIHgpIHtcbiAgICAgIGlmICh5Lmhhc093blByb3BlcnR5KHApICE9PSB4Lmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoICh0eXBlb2YgKHhbcF0pKSB7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcblxuICAgICAgICAgIGxlZnRDaGFpbi5wdXNoKHgpO1xuICAgICAgICAgIHJpZ2h0Q2hhaW4ucHVzaCh5KTtcblxuICAgICAgICAgIGlmICghY29tcGFyZTJPYmplY3RzKHhbcF0sIHlbcF0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGVmdENoYWluLnBvcCgpO1xuICAgICAgICAgIHJpZ2h0Q2hhaW4ucG9wKCk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBpZiAoeFtwXSAhPT0geVtwXSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IDEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05lZWQgdHdvIG9yIG1vcmUgYXJndW1lbnRzIHRvIGNvbXBhcmUnKTtcbiAgfVxuXG4gIGZvciAoaSA9IDEsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgbGVmdENoYWluID0gW107XG4gICAgcmlnaHRDaGFpbiA9IFtdO1xuXG4gICAgaWYgKCFjb21wYXJlMk9iamVjdHMoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=