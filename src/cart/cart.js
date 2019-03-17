import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    }

    render() {
        const games = this.state.games;
        let gamesHtml;
        if(games.length > 0) {
            gamesHtml =
                <div>
                    {games.map((game, id) => (
                        <div className="cart-cards">
                            <Card>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography variant="h5" component="h2">
                                            {game.name}
                                        </Typography>
                                        <Typography component="h6">
                                            {game.price} .-
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" onClick={() => this.removeFromCart(id)}>
                                        Entfernen
                                    </Button>
                                </CardActions>
                            </Card>
                        </div>
                    ))}
                </div>;
        } else {
            gamesHtml = <div><h2>Keine Produkte</h2></div>;
        }
        return (
            <div>
                <h1>Cart</h1>
                {gamesHtml}
            </div>
        );
    }

    componentDidMount() {
        console.log("get cart");
        //TODO: idk
    }

    removeFromCart(id) {
        console.log(id + "remove");
        //TODO: idk
    }

}

export default Cart;