const animate=()=>{
    const lines = document.getElementsByClassName('lines')[0]
    
    setTimeout(() => {
        lines.style.display = 'flex'
    }, 4000)
    
    
    // lets create some random lines width random margins or gaps
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };
    
    
    const randomColors=[];
    
    for(let i=0;i<30;i++){
        randomColors.push(randomHexColorCode());
    }
    
    randomColors.map((color) => {
        const line = document.createElement('div');
        const randomMargin = Math.floor(Math.random() * 1000);
        
        line.className = 'line';
        line.style.setProperty('--m', `${randomMargin}px`);
        line.style.setProperty('--c', color);
        lines.appendChild(line)
    })
};


export default animate;