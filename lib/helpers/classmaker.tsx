// 这里使用高阶函数
function scopedClassMaker(prefix: string) {
    return function scopedClass(name?: string) {
        return['random-react-dialog', name].filter(Boolean).join('-')
    }
}

export {scopedClassMaker};