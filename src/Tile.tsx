// create tile component
import React from 'react';
export const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
import './tile.css';
import json_modes from './settings.json';
interface TileProps {
    cord: string;
    num: number;
    mode?: string;
}

const Tile = (props:TileProps) => {
        // console.log(props.num, props.k)
        let piece_info = [alphabet.indexOf(props.cord.split('')[0]), parseInt(props.cord.split('')[1]) - 1];
        console.log(piece_info);
        let temp = json_modes[0].piece_locations[piece_info[1]][piece_info[0]];
        let pic = <img src='' alt=' '/>
        if (temp === 1) {
            pic = <img src="src/assets/images/pawn_w.png" alt="white-pawn" />
        } else if (temp === 2) {
            pic = <img src="src/assets/images/pawn_b.png" alt="black-pawn" />
        }
        if (props.num % 2 === 0) {
          //{alphabet[i]}{nums[j]}
            return <div onClick={() => {console.log(temp);}} className='tile bg-green-600 hover:bg-opacity-50 cursor-grab' key={props.cord}>{pic}</div>
        } else {
            return <div onClick={() => {console.log(piece_info);}} className='tile bg-yellow-100 hover:bg-opacity-50 cursor-grab' key={props.cord}>{pic}</div>
        }
    }

export default Tile;