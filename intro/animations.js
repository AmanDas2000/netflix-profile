const animate=()=>{

    
    const stick1 = document.getElementsByClassName('color')[0]
    const stick2 = document.getElementsByClassName('color2')[0]
    const stick3 = document.getElementsByClassName('brush3')[0]
    const lines = document.getElementsByClassName('lines')[0]
    
    // make reverse animations trigger
    setTimeout(() => {
        stick2.style.animation = 'movedown 0.5s ease forwards'
    }, 3000)
    
    setTimeout(() => {
        stick3.style.animation = 'movedown 0.5s ease forwards'
    }, 3500)
    
    setTimeout(() => {
        stick1.style.animation = 'opacity 0.5s ease forwards'
        lines.style.display = 'flex'
    }, 4000)
    
    
    // lets create some random lines width random margins or gaps
    const randomHexColorCode = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };
    
    
    const randomColors=[];
    
    for(let i=0;i<100;i++){
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