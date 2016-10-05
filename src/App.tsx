import * as React from 'react';
import { Clock } from './Clock.tsx';

export class App extends React.Component<any, any> {
    render(){
        return (
            <div>
                <h3>React Clock Sample</h3>
                <Clock />
            </div>
        );
    }
}

