

export const baseDummyContainerStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    display: "inline-block",
    borderRadius: "4px",
    margin: "16px"
}

export const largeDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "120px",
    height: "120px",
}); 

export const mediumDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "64px",
    height: "64px",    
});

export const smallDummyContainerStyle = Object.assign({}, baseDummyContainerStyle, {
    width: "32px",
    height: "32px",
});