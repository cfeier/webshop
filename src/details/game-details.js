import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from "@material-ui/core/CardMedia";

class Details extends Component {

    render() {
        let game = this.props.match.params.id;
        return (
            <div>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <img src={game.pictureUrl}/>
                            <Typography variant="h2" component="h2">
                                {game.name}
                            </Typography>
                            <Typography component="h3">
                                {game.price} .-
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" onClick={() => this.addToCart(game.id)}>
                            Kaufen
                        </Button>
                    </CardActions>
                </Card>
            </div>
        );
    }

    addToCart(itemId) {
        fetch("http://localhost:8080/cart/add/" + itemId, {
            method: 'POST'
        }).then(result=>result.json())
            .then(items=>this.setState({items}))
    }
}

export default Details;