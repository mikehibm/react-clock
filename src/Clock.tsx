import * as moment from 'moment';
import * as React from 'react';


export class Clock extends React.Component<any, any> {
    
    timer: any;
    
    constructor(props){
        super(props);
        this.state = { now: null };
        
        this.timer = setInterval(() => {
            const now = new Date();
            this.setState({ now });
        }, 300);
    }
    
    render(){
        const { now } = this.state;
        const timeStr = now ? moment(now).format('YYYY-MM-DD HH:mm:ss') : 'Loading...';
        return (
            <h1 className="clock">{timeStr}</h1>
        );
    }
}