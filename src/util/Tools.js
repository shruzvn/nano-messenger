export const HexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const TruncateChar = (input, length = 10, dots= false) => {
    if(input.length > length)
        return dots ? input.substring(0,length) + "..." : input.substring(0,length);
    return input;
};