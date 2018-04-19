import * as React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Input, Label } from 'reactstrap';

function mapDispatchToProps() {
    return {
    };
}

class Submit extends React.Component<any, any> {
    public sendReview() {
        console.log(this.props);
    }
    public render() {
        return (
            <form onSubmit={this.sendReview}>
                <div className="col-md-offset-4 col-md-4">
                    <h2>
                        <Label>Create Account</Label>
                    </h2>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" id="name" placeholder="Enter Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Name</Label>
                        <Input type="text" id="email" placeholder="Enter Email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="review">Name</Label>
                        <Input type="textarea" id="review" placeholder="Enter Review" />
                    </FormGroup>
                    <Button bsStyle="success" type="submit">Register</Button>
                </div>
            </form>
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Submit);
