import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router';
import CardMedia from "@material-ui/core/CardMedia";


class Games extends Component {

    constructor(props) {
        console.log("test")
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            games: [],
            redirect: false,
            productId: 0
        };
    }

    render() {
        const items = this.state.games;
        let itemsHtml;
        if (items.length > 0) {
            itemsHtml =
                <div>
                    {items.map(game => (
                        <Card>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {game.name}
                                    </Typography>
                                    <CardMedia image={game.pictureUrl}/>
                                    <Typography component="h6">
                                        {game.price} .-
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" onClick={() => this.addToCart(game)}>
                                    Kaufen
                                </Button>
                                <Button size="small" onClick={() => this.linkToDetail(game.id)}>
                                    Details
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </div>;
        } else {
            itemsHtml = <div><h2>Keine Produkte</h2></div>;
        }

        if (this.state.redirect) {
            return <Redirect push to={"/productdetails/" + this.state.productId}/>;
        }

        return (
            <div>
                <h1>Produkte</h1>
                {itemsHtml}
            </div>
        );
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        games: result
                    });
                },
                (error) => {
                    console.log(error);
                })
    }

    linkToDetail(id) {
        console.log(id);

        this.setState({
            productId: id,
            redirect: true
        });
    }

    addToCart(game) {
        fetch("http://localhost:8080/cart/add/" + game, {
            method: 'PUT'
        }).then(result=>result.json())
            .then(items=>this.setState({items}))
    }

}

export default Games;