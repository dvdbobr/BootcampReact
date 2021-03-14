import { Component } from 'react';
import Box4 from './Box4';

class Box3 extends Component {
    render() {
        return (
            <div className="box3">
                <Box4 />
                <Box4/>
            </div>
        )
    }
}

export default Box3;
