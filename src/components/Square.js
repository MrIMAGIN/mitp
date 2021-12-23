import React, { useState } from 'react'
import './Square.css'

const Square = () => {

    let currentId = 1;
    let currentMas = [
        [1, 2, 2, 2, 3],
        [4, 5, 0, 6, 7],
        [4, 8, 9, 10, 10],
        [11, 12, 0, 0, 13]
    ];

    const click = (e) => {
        let id = 'Click at rect ' + e.target.getAttribute('id');
        
        console.log(id);
    }

    const highlightBG = (e) => {  
        let id = e.target.getAttribute('id');
        document.getElementById(id).classList.remove('default_color');  
        document.getElementById(id).classList.add('trigger_color'); 
    }
    const highlightOutBG = (e) => {
        let id = e.target.getAttribute('id');
        document.getElementById(id).classList.remove('trigger_color');  
        document.getElementById(id).classList.add('default_color');
    }

    document.addEventListener('keydown', function (e) {
        e.preventDefault();
        switch(e.code)
        {
            case 'KeyA':
                {
                    if(currentId - 1 > 0)
                    {
                        currentId -= 1;
                        document.getElementById(currentId).classList.remove('default_color');  
                        document.getElementById(currentId).classList.add('trigger_color');

                        document.getElementById(currentId + 1).classList.remove('trigger_color');  
                        document.getElementById(currentId + 1).classList.add('default_color');
                    }
                    break;
                }

            case 'KeyD':
                {
                    if(currentId + 1 < 14)
                    {
                        currentId += 1;
                        document.getElementById(currentId).classList.remove('default_color');  
                        document.getElementById(currentId).classList.add('trigger_color');
                        
                        document.getElementById(currentId - 1).classList.remove('trigger_color');  
                        document.getElementById(currentId - 1).classList.add('default_color');
                    }
                    break;
                }

            case 'KeyW':
                {
                    let x, y = 0;
                    for(let i = 0; i < 4; i++)
                    {
                        for(let j = 0; j < 5; j++)
                        {
                            if(currentId == currentMas[i][j]) { x = i; y = j; break;}
                        }
                    }

                    if((x - 1) >= 0 && currentMas[x - 1][y] != 0)
                    {
                        currentId = currentMas[x - 1][y];
                        document.getElementById(currentId).classList.remove('default_color');  
                        document.getElementById(currentId).classList.add('trigger_color');
                        
                        document.getElementById(currentMas[x][y]).classList.remove('trigger_color');  
                        document.getElementById(currentMas[x][y]).classList.add('default_color');
                    }
                    break;
                }
            
            case 'KeyS':
                {
                    let x, y = 0;
                    for(let i = 0; i < 4; i++)
                    {
                        for(let j = 0; j < 5; j++)
                        {
                            if(currentId == currentMas[i][j]) { x = i; y = j; break;}
                        }
                    }
    
                    if((x + 1) <= 4 && currentMas[x + 1][y] != 0)
                    {
                        currentId = currentMas[x + 1][y];
                        document.getElementById(currentId).classList.remove('default_color');  
                        document.getElementById(currentId).classList.add('trigger_color');
                            
                        document.getElementById(currentMas[x][y]).classList.remove('trigger_color');  
                        document.getElementById(currentMas[x][y]).classList.add('default_color');
                    }
                    break;
                } 
        }
    });

    return (
        <div className="style">
            <div className="square1 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='1'></div>
            <div className="square2 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='2'></div>
            <div className="square3 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='3'></div>
            <div className="square4 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='4'></div>
            <div className="square5 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='5'></div>
            <div className="square6 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='6'></div>
            <div className="square7 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='7'></div>
            <div className="square8 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='8'></div>
            <div className="square9 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='9'></div>
            <div className="square10 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='10'></div>
            <div className="square11 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='11'></div>
            <div className="square12 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='12'></div>
            <div className="square13 margin_block" onClick={click} onMouseOver={highlightBG} onMouseOut={highlightOutBG} id='13'></div>
        </div>
    )
}

export default Square;