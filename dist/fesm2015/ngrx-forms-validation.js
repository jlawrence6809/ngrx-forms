import { unbox } from 'ngrx-forms';

// this regex is taken from the @angular/forms source code
// tslint:disable-next-line:max-line-length
const NGRX_FORMS_EMAIL_VALIDATION_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;
/**
 * A validation function that requires a value to be a valid e-mail address.
 * Considers `null`, `undefined`, and `''` as valid. Combine this function with the
 * `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  email: {
    pattern: string;
    actual: string;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  userMailAddress: validate(email),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function email(value) {
    value = unbox(value);
    if (value === null || value === undefined || value.length === 0) {
        return {};
    }
    if (NGRX_FORMS_EMAIL_VALIDATION_REGEXP.test(value)) {
        return {};
    }
    return {
        email: {
            pattern: NGRX_FORMS_EMAIL_VALIDATION_REGEXP.toString(),
            actual: value,
        },
    };
}

/**
 * A validation function that requires the value to be strictly equal (i.e. `===`)
 * to another value.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  equalTo: {
    comparand: T;
    actual: T;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(equalTo('John Doe')),
})
```
 */
function equalTo(comparand) {
    return (value) => {
        value = unbox(value);
        if (value === comparand) {
            return {};
        }
        return {
            equalTo: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires the value to be greater than a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  greaterThan: {
    comparand: number;
    actual: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  amount: validate(greaterThan(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function greaterThan(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error(`The greaterThan Validation function requires the comparand parameter to be a non-null number, got ${comparand}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value > comparand) {
            return {};
        }
        return {
            greaterThan: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires the value to be greater than or equal to a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  greaterThanOrEqualTo: {
    comparand: number;
    actual: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  amount: validate(greaterThanOrEqualTo(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function greaterThanOrEqualTo(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error(`The greaterThanOrEqualTo Validation function requires the comparand parameter to be a non-null number, got ${comparand}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value >= comparand) {
            return {};
        }
        return {
            greaterThanOrEqualTo: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires the value to be less than a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  lessThan: {
    comparand: number;
    actual: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  amount: validate(lessThan(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function lessThan(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error(`The lessThan Validation function requires the comparand parameter to be a non-null number, got ${comparand}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value < comparand) {
            return {};
        }
        return {
            lessThan: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires the value to be less than or equal to a number.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  lessThanOrEqualTo: {
    comparand: number;
    actual: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  amount: validate(lessThanOrEqualTo(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function lessThanOrEqualTo(comparand) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (comparand === null || comparand === undefined) {
        throw new Error(`The lessThanOrEqualTo Validation function requires the comparand parameter to be a non-null number, got ${comparand}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        if (value <= comparand) {
            return {};
        }
        return {
            lessThanOrEqualTo: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires a `string` or `array` value to have a maximum length.
 * Considers `null` and `undefined` as valid. Combine this function with the `required`
 * validation function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  maxLength: {
    maxLength: number;
    value: string;
    actualLength: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(maxLength(10)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function maxLength(maxLengthParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (maxLengthParam === null || maxLengthParam === undefined) {
        throw new Error(`The maxLength Validation function requires the maxLength parameter to be a non-null number, got ${maxLengthParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        const length = value.length;
        if (length <= maxLengthParam) {
            return {};
        }
        return {
            maxLength: {
                maxLength: maxLengthParam,
                value: value,
                actualLength: length,
            },
        };
    };
}

/**
 * A validation function that requires a `string` or `array` value to have a minimum length.
 * Considers `null`, `undefined`, empty strings and empty arrays as valid. Combine this
 * function with the `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  minLength: {
    minLength: number;
    value: string;
    actualLength: number;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  password: validate(minLength(8)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function minLength(minLengthParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (minLengthParam === null || minLengthParam === undefined) {
        throw new Error(`The minLength Validation function requires the minLength parameter to be a non-null number, got ${minLengthParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined) {
            return {};
        }
        const length = value.length;
        if (length === 0) {
            return {}; // don't validate empty values to allow optional controls
        }
        if (length >= minLengthParam) {
            return {};
        }
        return {
            minLength: {
                minLength: minLengthParam,
                value: value,
                actualLength: length,
            },
        };
    };
}

/**
 * A validation function that requires the value to be strictly not equal (i.e. `!==`)
 * to another value.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  notEqualTo: {
    comparand: T;
    actual: T;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(notEqualTo('John Doe')),
})
```
 */
function notEqualTo(comparand) {
    return (value) => {
        value = unbox(value);
        if (value !== comparand) {
            return {};
        }
        return {
            notEqualTo: {
                comparand,
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires a value to match a regex.
 * Considers `null`, `undefined`, and `''` as valid. Combine this function with the
 * `required` validation function if these values should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  pattern: {
    pattern: string;
    actual: string;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  numberWithPeriodsOrCommas: validate(pattern(/^[0-9.,]+$/)),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function pattern(patternParam) {
    // tslint:disable-next-line:strict-type-predicates (guard for users without strict type checking)
    if (patternParam === null || patternParam === undefined) {
        throw new Error(`The pattern Validation function requires the pattern parameter to be a non-null string or regular expression, got ${patternParam}!`);
    }
    return (value) => {
        value = unbox(value);
        if (value === null || value === undefined || value.length === 0) {
            return {};
        }
        if (patternParam.test(value)) {
            return {};
        }
        return {
            pattern: {
                pattern: patternParam.toString(),
                actual: value,
            },
        };
    };
}

/**
 * A validation function that requires the value to be non-`undefined`, non-'null',
 * and non-empty.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: T | null | undefined;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  name: validate(required),
})
```
 */
function required(value) {
    value = unbox(value);
    if (value !== undefined && value !== null && value.length !== 0) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}

/**
 * A validation function that requires the value to be `false`. Considers `null` and
 * `undefined` as valid. Combine this function with the `required` validation
 * function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: boolean;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  disagreeWithTermsOfService: validate(requiredFalse),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function requiredFalse(value) {
    value = unbox(value);
    // tslint:disable-next-line:strict-type-predicates
    if (value === null || value === undefined) {
        return {};
    }
    if (!value) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}

/**
 * A validation function that requires the value to be `true`. Considers `null` and
 * `undefined` as valid. Combine this function with the `required` validation
 * function if `null` or `undefined` should be considered invalid.
 *
 * The validation error returned by this validation function has the following shape:
 *
```typescript
{
  required: {
    actual: boolean;
  };
}
```
 *
 * Usually you would use this validation function in conjunction with the `validate`
 * update function to perform synchronous validation in your reducer:
 *
```typescript
updateGroup<MyFormValue>({
  agreeWithTermsOfService: validate(requiredTrue),
})
```
 *
 * Note that this function is generic to allow the compiler to properly infer the type
 * of the `validate` function for both optional and non-optional controls.
 */
function requiredTrue(value) {
    value = unbox(value);
    // tslint:disable-next-line:strict-type-predicates
    if (value === null || value === undefined) {
        return {};
    }
    if (value) {
        return {};
    }
    return {
        required: {
            actual: value,
        },
    };
}

/**
 * ngrx-forms
 * Proper integration of forms in Angular applications using Ngrx
 * Written by Jonathan Ziller.
 * MIT license.
 * https://github.com/MrWolfZ/ngrx-forms
 */

/**
 * Generated bundle index. Do not edit.
 */

export { email, equalTo, greaterThan, greaterThanOrEqualTo, lessThan, lessThanOrEqualTo, maxLength, minLength, notEqualTo, pattern, required, requiredFalse, requiredTrue };
//# sourceMappingURL=ngrx-forms-validation.js.map
