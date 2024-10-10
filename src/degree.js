export const toggleDegree = () => {
    const c = document.querySelector('#degreeC');
    const f = document.querySelector('#degreeF');
    const degreeElem = document.querySelector('#degreeData');
    let degree = degreeElem.textContent.slice(0,-1);

    if(c.classList.contains('text-white')){
        c.classList.remove('text-white');
        c.classList.add('text-gray-400');
        f.classList.add('text-white');
        degree = Math.round((degree * 9/5)+32)
        degreeElem.textContent = `${degree}°`;
    } else{
        f.classList.remove('text-white');
        f.classList.add('text-gray-400');
        c.classList.add('text-white');
        degree = Math.round((degree - 32) * 5/9);
        degreeElem.textContent = `${degree}°`;
    }
}