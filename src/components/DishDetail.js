import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
class DishDetail extends Component{
constructor(props){
    super(props);
}
renderDish(dish) {
    if(dish != null){
    return (<div className="col-12 col-md-4 m-1">
    <Card>
        <CardBody className="col-12 col-md">
<CardImg width="100%" src={dish.image} alt={dish.name} />
        
    <CardTitle>{dish.name}</CardTitle>
    <CardText>{dish.description}</CardText>
    </CardBody>
    </Card>
</div>
    );
}
else{
    return(
        <div></div>
    );
}
}
renderComments(comments) {
    if(comments ==null) {
        return(
            <div></div>
        );
    }
    else{
        const comment = comments.map(comment =>{
            return(
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>--${comment.author},${comment.date}</p>
                </li>
            )
        });
        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Commments</h4>
        <u1 className="list-unstyled">{comment}</u1>
            </div>
        );

    }
}
render(){

        const detail= this.props.detail;
        if(detail==null){
            return(
                <div>
                </div>
            )
        }
        const dishItem = this.renderDish(detail);
        const commentItem = this.renderComments(detail.comments);
       return(
           <div className="row">
               {dishItem}
               {commentItem}
           </div>
       )

}

}
export default DishDetail;