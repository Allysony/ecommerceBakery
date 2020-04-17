import React, {Component} from "react";

import {Card} from "react-bootstrap";

class ProductPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }

    render() {
        let linkStyle;
        if (this.state.hovered) {
            console.log("TRANSFORM!")
            linkStyle = {transform: 'scale(1.5,1.5)'}
        } else {
            linkStyle = {}
            console.log("BYE!")
        }
        return (
            <Card style={{width: '30%', display: 'inline-block', margin: '1.5%'}}>

                <a href={"/Cart"} >
                    <Card.Img variant="top" src={this.props.image} style={linkStyle}
                              onMouseEnter={() => this.setState({hovered: true})}
                              onMouseLeave={() => this.setState({hovered: false})}/>
                </a>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.price}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}


export default ProductPreview;
