import * as React from 'react';
import {
    NavigationDiv,
    ButtonReturn,
    TextPage
    } from './navigation-bar.style';


export class NavigationBar extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <NavigationDiv>
                <ButtonReturn onClick={this.props.back}/>
                <TextPage>
                    {this.props.pageName}
                </TextPage>
            </NavigationDiv>
        );
    };
}