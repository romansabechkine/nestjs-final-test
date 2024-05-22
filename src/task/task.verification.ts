export function isTransformabletoPositiveInt(priority:string) : boolean {
    const regex = /^[1-9]\d*$/;
    return regex.test(priority);
}
