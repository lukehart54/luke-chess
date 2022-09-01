// create tile component
import React from 'react';
import alphabet from './Board'
interface TileProps {
    cord: string;
    num: number;
    mode?: string;
}

const Tile = (props:TileProps) => {
        // console.log(props.num, props.k)
        if (props.num % 2 === 0) {
          //{alphabet[i]}{nums[j]}
            return <div className='bg-green-600 hover:bg-opacity-50 cursor-grab' key={props.cord}><br/></div>
        } else {
            return <div className='bg-yellow-100 hover:bg-opacity-50 cursor-grab' key={props.cord}><br/></div>
        }
    }

export default Tile;