// AutoBind Decorator
export function AutoBind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const abjDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return abjDescriptor;
}
