import React from 'react'

export class DisplayToday extends React.Component {
    removeThis(e){
        this.props.deleteItem(e, 'Today');
    }

    render(){
        return(
            <div className="cell">
                <h3>Today</h3>
                {this.props.items.map((item, index) => {
                        return(
                            <div key={index} className="grid myitems">
                                <div className="cell -9of12">
                                    <div className="content-title">
                                        <span key="{index}"> ~ &nbsp;{item} &nsbp;</span>
                                    </div>
                                </div>
                                <div className="cell -3of12">
                                    <button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}

export class DisplayTomorrow extends React.Component{
    removeThis(e){
        this.props.deleteItem(e, 'Tomorrow');
    }

    render(){
        return(
            <div className="cell">
                <h3>Tomorrow</h3>
                {this.props.items.map((item, index) =>{
                    return(
                        <div key="{index}" className="grid myitems">
                            <div className="cell -9of12">
                                <div className="content-title">
                                    <span key="{index}"> ~ &nbsp;{item} &nbsp;</span>
                                </div>
                            </div>
                            <div className="cell -3of12">
                                <div className="content">
                                    <button onClick={() => this.removeThis(index)} className="btn-default btn-ghost">X</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        )
    }
}