export default function lerp(a: number, b: number, f: number) {
    return a + (f * (a - b));
}