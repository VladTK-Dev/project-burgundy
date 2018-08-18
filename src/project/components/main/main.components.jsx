import * as React from 'react';

import "./main.scss";

export class VacationBurgundy extends React.Component {
    render () {
        return <div className="page-content">
            <div className="page-content__header">Why you’ll love vacation in Burgundy</div>
            <div className="page-content__info">
                There may be no more beautiful way to explore the countryside villages of timeless
                Burgundy than from a river barge coasting the Saône River. Drift from one stunning landscape to another,
                stopping to roam the region’s famous vineyards, ride bikes through its vast forests,
                and indulge in its unforgettable flavours. This is a unique perspective of the France you've dreamed about.<a className="readmore" href=""> Read More >></a>
            </div>
            <div className="page-content__icon">
                <div className="page-content__icon-wrapper">
                    <img src="https://cdn.zeplin.io/5b0b20f0e1de18fc65af95b7/assets/9454563C-C156-4285-8490-2C34EF724731.png"/>
                        <div className="icon-description">
                            <div className="icon-description__numbers">672</div>
                            <div className="icon-description__text"> Trips</div>
                        </div>
                </div>
                <div className="page-content__icon-wrapper">
                    <img src="https://cdn.zeplin.io/5b0b20f0e1de18fc65af95b7/assets/455545E9-2FBE-45A2-BAFA-9B339805B2A7.png"/>
                        <div className="icon-description">
                            <div className="icon-description__numbers">98</div>
                            <div className="icon-description__text">Venues</div>
                        </div>
                </div>
                <div className="page-content__icon-wrapper">
                    <img src="https://cdn.zeplin.io/5b0b20f0e1de18fc65af95b7/assets/4B61190A-BC4A-466C-9EFC-ED51137F6D59.png"/>
                        <div className="icon-description">
                            <div className="icon-description__numbers">2,231</div>
                            <div className="icon-description__text"> Tickets Sold</div>
                        </div>
                </div>
                <div className="page-content__icon-wrapper">
                    <img src="https://cdn.zeplin.io/5b0b20f0e1de18fc65af95b7/assets/98C2D42C-0A20-417E-A628-DE069520A543.png"/>
                        <div className="icon-description">
                            <div className="icon-description__numbers">1,245</div>
                            <div className="icon-description__text">Reviews</div>
                        </div>
                </div>
            </div>
        </div>
    }
}


export class AboutBurgundy extends React.Component {
    render () {
        return <div>
            <div className="page-content__header">What Burgundy is about</div>
            <div className="page-content__info">
                Two great French passions, wine and food,
                come together here in a particularly rich and enticing form.
                In 2015, Burgundy's vineyards were granted Unesco World Heritage status in recognition of the region's
                centuries-old history of viticulture, combined with the remarkable diversity of its winegrowing terroir.
                Combining wine and gastronomy, Burgundy will stimulate your senses.<a className="readmore" href=""> Read More >></a>
            </div>
            <div className="image">
                <div className="image__background-field">
                    <div className="image-background__border"></div>
                    <h3 className="image__header">Route des Grands Crus</h3>
                    <p className="image__description">
                        The Route des Grands Crus (roughly, "road of the great wines")
                        runs along the foot of the Côte d'Or escarpment, from Dijon in the north to Santenay in the south.
                        Thus it runs through many of the great appellations of Burgundy wine, hence the name of the route.</p>
                </div>
                <div className="image__field"><img src="https://cdn.zeplin.io/5b0b20f0e1de18fc65af95b7/assets/FB2BAA21-8A22-4457-BE62-258767018C9B.png"/></div>
            </div>
            <div className="image">
                <div className="image__food"><img src="http://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_288,q_60,w_512/http://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/recipe_photos/original/72/boeuf-bourguignon-3000x2000.jpg"/></div>
                <div className="image__background-food">
                    <div className="image-background__border"></div>
                    <h3 className="image__header">Heart of French Gastronomy</h3>
                    <p className="image__description">
                        Burgundians are passionate about both their food and their wine.
                        Escargots à la Bourgogne, Boeuf Bourguignon, and Coq au Vin are just three of the famous
                        regional dishes. There are 29 restaurants with the renowned Michelin stars, and one with three
                        stars within Burgundy. </p>
                </div>
            </div>

        </div>
    }
}